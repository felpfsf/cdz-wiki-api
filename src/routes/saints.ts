import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'

interface IBodyParams {
  name: string
  charClass: string
  imageUrl: string
}

interface IByIdParam {
  id: number
}

const apiBaseUrl = '/api'

export async function saintsRoutes(app: FastifyInstance) {
  app.get(`${apiBaseUrl}/saints`, async (req, reply) => {
    const getSaints = await prisma.saint.findMany({
      include: { master: true }
    })
    reply.send(getSaints)
  })

  app.get<{ Params: IByIdParam }>(
    `${apiBaseUrl}/saints/:id`,
    async (req, reply) => {
      const { id } = req.params

      const getSingleSaint = await prisma.saint.findUnique({
        where: {
          id: Number(id)
        },
        include: { master: true }
      })

      return reply.status(200).send(getSingleSaint)
    }
  )

  app.post<{ Body: IBodyParams }>(
    `${apiBaseUrl}/saints/post`,
    async (req, reply) => {
      const { charClass, imageUrl, name } = req.body

      const dataSaint = await prisma.saint.create({
        data: {
          charClass,
          imageUrl,
          name
        }
      })

      return reply.status(201).send({
        message: 'Success',
        dataSaint
      })
    }
  )
}
