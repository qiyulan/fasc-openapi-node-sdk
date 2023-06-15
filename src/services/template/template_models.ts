import { type } from "os"
import { Field, OpenId, ListPageModel } from "../../common/models"
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
  /** 该模板所属的文件夹名称 */
  catalogName: string
  /** 业务系统定义的模板创建序列号：用于在模板创建后的回调事件中将templateId和createSerialNo进行 对应 */
  createSerialNo?: string
  /** 文档模板状态：invalid、valid */
  docTemplateStatus: string
  /** 该模板的存储类型名称 */
  storageType: string
  /** 创建时间。格式为：Unix标准时间戳，精确到毫秒 */
  createTime: string
  /** 更新时间。格式为：Unix标准时间戳，精确到毫秒 */
  updateTime: string
}

/** getDocTemplateList 查询文档模板列表-响应参数结构体 */
export interface GetDocTemplateListResponse extends ListPageModel {
  docTemplates: Array<DocTemplate>
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
  /** 该模板所属的文件夹名称 */
  catalogName: string
  /** 该模板的存储类型名称 */
  storageType: string
  /** 业务系统定义的模板创建序列号：用于在模板创建后的回调事件中将templateId和createSerialNo进行 对应 */
  createSerialNo?: string
  docTemplateStatus: string
  /**
   * @type {Array<Field>}
   */
  docFields: Array<Field>
}

/** setDocTemplateStatus 启用/停用文档模板-请求结构体 */
export interface SetDocTemplateStatusRequest {
  openCorpId: string
  /** 文档模板id */
  docTemplateId: string
  docTemplateStatus: string
}

/** setDocTemplateStatus 启用/停用文档模板-响应结构体 */
export type SetDocTemplateStatusResponse = null

/** deleteDocTemplate 删除文档模板-请求结构体*/
export interface DeleteDocTemplateRequest {
  openCorpId: string
  /** 文档模板id */
  docTemplateId: string
}

/** deleteDocTemplate 删除文档模板-响应结构体*/
export type DeleteDocTemplateResponse = null

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
  /** 签署任务模板所属的业务类型名称 */
  businessTypeName?: string
  /** 该模板所属的文件夹名称 */
  catalogName: string
  /** 该模板的存储类型名称 */
  storageType: string
  /** 业务系统定义的模板创建序列号：用于在模板创建后的回调事件中将templateId和createSerialNo进行 对应 */
  createSerialNo?: string
  /** 签署模板状态：invalid、valid */
  signTemplateStatus: string
  /** 签署模板创建时间。格式为：Unix标准时间戳，精确到毫秒 */
  createTime: string
  /** 签署模板更新时间。格式为：Unix标准时间戳，精确到毫秒 */
  updateTime: string
}

/** getSignTemplateList 查询签署模板列表-响应参数结构体*/
export interface GetSignTemplateListResponse extends ListPageModel {
  signTemplates: Array<SignTemplate>
}

