/**
 * @file Network / ES module
 * @module utils/network
 * @author Hooyim <https://github.com/yah0130>
 */

import axios from 'axios'

export const ping = (url: string) => {
  return axios.request({
    url,
    method: 'get',
    timeout: 1888
  })
}

export const isOutsideOfGFW = () => ping('https://www.google.com.hk')
