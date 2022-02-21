"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const abstract_client_1 = require("../../common/abstract_client");
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super(clientConfig);
    }
    async addUser(req, cb) {
        return this.request({ url: "/user/add", req, reqMethod: "POST", cb });
    }
    async updateUser(req, cb) {
        return this.request({ url: "/user/update", req, reqMethod: "POST", cb });
    }
    async deleteUser(req, cb) {
        return this.request({ url: "/user/delete", req, reqMethod: "POST", cb });
    }
    async disableUser(req, cb) {
        return this.request({ url: "/user/disable", req, reqMethod: "POST", cb });
    }
    async enableUser(req, cb) {
        return this.request({ url: "/user/enable", req, reqMethod: "POST", cb });
    }
    async getAuthUrl(req, cb) {
        return this.request({ url: "/user/enable", req, reqMethod: "POST", cb });
    }
    async getUserInfo(req, cb) {
        return this.request({ url: "/user/get", req, reqMethod: "POST", cb });
    }
    async getIdentInfo(req, cb) {
        return this.request({ url: "/user/get-identity-info", req, reqMethod: "POST", cb });
    }
}
exports.Client = Client;
