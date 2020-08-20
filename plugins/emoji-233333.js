/**
 * @file 留言表情雨 / ES module
 * @module plugins/emoji-233333
 * @author Hooyim <https://github.com/yah0130>
 */

import { isBrowser } from '~/environment'
import Emoji233333 from 'emoji-233333'

if (isBrowser) {
  window.Emoji233333 = Emoji233333
}
