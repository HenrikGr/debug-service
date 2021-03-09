import debug from 'debug'

const appNameSpace = process.env.APP_NAME || 'APP'
const baseDebug = debug(appNameSpace)

/**
 * Factory function to create a module logger and error logger
 * @param moduleName The module name for the created loggers
 */
function debugService(moduleName: string) {
  const log = baseDebug.extend(moduleName)
  const errorLog = baseDebug.extend(`${moduleName}:error`)

  // Set the logger to log via console.log instead of console.error
  log.log = console.log.bind(console)

  return {
    log,
    errorLog,
  }
}

export {
  debugService
}
