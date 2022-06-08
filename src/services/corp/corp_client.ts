import { AbstractClient } from "../../common/abstract_client"
import { ClientConfig } from "../../common/interface"
import {
  AddCorpRequest,
  AddCorpResponse,
  UpdateCorpRequest,
  UpdateCorpResponse,
  DeleteCorpRequest,
  DeleteCorpResponse,
  DisableCorpRequest,
  DisableCorpResponse,
  EnableCorpRequest,
  EnableCorpResponse,
  UnbindCorpRequest,
  UnbindCorpResponse,
  GetAuthUrlRequest,
  GetAuthUrlResponse,
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
   * 把应用系统上将要使用法大大电子签服务的企业添加到法大大平台。法大大平台会为这些企业分配在该appId范围内的唯一标识openCorpId。
   * 后续，针对该企业进行的授权请求、签署任务等调用都将使用该openCorpId标识该企业。您可以在应该管理后台查看和管理已经添加的企业
   */
  async addCorp(
    req: AddCorpRequest
  ): Promise<AddCorpResponse> {
    return this.request({ url: "/corp/add", req, reqMethod: "POST" })
  }

  /**
   * 为已添加的企业修改在应用系统中的关联参数
   */
  async updateCorp(
    req: UpdateCorpRequest
  ): Promise<UpdateCorpResponse> {
    return this.request({ url: "/corp/update", req, reqMethod: "POST" })
  }

  /**
   * 删除企业。删除后再次使用相同的clientCorpId添加该企业时，返回新的openCorpId
   */
  async deleteCorp(
    req: DeleteCorpRequest,
  ): Promise<DeleteCorpResponse> {
    return this.request({ url: "/corp/delete", req, reqMethod: "POST" })
  }

  /**
   * 将已添加的企业用户暂时禁用。禁用后，该企业暂时不能通过该应用系统使用法大大平台服务
   */
  async disableCorp(
    req: DisableCorpRequest,
  ): Promise<DisableCorpResponse> {
    return this.request({ url: "/corp/disable", req, reqMethod: "POST" })
  }

  /**
   * 将已禁用的企业用户再次激活。激活后，该企业用户可继续通过该应用系统使用法大大平台服务
   */
  async enableCorp(
    req: EnableCorpRequest,
  ): Promise<EnableCorpResponse> {
    return this.request({ url: "/corp/enable", req, reqMethod: "POST" })
  }

    /**
   * 将已禁用的企业用户再次激活。激活后，该企业用户可继续通过该应用系统使用法大大平台服务
   */
     async unbindCorp(
      req: UnbindCorpRequest,
    ): Promise<UnbindCorpResponse> {
      return this.request({ url: "/corp/unbind", req, reqMethod: "POST" })
    }

  /**
   * 应用系统向法大大平台获取一个页面链接，用于提醒企业经办人进行授权操作，以授权应用系统访问该企业在法大大平台的某些数据和操作权限。
   * 在企业操作授权前，法大大平台要求企业及其经办人必须先完成登录和实名认证 (即: Authorization的前提是必须先完成Authentication)
   */
  async getAuthUrl(
    req: GetAuthUrlRequest,
  ): Promise<GetAuthUrlResponse> {
    return this.request({ url: "/corp/get-auth-url", req, reqMethod: "POST" })
  }

  /**
   * 获取企业的基本信息、认证状态、授权状态和范围等。注意：该接口返回的信息中不涉及隐私，因此不需要授权
   */
  async getBasicInfo(
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
