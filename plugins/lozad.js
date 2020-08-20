/**
 * @file 懒加载 / ES module
 * @module plugins/lozad
 * @author Hooyim <https://github.com/yah0130>
 */

import lozad from 'lozad'
import { isBrowser } from '~/environment'

if (isBrowser) {
  window.lozad = lozad
}

export default lozad
