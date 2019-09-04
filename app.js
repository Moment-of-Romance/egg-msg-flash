const assert = require('power-assert')

module.exports = app => {
    const index = app.config.coreMiddleware.indexOf('session')
    assert.ok(index >= 0, 'x required [egg-session] plugins')

    app.config.coreMiddleware.slice(index, 0, 'flash')
}