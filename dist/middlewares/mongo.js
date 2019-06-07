"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const config_1 = require("../config");
const glob_1 = require("glob");
const path_1 = require("path");
glob_1.sync(path_1.join(__dirname, '../app/model', '**/*.js')).forEach(require);
exports.mongo = () => {
    if (process.env.NODE_ENV === 'development') {
        mongoose.set('debug', true);
    }
    mongoose.connect(config_1.default.dbURL, { useNewUrlParser: true });
    mongoose.connection.on('disconnected', () => {
        mongoose.connect(config_1.default.dbURL, { useNewUrlParser: true });
    });
    mongoose.connection.on('err', err => {
    });
    mongoose.connection.on('open', () => __awaiter(this, void 0, void 0, function* () {
        console.log('成功链接数据库');
    }));
};
//# sourceMappingURL=mongo.js.map