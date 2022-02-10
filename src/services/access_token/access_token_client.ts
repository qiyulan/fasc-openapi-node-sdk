import { AbstractClient } from "../../common/abstract_client"
import { ClientConfig } from "../../common/interface"
import { GetAccessTokenResponse } from "./access_token_model"

export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super(clientConfig)
  }

  async getAccessToken(
    cb?: (error: unknown | string, req: any) => void
  ): Promise<GetAccessTokenResponse> {
    return this.request({ url: "/service/get-access-token", reqMethod: "POST", cb })
  }
}
