import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'

interface IBodyParams {
  name: string
  alignment: string
  charClass: string
  armour: string
  constelation: string
  imageUrl: string
  sex: string
  age: number
  sign: string
  specie: string
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
      const {
        age,
        alignment,
        armour,
        charClass,
        constelation,
        imageUrl,
        name,
        sex,
        sign,
        specie
      } = req.body

      const dataSaint = await prisma.saint.create({
        data: {
          age,
          alignment,
          armour,
          charClass,
          constelation,
          imageUrl,
          name,
          sex,
          sign,
          specie
        }
      })

      return reply.status(201).send({
        message: 'Success',
        dataSaint
      })
    }
  )

  app.patch<{ Body: IBodyParams; Params: IByIdParam }>(
    `${apiBaseUrl}/saints/:id`,
    async (req, reply) => {
      const { id } = req.params
      const {
        age,
        alignment,
        armour,
        charClass,
        constelation,
        imageUrl,
        name,
        sex,
        sign,
        specie
      } = req.body

      const updatedSaint = await prisma.saint.update({
        where: { id: Number(id) },
        data: {
          age,
          alignment,
          armour,
          charClass,
          constelation,
          imageUrl,
          name,
          sex,
          sign,
          specie
        }
      })

      return reply.status(201).send({
        message: 'Dados alterados com sucesso',
        updatedSaint
      })
    }
  )

  app.put<{ Body: IBodyParams; Params: IByIdParam }>(
    `${apiBaseUrl}/saints/:id`,
    async (req, reply) => {
      const { id } = req.params
      const { name } = req.body

      const updatePutSaint = await prisma.saint.update({
        where: { id: Number(id) },
        data: {
          name
        }
      })
      return reply.status(201).send({
        message: 'Dado alterado com sucesso',
        updatePutSaint
      })
    }
  )

  app.delete<{ Params: IByIdParam }>(
    `${apiBaseUrl}/saints/:id`,
    async (req, reply) => {
      const { id } = req.params

      const deletedSaint = await prisma.saint.delete({
        where: {
          id: Number(id)
        }
      })

      return reply.status(200).send({
        message: 'Dados deletados com sucesso'
      })
    }
  )
}
