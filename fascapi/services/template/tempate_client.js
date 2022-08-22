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
    async getDocTemplateList(req) {
        return this.request({ url: "/doc-template/get-list", reqMethod: "POST", req });
    }
    /**
     * 获取文档模板详情，包括文档模板的基本信息、填写和签章控件和区域信息等
     */
    async getDocTemplateDetail(req) {
        return this.request({ url: "/doc-template/get-detail", reqMethod: "POST", req });
    }
    /**
     * 查询签署模板列表，列表根据签署模板更新时间倒序排序返回
     */
    async getSignTemplateList(req) {
        return this.request({ url: "/sign-template/get-list", reqMethod: "POST", req });
    }
    /**
     * 获取签署模板详情，包括签署模板基本信息、文档信息、参与方信息(含各参与方填写控件、签章控件)
     */
    async getSignTemplateDetail(req) {
        return this.request({ url: "/sign-template/get-detail", reqMethod: "POST", req });
    }
    /**
     * 业务系统向法大大平台获取模板管理页面链接，该页面无需法大大账号登录，用于对指定企业主体的模板进行管理操作
     */
    async getManageUrl(req) {
        return this.request({ url: "/template/get-manage-url", reqMethod: "POST", req });
    }
}
exports.Client = Client;
