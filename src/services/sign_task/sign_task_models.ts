import { Actor, Field, OpenId, UserIdentInfo, UserInfoExtend } from "../../common/models"

/** 您的业务应用系统中的业务场景信息，用于更好地定义业务场景和签署任务的关系 */
export interface BusinessScene {
  /** 业务场景标识，该参数是在应用管理后台创建业务场景时由法大大平台产生的 */
  businessId: string
  /** 业务参考号，由应用系统基于自身业务上下文提供 */
  transReferenceId?: string
}

export interface Doc {
  /** 在该签署任务内指定文档序号 */
  docId: number
  /** 指定在本签署任务中的文档名称 */
  docName: string
  /** 文档fileId */
  docFileId?: string
  /** 文档模板ID */
  docTemplateId?: string
  /**
   * 可在文档中添加一些控件
   * @type {Array<Field>}
   */
  docFields?: Array<Field>
}

export interface Attach {
  /** 在该签署任务内指定附件序号 */
  attachId: string
  /** 指定在本签署任务中的附件名称 */
  attachName: string
  /** 附件fileId */
  attachFileId: string
}

interface FillActorField {
  /** 控件所在的文档编号 */
  fieldDocId: number
  /** 控件编码 */
  fieldId?: string
  /** 控件名称(不推荐) */
  fieldName?: string
  /** 控件缺省填充值 */
  fieldValue?: string
}

export interface FillActorWithTemplate {
  /** 填写方信息，必须设置Actor.actorType=filler */
  fillActor: Actor
  /**
   * 该填写方关联的填写控件列表，建立参与方和控件关系
   * @type {Array<FillActorField>}
   */
  actorFields?: Array<FillActorField>
}

export interface FillActor extends FillActorWithTemplate {
  /** 参与序号 */
  orderNo?: number
}

interface SignActorField {
  /** 控件所在的文档编号 */
  fieldDocId: number
  /** 控件编码 */
  fieldId?: string
  /** 控件名称(不推荐) */
  fieldName?: string
}

export interface SignActorWithTemplate {
  /**
   * 签署方信息
   * @type {Actor}
   */
  signActor: Actor
  /** 当签署任务流转到此参与方时，是否暂时阻塞：false(不阻塞)、true(阻塞)。默认为false*/
  blockHere?: boolean
  /** 是否请求该签署方免验证签：false(否)、true(是)。默认为false */
  requestVerifyFree?: boolean
  /** 允许该参与方使用的身份和意愿确认方式：sms、face、email */
  verifyMethods?: Array<string>
}

export interface SignActor {
  /** 签署方信息 */
  signActor: Actor
  /** 当签署任务流转到此参与方时，是否暂时阻塞：false(不阻塞)、true(阻塞)。默认为false*/
  blockHere?: boolean
  /** 参与序号 */
  orderNo?: number
  /** 是否请求该签署方免验证签：false(否)、true(是)。默认为false */
  requestVerifyFree?: boolean
  /** 允许该参与方使用的身份和意愿确认方式：sms、face、email */
  verifyMethods?: Array<string>
  /** 如果该签署方是企业，是否要求企业经办人签名：false(不需要)、true(需要)。默认false */
  corpOperatorSign?: boolean
  /** 该签署任务要求的该方签署人(个人参与方或者企业经办人)的签署方式：unlimited、standard、hand_write */
  signerSignMethod?: string
  /** 该签署方关联的签章控件列表，建立参与方和控件关系 */
  actorFields?: Array<SignActorField>
}

export interface CcActors {
  /** 抄送方信息，必须设置Actor.actorType=cc */
  ccActor: Actor
}

