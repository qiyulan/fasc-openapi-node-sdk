import { AbstractClient } from "../../common/abstract_client";
import { ClientConfig } from "../../common/interface";
import { GetUploadUrlRequest, GetUploadUrlResponse, UploadFileByUrlRequest, UploadFileByUrlResponse, FileProcessRequest, FileProcessResponse, FileVerifySignRequest, FileVerifySignResponse } from "./doc_models";
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /** 通过网络文件地址上传 */
    uploadFileByUrl(req?: UploadFileByUrlRequest): Promise<UploadFileByUrlResponse>;
    /** 上传本地文件到法大大 */
    getUploadUrl(req: GetUploadUrlRequest): Promise<GetUploadUrlResponse>;
    /** 文件处理 */
    fileProcess(req: FileProcessRequest): Promise<FileProcessResponse>;
    /** 文件验签 */
    fileVerifySign(req: FileVerifySignRequest): Promise<FileVerifySignResponse>;
}
