import { AbstractClient } from "../../common/abstract_client"
import { ClientConfig } from "../../common/interface"
import { GetAccessTokenResponse } from "./access_token_model"

export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super(clientConfig)
  }

  /**
   * 应用系统获取法大大平台的服务访问凭证(accessToken)。获取的凭证有效时间为2小时。有效期内重复获取会返回相同的结果，并自动续期。该接口的参数必须进行签名才能正常获得accessToken
   */
  async getAccessToken(
    cb?: (error: unknown | string, req: any) => void
  ): Promise<GetAccessTokenResponse> {
    return this.request({ url: "/service/get-access-token", reqMethod: "POST", cb })
  }
}
