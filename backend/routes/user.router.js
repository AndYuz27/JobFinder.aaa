const Router = require('express')
const router = new Router()
const userController = require('../user.controller')

router.post('/user', userController.createUser)
router.get('/user', userController.getUsers)
router.get('/user/admin', userController.getAdmins)
router.get('/user/:id', userController.getUser)
router.get('/user/admin/:id', userController.getAdmin)
router.put('/user', userController.updUser)
router.delete('/user/:id', userController.delUser)


module.exports = router