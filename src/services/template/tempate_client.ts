import { AbstractClient } from "../../common/abstract_client"
import { ClientConfig } from "../../common/interface"
import {   GetPageManageUrlRequest,
  GetPageManageUrlResponse, } from "./template_models"

export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super(clientConfig)
  }

   /**
   * 获取模板管理链接
   * 业务系统向法大大平台获取模板管理页面链接，该页面无需法大大账号登录，用于对指定企业主体的模板进行管理操作
   */
    async getPageManageUrl(
      req: GetPageManageUrlRequest,
      cb?: (error: string, res: GetPageManageUrlResponse) => void
    ): Promise<GetPageManageUrlResponse> {
      return this.request({ url: "/template/get-pagemanage-url", reqMethod: "POST", req, cb })
    }
}
