const Router = require('express')
const router = new Router()
const VacancyController = require('../vacancy.controller')

router.get('/vacancy', VacancyController.getVacancies)
router.get('/positions', VacancyController.getPositions)
router.get('/feedback', VacancyController.getFeedback)
router.get('/feedback/:id', VacancyController.getFeedbackById)
router.get('/feedback_cmp/:id', VacancyController.getFeedbackByIdVac)
router.get('/feedback_cmp_i/:id', VacancyController.getFeedbackByIdCmp)
router.post('/position', VacancyController.createPosition)
router.post('/vacancy', VacancyController.createVacancy)
router.post('/feedback', VacancyController.createFeedback)
router.get('/vacancy/:id', VacancyController.getVacancyByCompany)
router.get('/vacancy/i/:id', VacancyController.getVacancy)
router.get('/vacancy/name/:id', VacancyController.getVacancyByName)
router.get('/vacancy/city/:id', VacancyController.getVacancyByCity)
router.delete('/vacancy/:id', VacancyController.delVacancy)
router.delete('/positions/:id', VacancyController.delPosition)
router.delete('/feedback/:id', VacancyController.delFeedback)



module.exports = router