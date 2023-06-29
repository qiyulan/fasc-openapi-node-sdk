import { AbstractClient } from "../../common/abstract_client"
import { ClientConfig } from "../../common/interface"
import { GetCallbackListRequest, GetCallbackListResponse } from './callback_model'

export class Client extends AbstractClient{
  constructor(clientConfig: ClientConfig) {
    super(clientConfig)
  }

  /** 查询回调列表 */
  async getCallbackList(req: GetCallbackListRequest): Promise<GetCallbackListResponse> {
    return this.request({ url: "/callback/get-list", req, reqMethod: "POST" })
  }
}