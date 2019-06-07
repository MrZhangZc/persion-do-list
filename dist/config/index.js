"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env = process.env.NODE_ENV || 'development';
const config = {
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
};
exports.default = config.development;
//# sourceMappingURL=index.js.map