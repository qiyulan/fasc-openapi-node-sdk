"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const abstract_client_1 = require("../../common/abstract_client");
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super(clientConfig);
    }
    /**
     * 通过网络文件地址上传文件(文档或附件)到法大大存储服务
     */
    async uploadFileByUrl(req) {
        return this.request({ url: "/file/upload-by-url", reqMethod: "POST", req });
    }
    /**
     * 上传本地文件到法大大
     */
    async getUploadUrl(req) {
        return this.request({ url: "/file/get-upload-url", reqMethod: "POST", req });
    }
    /**
     * 文件处理
     */
    async FileProcess(req) {
        return this.request({ url: "/file/process", reqMethod: "POST", req });
    }
}
exports.Client = Client;
