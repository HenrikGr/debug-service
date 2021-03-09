require('dotenv').config()

const { log, errorLog  } = require('../')('start:')


describe('Check', () => {
    it('should work', () => {
        log('Starting up...')
    })
})
