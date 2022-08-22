import { Field, OpenId } from "../../common/models"
import { Attach } from "../sign_task/sign_task_models"

/** getDocTemplateList 查询文档模板列表-请求参数结构体 */
export interface GetDocTemplateListRequest {
  /**
   * @type {OpenId}
   */
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
  /**
   * @type {Array<Field>}
   */
  docFields: Array<Field>
}

/** getSignTemplateList 查询签署模板列表-请求参数结构体*/
export interface GetSignTemplateListRequest {
  /** 模板归属方 */
  ownerId?: OpenId
  /** 查询条件 */
  listFilter?: {
    /** 签署模板名称 */
    signTemplateName?: string
  }
  /** 查询结果分页返回，此处指定第几页 */
  listPageNo?: number
  /** 指定每页多少条数据 */
  listPageSize?: number
}

/** 签署模板 */
export interface SignTemplate {
  /** 签署模板id */
  signTemplateId: string
  /** 签署模板名称 */
  signTemplateName: string
  /** 签署模板状态：invalid、valid */
  signTemplateStatus: string
  /** 签署模板创建时间。格式为：Unix标准时间戳，精确到毫秒 */
  createTime: string
  /** 签署模板更新时间。格式为：Unix标准时间戳，精确到毫秒 */
  updateTime: string
}

/** getSignTemplateList 查询签署模板列表-响应参数结构体*/
export interface GetSignTemplateListResponse {
  signTemplates: Array<SignTemplate>
  /** 列表当前分页 */
  listPageNo: number
  /** 当前返回页中的文档模板数量，即数组大小 */
  countInPage: number
  /** 列表总分页数 */
  listPageCount: number
  /** 查询到的文档模板总数 */
  totalCount: number
}

/** getSignTemplateDetail 获取签署模板详情-请求参数结构体 */
export interface GetSignTemplateDetailRequest {
  /** 模板归属方 */
  ownerId?: string
  /** 签署模板Id */
  signTemplateId: string
}

/** 文档列表详情 */
export interface Doc {
  /** 文档序号 */
  docId?: number
  /** 文档名称 */
  docName: string
  /** 文档中的控件 */
  docFields?: Array<Field>
}

/** 填写参与方详情 */
export interface FillActor {
  /** 填写参与方唯一标识 */
  actorId: string
  /** 填写顺序编号 */
  orderNo?: number
  /** 参与方主体类型：person、corp */
  actorIdentType: string
}

/** 填写参与方和控件的关系 */
export interface FillActorFiled {
  /** 控件所在文档序号 */
  fieldDocId: number
  /** 控件编码 */
  fieldId: string
}

/** 签署参与方详情 */
export interface SignActor {
  /** 签署参与方唯一标识 */
  actorId: string
  /** 签署顺序编号 */
  orderNo?: number
  /** 参与方主体类型：person、corp */
  actorIdentType: string
  /** 如果该签署方是企业，是否要求企业经办人签名，默认false */
  corpOperatorSign?: boolean
  /** 该签署任务要求的该方签署人的签署方式：unlimited(不限制)、standard(标准签名)、hand_write(手绘签名) */
  signerSignMethod?: string
}

/** 签署参与方和控件的关系 */
export interface SignActorField {
  /** 控件所在文档序号 */
  fieldDocId: number
  /** 控件编码 */
  fieldId: string
}

/** getSignTemplateDetail 获取签署模板详情-响应参数结构体 */
export interface GetSignTemplateDetailResponse {
  /** 签署模板Id */
  signTemplateId: string
  /** 签署模板名称 */
  signTemplateName: string
  /** 签署模板状态：invalid、valid */
  signTemplateStatus: string
  /** 文档列表 */
  doc?: Array<Doc>
  /** 附件列表 */
  attachs?: Array<Omit<Attach, "attachFileId">>
  /** 填写是否有序，默认为false */
  fillInOrder?: boolean
  /** 签署是否有序，默认为false */
  signInOrder?: boolean
  /** 填写参与方列表 */
  fillActors: Array<FillActor>
  /** 填写参与方和控件的关系 */
  fillActorFields?: Array<FillActorFiled>
  /** 签署参与方列表 */
  signActors: Array<SignActor>
  /** 签署参与方和控件的关系 */
  signActorFields?: Array<SignActorField>
}

/** getManageUrl 获取模板管理链接-请求参数结构体 */
export interface GetManageUrlRequest {
  openCorpId: string
  redirectUrl?: string
}

/** getManageUrl 获取模板管理链接-响应参数结构体 */
export interface GetManageUrlResponse {
  pUrl: string
}