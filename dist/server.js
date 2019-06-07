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
const Koa = require("koa");
const R = require("ramda");
const path_1 = require("path");
const config_1 = require("./config");
const r = (url) => path_1.resolve(__dirname, url);
const MIDDLEWARES = ['mongo', 'common', 'router'];
const userMiddlewares = (app) => {
    return R.map(R.compose(R.map((i) => i(app)), require, (i) => `${r('./middlewares')}/${i}`));
};
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = new Koa();
        const { port } = config_1.default;
        yield userMiddlewares(app)(MIDDLEWARES);
        app.listen(port, () => {
            console.log(`项目成功运行在${port}端口`);
        });
    });
}
start();
//# sourceMappingURL=server.js.map