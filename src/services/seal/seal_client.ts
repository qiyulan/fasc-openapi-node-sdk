import { AbstractClient } from "../../common/abstract_client"
import { ClientConfig } from "../../common/interface"
import {
  GetSealListRequest,
  GetSealListResponse,
  GetSealUserListRequest,
  GetSealUserListResponse,
  GetSealDetailRequest,
  GetSealDetailResponse,
  GetUserSealListRequest,
  GetUserSealListResponse,
  GetSealVerifyListRequest,
  GetSealVerifyListResponse,
  GetSealManageListRequest,
  GetSealManageListResponse,
  GetCreateSealListRequest,
  GetCreateSealListResponse,
  GetAppointedSealUrlRequest,
  GetAppointedSealUrlResponse,
  GetSealGrantUrlRequest,
  GetSealGrantUrlResponse,
  GetSealFreeSignUrlRequest,
  GetSealFreeSignUrlResponse,
  CancelSealGrantRequest,
  CancelSealGrantResponse,
  CancelSealFreeSignRequest,
  CancelSealFreeSignResponse,
  ModifySealRequest,
  ModifySealResponse,
  DeleteSealRequest,
  DeleteSealResponse,
  GetPersonalSealManageUrlRequest,
  GetPersonalSealManageUrlResponse,
  GetPersonalSealCreateUrlRequest,
  GetPersonalSealCreateUrlResponse,
  GetPersonalSealListRequest,
  GetPersonalSealListResponse,
  GetPersonalFreeSignUrlRequest,
  GetPersonalFreeSignUrlResponse,
  CancelPersonalFreeSignRequest,
  CancelPersonalFreeSignResponse,
  DeletePersonalSealRequest,
  DeletePersonalSealResponse,
  CreateTemplateSealRequest,
  CreateTemplateSealResponse,
  CreateSealByImageRequest,
  CreateSealByImageResponse,
  CreateLegalRepSealByTemplateRequest,
  CreateLegalRepSealByTemplateResponse,
  CreateLegalRepSealByImageRequest,
  CreateLegalRepSealByImageResponse,
  CreatePersonalSealByTemplateRequest,
  CreatePersonalSealByTemplateResponse,
  CreatePersonalSealByImageRequest,
  CreatePersonalSealByImageResponse
} from "./seal_models"

