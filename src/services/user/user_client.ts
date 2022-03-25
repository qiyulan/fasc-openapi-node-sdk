import { AbstractClient } from "../../common/abstract_client"
import {
  AddUserRequest,
  AddUserResponse,
  UpdateUserRequest,
  UpdateUserResponse,
  DeleteUserRequest,
  DeleteUserResponse,
  DisableUserRequest,
  DisableUserResponse,
  EnableUserRequest,
  EnableUserResponse,
  GetAuthUrlRequest,
  GetAuthUrlResponse,
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
   * 把应用系统上将要使用法大大平台服务的个人用户添加到法大大平台。法大大平台会为这些用户分配在该appId范围内的唯一标识openUserId。
   * 后续，针对该用户进行的授权请求、签署任务等调用都将使用该openUserId标识该用户。您可在应该管理后台查看和管理已经添加的用户
   */
  async addUser(
    req: AddUserRequest,
    cb?: (error: string, res: AddUserResponse) => void
  ): Promise<AddUserResponse> {
    return this.request({ url: "/user/add", req, reqMethod: "POST", cb })
  }

  /**
   * 为已添加的个人用户修改在应用系统中的关联参数
   */
  async updateUser(
    req: UpdateUserRequest,
    cb?: (error: string, res: UpdateUserResponse) => void
  ): Promise<UpdateUserResponse> {
    return this.request({ url: "/user/update", req, reqMethod: "POST", cb })
  }

  /**
   * 删除个人用户。删除后再次使用相同的clientUserId添加个人用户时，可能返回新的openUserId
   */
  async deleteUser(
    req: DeleteUserRequest,
    cb?: (error: string, res: DeleteUserResponse) => void
  ): Promise<DeleteUserResponse> {
    return this.request({ url: "/user/delete", req, reqMethod: "POST", cb })
  }

  /**
   * 将已添加的用户暂时禁用。禁用后，该用户暂时不能通过该应用系统使用法大大平台服务
   */
  async disableUser(
    req: DisableUserRequest,
    cb?: (error: string, res: DisableUserResponse) => void
  ): Promise<DisableUserResponse> {
    return this.request({ url: "/user/disable", req, reqMethod: "POST", cb })
  }

  /**
   * 将已禁用的用户再次激活。激活后，该用户可继续通过该应用系统使用法大大平台服务
   */
  async enableUser(
    req: EnableUserRequest,
    cb?: (error: string, res: EnableUserResponse) => void
  ): Promise<EnableUserResponse> {
    return this.request({ url: "/user/enable", req, reqMethod: "POST", cb })
  }

  /**
   * 应用系统向法大大平台获取一个页面链接，用于提醒用户进行授权操作，以授权应用系统访问用户在法大大平台的某些数据资源和操作权限。
   * 在用户操作授权前，法大大平台要求用户必须先完成登录和实名认证 (即: Authorization的前提是必须先完成Authentication)
   */
  async getAuthUrl(
    req: GetAuthUrlRequest,
    cb?: (error: string, res: GetAuthUrlResponse) => void
  ): Promise<GetAuthUrlResponse> {
    return this.request({ url: "/user/get-auth-url", req, reqMethod: "POST", cb })
  }

  /**
   * 获取个人用户的基本信息、认证状态、授权状态和范围等。注意：该接口返回的信息中不涉及个人隐私，因此不需要授权
   */
  async getUserInfo(
    req: GetUserInfoRequest,
    cb?: (error: string, res: GetUserInfoResponse) => void
  ): Promise<GetUserInfoResponse> {
    return this.request({ url: "/user/get", req, reqMethod: "POST", cb })
  }

  /**
   * 用于获取个人用户的身份信息
   */
  async getIdentInfo(
    req: GetIdentityInfoRequest,
    cb?: (error: string, res: GetIdentityInfoResponse) => void
  ): Promise<GetIdentityInfoResponse> {
    return this.request({ url: "/user/get-identity-info", req, reqMethod: "POST", cb })
  }
}
