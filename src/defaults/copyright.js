/* defaults / copyright.js
 * > Copyright notes to compiled files
 */

'use strict'

const { env } = require('process')

const text = `\
/* ${ env.npm_package_name } - ${ env.npm_package_description }
 * Version: ${ env.npm_package_version }
 * Author: ${ env.npm_package_author_name }
 * License: ${ env.npm_package_license }
 * Homepage: ${ env.npm_package_homepage }
 */
`

module.exports = text