/** createSignTask 创建签署任务-请求参数结构体 */
export interface CreateSignTaskRequest {
  /** 签署任务主题 */
  signTaskSubject: string
  /** 该签署任务的发起方 */
  initiator: OpenId
  /** 任务过期时间 */
  expiresTime?: string
  /** 是否自动发起，false: 不自动发起，true: 自动发起。默认为false */
  autoInitiate?: boolean
  /** 如果签署任务中定义了填写参与方，在填写流程中，全部必填控件填写完成后是否自动定稿，false: 不自动定稿，true: 自动定稿，默认为true */
  autoFillFinalize?: boolean
  /** 所有签署方签署完成后，签署任务是否自动结束，false: 不自动结束，true: 自动结束，默认为true。 */
  autoFinish?: boolean
  /** 填写流程是否有序，false: 无序，true: 有序，默认为false */
  fillInOrder?: boolean
  /** 签署流程是否有序，false: 无序，true: 有序，默认为false */
  signInOrder?: boolean
  /** 您的业务应用系统中的业务场景信息，用于更好地定义业务场景和签署任务的关系 */
  businessScene?: BusinessScene
  /** 待签署的文档列表 */
  docs?: Array<Doc>
  /** 附件列表，附件数上限为20个 */
  attachs?: Array<Attach>
  /** 填写方列表 */
  fillActors?: Array<FillActor>
  /** 签署方列表 */
  signActors?: Array<SignActor>
  /** 抄送方列表 */
  ccActors?: Array<CcActors>
}

/** createSignTask 创建签署任务-响应参数结构体 */
export interface CreateSignTaskResponse {
  /** 签署任务ID */
  signTaskId: string
}

/** createWithTemplate 创建签署任务 (基于签署模板)-请求参数结构体 */
export interface CreateWithTemplateRequest {
  /** 签署任务主题 */
  signTaskSubject: string
  /** 该签署任务的发起方。**特别注意授权要求：只有经过该发起方授权后，才可以将该发起方填写到此参数中并发起签署任务 */
  initiator: OpenId
  /** 任务过期时间 */
  expiresTime?: string
  /** 是否自动发起。false: 不自动发起，true: 自动发起，默认为false。 */
  autoInitiate?: boolean
  /** 如果签署任务中定义了填写参与方，在填写流程中，全部必填控件填写完成后是否自动定稿：false: 不自动定稿，true: 自动定稿，默认为true */
  autoFillFinalize?: boolean
  /** 所有签署方签署完成后，签署任务是否自动结束：false: 不自动结束，true: 自动结束，默认为true */
  autoFinish?: boolean
  /** 您的业务应用系统中的业务场景信息，用于更好地定义业务场景和签署任务的关系 */
  businessScene?: BusinessScene
  /** 指定签署模板ID */
  signTemplateId: string
  /** 填写方列表 */
  fillActors?: Array<FillActorWithTemplate>
  /** 签署方列表 */
  signActors?: Array<SignActorWithTemplate>
  /** 抄送方列表 */
  ccActors?: Array<CcActors>
}

/** createWithTemplate 创建签署任务 (基于签署模板)-响应参数结构体 */
export interface CreateWithTemplateResponse {
  /** 签署任务ID */
  signTaskId: string
}

/** addSignTaskDoc 添加签署任务文档-请求参数结构体 */
export interface AddSignTaskDocRequest {
  /** 签署任务ID */
  signTaskId: string
  /** 待签署的文档列表，可一次添加多份文档，一个签署任务中文档数上限为20个 */
  docs: Array<Doc>
}

/** addSignTaskDoc 添加签署任务文档-响应参数结构体 */
export type AddSignTaskDocResponse = null

/** deleteSignTaskDoc 移除签署任务文档-请求参数结构体 */
export interface DeleteSignTaskDocRequest {
  /** 签署任务ID */
  signTaskId: string
  /** 文档序号docId列表 */
  docIds?: Array<number>
}

/** deleteSignTaskDoc 移除签署任务文档-响应参数结构体 */
export type DeleteSignTaskDocResponse = null

interface SignTaskField {
  /** 指定文档序号 */
  docId: number
  /** 文档序号docId列表，注意同一个docId中的各个控件的fieldId不能重复 */
  docFields: Array<Field>
}

/** addSignTaskField 添加签署任务控件-请求参数结构体 */
export interface AddSignTaskFieldRequest {
  /** 签署任务ID */
  signTaskId: string
  /** 控件列表，可一次添加多个 */
  fields: Array<SignTaskField>
}

/** addSignTaskField 添加签署任务控件-响应参数结构体 */
export type AddSignTaskFieldResponse = null

