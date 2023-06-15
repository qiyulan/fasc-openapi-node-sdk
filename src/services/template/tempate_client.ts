import { AbstractClient } from "../../common/abstract_client"
import { ClientConfig } from "../../common/interface"
import {
  GetDocTemplateDetailRequest,
  GetDocTemplateDetailResponse,
  GetDocTemplateListRequest,
  GetDocTemplateListResponse,
  GetSignTemplateDetailRequest,
  GetSignTemplateDetailResponse,
  GetSignTemplateListRequest,
  GetSignTemplateListResponse,
  GetTemplateManageUrlRequest,
  GetTemplateManageUrlResponse,
  SetDocTemplateStatusRequest,
  SetDocTemplateStatusResponse,
  DeleteDocTemplateRequest,
  DeleteDocTemplateResponse,
  SetSignTemplateStatusRequest,
  SetSignTemplateStatusResponse,
  DeleteSignTemplateRequest,
  DeleteSignTemplateResponse,
  GetTemplateCreateUrlRequest,
  GetTemplateCreateUrlResponse,
  GetTemplateEditUrlRequest,
  GetTemplateEditUrlResponse,
  GetTemplatePreviewUrlRequest,
  GetTemplatePreviewUrlResponse,
  GetAppDocTemplateListRequest,
  GetAppDocTemplateListResponse,
  GetAppDocTemplateDetailRequest,
  GetAppDocTemplateDetailResponse,
  SetAppDocTemplateStatusRequest,
  SetAppDocTemplateStatusResponse,
  DeleteAppDocTemplateRequest,
  DeleteAppDocTemplateResponse,
  GetAppSignTemplateListRequest,
  GetAppSignTemplateListResponse,
  GetAppSignTemplateDetailRequest,
  GetAppSignTemplateDetailResponse,
  SetAppSignTemplateStatusRequest,
  SetAppSignTemplateStatusResponse,
  GetAppTemplateCreateUrlRequest,
  GetAppTemplateCreateUrlResponse,
  GetAppTemplateEditUrlRequest,
  GetAppTemplateEditUrlResponse,
  GetAppTemplatePreviewUrlRequest,
  GetAppTemplatePreviewUrlResponse,
  CreateAppFieldRequest,
  CreateAppFieldResponse,
  ModifyAppFieldRequest,
  ModifyAppFieldResponse,
  SetAppFieldStatusRequest,
  SetAppFieldStatusResponse,
  GetAppFieldListRequest,
  GetAppFieldListResponse,
} from "./template_models"

