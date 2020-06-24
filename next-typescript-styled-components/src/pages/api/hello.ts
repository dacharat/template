import { NextApiResponse, NextApiRequest } from 'next'

export default (_: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200
  res.json({ name: 'Dacharat Pankong' })
}
