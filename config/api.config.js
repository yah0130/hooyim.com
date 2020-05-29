/**
 * @file Api config / ES module
 * @module api.config
 * @author Surmon <https://github.com/surmon-china>
 */

import { NODE_ENV } from '../environment'

const apisMap = {
  development: {
    FE: 'http://localhost:3000',
    BASE: 'http://localhost:8000',
    CDN: '',
    PROXY: '/proxy',
    SOCKET: 'http://localhost:3000',
    GRAVATAR: '/proxy/static.hooyim.com/avatar'
  },
  // development: {
  //   FE: 'https://www.hooyim.com',
  //   BASE: 'https://api.hooyim.com',
  //   CDN: 'https://cdn.hooyim.com',
  //   PROXY: 'https://cdn.hooyim.com/proxy',
  //   SOCKET: 'https://www.hooyim.com',
  //   GRAVATAR: 'https://static.hooyim.com/avatar'
  // },
  production: {
    FE: 'https://www.hooyim.com',
    BASE: 'https://api.hooyim.com',
    CDN: 'https://cdn.hooyim.com',
    PROXY: 'https://cdn.hooyim.com/proxy',
    SOCKET: 'https://www.hooyim.com',
    GRAVATAR: 'https://static.hooyim.com/avatar'
  }
}

export default apisMap[NODE_ENV]
