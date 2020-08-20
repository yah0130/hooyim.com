/**
 * @file Filters / ES module
 * @module filters/index
 * @author Hooyim <https://github.com/yah0130>
 */

import { textOverflow, firstUpperCase } from '~/transformers/text'
import { timeAgo, toYMD, toLocalString } from '~/transformers/time'
import { getFileCDNUrl, getFileProxyUrl } from '~/transformers/url'

export default {
  textOverflow,
  firstUpperCase,
  timeAgo,
  toYMD,
  toLocalString,
  byCDN: getFileCDNUrl,
  byProxy: getFileProxyUrl
}
