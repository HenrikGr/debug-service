/**
 * @prettier
 * @copyright (c) 2020 - present, HGC-AB
 * @licence This source code is licensed under the MIT license described
 * and found in the LICENSE file in the root directory of this source tree.
 */

// Ensure env variables are set before setting upp config
const pkg = require('../package')

const config = {
  appName: pkg.name,
  debugName: process.env.DEBUG,
}

module.exports = config
