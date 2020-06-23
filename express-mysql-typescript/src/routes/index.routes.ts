import { Router } from 'express'
import { indexWelcome } from '../controllers/index.controller'
const router = Router()

router.route('/').get(indexWelcome)
router.route('/welcome').get(indexWelcome)

export default router
