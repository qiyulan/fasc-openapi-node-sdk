import { OpenId } from "../../common/models";
/** uploadInstant 上传即时文件-请求参数结构体  */
export interface UploadInstantRequest {
    bizContent: {
        /** 文件归属方 */
        ownerId: OpenId;
        /** 文件的用途类型：doc、attach */
        fileType: string;
        /** 文档名称 */
        fileName: string;
        /** 文件源URL地址 */
        fileUrl?: string;
        /** 上传文件的hash值(sha256) */
        fileContentHash?: string;
    };
    /** 文件流 */
    fileContent?: File;
}
/** uploadInstant 上传即时文件-响应参数结构体  */
export interface UploadInstantResponse {
    /** 文件ID */
    fileId: string;
}
