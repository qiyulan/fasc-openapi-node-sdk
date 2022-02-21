"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const abstract_client_1 = require("../../common/abstract_client");
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super(clientConfig);
    }
    /**
     * 将待签署的文档文件或附件上传到法大大平台。法大大平台为每个成功上传的文件分配一个唯一的标识fileId。
     * 文件源数据要么通过文件流形式直接传送，要么提供fileUrl，法大大平台将从该fileUrl拉取文档文件。即：fileContent和fileUrl必须有一个参数是有效的。
     */
    async uploadInstant(req, cb) {
        return this.request({
            url: "/file/upload-instant",
            req,
            reqMethod: "POST",
            cb,
            options: { multipart: true },
        });
    }
}
exports.Client = Client;
