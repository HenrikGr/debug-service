/**
 * @prettier
 * @copyright (c) 2019 - present, HGC-AB
 * @licence This source code is licensed under the MIT license described
 * and found in the LICENSE file in the root directory of this source tree.
 */

const config = require('./config')
const debug = require('debug')

/**
 * Debug services that writes to console when
 * DEBUG environment variable is set
 *
 * The debug service should be used in other modules, typically injected
 * as a dependency.
 *
 * @example
 * const dao = new MongoDb(db, collection, {debugService: debugService('MongoDb)}
 *
 * @public
 * @param {String} moduleName - name of the module the debugger is injected to
 * @returns {debug.Debugger | *}
 */
function debugService(moduleName) {
  return debug(`${config.appName}:${moduleName}`)
}

module.exports = debugService
