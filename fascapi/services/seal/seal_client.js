"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const abstract_client_1 = require("../../common/abstract_client");
class Client extends abstract_client_1.AbstractClient {
    /**
     * 查询印章列表
     * 根据指定的企业主体openCorpId查询企业在法大大组织中管理的印章列表数据
     */
    async getSealList(req) {
        return this.request({ url: "/seal/get-list", req, reqMethod: "POST" });
    }
    /**
     * 查询企业用印员列表
     * 根据指定的企业主体openCorpId查询企业在法大大组织中管理的印章的用印人员列表
     */
    async getSealUserList(req) {
        return this.request({ url: "/seal/get-user-list", req, reqMethod: "POST" });
    }
}
exports.Client = Client;
