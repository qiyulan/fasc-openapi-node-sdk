import { AbstractClient } from "../../common/abstract_client"
import { AddUserRequest, AddUserResponse } from "../../models/user"
import { ClientConfig } from "../../common/interface"

export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super(clientConfig)
  }

  async addUser(
    req: AddUserRequest,
    cb?: (error: unknown | string, req: any) => void
  ): Promise<AddUserResponse> {
    return this.request({ url: "/user/add", req, reqMethod: "POST", cb })
  }
}
