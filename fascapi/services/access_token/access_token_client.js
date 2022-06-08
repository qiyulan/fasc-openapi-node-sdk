"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const abstract_client_1 = require("../../common/abstract_client");
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super(clientConfig);
    }
    /**
     * 获取服务访问凭证
     * 应用系统获取法大大平台的服务访问凭证(accessToken)。获取的凭证有效时间为2小时。有效期内重复获取会返回相同的结果，并自动续期。该接口的参数必须进行签名才能正常获得accessToken
     */
    async getAccessToken() {
        return this.request({ url: "/service/get-access-token", reqMethod: "POST" });
    }
}
exports.Client = Client;
