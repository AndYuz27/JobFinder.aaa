const Router = require('express')
var cors = require('cors')
const router = new Router()
const CompanyController = require('../company.controller')

router.get('/company', cors(), CompanyController.getCompanies)
router.get('/invite', cors(), CompanyController.getInvites)
router.get('/company/:id', CompanyController.getCompany)
router.get('/invite/:id', CompanyController.getInviteById)
router.delete('/invite/:id', CompanyController.delInvite)
router.get('/company/name/:id', CompanyController.getCompanyByNick)
router.get('/company/name_n/:id', CompanyController.getCompanyByName)
router.get('/company/city/:id', CompanyController.getCompanyByCity)
router.put('/company/edit/:id', CompanyController.updComp)
router.post('/company', CompanyController.createCompany)
router.post('/invite', CompanyController.createInvite)
router.delete('/company/:id', CompanyController.delComp)




module.exports = router