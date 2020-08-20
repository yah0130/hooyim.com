/**
 * @file Comment box component / ES module
 * @module components/common/comment
 * @author Hooyim <https://github.com/yah0130>
 */

import Comment from './main'

export const comment = {
  install(Vue) {
    Vue.component('comment-box', Comment)
  }
}

export default comment
