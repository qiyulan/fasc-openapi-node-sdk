import { AbstractClient } from "../../common/abstract_client";
import { ClientConfig } from "../../common/interface";
import { GetUploadUrlRequest, GetUploadUrlResponse, UploadFileByUrlRequest, UploadFileByUrlResponse, FileProcessRequest, FileProcessResponse } from "./doc_models";
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 通过网络文件地址上传文件(文档或附件)到法大大存储服务
     */
    uploadFileByUrl(req?: UploadFileByUrlRequest): Promise<UploadFileByUrlResponse>;
    /**
     * 上传本地文件到法大大
     */
    getUploadUrl(req: GetUploadUrlRequest): Promise<GetUploadUrlResponse>;
    /**
     * 文件处理
     */
    FileProcess(req: FileProcessRequest): Promise<FileProcessResponse>;
}
