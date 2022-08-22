"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const abstract_client_1 = require("../../common/abstract_client");
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super(clientConfig);
    }
    /**
     * 将已添加的企业用户暂时禁用。禁用后，该企业暂时不能通过该应用系统使用法大大平台服务
     */
    async disable(req) {
        return this.request({ url: "/corp/disable", req, reqMethod: "POST" });
    }
    /**
     * 将已禁用的企业用户再次激活。激活后，该企业用户可继续通过该应用系统使用法大大平台服务
     */
    async enable(req) {
        return this.request({ url: "/corp/enable", req, reqMethod: "POST" });
    }
    /**
   * 将已禁用的企业用户再次激活。激活后，该企业用户可继续通过该应用系统使用法大大平台服务
   */
    async unbind(req) {
        return this.request({ url: "/corp/unbind", req, reqMethod: "POST" });
    }
    /**
     * 获取企业的基本信息、认证状态、授权状态和范围等。注意：该接口返回的信息中不涉及隐私，因此不需要授权
     */
    async get(req) {
        return this.request({ url: "/corp/get", req, reqMethod: "POST" });
    }
    /**
     * 用于获取企业的实名身份信息。注意：只有经过企业授权后，应用系统方可获得此信息
     */
    async getIdentityInfo(req) {
        return this.request({ url: "/corp/get-identity-info", req, reqMethod: "POST" });
    }
}
exports.Client = Client;
