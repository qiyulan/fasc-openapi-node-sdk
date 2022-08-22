import { AbstractClient } from "../../common/abstract_client"
import {
  DisableUserRequest,
  DisableUserResponse,
  EnableUserRequest,
  EnableUserResponse,
  UnbindUserRequest,
  UnbindUserResponse,
  GetUserInfoRequest,
  GetUserInfoResponse,
  GetIdentityInfoRequest,
  GetIdentityInfoResponse
} from "./user_models"
import { ClientConfig } from "../../common/interface"

export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super(clientConfig)
  }

  /**
   * 将已添加的用户暂时禁用。禁用后，该用户暂时不能通过该应用系统使用法大大平台服务
   */
  async disableUser(
    req: DisableUserRequest,
  ): Promise<DisableUserResponse> {
    return this.request({ url: "/user/disable", req, reqMethod: "POST" })
  }

  /**
   * 将已禁用的用户再次激活。激活后，该用户可继续通过该应用系统使用法大大平台服务
   */
  async enableUser(
    req: EnableUserRequest,
  ): Promise<EnableUserResponse> {
    return this.request({ url: "/user/enable", req, reqMethod: "POST" })
  }

    /**
   * 将已禁用的用户再次激活。激活后，该用户可继续通过该应用系统使用法大大平台服务
   */
    async unbindUser(
      req: UnbindUserRequest,
    ): Promise<UnbindUserResponse> {
      return this.request({ url: "/user/unbind", req, reqMethod: "POST" })
    }

  /**
   * 获取个人用户的基本信息、认证状态、授权状态和范围等。注意：该接口返回的信息中不涉及个人隐私，因此不需要授权
   */
  async getUserInfo(
    req: GetUserInfoRequest,
  ): Promise<GetUserInfoResponse> {
    return this.request({ url: "/user/get", req, reqMethod: "POST" })
  }

  /**
   * 用于获取个人用户的身份信息
   */
  async getIdentInfo(
    req: GetIdentityInfoRequest,
  ): Promise<GetIdentityInfoResponse> {
    return this.request({ url: "/user/get-identity-info", req, reqMethod: "POST" })
  }
}
