import { AbstractClient } from "../../common/abstract_client"
import { ClientConfig } from "../../common/interface"
import {
  GetUploadUrlRequest,
  GetUploadUrlResponse,
  UploadFileByUrlRequest,
  UploadFileByUrlResponse,
  FileProcessRequest,
  FileProcessResponse,
  FileVerifySignRequest,
  FileVerifySignResponse,
  GetFileKeywordPositionsRequest,
  GetFileKeywordPositionsResponse
} from "./doc_models"

export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super(clientConfig)
  }

  /** 通过网络文件地址上传 */
  async uploadFileByUrl(req?: UploadFileByUrlRequest): Promise<UploadFileByUrlResponse> {
    return this.request({ url: "/file/upload-by-url", reqMethod: "POST", req })
  }

  /** 上传本地文件到法大大 */
  async getUploadUrl(req: GetUploadUrlRequest): Promise<GetUploadUrlResponse> {
    return this.request({ url: "/file/get-upload-url", reqMethod: "POST", req })
  }

  /** 文件处理 */
  async fileProcess(req: FileProcessRequest): Promise<FileProcessResponse> {
    return this.request({ url: "/file/process", reqMethod: "POST", req })
  }

  /** 文件验签 */
  async fileVerifySign(req: FileVerifySignRequest): Promise<FileVerifySignResponse> {
    return this.request({ url: "/file/verify-sign", reqMethod: "POST", req })
  }

  /** 查询文档关键字坐标 */
  async getFileKeywordPositions(req: GetFileKeywordPositionsRequest): Promise<GetFileKeywordPositionsResponse> {
    return this.request({ url: "/file/get-keyword-positions", reqMethod: "POST", req })
  }
}
