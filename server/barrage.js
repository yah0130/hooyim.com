/**
 * @file 弹幕服务 / Commonjs module
 * @module server/barrage
 * @author Hooyim <https://github.com/yah0130>
 */

const path = require('path')
const fs = require('fs-extra')
const { debounce } = require('lodash')

// file
const dataPath = path.join(__dirname, '..', 'data')
const dataFile = path.resolve(dataPath, 'barrages.json')
const defaultFile = path.resolve(dataPath, 'barrages.default.json')

// init
fs.ensureFileSync(dataFile)
fs.ensureFileSync(defaultFile)
const barrages = fs.readJsonSync(dataFile, { throws: false }) || []
const defaultBarrages = fs.readJsonSync(defaultFile, { throws: false }) || []
if (!barrages.length) {
  barrages.push(...defaultBarrages)
}

// 更新本地文件数据
const updateLocalBarragesFile = () => {
  fs
    .outputJson(dataFile, barrages)
    .then(() => {
      // console.log('最新聊天记录保存成功!')
    })
    .catch(err => {
      console.warn('最新弹幕记录保存失败', err)
    })
}

// 30秒为一个周期，保存一次最新弹幕记录
const updateDebounce = debounce(updateLocalBarragesFile, 1000 * 30)
let socketClients = 0

const barrageServer = io => {
  io.on('connection', socket => {
    // 每次有新人加入，都更新客户端数量
    io.clients((error, clients) => {
      if (error) {
        console.warn('弹幕 socket 客户端数获取失败', error)
      } else {
        socketClients = clients.length
      }
    })

    // 最后一批弹幕记录
    socket.on('barrage-last-list', callback => {
      callback(barrages.slice(-66))
    })

    // 弹幕总数量
    socket.on('barrage-count', callback => {
      // eslint-disable-next-line standard/no-callback-literal
      callback({
        users: socketClients,
        count: barrages.length
      })
    })

    // 广播弹幕
    socket.on('barrage-send', barrage => {
      barrages.push(barrage)
      socket.broadcast.emit('barrage-create', barrage)
      socket.broadcast.emit('barrage-update-count', {
        users: socketClients,
        count: barrages.length
      })
      updateDebounce()
    })
  })
}

module.exports = barrageServer
