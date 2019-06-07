import * as Router from 'koa-router'
import { home } from '../controllers/page'
import * as Koa from 'koa'

export const router = async (app:Koa) => {
  const router = new Router()
  
  router.get('/', home)

  app.use(router.routes())
  app.use(router.allowedMethods())
}