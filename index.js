/**
 * @prettier
 * @copyright (c) 2019 - present, HGC-AB
 * @licence This source code is licensed under the MIT license described and found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Debug utility
 * @type {*}
 */
const debug = require('debug')

/**
 * Debug services
 *
 * @param {String} moduleName The module name for the namespace
 * @type {function(moduleName): {log: *, error: *}}
 */
exports = module.exports = function (moduleName) {

  /**
   * Check if DEBUG env is set
   * @private
   */
  const debugEnabled = !!process.env.DEBUG

  /**
   * The base namespace, consist of APP_NAME and passed in module name
   * @private
   */
  const namespace = `${process.env.APP_NAME}:${moduleName}`

  /**
   * Log debug utility
   * @public
   * @type {*}
   */
  const log = debug(`${namespace}`)

  /**
   * Error debug utility
   * @public
   * @type {*}
   */
  const error = debug(`${namespace}:error`)

  /**
   * Id DEBUG env is set, enable
   */
  if (debugEnabled) {
    log.enabled = 1
    error.enabled = 1
  }

  /**
   * Set the logger to log via console.log instead of console.error
   */
  log.log = console.log.bind(console)

  return {
    log,
    error,
  }
}
