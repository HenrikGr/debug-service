# @hgc-ab/debug-service

[![version](https://img.shields.io/npm/v/@hgc-ab/debug-service.svg?style=flat-square)](http://npm.im/@hgc-ab/debug-service)
[![downloads](https://img.shields.io/npm/dm/@hgc-ab/debug-service.svg?style=flat-square)](http://npm-stat.com/charts.html?package=@hgc-ab/debug-service&from=2020-01-01)
[![MIT License](https://img.shields.io/npm/l/@hgc-ab/debug-service.svg?style=flat-square)](http://opensource.org/licenses/MIT)

## Usage

Install tha package

```shell script
npm i @hgc-ab/debug-service
```

Usage

```typescript
//moduleA.js
import { debugService } from '@hgc-ab/debug-service'
const { log, errorLog } = debugService('moduleA:')

log('debug message to the console for module A')
errorLog('error message for the module A')
```

## License
MIT

