import { Request, Response } from 'express'
import authService from '../../services/auth/authService'

export const authController = async (req: Request, res: Response) => {
  const data = await authService(req.body)

  return res.status(200).json(data)
}
