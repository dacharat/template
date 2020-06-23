import { Request, Response } from 'express'
import Me from '../models/Me'
import { MeType } from '../interfaces/me'

export const getAllMe = async (
  _: Request,
  res: Response,
): Promise<Response | void> => {
  try {
    const mes = await Me.findAll()

    return res.json({ mes })
  } catch (e) {
    console.log(e)
  }
}

export const createMe = async (req: Request, res: Response) => {
  const newMe: MeType = req.body

  try {
    await Me.create(newMe)
    return res.json({
      message: 'Me Created',
    })
  } catch (e) {
    return res.json({
      message: 'Error: ' + e,
    })
  }
}

export const getMe = async (req: Request, res: Response): Promise<Response> => {
  const id = req.params.id
  const me = await Me.findByPk(id, { raw: true })

  return res.json({
    me,
  })
}

export const deleteMe = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const id = req.params.id
  await Me.destroy({ where: { id } })

  return res.json({ message: 'Me deleted' })
}

export const updateMe = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const id = req.params.id
  const me = req.body
  await Me.update(me, { where: { id } })
  const m = await Me.findByPk(id, { raw: true })

  return res.json({ me: m })
}