/** getSignTemplateDetail 查询签署任务模板详情-请求参数结构体 */
export interface GetSignTemplateDetailRequest {
  /** 模板归属方 */
  ownerId?: OpenId
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

/** 模板中设置的参与方基本信息 */
export interface ActorInfo {
  /** 模板中设置的参与方标识 */
  actorId: string
  /** 参与方是否是发起方，true: 参与方也是发起方，false: 仅为参与方 */
  isInitiator: boolean
  /** 模板中设置的参与方主体类型，corp: 企业，person: 个人 */
  actorType: string
  /** 模板中设置的参与方权限列表，fill: 填写和确认内容；sign: 确定签署 */
  permissions: Array<string>
}

/** 参与方关联的填写控件列表，建立参与方和控件关系 */
export interface FillFields {
  /** 控件所在的文档标识。 */
  fieldDocId: string
  /** 控件编码 */
  fieldId: string
}

/** 参与方关联的签章控件列表，建立参与方和控件关系 */
export interface SignFields {
  /** 控件所在的文档标识。 */
  fieldDocId: string
  /** 控件编码 */
  fieldId: string
}

/** 签署配置信息 */
export interface SignConfigInfo {
  /** 参与方签署序号。只有签署有序场景时返回该参数，按从小到大顺序排列 */
  orderNo?: number
  /** 企业签署是否要求经办人签名。默认false,true：要求,false：不要求 */
  requestMemberSign?: boolean
  /** 个人或企业经办人签名方式，默认为unlimited */
  signerSignMethod?: string
  /** 签署人意愿确认方式，默认都支持,pw：签署密码验证,sms: 短信验证码,face: 刷脸验证 */
  verifyMethods?: Array<string>
  /** 是否要求该参与方将所有文档（不包含附件）阅读至末页才可签署 */
  readingToEnd?: boolean
  /** 参与方签署前的最少阅读时间，单位秒，范围3-300 */
  readingTime?: string
}

export interface SignTaskActor {
  actorInfo: ActorInfo
  fillFields?: FillFields
  signFields?: SignFields
  signConfigInfo?: SignConfigInfo
}

/** getSignTemplateDetail 查询签署任务模板详情-响应参数结构体 */
export interface GetSignTemplateDetailResponse {
  /** 签署模板Id */
  signTemplateId: string
  /** 签署模板名称 */
  signTemplateName: string
  /** 签署任务模板所属的业务类型名称 */
  businessTypeName?: string
  /** 该模板所属的文件夹名称 */
  catalogName: string
  /** 该模板的存储类型名称 */
  storageType: string
  /** 业务系统定义的模板创建序列号：用于在模板创建后的回调事件中将templateId和createSerialNo进行 对应 */
  createSerialNo?: string
  /** 签署模板状态：invalid、valid */
  signTemplateStatus: string
  certCAOrg?: string
  /** 文档列表 */
  doc?: Array<Doc>
  /** 附件列表 */
  attachs?: Array<Omit<Attach, "attachFileId">>
  actors?: Array<SignTaskActor>
}

/** setSignTemplateStatus 启用/停用签署任务模板-请求结构体 */
export interface SetSignTemplateStatusRequest {
  openCorpId: string
  signTemplateId: string
  signTemplateStatus: string
}

/** setSignTemplateStatus 启用/停用签署任务模板-响应结构体 */
export type SetSignTemplateStatusResponse = null

/** deleteSignTemplate 删除签署任务模板-请求结构体 */
export interface DeleteSignTemplateRequest {
  openCorpId: string
  signTemplateId: string
}

/** deleteSignTemplate 删除签署任务模板-请求结构体 */
export type DeleteSignTemplateResponse = null

/** getTemplateManageUrl 获取模板管理链接-请求参数结构体 */
export interface GetTemplateManageUrlRequest {
  openCorpId: string
  redirectUrl?: string
}

/** getTemplateManageUrl 获取模板管理链接-响应参数结构体 */
export interface GetTemplateManageUrlResponse {
  templateManageUrl: string
}

/** getTemplateCreateUrl 获取模板新增链接-请求结构体 */
export interface GetTemplateCreateUrlRequest {
  openCorpId: string
  /** 模板类型，doc:文档模板，sign: 签署任务模板 */
  type: string
  /** 业务系统定义的模板创建序列号：用于在模板创建后的回调事件中将templateId和createSerialNo进行 对应 */
  createSerialNo?: string
  redirectUrl?: string
}

/** getTemplateCreateUrl 获取模板新增链接-响应结构体 */
export interface GetTemplateCreateUrlResponse {
  templateCreateUrl: string
}

/** getTemplateEditUrl 获取模板编辑链接-请求结构体 */
export interface GetTemplateEditUrlRequest {
  openCorpId: string
  templateId: string
  redirectUrl?: string
}

/** getTemplateEditUrl 获取模板编辑链接-响应结构体 */
export interface GetTemplateEditUrlResponse {
  templateEditUrl: string
}

/** getTemplatePreviewUrl 获取模板预览链接-请求结构体 */
export interface GetTemplatePreviewUrlRequest {
  openCorpId: string
  templateId: string
  redirectUrl?: string
}

/** getTemplatePreviewUrl 获取模板预览链接-响应结构体 */
export interface GetTemplatePreviewUrlResponse {
  templatePreviewUrl: string
}


/** getAppDocTemplateList 查询应用文档模板列表-请求结构体 */
export interface GetAppDocTemplateListRequest {
  listFilter?: {
    appDocTemplateName?: string
  }
  /** 指定第几页 */
  listPageNo?: number
   /** 指定每页多少条数据 */
  listPageSize?: number
}

/** 文档应用模板 */
export interface AppDocTemplate {
  /** 文档应用模板id */
  appDocTemplateId: string
  /** 文档应用模板名称 */
  appDocTemplateName: string
  /** 文档应用模板状态，invalid: 停用，valid: 启用 */
  appDocTemplateStatus: string
  /** 创建时间 */
  createTime: string
  /** 更新时间 */
  updateTime: string
}

/** getAppDocTemplateList 查询应用文档模板列表-响应结构体 */
export interface GetAppDocTemplateListResponse extends ListPageModel {
  appDocTemplates: Array<AppDocTemplate>
}

/** getAppDocTemplateDetail 查询应用文档模板详情-请求参数结构体 */
export interface GetAppDocTemplateDetailRequest {
  appDocTemplateId: string
}

/** getAppDocTemplateDetail 查询应用文档模板详情-响应参数结构体 */
export interface GetAppDocTemplateDetailResponse {
  appDocTemplateId: string
  appDocTemplateName: string
  /** 文档应用模板状态，invalid: 停用，valid: 启用 */
  appDocTemplateStatus: string
  /**
   * @type {Array<Field>}
   */
  docFields: Array<Field>
}

/** setAppDocTemplateStatus 启用/停用应用文档模板-请求结构体 */
export interface SetAppDocTemplateStatusRequest {
  appDocTemplateId: string
  /** 文档应用模板状态，invalid: 停用，valid: 启用 */
  appDocTemplateStatus: string
}

/** setAppDocTemplateStatus 启用/停用应用文档模板-响应结构体 */
export type SetAppDocTemplateStatusResponse = null

/** deleteAppDocTemplate 删除应用文档模板-请求结构体*/
export interface DeleteAppDocTemplateRequest {
  /** 应用文档模板id */
  appDocTemplateId: string
}

/** deleteAppDocTemplate 删除应用文档模板-响应结构体*/
export type DeleteAppDocTemplateResponse = null

/** getAppSignTemplateList 查询应用签署任务模板列表-请求参数结构体*/
export interface GetAppSignTemplateListRequest {
  /** 查询条件 */
  listFilter?: {
    /** 签署任务应用模板名称 */
    appSignTemplateName?: string
  }
  /** 查询结果分页返回，此处指定第几页 */
  listPageNo?: number
  /** 指定每页多少条数据 */
  listPageSize?: number
}

/** 签署任务应用模板 */
export interface AppSignTemplate {
  /** 签署任务应用模板id */
  appSignTemplateId: string
  /** 签署任务应用模板名称 */
  appSignTemplateName: string
  /** 签署任务应用模板状态：invalid、valid */
  appSignTemplateStatus: string
  /** 签署任务应用模板创建时间 */
  createTime: string
  /** 签署任务应用模板更新时间 */
  updateTime: string
}

/** getAppSignTemplateList 查询应用签署任务模板列表-响应参数结构体*/
export interface GetAppSignTemplateListResponse extends ListPageModel {
  signTemplates: Array<AppSignTemplate>
}

/** getAppSignTemplateDetail 查询应用签署任务模板详情-请求参数结构体 */
export interface GetAppSignTemplateDetailRequest {
  /** 签署模板Id */
  appSignTemplateId: string
}

export interface AppSignTaskActor {
  actorInfo: ActorInfo
  fillFields?: FillFields
  signFields?: SignFields
  signConfigInfo?: SignConfigInfo
}

/** getAppSignTemplateDetail 查询签署模板详情-响应参数结构体 */
export interface GetAppSignTemplateDetailResponse {
  /** 签署任务应用模板Id */
  appSignTemplateId: string
  /** 签署任务应用模板名称 */
  appSignTemplateName: string
  /** 签署任务应用模板状态，invalid: 停用，valid: 启用 */
  appSignTemplateStatus: string
  /** 签署参与方使用的签章证书颁发机构 */
  certCAOrg?: string
  /** 签署是否有序，false: 无序签，true: 有序签 */
  signInOrder?: boolean
  /** 文档列表 */
  doc?: Array<Doc>
  /** 附件列表 */
  attachs?: Array<Omit<Attach, "attachFileId">>
  actors?: Array<AppSignTaskActor>
}

/** setAppSignTemplateStatus 启用/停用应用签署任务模板-请求结构体 */
export interface SetAppSignTemplateStatusRequest {
  /** 签署任务应用模板id */
  appSignTemplateId: string
  /** 签署任务应用模板状态：invalid、valid */
  appSignTemplateStatus: string
}

/** setAppSignTemplateStatus 启用/停用应用签署任务模板-响应结构体 */
export type SetAppSignTemplateStatusResponse = null

/** getAppTemplateCreateUrl 获取应用模板新增链接-请求结构体 */
export interface GetAppTemplateCreateUrlRequest {
  /** 模板类型，doc:文档模板，sign: 签署任务模板 */
  type: string
  /** 业务系统定义的模板创建序列号：用于在模板创建后的回调事件中将templateId和createSerialNo进行 对应 */
  createSerialNo?: string
  redirectUrl?: string
}

/** getAppTemplateCreateUrl 获取应用模板新增链接-响应结构体 */
export interface GetAppTemplateCreateUrlResponse {
  appTemplateCreateUrl: string
}

/** getAppTemplateEditUrl 获取应用模板编辑链接-请求结构体 */
export interface GetAppTemplateEditUrlRequest {
  appTemplateId: string
  redirectUrl?: string
}

/** getAppTemplateEditUrl 获取应用模板编辑链接-响应结构体 */
export interface GetAppTemplateEditUrlResponse {
  appTemplateEditUrl: string
}

/** getAppTemplatePreviewUrl 获取应用模板预览链接-请求结构体 */
export interface GetAppTemplatePreviewUrlRequest {
  appTemplateId: string
  redirectUrl?: string
}

/** getAppTemplatePreviewUrl 获取应用模板预览链接-响应结构体 */
export interface GetAppTemplatePreviewUrlResponse {
  appTemplatePreviewUrl: string
}

/** createAppField 创建业务控件-请求结构体 */
export interface CreateAppFieldRequest {
  /** 控件唯一标识，由接入方系统指定 */
  fieldKey: string
  /** 控件名称，支持重复 */
  fieldName: string
  /**
   * 目前支持的填写控件如下：
   * text_single_line: 单行文本
   * text_multi_line: 多行文本
   * number：数字控件
   * id_card：身份证号控件
   * fill_date：填写日期控件
   */
  fieldType: string
}

/** createAppField 创建业务控件-响应结构体 */
export type CreateAppFieldResponse = null

/** modifyAppField 修改业务控件-请求结构体 */
export interface ModifyAppFieldRequest {
  /** 控件唯一标识，由接入方系统指定 */
  fieldKey: string
  /** 控件名称，支持重复 */
  fieldName: string
}

/** modifyAppField 修改业务控件-响应结构体 */
export type ModifyAppFieldResponse = null

/** setAppFieldStatus 设置业务控件状态-请求结构体 */
export interface SetAppFieldStatusRequest {
  /** 控件唯一标识，由接入方系统指定 */
  fieldKey: string
  /** 业务控件状态，enable: 启用，disable: 停用 */
  fieldStatus: string
}

/** setAppFieldStatus 设置业务控件状态-请求结构体 */
export type SetAppFieldStatusResponse = null

/** getAppFieldList 查询业务控件列表-请求结构体 */
export type GetAppFieldListRequest = null

/** getAppFieldList 查询业务控件列表-响应结构体 */
export interface GetAppFieldListResponse {
  /** 控件唯一标识，由接入方系统指定 */
  fieldKey: string
  /** 控件名称，支持重复 */
  fieldName: string
  /**
   * 目前支持的填写控件如下：
   * text_single_line: 单行文本
   * text_multi_line: 多行文本
   * number：数字控件
   * id_card：身份证号控件
   * fill_date：填写日期控件
   */
  fieldType: string
  /** 业务控件状态，enable: 启用，disable: 停用 */

}
