/* keep style consistent with the other controllers */

class HealthController {
    constructor(logger) {
        this.logger = logger
    }

    async handleAlive(req, res) {
        res.send({"ok": true})        
    }

    async handleReady(req, res) {
        res.send({"ok": true})        
    }
}

module.exports = (logger) => {

    var controller = new HealthController(logger)
    var express = require('express')
    var router = express.Router()

    router.get('/alive', function (req, res) {
        controller.handleAlive(req, res)
    })

    router.get('/ready', function (req, res) {
        controller.handleReady(req, res)
    })

    return router
}