/** deleteSignTaskField 移除签署任务控件-请求参数结构体 */
export interface DeleteSignTaskFieldRequest {
  /** 签署任务ID */
  signTaskId: string
  /** 控件列表 */
  fields: Array<{
    /** 指定文档序号 */
    docId: number
    /** 上述docId中的控件编码列表 */
    fieldIds: Array<string>
  }>
}

/** deleteSignTaskField 添加签署任务控件-响应参数结构体 */
export type DeleteSignTaskFieldResponse = null

/** getFieldUrl 获取签署任务控件设置链接-请求参数结构体 */
export interface GetFieldUrlRequest {
  /** 签署任务ID  */
  signTaskId: string
  /** 该页面的实际操作人的openUserId */
  openUserId: string
  /** 实际操作人个人身份信息 */
  userIdentInfo?: UserIdentInfo
  /** 实际操作人补充信息 */
  userInfoExtend?: UserInfoExtend
  /** 重定向地址，控件设置操作完成后重定向跳转到该地址，并且附带上参数 */
  redirectUrl?: string
}

/** getFieldUrl 获取签署任务控件设置链接-响应参数结构体 */
export interface GetFieldUrlResponse {
  /** 签署任务控件设置链接的Embedded URL形式 */
  eUrl?: string
  /** 签署任务控件设置链接的Cloud URL形式 */
  cloudUrl: string
}

export interface DocFieldValue {
  /** 文档序号 */
  docId: number
  /** 控件ID。仅支持填写类控件 */
  fieldId: string
  /** 填写的值 */
  fieldValue: string
}

/** getFieldFillValues 填写签署任务控件内容-请求参数结构体 */
export interface FillFieldValuesRequest {
  signTaskId: string
  docFieldValues?: Array<DocFieldValue>
}

/** getFieldFillValues 填写签署任务控件内容-响应参数结构体 */
export type FillFieldValuesResponse = null

/** addAttach 添加签署任务附件-请求参数结构体 */
export interface AddAttachRequest {
  signTaskId: string
  attachs: Attach
}

/** addAttach 添加签署任务附件-响应参数结构体 */
export type AddAttachResponse = null

/** deleteAttach 移除签署任务附件-请求参数结构体 */
export interface DeleteAttachRequest {
  signTaskId: string
  attachs: Array<number>
}

/** addAttach 移除签署任务附件-响应参数结构体 */
export type DeleteAttachResponse = null

export interface ActorField {
  /** 控件所在的文档编号 */
  fieldDocId?: number
  /** 控件编码 */
  fieldId?: string
  /** 控件名称(不推荐) */
  fieldName?: string
  /** 控件缺省填充值 */
  fieldValue?: string
}

export interface AddFillActor {
  /** 填写方信息，必须设置Actor.actorType=filler */
  fillActor: Actor
  /** 参与序号 */
  orderNo?: number
  /** 该填写方关联的填写控件列表，建立参与方和控件关系 */
  actorFields?: Array<ActorField>
}

/** addActor 添加签署任务参与方-请求参数结构体 */
export interface AddActorRequest {
  signTaskId: string
  fillActors?: Array<AddFillActor>
  signActors?: Array<SignActor>
  ccActors?: Array<CcActors>
}

/** addActor 添加签署任务参与方-响应参数结构体 */
export type AddActorResponse = null

/** deleteActor 移除签署任务参与方-请求参数结构体 */
export interface DeleteActorRequest {
  signTaskId: string
  /** 指定的参与方类型，filler: 填写方、signer: 签署方 */
  actorType: string
  actorIds: Array<string>
}

/** deleteActor 移除签署任务参与方-响应参数结构体 */
export type DeleteActorResponse = null

/** initiateSignTask 发起签署任务-请求参数结构体 */
export interface InitiateSignTaskRequest {
  signTaskId: string
}

/** initiateSignTask 发起签署任务-响应参数结构体 */
export type InitiateSignTaskResponse = null

/** cancelSignTask 撤销签署任务-请求参数结构体 */
export interface CancelSignTaskRequest {
  signTaskId: string
}

/** cancelSignTask 撤销签署任务-响应参数结构体 */
export type CancelSignTaskResponse = null

/** finalizeSignTaskDoc 定稿签署任务文档-请求参数结构体 */
export interface FinalizeSignTaskDocRequest {
  signTaskId: string
}

