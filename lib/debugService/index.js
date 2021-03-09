"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.debugService = void 0;
const debug_1 = __importDefault(require("debug"));
const appNameSpace = process.env.APP_NAME || 'APP';
const baseDebug = debug_1.default(appNameSpace);
/**
 * Factory function to create a module logger and error logger
 * @param moduleName The module name for the created loggers
 */
function debugService(moduleName) {
    const log = baseDebug.extend(moduleName);
    const errorLog = baseDebug.extend(`${moduleName}:error`);
    // Set the logger to log via console.log instead of console.error
    log.log = console.log.bind(console);
    return {
        log,
        errorLog,
    };
}
exports.debugService = debugService;
