import { AbstractClient } from "../../common/abstract_client"
import { ClientConfig } from "../../common/interface"
import {
  GetSignTemplateDetailRequest,
  GetSignTemplateDetailResponse,
  GetSignTemplateListRequest,
  GetSignTemplateListResponse,
} from "./sign_template_models"

export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super(clientConfig)
  }

  /**
   * 查询签署模板列表，列表根据签署模板更新时间倒序排序返回
   */
  async getSignTemplateList(
    req: GetSignTemplateListRequest,
  ): Promise<GetSignTemplateListResponse> {
    return this.request({ url: "/sign-template/get-list", reqMethod: "POST", req })
  }

  /**
   * 获取签署模板详情，包括签署模板基本信息、文档信息、参与方信息(含各参与方填写控件、签章控件)
   */
  async getSignTemplateDetail(
    req: GetSignTemplateDetailRequest,
  ): Promise<GetSignTemplateDetailResponse> {
    return this.request({ url: "/sign-template/get-detail", reqMethod: "POST", req })
  }
}