/** finalizeSignTaskDoc 定稿签署任务文档-响应参数结构体 */
export type FinalizeSignTaskDocResponse = null

/** blockSignTask 阻塞签署任务-请求参数结构体 */
export interface BlockSignTaskRequest {
  signTaskId: string
}

/** blockSignTask 阻塞签署任务-响应参数结构体 */
export type BlockSignTaskResponse = null

/** unblockSignTask 解阻签署任务-请求参数结构体 */
export interface UnblockSignTaskRequest {
  signTaskId: string
  /** 指定的参与方类型，filler: 填写方、signer: 签署方 */
  actorType: string
  /** 指定的参与方在本签署任务中的标识 */
  actorId: string
}

/** unblockSignTask 解阻签署任务-响应参数结构体 */
export type UnblockSignTaskResponse = null

/** urgeSign 催办签署任务-请求参数结构体 */
export interface UrgeSignRequest {
  signTaskId: string
}

/** getUrgeSign 催办签署任务-响应参数结构体 */
export type UrgeSignResponse = null

/** getPageManageUrl 获取模板管理链接-请求参数结构体 */
export interface GetPageManageUrlRequest {
  openCorpId: string
  redirectUrl?: string
}

/** getPageManageUrl 获取模板管理链接-响应参数结构体 */
export interface GetPageManageUrlResponse {
  pUrl: string
}

/** finishSignTask 结束签署任务-请求参数结构体 */
export interface FinishSignTaskRequest {
  signTaskId: string
}

/** finishSignTask 结束签署任务-响应参数结构体 */
export type FinishSignTaskResponse = null

/** getSignTaskDetail 获取签署任务详情-请求参数结构体 */
export interface GetSignTaskDetailRequest {
  signTaskId: string
}
/** getSignTaskDetail 获取签署任务详情-响应参数结构体 */
export interface GetSignTaskDetailResponse {
  signTaskId: string
  /** 签署任务主题 */
  signTaskSubject: string
  /**
   * 签署任务状态
   * 类型: enum
   */
  signTaskStatus: string
  docs?: Array<{
    docId: number
    docName: string
  }>
  attachs?: Array<{
    attachId: number
    attachName: string
  }>
  fillActors?: Array<{
    /** 填写方信息 */
    fillActor: Actor
    /** 参与序号 */
    orderNo?: number
    /**
     * 填写方状态
     * 类型：enum
     */
    fillActorStatus: string
    /** 最后的填写操作时间。格式为：Unix标准时间戳，精确到毫秒 */
    actionTime?: string
  }>
  signActors?: Array<{
    /** 签署方信息 */
    signActor: Actor
    /** 参与序号 */
    orderNo?: number
    /**
     * 签署方状态
     * 类型：enum
     */
    signActorStatus: string
    /** 最后的签署填签署时间。格式为：Unix标准时间戳，精确到毫秒 */
    actionTime?: string
  }>
  ccActors?: Array<CcActors>
}

/** downloadFiles 下载签署任务文档-请求参数结构体 */
export interface DownloadFilesRequest {
  signTaskId: string
  /** 文档类型，doc：签署任务中的文档，attach：签署任务中的附件 */
  fileType?: string
  /** 指定签署任务中的docId或attachId */
  id?: number
}

/** downloadFiles 下载签署任务文档-响应参数结构体 */
export type DownloadFilesResponse = null

/** getSignTaskUrl 获取签署任务链接-请求参数结构体 */
export interface GetSignTaskUrlRequest {
  signTaskId: string
  /** 参与方或发起方类型，initiator: 发起方、filler: 填写方、signer: 签署方、cc: 抄送方 */
  actorType: string
  /** 参与方在签署任务中被设定的唯一标识。只有actorType=initiator时该参数才是可忽略的，否则该参数是必填参数 */
  actorId?: string
  /** 重定向地址，用户在页面上操作完成之后重定向跳转到该地址 */
  redirectUrl?: string
}

/** getSignTaskUrl 获取签署任务链接-响应参数结构体 */
export interface GetSignTaskUrlResponse {
  /** 签署任务链接的Embedded URL形式 */
  eUrl?: string
  /** 签署任务链接的Cloud URL形式 */
  cloudUrl: string
}
