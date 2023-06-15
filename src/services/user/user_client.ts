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
  GetIdentityInfoResponse,
  GetFourElementVerifyUrlRequest,
  GetFourElementVerifyUrlResponse,
  GetThreeElementVerifyUrlRequest,
  GetThreeElementVerifyUrlResponse,
  GetIdCardImageDownloadUrlRequest,
  GetIdCardImageDownloadUrlResponse,
  GetIdCardOcrRequest,
  GetIdCardOcrResponse,
} from "./user_models"
import { ClientConfig } from "../../common/interface"

export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super(clientConfig)
  }

  /**
   * 将已添加的用户暂时禁用。禁用后，该用户暂时不能通过该应用系统使用法大大平台服务
   */
  async disableUser(req: DisableUserRequest): Promise<DisableUserResponse> {
    return this.request({ url: "/user/disable", req, reqMethod: "POST" })
  }

  /**
   * 将已禁用的用户再次激活。激活后，该用户可继续通过该应用系统使用法大大平台服务
   */
  async enableUser(req: EnableUserRequest): Promise<EnableUserResponse> {
    return this.request({ url: "/user/enable", req, reqMethod: "POST" })
  }

  /**
   * 将已禁用的用户再次激活。激活后，该用户可继续通过该应用系统使用法大大平台服务
   */
  async unbindUser(req: UnbindUserRequest): Promise<UnbindUserResponse> {
    return this.request({ url: "/user/unbind", req, reqMethod: "POST" })
  }

  /**
   * 获取个人用户的基本信息、认证状态、授权状态和范围等。注意：该接口返回的信息中不涉及个人隐私，因此不需要授权
   */
  async getUserInfo(req: GetUserInfoRequest): Promise<GetUserInfoResponse> {
    return this.request({ url: "/user/get", req, reqMethod: "POST" })
  }

  /**
   * 用于获取个人用户的身份信息
   */
  async getIdentInfo(req: GetIdentityInfoRequest): Promise<GetIdentityInfoResponse> {
    return this.request({ url: "/user/get-identity-info", req, reqMethod: "POST" })
  }

  /**
   * 个人四要素校验
   * 从法大大获取一个链接，用户可在页面中校验其姓名、身份证号、运营商手机号是否一致
   */
  async getFourElementVerifyUrl(req: GetFourElementVerifyUrlRequest): Promise<GetFourElementVerifyUrlResponse> {
    return this.request({ url: "/user/four-element-verify/get-url", req, reqMethod: "POST" })
  }

  /**
   * 个人三要素校验
   * 从法大大获取一个链接，用户可在页面中校验其姓名、身份证号、运营商手机号是否一致
   */
  async getThreeElementVerifyUrl(req: GetThreeElementVerifyUrlRequest): Promise<GetThreeElementVerifyUrlResponse> {
    return this.request({ url: "/user/three-element-verify/get-url", req, reqMethod: "POST" })
  }

  /**
   * 获取要素校验身份证图片下载链接
   */
  async getIdCardImageDownloadUrl(req: GetIdCardImageDownloadUrlRequest): Promise<GetIdCardImageDownloadUrlResponse> {
    return this.request({ url: "/user/element-verify/get-idcard-image-download-url", req, reqMethod: "POST" })
  }

  /**
   * 身份证OCR
   */
  async getIdCardOcrUrl(req: GetIdCardOcrRequest): Promise<GetIdCardOcrResponse> {
    return this.request({ url: "/user/ocr/id-card", req, reqMethod: "POST" })
  }
}
