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
const bodyParser = require("koa-body");
const serve = require("koa-static");
const path_1 = require("path");
const r = (path) => path_1.resolve(__dirname, path);
exports.addBodyParser = (app) => {
    app.use(bodyParser({ multipart: true, formidable: { maxFileSize: 200 * 1024 * 1024 } }));
};
exports.serves = (app) => __awaiter(this, void 0, void 0, function* () {
    app.use(serve(r('../../public')));
});
//# sourceMappingURL=common.js.map