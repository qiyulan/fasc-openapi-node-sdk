"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const abstract_client_1 = require("../../common/abstract_client");
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super(clientConfig);
    }
    /**
     * 查询文档模板列表，列表根据文档模板更新时间倒序排序返回
     */
    async getDocTemplateList(req, cb) {
        return this.request({ url: "/doc-template/get-list", reqMethod: "POST", req, cb });
    }
    /**
     * 获取文档模板详情，包括文档模板的基本信息、填写和签章控件和区域信息等
     */
    async getDocTemplateDetail(req, cb) {
        return this.request({ url: "/doc-template/get-detail", reqMethod: "POST", req, cb });
    }
}
exports.Client = Client;
