"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const abstract_client_1 = require("../../common/abstract_client");
class Client extends abstract_client_1.AbstractClient {
    /**
     * 查询企业成员列表
     * 根据指定的企业主体openCorpId查询企业在法大大组织中管理的员工列表数据
     */
    async getMemberList(req) {
        return this.request({ url: "/corp/member/get-list", req, reqMethod: "POST" });
    }
}
exports.Client = Client;
