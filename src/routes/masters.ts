import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'

interface IBodyParams {
  name: string
  charClass: string
  imageUrl: string
  saintId: number
}

interface IByIdParam {
  id: number
}

const apiBaseUrl = '/api'

export async function masterRoutes(app: FastifyInstance) {
  app.get(`${apiBaseUrl}/masters`, async (req, reply) => {
    const getMasters = await prisma.master.findMany()
    reply.send(getMasters)
  })

  app.post<{ Body: IBodyParams }>(
    `${apiBaseUrl}/masters/post`,
    async (req, reply) => {
      const { charClass, imageUrl, name, saintId } = req.body

      const dataMaster = await prisma.master.create({
        data: {
          charClass,
          imageUrl,
          name,
          saintId
        }
      })

      return reply.status(201).send({
        message: 'Success',
        dataMaster
      })
    }
  )
}
