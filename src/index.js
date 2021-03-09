/**
 * @prettier
 * @copyright (c) 2019 - present, HGC-AB
 * @licence This source code is licensed under the MIT license described and found in the
 * LICENSE file in the root directory of this source tree.
 */
const debug = require('debug')
const appNameSpace = process.env.APP_NAME || 'debugService:'
const baseDebug = debug(appNameSpace)

/**
 * Factory function to create a module logger and error logger
 * @param moduleName The module name for the created loggers
 */
module.exports = function debugService(moduleName) {
  const log = baseDebug.extend(moduleName)
  const errorLog = baseDebug.extend(`${moduleName}:error`)

  // Set the logger to log via console.log instead of console.error
  log.log = console.log.bind(console)

  return {
    log,
    errorLog,
  }
}
