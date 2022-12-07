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
  saintId: number
}

interface IByIdParam {
  id: number | undefined
}

const apiBaseUrl = '/api'

export async function masterRoutes(app: FastifyInstance) {
  app.get(`${apiBaseUrl}/masters`, async (req, reply) => {
    const getMasters = await prisma.master.findMany({
      include: { saint: true }
    })
    return reply.status(200).send(getMasters)
  })

  app.get<{ Params: IByIdParam }>(
    `${apiBaseUrl}/masters/:id`,
    async (req, reply) => {
      const { id } = req.params
      const getSingleMaster = await prisma.master.findUnique({
        where: {
          id: Number(id)
        },
        include: { saint: true }
      })

      return reply.status(200).send(getSingleMaster)
    }
  )

  app.post<{ Body: IBodyParams }>(
    `${apiBaseUrl}/masters/post`,
    async (req, reply) => {
      const {
        age,
        alignment,
        armour,
        charClass,
        constelation,
        imageUrl,
        name,
        saintId,
        sex,
        sign,
        specie
      } = req.body
      const dataMaster = await prisma.master.create({
        data: {
          age,
          alignment,
          armour,
          charClass,
          constelation,
          imageUrl,
          name,
          saintId,
          sex,
          sign,
          specie
        }
      })

      return reply.status(201).send({
        message: 'Mestre adicionado com sucesso...',
        dataMaster
      })
    }
  )

  app.patch<{ Body: IBodyParams; Params: IByIdParam }>(
    `${apiBaseUrl}/masters/:id`,
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
        saintId,
        sex,
        sign,
        specie
      } = req.body

      const updatedMaster = await prisma.master.update({
        where: { id: Number(id) },
        data: {
          age,
          alignment,
          armour,
          charClass,
          constelation,
          imageUrl,
          name,
          saintId,
          sex,
          sign,
          specie
        }
      })

      return reply.status(201).send({
        message: 'Dados alterados com sucesso',
        updatedMaster
      })
    }
  )

  app.put<{ Body: IBodyParams; Params: IByIdParam }>(
    `${apiBaseUrl}/masters/:id`,
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
        saintId,
        sex,
        sign,
        specie
      } = req.body
      const updatedPutMaster = await prisma.master.update({
        where: { id: Number(id) },
        data: {
          name
        }
      })

      return reply.status(201).send({
        message: 'Dado alterado com sucesso',
        updatedPutMaster
      })
    }
  )

  app.delete<{ Params: IByIdParam }>(
    `${apiBaseUrl}/masters/:id`,
    async (req, reply) => {
      const { id } = req.params

      await prisma.master.delete({
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
