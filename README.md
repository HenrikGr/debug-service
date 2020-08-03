# @hgc-ab/debug-service

[![version](https://img.shields.io/npm/v/@hgc-ab/debug-service.svg?style=flat-square)](http://npm.im/@hgc-ab/debug-service)
[![downloads](https://img.shields.io/npm/dm/@hgc-ab/debug-service.svg?style=flat-square)](http://npm-stat.com/charts.html?package=@hgc-ab/debug-service&from=2020-01-01)
[![MIT License](https://img.shields.io/npm/l/@hgc-ab/debug-service.svg?style=flat-square)](http://opensource.org/licenses/MIT)

## Usage

Install

```shell script
npm i @hgc-ab/debug-service
```
Usage

```javascript
//moduleA.js
const {log, error} = require('@hgc-ab/debug-service')('moduleA')

log('debug message to the console for module A')
error('error message for the module A')

```
## License
MIT

