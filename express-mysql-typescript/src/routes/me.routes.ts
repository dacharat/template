import { Router } from 'express'
import {
  getAllMe,
  createMe,
  getMe,
  updateMe,
  deleteMe,
} from '../controllers/me.controller'

const router = Router()

router.route('/').get(getAllMe).post(createMe)

router.route('/:id').get(getMe).put(updateMe).delete(deleteMe)

export default router
