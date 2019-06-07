import * as Koa from 'koa'
import * as R from 'ramda'
import { resolve } from 'path'
import config from './config'

const r = (url:string) => resolve(__dirname, url)
const MIDDLEWARES = ['mongo', 'common', 'router']

const userMiddlewares = (app:Koa) => {
  return R.map(R.compose(
    R.map((i:any) => i(app)),
    require,
    (i:any) => `${r('./middlewares')}/${i}`
  ))
}

async function start (){
  const app = new Koa()
  const { port } = config
  await userMiddlewares(app)(MIDDLEWARES)
  app.listen(port, () => {
    console.log(`项目成功运行在${port}端口`)
  })
}

start()