import { Field, OpenId } from "../../common/models"

/** getDocTemplateList 查询文档模板列表-请求参数结构体 */
export interface GetDocTemplateListRequest {
  ownerId?: OpenId
  /** 查询条件 */
  listFilter?: {
    /** 文档模板名称 */
    docTemplateName?: string
  }
  /** 指定第几页 */
  listPageNo?: number
  /** 指定每页多少条数据 */
  listPageSize?: number
}

export interface DocTemplate {
  /** 文档模板id */
  docTemplateId: string
  /** 文档模板名称 */
  docTemplateName: string
  /** 文档模板状态：invalid、valid */
  docTemplateStatus: string
  /** 创建时间。格式为：Unix标准时间戳，精确到毫秒 */
  createTime: string
  /** 更新时间。格式为：Unix标准时间戳，精确到毫秒 */
  updateTime: string
}

/** getDocTemplateList 查询文档模板列表-响应参数结构体 */
export interface GetDocTemplateListResponse {
  docTemplates: Array<DocTemplate>
  /** 列表当前分页 */
  listPageNo: number
  /** 当前返回页中的文档模板数量，即数组大小 */
  countInPage: number
  /** 列表总分页数 */
  listPageCount: number
  /** 查询到的文档模板总数 */
  totalCount: number
}

/** getDocTemplateDetail 获取文档模板详情-请求参数结构体 */
export interface GetDocTemplateDetailRequest {
  /** 模板归属方 */
  ownerId?: string
  /** 文档模板id */
  docTemplateId: string
}

/** getDocTemplateDetail 获取文档模板详情-响应参数结构体 */
export interface GetDocTemplateDetailResponse {
  /** 文档模板id */
  docTemplateId: string
  docTemplateName: string
  docTemplateStatus: string
  docFields: Array<Field>
}
