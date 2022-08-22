import { AbstractClient } from "../../common/abstract_client"
import { ClientConfig } from "../../common/interface"
import {
  GetUploadUrlRequest,
  GetUploadUrlResponse,
  UploadFileByUrlRequest,
  UploadFileByUrlResponse,
  FileProcessRequest,
  FileProcessResponse
} from "./doc_models"

export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super(clientConfig)
  }

  /** 
   * 通过网络文件地址上传文件(文档或附件)到法大大存储服务
   */
  async uploadFileByUrl(
    req?: UploadFileByUrlRequest,
  ): Promise<UploadFileByUrlResponse> {
    return this.request({ url: "/file/upload-by-url", reqMethod: "POST", req })
  }

  /**
   * 上传本地文件到法大大
   */
  async getUploadUrl(
    req: GetUploadUrlRequest,
  ): Promise<GetUploadUrlResponse> {
    return this.request({ url: "/file/get-upload-url", reqMethod: "POST", req })
  }

  /**
   * 文件处理
   */
  async FileProcess(
    req: FileProcessRequest,
  ): Promise<FileProcessResponse> {
    return this.request({ url: "/file/process", reqMethod: "POST", req })
  }
}

