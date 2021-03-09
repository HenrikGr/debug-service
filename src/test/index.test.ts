require('dotenv').config()

import { debugService } from '../../lib'
const { log, errorLog } = debugService('start:')

describe('Check', () => {
    it('should work', () => {
        log('start message')
    })
})
