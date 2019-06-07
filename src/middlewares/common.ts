
import * as bodyParser from 'koa-body'
import * as serve from 'koa-static'
import { resolve } from 'path'
import * as Koa from 'koa'

const r = (path:string) => resolve(__dirname, path)

export const addBodyParser = (app:Koa) => {
  app.use(bodyParser({ multipart: true,formidable: { maxFileSize: 200*1024*1024 }}))
}

export const serves = async (app:Koa) => {
  app.use(serve(r('../../public')))
}