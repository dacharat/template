import { Request, Response } from 'express'

export const indexWelcome = async (
  _: Request,
  res: Response,
): Promise<Response> => {
  return res.json({ message: 'welcome!' })
}
