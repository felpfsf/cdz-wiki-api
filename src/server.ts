import fastify from 'fastify'
import fastifyCors from '@fastify/cors'
import { saintsRoutes } from './routes/saints'
import { masterRoutes } from './routes/masters'

const port = process.env.PORT || 3333

async function bootstrap() {
  const app = fastify({
    logger: true
  })

  await app.register(fastifyCors, {
    origin: true
  })

  // ROTAS
  await app.register(saintsRoutes)
  await app.register(masterRoutes)

  await app.listen({ port: port, host: '0.0.0.0' })
}

bootstrap()
