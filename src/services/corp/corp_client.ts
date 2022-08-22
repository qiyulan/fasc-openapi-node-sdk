import { AbstractClient } from "../../common/abstract_client"
import { ClientConfig } from "../../common/interface"
import {
  DisableCorpRequest,
  DisableCorpResponse,
  EnableCorpRequest,
  EnableCorpResponse,
  UnbindCorpRequest,
  UnbindCorpResponse,
  GetBasicInfoRequest,
  GetBasicInfoResponse,
  GetIdentityInfoRequest,
  GetIdentityInfoResponse,
} from "./crop_model"

export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super(clientConfig)
  }

  /**
   * 将已添加的企业用户暂时禁用。禁用后，该企业暂时不能通过该应用系统使用法大大平台服务
   */
  async disable(
    req: DisableCorpRequest,
  ): Promise<DisableCorpResponse> {
    return this.request({ url: "/corp/disable", req, reqMethod: "POST" })
  }

  /**
   * 将已禁用的企业用户再次激活。激活后，该企业用户可继续通过该应用系统使用法大大平台服务
   */
  async enable(
    req: EnableCorpRequest,
  ): Promise<EnableCorpResponse> {
    return this.request({ url: "/corp/enable", req, reqMethod: "POST" })
  }

    /**
   * 将已禁用的企业用户再次激活。激活后，该企业用户可继续通过该应用系统使用法大大平台服务
   */
    async unbind(
      req: UnbindCorpRequest,
    ): Promise<UnbindCorpResponse> {
      return this.request({ url: "/corp/unbind", req, reqMethod: "POST" })
    }

  /**
   * 获取企业的基本信息、认证状态、授权状态和范围等。注意：该接口返回的信息中不涉及隐私，因此不需要授权
   */
  async get(
    req: GetBasicInfoRequest,
  ): Promise<GetBasicInfoResponse> {
    return this.request({ url: "/corp/get", req, reqMethod: "POST" })
  }

  /**
   * 用于获取企业的实名身份信息。注意：只有经过企业授权后，应用系统方可获得此信息
   */
  async getIdentityInfo(
    req: GetIdentityInfoRequest,
  ): Promise<GetIdentityInfoResponse> {
    return this.request({ url: "/corp/get-identity-info", req, reqMethod: "POST" })
  }

}
