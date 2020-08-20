/**
 * @file socket 服务 / ES module
 * @module plugins/socket.io
 * @author Hooyim <https://github.com/yah0130>
 */

import io from 'socket.io-client'
import apiConfig from '~/config/api.config'

const socket = io(apiConfig.SOCKET, {
  transports: ['websocket']
})

export default socket