export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super(clientConfig)
  }
  /** 查询印章列表 */
  async getSealList(req: GetSealListRequest): Promise<GetSealListResponse> {
    return this.request({ url: "/seal/get-list", req, reqMethod: "POST" })
  }

  /** 查询印章详情 */
  async getSealDetail(req: GetSealDetailRequest): Promise<GetSealDetailResponse> {
    return this.request({ url: "/seal/get-detail", req, reqMethod: "POST" })
  }

  /** 查询企业用印员列表 */
  async getSealUserList(req: GetSealUserListRequest): Promise<GetSealUserListResponse> {
    return this.request({ url: "/seal/get-user-list", req, reqMethod: "POST" })
  }

  /** 查询成员被授权的印章列表 */
  async getUserSealList(req: GetUserSealListRequest): Promise<GetUserSealListResponse> {
    return this.request({ url: "/seal/user/get-list", req, reqMethod: "POST" })
  }

  /** 查询审核中的印章列表 */
  async getSealVerifyList(req: GetSealVerifyListRequest): Promise<GetSealVerifyListResponse> {
    return this.request({ url: "/seal/verify/get-list", req, reqMethod: "POST" })
  }

  /** 获取印章管理链接 */
  async getSealManageList(req: GetSealManageListRequest): Promise<GetSealManageListResponse> {
    return this.request({ url: "/seal/manage/get-list", req, reqMethod: "POST" })
  }

  /** 获取创建印章链接 */
  async getCreateSealList(req: GetCreateSealListRequest): Promise<GetCreateSealListResponse> {
    return this.request({ url: "/seal/create/get-list", req, reqMethod: "POST" })
  }

  /** 取印章详情链接 */
  async getAppointedSealUrl(req: GetAppointedSealUrlRequest): Promise<GetAppointedSealUrlResponse> {
    return this.request({ url: "/seal/manage/get-appointed-seal-url", req, reqMethod: "POST" })
  }

  /** 获取印章授权给成员链接 */
  async getSealGrantUrl(req: GetSealGrantUrlRequest): Promise<GetSealGrantUrlResponse> {
    return this.request({ url: "/seal/grant/get-url", req, reqMethod: "POST" })
  }

  /** 获取印章设置免验证签链接 */
  async getSealFreeSignUrl(req: GetSealFreeSignUrlRequest): Promise<GetSealFreeSignUrlResponse> {
    return this.request({ url: "/seal/free-sign/get-url", req, reqMethod: "POST" })
  }

  /** 解除印章授权 */
  async cancelSealGrant(req: CancelSealGrantRequest): Promise<CancelSealGrantResponse> {
    return this.request({ url: "/seal/grant/cancel", req, reqMethod: "POST" })
  }

  /** 解除印章免验证签 */
  async cancelSealFreeSign(req: CancelSealFreeSignRequest): Promise<CancelSealFreeSignResponse> {
    return this.request({ url: "/seal/free-sign/cancel", req, reqMethod: "POST" })
  }

  /** 修改印章 */
  async modifySeal(req: ModifySealRequest): Promise<ModifySealResponse> {
    return this.request({ url: "/seal/modify", req, reqMethod: "POST" })
  }

  /** 删除印章 */
  async deleteSeal(req: DeleteSealRequest): Promise<DeleteSealResponse> {
    return this.request({ url: "/seal/delete", req, reqMethod: "POST" })
  }

  /** 获取签名管理链接 */
  async getPersonalSealManageUrl(req: GetPersonalSealCreateUrlRequest): Promise<GetPersonalSealCreateUrlResponse> {
    return this.request({ url: "/personal-seal/create/get-url", req, reqMethod: "POST" })
  }

    /** 获取签名创建链接 */
    async getPersonalSealCreateUrl(req: GetPersonalSealManageUrlRequest): Promise<GetPersonalSealManageUrlResponse> {
      return this.request({ url: "/personal-seal/manage/get-url", req, reqMethod: "POST" })
    }

  /** 查询个人签名列表 */
  async getPersonalSealList(req: GetPersonalSealListRequest): Promise<GetPersonalSealListResponse> {
    return this.request({ url: "/personal-seal/get-list", req, reqMethod: "POST" })
  }

  /** 获取签名设置免验证签链接 */
  async getPersonalFreeSignUrl(req: GetPersonalFreeSignUrlRequest): Promise<GetPersonalFreeSignUrlResponse> {
    return this.request({ url: "/personal-seal/free-sign/get-url", req, reqMethod: "POST" })
  }

  /** 解除签名免验证签 */
  async cancelPersonalFreeSign(req: CancelPersonalFreeSignRequest): Promise<CancelPersonalFreeSignResponse> {
    return this.request({ url: "/personal-seal/free-sign/cancel", req, reqMethod: "POST" })
  }
  
  /** 删除签名 */
  async deletePersonalSeal(req: DeletePersonalSealRequest): Promise<DeletePersonalSealResponse> {
    return this.request({ url: "/personal-seal/delete", req, reqMethod: "POST" })
  }

  /** 创建模板印章 */
  async createTemplateSeal(req: CreateTemplateSealRequest): Promise<CreateTemplateSealResponse> {
    return this.request({ url: "/seal/create-by-template", req, reqMethod: "POST" })
  }

  /** 创建图片印章 */
  async createSealByImage(req: CreateSealByImageRequest): Promise<CreateSealByImageResponse> {
    return this.request({ url: "/seal/create-by-image", req, reqMethod: "POST" })
  }

  /** 创建法定代表人模板印章 */
  async createLegalRepSealByTemplate(req: CreateLegalRepSealByTemplateRequest): Promise<CreateLegalRepSealByTemplateResponse> {
    return this.request({ url: "/seal/create-legal-representative-by-template", req, reqMethod: "POST" })
  }

  /** 创建法定代表人图片印章 */
  async createLegalRepSealByImage(req: CreateLegalRepSealByImageRequest): Promise<CreateLegalRepSealByImageResponse> {
    return this.request({ url: "/seal/create-legal-representative-by-image", req, reqMethod: "POST" })
  }

  /** 创建模板签名 */
  async createPersonalSealByTemplate(req: CreatePersonalSealByTemplateRequest): Promise<CreatePersonalSealByTemplateResponse> {
    return this.request({ url: "/personal-seal/create-by-template", req, reqMethod: "POST" })
  }

  /** 创建图片签名 */
  async createPersonalSealByImage(req: CreatePersonalSealByImageRequest): Promise<CreatePersonalSealByImageResponse> {
    return this.request({ url: "/personal-seal/create-by-image", req, reqMethod: "POST" })
  }
}
