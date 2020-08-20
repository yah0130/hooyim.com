/**
 * @file 客户端初始化任务管理器 / ES module
 * @module plugins/loaded-task
 * @author Hooyim <https://github.com/yah0130>
 */

import { isBrowser } from '~/environment'

if (isBrowser) {
  // 执行任务
  const doTask = task => {
    window.setTimeout(task, 666)
  }

  // 初始化
  const loadedHander = event => {
    window.loaded = true
    window.loadedTasks.forEach(task => doTask(task))
  }

  // 任务管理
  const addLoadedTask = task => {
    if (window.loaded) {
      doTask(task)
    } else {
      window.loadedTasks.push(task)
    }
  }

  window.loaded = false
  window.loadedTasks = []
  window.addLoadedTask = addLoadedTask
  window.addEventListener('load', loadedHander)
}
