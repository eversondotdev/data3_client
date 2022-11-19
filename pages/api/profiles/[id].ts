import { NextApiRequest, NextApiResponse } from 'next'
import data from '../../../data/data.json'

type isData = {
    id: string
    name: string,
    age: number
}

type ResponseError = {
  message: string
}

export default function personHandler(
  req: NextApiRequest,
  res: NextApiResponse<isData | ResponseError>
) {
  const { query } = req
  const { id } = query
  const filtered = data.filter((p:any) => p.id === id)

  // User with id exists
  return filtered.length > 0
    ? res.status(200).json(filtered[0])
    : res.status(404).json({ message: `User with id: ${id} not found.` })
}