import { AbstractClient } from "../../common/abstract_client"
import { ClientConfig } from "../../common/interface"
import {
  GetDocTemplateDetailRequest,
  GetDocTemplateDetailResponse,
  GetDocTemplateListRequest,
  GetDocTemplateListResponse,
} from "./doc_template_models"

export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super(clientConfig)
  }

  /**
   * 查询文档模板列表，列表根据文档模板更新时间倒序排序返回
   */
  async getDocTemplateList(
    req: GetDocTemplateListRequest,
    cb?: (error: string, res: GetDocTemplateListResponse) => void
  ): Promise<GetDocTemplateListResponse> {
    return this.request({ url: "/doc-template/get-list", reqMethod: "POST", req, cb })
  }

  /**
   * 获取文档模板详情，包括文档模板的基本信息、填写和签章控件和区域信息等
   */
  async getDocTemplateDetail(
    req: GetDocTemplateDetailRequest,
    cb?: (error: string, res: GetDocTemplateDetailResponse) => void
  ): Promise<GetDocTemplateDetailResponse> {
    return this.request({ url: "/doc-template/get-detail", reqMethod: "POST", req, cb })
  }
}
