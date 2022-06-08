"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const abstract_client_1 = require("../../common/abstract_client");
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super(clientConfig);
    }
    /**
     * 应用系统向法大大平台获取计费页面链接，用于账户信息查询或套餐订购
     */
    async getBillUrl(req) {
        return this.request({ url: "/billing/get-bill-url", reqMethod: "POST", req });
    }
}
exports.Client = Client;
