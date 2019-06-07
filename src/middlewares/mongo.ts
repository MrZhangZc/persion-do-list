import * as mongoose from 'mongoose'
import config from '../config'
import { sync } from 'glob'
import { join } from 'path'

sync(join(__dirname, '../app/model', '**/*.js')).forEach(require)

export const mongo = () => {
  if(process.env.NODE_ENV === 'development'){
    mongoose.set('debug', true)
  }

  mongoose.connect(config.dbURL, { useNewUrlParser: true })

  mongoose.connection.on('disconnected', () => {
      mongoose.connect(config.dbURL, { useNewUrlParser: true })
  })

  mongoose.connection.on('err', err => {

  })

  mongoose.connection.on('open', async () => {
    console.log('成功链接数据库')
  })
}