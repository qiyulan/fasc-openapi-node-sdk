"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const abstract_client_1 = require("../../common/abstract_client");
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super(clientConfig);
    }
    /**
     * 查询签署模板列表，列表根据签署模板更新时间倒序排序返回
     */
    async getSignTemplateList(req, cb) {
        return this.request({ url: "/sign-template/get-list", reqMethod: "POST", req, cb });
    }
    /**
     * 获取签署模板详情，包括签署模板基本信息、文档信息、参与方信息(含各参与方填写控件、签章控件)
     */
    async getSignTemplateDetail(req, cb) {
        return this.request({ url: "/sign-template/get-detail", reqMethod: "POST", req, cb });
    }
}
exports.Client = Client;
