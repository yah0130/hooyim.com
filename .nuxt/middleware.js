const middleware = {}

middleware['change-page-col'] = require('../middleware/change-page-col.js')
middleware['change-page-col'] = middleware['change-page-col'].default || middleware['change-page-col']

export default middleware