export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super(clientConfig)
  }

  /** 查询文档模板列表 */
  async getDocTemplateList(req?: GetDocTemplateListRequest): Promise<GetDocTemplateListResponse> {
    return this.request({ url: "/doc-template/get-list", reqMethod: "POST", req })
  }

  /** 查询文档模板详情 */
  async getDocTemplateDetail(req: GetDocTemplateDetailRequest): Promise<GetDocTemplateDetailResponse> {
    return this.request({ url: "/doc-template/get-detail", reqMethod: "POST", req })
  }

  /** 启用/停用文档模板 */
  async setDocTemplateStatus(req: SetDocTemplateStatusRequest): Promise<SetDocTemplateStatusResponse> {
    return this.request({ url: "/doc-template/set-status", reqMethod: "POST", req })
  }

  /** 删除文档模板 */
  async deleteDocTemplate(req: DeleteDocTemplateRequest): Promise<DeleteDocTemplateResponse> {
    return this.request({ url: "/doc-template/delete", reqMethod: "POST", req })
  }

  /** 查询签署任务模板列表 */
  async getSignTemplateList(req: GetSignTemplateListRequest): Promise<GetSignTemplateListResponse> {
    return this.request({ url: "/sign-template/get-list", reqMethod: "POST", req })
  }

  /** 查询签署任务模板详情 */
  async getSignTemplateDetail(req: GetSignTemplateDetailRequest): Promise<GetSignTemplateDetailResponse> {
    return this.request({ url: "/sign-template/get-detail", reqMethod: "POST", req })
  }

  /** 启用/停用签署任务模板 */
  async setSignTemplateStatus(req: SetSignTemplateStatusRequest): Promise<SetSignTemplateStatusResponse> {
    return this.request({ url: "/sign-template/set-status", reqMethod: "POST", req })
  }

  /** 删除签署任务模板 */
  async deleteSignTemplate(req: DeleteSignTemplateRequest): Promise<DeleteSignTemplateResponse> {
    return this.request({ url: "/sign-template/delete", reqMethod: "POST", req })
  }

  /** 获取模板管理链接 */
  async getTemplateManageUrl(req: GetTemplateManageUrlRequest): Promise<GetTemplateManageUrlResponse> {
    return this.request({ url: "/template/manage/get-url", reqMethod: "POST", req })
  }

  /** 获取模板新增链接 */
  async getTemplateCreateUrl(req: GetTemplateCreateUrlRequest): Promise<GetTemplateCreateUrlResponse> {
    return this.request({ url: "/template/create/get-url", reqMethod: "POST", req })
  }

  /** 获取模板编辑链接 */
  async getTemplateEditUrl(req: GetTemplateEditUrlRequest): Promise<GetTemplateEditUrlResponse> {
    return this.request({ url: "/template/edit/get-url", reqMethod: "POST", req })
  }

  /** 获取模板预览链接 */
  async getTemplatePreviewUrl(req: GetTemplatePreviewUrlRequest): Promise<GetTemplatePreviewUrlResponse> {
    return this.request({ url: "/template/preview/get-url", reqMethod: "POST", req })
  }

  /** 查询应用文档模板列表 */
  async getAppDocTemplateList(req: GetAppDocTemplateListRequest): Promise<GetAppDocTemplateListResponse> {
    return this.request({ url: "/app-doc-template/get-list", reqMethod: "POST", req })
  }

  /** 查询应用文档模板详情 */
  async getAppDocTemplateDetail(req: GetAppDocTemplateDetailRequest): Promise<GetAppDocTemplateDetailResponse> {
    return this.request({ url: "/app-doc-template/get-detail", reqMethod: "POST", req })
  }

  /** 启用/停用应用文档模板 */
  async setAppDocTemplateStatus(req: SetAppDocTemplateStatusRequest): Promise<SetAppDocTemplateStatusResponse> {
    return this.request({ url: "/app-doc-template/set-status", reqMethod: "POST", req })
  }

  /** 删除应用文档模板 */
  async deleteAppDocTemplate(req: DeleteAppDocTemplateRequest): Promise<DeleteAppDocTemplateResponse> {
    return this.request({ url: "/app-doc-template/delete", reqMethod: "POST", req })
  }

  /** 查询应用签署任务模板列表 */
  async getAppSignTemplateList(req: GetAppSignTemplateListRequest): Promise<GetAppSignTemplateListResponse> {
    return this.request({ url: "/app-sign-template/get-list", reqMethod: "POST", req })
  }

  /** 查询应用签署任务模板详情 */
  async getAppSignTemplateDetail(req: GetAppSignTemplateDetailRequest): Promise<GetAppSignTemplateDetailResponse> {
    return this.request({ url: "/app-sign-template/get-detail", reqMethod: "POST", req })
  }

  /** 启用/停用应用签署任务模板 */
  async setAppSignTemplateStatus(req: SetAppSignTemplateStatusRequest): Promise<SetAppSignTemplateStatusResponse> {
    return this.request({ url: "/app-sign-template/set-status", reqMethod: "POST", req })
  }

  /** 获取应用模板新增链接 */
  async getAppTemplateCreateUrl(req: GetAppTemplateCreateUrlRequest): Promise<GetAppTemplateCreateUrlResponse> {
    return this.request({ url: "/app-template/create/get-url", reqMethod: "POST", req })
  }

  /** 获取应用模板编辑链接 */
  async getAppTemplateEditUrl(req: GetAppTemplateEditUrlRequest): Promise<GetAppTemplateEditUrlResponse> {
    return this.request({ url: "/app-template/edit/get-url", reqMethod: "POST", req })
  }

  /** 获取应用模板预览链接 */
  async getAppTemplatePreviewUrl(req: GetAppTemplatePreviewUrlRequest): Promise<GetAppTemplatePreviewUrlResponse> {
    return this.request({ url: "/app-template/preview/get-url", reqMethod: "POST", req })
  }

  /** 创建业务控件 */
  async createAppField(req: CreateAppFieldRequest): Promise<CreateAppFieldResponse> {
    return this.request({ url: "/app-field/create", reqMethod: "POST", req })
  }

  /** 修改业务控件 */
  async modifyAppField(req: ModifyAppFieldRequest): Promise<ModifyAppFieldResponse> {
    return this.request({ url: "/app-field/modify", reqMethod: "POST", req })
  }

  /** 设置业务控件状态 */
  async setAppFieldStatus(req: SetAppFieldStatusRequest): Promise<SetAppFieldStatusResponse> {
    return this.request({ url: "/app-field/set-status", reqMethod: "POST", req })
  }

  /** 查询业务控件列表 */
  async getAppFieldList(req: GetAppFieldListRequest): Promise<GetAppFieldListRequest> {
    return this.request({ url: "/app-field/get-list", reqMethod: "POST", req })
  }
}
