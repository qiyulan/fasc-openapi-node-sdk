"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const abstract_client_1 = require("../../common/abstract_client");
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super(clientConfig);
    }
    /**
     * 将已添加的用户暂时禁用。禁用后，该用户暂时不能通过该应用系统使用法大大平台服务
     */
    async disableUser(req) {
        return this.request({ url: "/user/disable", req, reqMethod: "POST" });
    }
    /**
     * 将已禁用的用户再次激活。激活后，该用户可继续通过该应用系统使用法大大平台服务
     */
    async enableUser(req) {
        return this.request({ url: "/user/enable", req, reqMethod: "POST" });
    }
    /**
   * 将已禁用的用户再次激活。激活后，该用户可继续通过该应用系统使用法大大平台服务
   */
    async unbindUser(req) {
        return this.request({ url: "/user/unbind", req, reqMethod: "POST" });
    }
    /**
     * 获取个人用户的基本信息、认证状态、授权状态和范围等。注意：该接口返回的信息中不涉及个人隐私，因此不需要授权
     */
    async getUserInfo(req) {
        return this.request({ url: "/user/get", req, reqMethod: "POST" });
    }
    /**
     * 用于获取个人用户的身份信息
     */
    async getIdentInfo(req) {
        return this.request({ url: "/user/get-identity-info", req, reqMethod: "POST" });
    }
}
exports.Client = Client;
