import { AbstractClient } from "../../common/abstract_client"
import { ClientConfig } from "../../common/interface"
import { 
  GetUserAuthUrlRequest, GetUserAuthUrlResponse,
  GetCorpAuthUrlRequest, GetCorpAuthUrlResponse, GetAppPageResourceUrlRequest, GetAppPageResourceUrlResponse,
  GetUserPageResourceUrlRequest, GetUserPageResourceUrlResponse, GetBillUrlRequest, GetBillUrlResponse
} from './eui_model'

export class Client extends AbstractClient{
  constructor(clientConfig: ClientConfig) {
    super(clientConfig)
  }

  /** 获取企业授权链接 */
  async getCorpAuthUrl(req: GetCorpAuthUrlRequest): Promise<GetCorpAuthUrlResponse> {
    return this.request({ url: "/corp/get-auth-url", req, reqMethod: "POST" })
  }

  /** 获取个人授权链接 */
  async getUserAuthUrl(req: GetUserAuthUrlRequest): Promise<GetUserAuthUrlResponse> {
    return this.request({ url: "/user/get-auth-url", req, reqMethod: "POST" })
  }

  /**
   * 获取应用级资源访问链接
   * 获取法大大平台主体授权给应用可访问的资源链接
   */
  async getAppPageResourceUrl(req: GetAppPageResourceUrlRequest): Promise<GetAppPageResourceUrlResponse> {
    return this.request({ url: "/app-page-resource/get-url", req, reqMethod: "POST" })
  }

  /**
   * 获取用户级资源访问链接
   * 获取法大大登录用户访问资源的链接
   */
  async getUserPageResourceUrl(req: GetUserPageResourceUrlRequest): Promise<GetUserPageResourceUrlResponse> {
    return this.request({ url: "/user-page-resource/get-url", req, reqMethod: "POST" })
  }

  /** 获取计费链接 */
  async getBillUrl(req: GetBillUrlRequest): Promise<GetBillUrlResponse> {
    return this.request({ url: "/billing/get-bill-url", req, reqMethod: "POST" })
  }
}
