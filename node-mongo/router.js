const express = require('express')
const router = express.Router()
const controller = require('./controller/EmployeeController')

router.post('/findAll', controller.findAll)

router.post('/findusingId/:id', controller.findusingId)

router.post('/saveData', controller.upload, controller.saveData)

router.post('/userLogin', controller.userLogin)

router.post('/findandupdate/:id', controller.findandupdate)

router.post('/aDeleteFunction/:id', controller.aDeleteFunction)

router.post('/Likes', controller.likes)

router.post('/viewLikes', controller.viewLikes)

module.exports = router