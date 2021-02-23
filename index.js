
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./virtuoso-tree.cjs.production.min.js')
} else {
  module.exports = require('./virtuoso-tree.cjs.development.js')
}
