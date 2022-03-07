"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const abstract_client_1 = require("../../common/abstract_client");
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super(clientConfig);
    }
    /**
     * 业务系统向法大大平台获取一个页面链接，用于对指定模块进行管理操作，如印章管理等
     */
    async getManageUrl(req, cb) {
        return this.request({ url: "/manage/get-manage-url", req, reqMethod: "POST", cb });
    }
}
exports.Client = Client;
