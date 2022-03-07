"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const abstract_client_1 = require("../../common/abstract_client");
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super(clientConfig);
    }
    /**
    * 获取模板管理链接
    * 业务系统向法大大平台获取模板管理页面链接，该页面无需法大大账号登录，用于对指定企业主体的模板进行管理操作
    */
    async getPageManageUrl(req, cb) {
        return this.request({ url: "/template/get-pagemanage-url", reqMethod: "POST", req, cb });
    }
}
exports.Client = Client;
