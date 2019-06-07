const env:any = process.env.NODE_ENV || 'development'
interface IEveryConfig{
  port:number,
  dbURL:string,
  redisHost:string
}
interface Iconfig{
  production:IEveryConfig,
  development:IEveryConfig
}
const config:Iconfig = {
  production: {
    port: 8888,
    dbURL: 'mongodb://mongo/persion-do-list',
    redisHost: 'redis'
  },
  development: {
    port: 5555,
    dbURL: 'mongodb://localhost/persion-do-list',
    redisHost: '127.0.0.1'
  }
}

export default config.development