/** uploadFileByUrl 通过网络文件地址上传-请求参数结构体 */
export interface UploadFileByUrlRequest {
    /** 文件的用途类型: doc | attach */
    fileType: string;
    /** 网络文件URL，法大大平台将从该地址拉取文档 */
    fileUrl: string;
}
/** uploadFileByUrl 通过网络文件地址上传-响应参数结构体 */
export interface UploadFileByUrlResponse {
    /** 法大大云存储中的源文件地址 */
    fddFileUrl: string;
}
/** uploadFileByUrl 通过网络文件地址上传-请求参数结构体 */
export interface GetUploadUrlRequest {
    /** 文件的用途类型: doc | attach */
    fileType: string;
}
/** getUploadUrl 通过网络文件地址上传-响应参数结构体 */
export interface GetUploadUrlResponse {
    /** 文件上传地址，通过该链接，可以将用于签署的文档或附件上传到法大大云平台 */
    uploadUrl: string;
    /** 法大大云存储中的源文件地址 */
    fddFileUrl: string;
}
interface FddFileUrl {
    /** 文件的用途类型: doc | attach */
    fileType: string;
    /** 法大大云存储中的源文件地址 */
    fddFileUrl: string;
    /** 指定文件名称，包含扩展名 */
    fileName: string;
}
/** fileProcess 文件处理-请求参数结构体 */
export interface FileProcessRequest {
    fddFileUrlList: Array<FddFileUrl>;
}
interface FileId {
    /** 文件ID，长度最大32个字符 */
    fileId: string;
}
/** fileProcess 文件处理-请求参数结构体 */
export interface FileProcessResponse {
    fileIdList: Array<FileId>;
}
export {};
