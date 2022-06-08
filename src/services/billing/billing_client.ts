import { AbstractClient } from "../../common/abstract_client"
import { ClientConfig } from "../../common/interface"
import { GetBillUrlRequest, GetBillUrlResponse } from "./billing_models"

export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super(clientConfig)
  }

  /**
   * 应用系统向法大大平台获取计费页面链接，用于账户信息查询或套餐订购
   */
  async getBillUrl(
    req: GetBillUrlRequest
  ): Promise<GetBillUrlResponse> {
    return this.request({ url: "/billing/get-bill-url", reqMethod: "POST", req })
  }
}
