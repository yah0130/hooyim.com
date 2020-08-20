/**
 * @file polyfill / ES module
 * @module plugins/polyfill
 * @author Hooyim <https://github.com/yah0130>
 */

import { isBrowser } from '~/environment'
import 'intersection-observer'

if (isBrowser) {
  // windows.xxx = xxx
}
