import { Actor, Field, OpenId, ListPageModel } from "../../common/models";
/** 您的业务应用系统中的业务场景信息，用于更好地定义业务场景和签署任务的关系 */
export interface BusinessScene {
    /** 业务场景标识，该参数是在应用管理后台创建业务场景时由法大大平台产生的 */
    businessId: string;
    /** 业务参考号，由应用系统基于自身业务上下文提供 */
    transReferenceId?: string;
}
export interface Doc {
    /** 在该签署任务内指定文档序号 */
    docId: string;
    /** 指定在本签署任务中的文档名称 */
    docName: string;
    /** 文档fileId */
    docFileId?: string;
    /** 文档模板ID */
    docTemplateId?: string;
    /**
     * 可在文档中添加一些控件
     * @type {Array<Field>}
     */
    docFields?: Array<Field>;
}
export interface Attach {
    /** 在该签署任务内指定附件序号 */
    attachId: string;
    /** 指定在本签署任务中的附件名称 */
    attachName: string;
    /** 附件fileId */
    attachFileId: string;
}
interface FillActorField {
    /** 控件所在的文档编号 */
    fieldDocId: number;
    /** 控件编码 */
    fieldId?: string;
    /** 控件名称(不推荐) */
    fieldName?: string;
    /** 控件缺省填充值 */
    fieldValue?: string;
}
export interface FillActorWithTemplate {
    /** 填写方信息，必须设置Actor.actorType=filler */
    fillActor: Actor;
    /**
     * 该填写方关联的填写控件列表，建立参与方和控件关系
     * @type {Array<FillActorField>}
     */
    actorFields?: Array<FillActorField>;
}
export interface FillActor extends FillActorWithTemplate {
    /** 参与序号 */
    orderNo?: number;
}
interface SignActorField {
    /** 控件所在的文档编号 */
    fieldDocId: number;
    /** 控件编码 */
    fieldId?: string;
    /** 控件名称(不推荐) */
    fieldName?: string;
}
export interface SignActorWithTemplate {
    /**
     * 签署方信息
     * @type {Actor}
     */
    signActor: Actor;
    /** 当签署任务流转到此参与方时，是否暂时阻塞：false(不阻塞)、true(阻塞)。默认为false*/
    blockHere?: boolean;
    /** 是否请求该签署方免验证签：false(否)、true(是)。默认为false */
    requestVerifyFree?: boolean;
    /** 允许该参与方使用的身份和意愿确认方式：sms、face、email */
    verifyMethods?: Array<string>;
}
export interface SignActor {
    /** 签署方信息 */
    signActor: Actor;
    /** 当签署任务流转到此参与方时，是否暂时阻塞：false(不阻塞)、true(阻塞)。默认为false*/
    blockHere?: boolean;
    /** 参与序号 */
    orderNo?: number;
    /** 是否请求该签署方免验证签：false(否)、true(是)。默认为false */
    requestVerifyFree?: boolean;
    /** 允许该参与方使用的身份和意愿确认方式：sms、face、email */
    verifyMethods?: Array<string>;
    /** 如果该签署方是企业，是否要求企业经办人签名：false(不需要)、true(需要)。默认false */
    corpOperatorSign?: boolean;
    /** 该签署任务要求的该方签署人(个人参与方或者企业经办人)的签署方式：unlimited、standard、hand_write */
    signerSignMethod?: string;
    /** 该签署方关联的签章控件列表，建立参与方和控件关系 */
    actorFields?: Array<SignActorField>;
}
export interface CcActors {
    /** 抄送方信息，必须设置Actor.actorType=cc */
    ccActor: Actor;
}
export interface FillFields {
    /** 控件所在的文档序号。文档序号必须在文档列表中存在 */
    fieldDocId: string;
    /** 控件编码 */
    fieldId?: string;
    /** 控件名称(不推荐) */
    fieldName?: string;
    /** 控件缺省填充值 */
    fieldValue?: string;
}
export interface SignField {
    /** 控件所在的文档序号。文档序号必须在文档列表中存在 */
    fieldDocId: string;
    /** 控件编码 */
    fieldId?: string;
    /** 控件名称(不推荐) */
    fieldName?: string;
    /** 指定该签署控件必须使用的印章或者签名Id */
    sealId?: number;
    /** 印章位置是否可以拖动，默认为false */
    moveable?: boolean;
}
export interface ActorAttachInfo {
    /** 附件名 */
    actorAttachName: string;
    /** 是否必传 */
    required?: boolean;
}
export interface SignConfigInfo {
    /** 参与方签署序号 */
    orderNo?: number;
    /** 当签署任务流转到此参与方时，是否暂时阻塞。false: 不阻塞，true: 阻塞。默认为false */
    blockHere?: boolean;
    /** 是否请求该参与方免验证签：false: 否,true: 是,默认为false */
    requestVerifyFree?: boolean;
    /** 允许该参与方使用的身份和意愿确认方式。pw: 签署密码验证，sms: 短信验证码，face: 刷脸验证，默认选择全部，并按照法大大平台定义的顺序展示 */
    verifyMethods?: Array<string>;
    /** 企业签署要求经办人签名，默认为false */
    requestMemberSign?: boolean;
    /** 个人参与方或企业参与方经办人的签署方式。 unlimited: 不限制，standard: 使用标准签名，hand_write: 使用手绘签名。默认为unlimited */
    signerSignMethod?: string;
    /** 企业参与方成员能否通过链接打开签署任务。false：不可以，true：可以，默认为true */
    joinByLink?: boolean;
    /** 是否要求该参与方将所有文档（不包含附件）阅读至末页才可签署。默认为false */
    readingToEnd?: boolean;
    /** 参与方签署前的最少阅读时间，单位秒，范围3-300 */
    readingTime?: string;
    /** 是否需要快捷登录签署，快捷登录即打开签署链接后会跳过登录环节进入签署页面。默认为false */
    freeLogin?: boolean;
    /** 要求参与方必须实名才能查看签署任务，默认true */
    identifiedView?: boolean;
    /** 参与方在签署页面是否可以调整印章大小，默认为false */
    resizeSeal?: boolean;
    /** 要求该参与方上传附件信息 */
    actorAttachInfos?: Array<ActorAttachInfo>;
}
export interface SignTaskActor {
    /** 参与方基本信息 */
    actor: Actor;
    /** 该参与方关联的填写控件列表，建立参与方和控件关系 */
    fillFields?: Array<FillFields>;
    /** 该参与方关联的签署控件列表，建立参与方和控件关系 */
    signFields?: Array<SignField>;
    /** 签署配置信息 */
    signConfigInfo?: SignConfigInfo;
}
/** create 创建签署任务-请求参数结构体 */
export interface CreateRequest {
    /** 签署任务主题 */
    signTaskSubject: string;
    initiatorMemberId?: string;
    /** 该签署任务的发起方 */
    initiator: OpenId;
    /** 签署文档类型，contract：合同，document：单据 */
    signDocType?: string;
    /** 任务过期时间 */
    expiresTime?: string;
    /** 是否自动提交协作，false: 不自动发起，true: 自动发起。默认为false */
    autoStart?: boolean;
    /** 所有签署方签署完成后，签署任务是否自动结束，默认为true */
    autoFinish?: boolean;
    /** 签署业务类型id */
    businessTypeId?: number;
    /** 该签署任务的业务编号 */
    businessCode?: string;
    /** 如果签署任务中定义了填写参与方，在填写流程中，全部必填控件填写完成后是否自动定稿，false: 不自动定稿，true: 自动定稿，默认为true */
    autoFillFinalize?: boolean;
    /** 签署流程是否有序，false: 无序，true: 有序，默认为false */
    signInOrder?: boolean;
    /** 签署参与方使用的签章证书颁发机构 */
    certCAOrg?: string;
    /** 签署任务归属的发起方文件夹 */
    catalogId?: string;
    /** 您的业务应用系统中的业务场景信息，用于更好地定义业务场景和签署任务的关系 */
    businessScene?: BusinessScene;
    /** 免验证签场景码（已审核通过），使用免验证签署时传入 */
    businessId?: string;
    /** 业务参考号 */
    transReferenceId?: string;
    /** 待签署的文档列表 */
    docs?: Array<Doc>;
    /** 附件列表，附件数上限为20个 */
    attachs?: Array<Attach>;
    actors?: Array<SignTaskActor>;
}
/** create 创建签署任务-响应参数结构体 */
export interface CreateResponse {
    /** 签署任务ID */
    signTaskId: string;
}
interface SignTaskActorForTemplate {
    actor: Actor;
    fillFields?: Array<FillFields>;
    signFields?: Array<SignField>;
    signConfigInfo?: SignConfigInfo;
}
/** createWithTemplate 创建签署任务 (基于签署模板)-请求参数结构体 */
export interface CreateWithTemplateRequest {
    /** 签署任务主题 */
    signTaskSubject: string;
    initiatorMemberId?: string;
    /** 该签署任务的发起方。**特别注意授权要求：只有经过该发起方授权后，才可以将该发起方填写到此参数中并发起签署任务 */
    initiator: OpenId;
    /** 签署文档类型，contract：合同，document：单据 */
    signDocType?: string;
    /** 指定签署任务模板ID */
    signTemplateId: string;
    /** 签署业务类型id */
    businessTypeId?: number;
    /** 该签署任务的业务编号 */
    businessCode?: string;
    /** 任务过期时间 */
    expiresTime?: string;
    /** 是否自动发起。false: 不自动发起，true: 自动发起，默认为false。 */
    autoStart?: boolean;
    /** 如果签署任务中定义了填写参与方，在填写流程中，全部必填控件填写完成后是否自动定稿：false: 不自动定稿，true: 自动定稿，默认为true */
    autoFillFinalize?: boolean;
    /** 所有签署方签署完成后，签署任务是否自动结束：false: 不自动结束，true: 自动结束，默认为true */
    autoFinish?: boolean;
    /** 签署参与方使用的签章证书颁发机构 */
    certCAOrg?: string;
    /** 签署任务归属的发起方文件夹 */
    catalogId?: string;
    /** 您的业务应用系统中的业务场景信息，用于更好地定义业务场景和签署任务的关系 */
    businessScene?: BusinessScene;
    /** 免验证签场景码（已审核通过），使用免验证签署时传入 */
    businessId?: string;
    /** 业务参考号 */
    transReferenceId?: string;
    actors?: Array<SignTaskActorForTemplate>;
}
/** createWithTemplate 创建签署任务 (基于签署模板)-响应参数结构体 */
export interface CreateWithTemplateResponse {
    /** 签署任务ID */
    signTaskId: string;
}
/** addDoc 添加签署任务文档-请求参数结构体 */
export interface AddDocRequest {
    /** 签署任务ID */
    signTaskId: string;
    /** 待签署的文档列表，可一次添加多份文档，一个签署任务中文档数上限为20个 */
    docs: Array<Doc>;
}
/** addDoc 添加签署任务文档-响应参数结构体 */
export declare type AddDocResponse = null;
/** deleteDoc 移除签署任务文档-请求参数结构体 */
export interface DeleteDocRequest {
    /** 签署任务ID */
    signTaskId: string;
    /** 文档序号docId列表 */
    docIds?: Array<string>;
}
/** deleteDoc 移除签署任务文档-响应参数结构体 */
export declare type DeleteDocResponse = null;
interface SignTaskField {
    /** 指定文档序号 */
    docId: string;
    /** 文档序号docId列表，注意同一个docId中的各个控件的fieldId不能重复 */
    docFields: Array<Field>;
}
/** addField 添加签署任务控件-请求参数结构体 */
export interface AddFieldRequest {
    /** 签署任务ID */
    signTaskId: string;
    /** 控件列表，可一次添加多个 */
    fields: Array<SignTaskField>;
}
/** addField 添加签署任务控件-响应参数结构体 */
export declare type AddFieldResponse = null;
/** deleteField 移除签署任务控件-请求参数结构体 */
export interface DeleteFieldRequest {
    /** 签署任务ID */
    signTaskId: string;
    /** 控件列表 */
    fields: Array<{
        /** 指定文档序号 */
        docId: string;
        /** 上述docId中的控件编码列表 */
        fieldIds: Array<string>;
    }>;
}
/** deleteField 添加签署任务控件-响应参数结构体 */
export declare type DeleteFieldResponse = null;
export interface DocFieldValue {
    /** 文档序号 */
    docId: string;
    /** 控件ID。仅支持填写类控件 */
    fieldId?: string;
    /** 业务控件标识 */
    fieldKey?: string;
    /** 填写的值 */
    fieldValue: string;
}
/** getFieldFillValues 填写签署任务控件内容-请求参数结构体 */
export interface FillFieldValuesRequest {
    signTaskId: string;
    docFieldValues?: Array<DocFieldValue>;
}
/** getFieldFillValues 填写签署任务控件内容-响应参数结构体 */
export declare type FillFieldValuesResponse = null;
/** addAttach 添加签署任务附件-请求参数结构体 */
export interface AddAttachRequest {
    signTaskId: string;
    attachs: Array<Attach>;
}
/** addAttach 添加签署任务附件-响应参数结构体 */
export declare type AddAttachResponse = null;
/** deleteAttach 移除签署任务附件-请求参数结构体 */
export interface DeleteAttachRequest {
    signTaskId: string;
    attachIds: Array<string>;
}
/** addAttach 移除签署任务附件-响应参数结构体 */
export declare type DeleteAttachResponse = null;
export interface ActorField {
    /** 控件所在的文档编号 */
    fieldDocId?: number;
    /** 控件编码 */
    fieldId?: string;
    /** 控件名称(不推荐) */
    fieldName?: string;
    /** 控件缺省填充值 */
    fieldValue?: string;
}
export interface AddFillActor {
    /** 填写方信息，必须设置Actor.actorType=filler */
    fillActor: Actor;
    /** 参与序号 */
    orderNo?: number;
    /** 该填写方关联的填写控件列表，建立参与方和控件关系 */
    actorFields?: Array<ActorField>;
}
/** addActor 添加签署任务参与方-请求参数结构体 */
export interface AddActorRequest {
    signTaskId: string;
    actors: Array<SignTaskActor>;
}
/** addActor 添加签署任务参与方-响应参数结构体 */
export declare type AddActorResponse = null;
/** deleteActor 移除签署任务参与方-请求参数结构体 */
export interface DeleteActorRequest {
    signTaskId: string;
    actorIds: Array<string>;
}
/** deleteActor 移除签署任务参与方-响应参数结构体 */
export declare type DeleteActorResponse = null;
/** getSignTaskEditUrl 获取签署任务编辑链接-请求结构体 */
export interface GetSignTaskEditUrlRequest {
    signTaskId: string;
    redirectUrl?: string;
}
/** getSignTaskEditUrl 获取签署任务编辑链接-响应结构体 */
export interface GetSignTaskEditUrlResponse {
    signTaskEditUrl: string;
}
/** getSignTaskPreviewUrl 获取签署任务预览链接-请求结构体 */
export interface GetSignTaskPreviewUrlRequest {
    signTaskId: string;
    redirectUrl?: string;
}
/** getSignTaskPreviewUrl 获取签署任务预览链接-响应结构体 */
export interface GetSignTaskPreviewUrlResponse {
    signTaskPreviewUrl: string;
}
/** getActorUrl 获取签署任务参与方专属链接-请求参数结构体 */
export interface GetActorUrlRequest {
    signTaskId: string;
    actorId: string;
    clientUserId?: string;
    redirectUrl?: string;
    redirectMiniAppUrl?: string;
}
/** getActorUrl 获取签署任务参与方专属链接-请求参数结构体 */
export interface GetActorUrlResponse {
    /** 参与方签署任务专属链接 */
    actorSignTaskUrl: string;
    /** 可嵌入的参与方签署任务链接 */
    actorSignTaskEmbedUrl: string;
    actorSignTaskMiniAppInfo: {
        wxOriginalId: string;
        path: string;
    };
}
/** getActorBatchSignTaskUrl 获取参与方批量签署链接-请求结构体 */
export interface GetActorBatchSignTaskUrlRequest {
    ownerId: OpenId;
    memberId?: number;
    clientUserId?: string;
    signTaskIds: Array<string>;
    redirectUrl?: string;
    redirectMiniAppUrl?: string;
}
/** getActorBatchSignTaskUrl 获取参与方批量签署链接-响应结构体 */
export interface GetActorBatchSignTaskUrlResponse {
    batchSignUrl: string;
}
/** getV3ActorSignTaskUrl 获取参与方签署链接（API3.0任务专属）-请求结构体 */
export interface GetV3ActorSignTaskUrlRequest {
    signTaskId: string;
    ownerId: {
        type: string;
        openId: string;
    };
    redirectUrl?: string;
}
export interface SignDetail {
    signUrl?: string;
    signOrder?: string;
    signStatus?: string;
    signer?: {
        signatory?: {
            signerId?: string;
        };
        corp?: {
            corpId?: string;
        };
    };
}
/** getV3ActorSignTaskUrl 获取参与方签署链接（API3.0任务专属）-响应结构体 */
export interface GetV3ActorSignTaskUrlResponse {
    signUrls?: Array<{
        signUrl?: string;
    }>;
    signDetails?: Array<SignDetail>;
}
/** start 提交签署任务-请求参数结构体 */
export interface StartRequest {
    signTaskId: string;
}
/**  提交签署任务-响应参数结构体 */
export declare type StartResponse = null;
/** cancel 撤销签署任务-请求参数结构体 */
export interface CancelRequest {
    signTaskId: string;
    /** 撤销原因 */
    terminationNote?: string;
}
/** cancel 撤销签署任务-响应参数结构体 */
export declare type CancelResponse = null;
/** finalizeDoc 定稿签署任务文档-请求参数结构体 */
export interface FinalizeDocRequest {
    signTaskId: string;
}
/** finalizeDoc 定稿签署任务文档-响应参数结构体 */
export declare type FinalizeDocResponse = null;
/** urgeSignTask 催办签署任务-请求参数结构体 */
export interface UrgeSignTaskRequest {
    signTaskId: string;
}
/** urgeSignTask 催办签署任务-响应参数结构体 */
export declare type UrgeSignTaskResponse = null;
/** block 阻塞签署任务-请求参数结构体 */
export interface BlockRequest {
    signTaskId: string;
    /** 指定的参与方在本签署任务中的标识 */
    actorId: string;
}
/** block 阻塞签署任务-响应参数结构体 */
export declare type BlockResponse = null;
/** unblock 解阻签署任务-请求参数结构体 */
export interface UnblockRequest {
    signTaskId: string;
    /** 指定的参与方在本签署任务中的标识 */
    actorId: string;
}
/** unblock 解阻签署任务-响应参数结构体 */
export declare type UnblockResponse = null;
/** finish 结束签署任务-请求结构体 */
export interface FinishRequest {
    signTaskId: string;
}
/** finish 结束签署任务-响应结构体 */
export declare type FinishResponse = null;
export interface abolishActor {
    actor: Actor;
    signFields: Array<Omit<SignField, 'movable'>>;
    signConfigInfo?: {
        /** 要求该参与方免验证签，设置后轮到签署时法大大将会自动为该参与方盖章完成签署。默认为false */
        requestVerifyFree?: boolean;
    };
}
/** abolish 作废签署任务-请求结构体 */
export interface AbolishRequest {
    signTaskId: string;
    /** 作废发起方，只能是原签署任务的发起方或签署参与方，二选一传入，同时传入会优先取发起方 */
    abolishedInitiator: {
        /** 原签署任务发起方ID */
        initiatorId?: string;
        /** 原签署任务的签署参与方标识 */
        actorId?: string;
    };
    /** 作废协议文档来源，默认platform */
    docSource?: string;
    /** 作废原因 */
    reason?: string;
    docs?: Array<Omit<Doc, 'docTemplateId'>>;
    actors: Array<abolishActor>;
    /** 是否自动提交签署任务，默认false */
    autoStart?: boolean;
    /** 签署任务主题 */
    signTaskSubject?: string;
    /** 任务过期时间 */
    expiresTime?: string;
    /** 签署业务类型id */
    businessTypeId?: number;
    /** 该签署任务的业务编号 */
    businessCode?: string;
    /** 免验证签场景码（已审核通过），使用免验证签署时传入 */
    businessId?: string;
    /** 业务参考号 */
    transReferenceId?: string;
    /** 签署任务归属的发起方文件夹 */
    catalogId?: string;
    /** 应用中的业务场景信息，如免验证签业务场景 */
    businessScene?: {
        /** 免验证签场景码（已审核通过），使用免验证签署时传入 */
        businessId?: string;
        /** 业务参考号 */
        transReferenceId?: string;
    };
    /** 签署参与方使用的签章证书颁发机构 */
    certCAOrg?: string;
}
/** abolish 作废签署任务-响应结构体 */
export interface AbolishResponse {
    /** 作废的签署任务ID */
    abolishedSignTaskId: string;
}
/** delete 删除签署任务-请求结构体 */
export interface DeleteRequest {
    signTaskId: string;
}
/** delete 删除签署任务-响应结构体 */
export declare type DeleteResponse = null;
/** getOwnerList 获取指定归属方的签署任务列表-请求参数结构体 */
export interface GetOwnerListRequest {
    /** 签署任务发起方或参与方主体，**需检查授权** */
    ownerId: OpenId;
    /** 主体参与签署协作类型，如不传，则查询主体所有的签署任务: initiator:  发起方, actor:  参与方(填写、签署) */
    ownerRole?: string;
    /**  */
    listFilter?: {
        /** 签署任务名称 */
        signTaskSubject?: string;
        /** 签署任务状态，支持传入多个状态 */
        signTaskStatus?: Array<string>;
    };
    /** 查询结果分页返回，此处指定第几页，如果不传默从第一页返回 */
    listPageNo?: number;
    /** 指定每页多少条数据，如果不传默认为100，单页最大100 */
    listPageSize?: number;
}
interface OwnerSignTask {
    /** 签署任务ID */
    signTaskId: string;
    /** 业务参考号，由应用基于自身业务上下文提供 */
    transReferenceId?: string;
    /**
     * 签署任务来源，表示该任务是用户在法大大saas创建的或者通过接口创建的
     * fdd：用户在法大大SaaS创建
     * api：用户通过api接口创建
     */
    signTaskSource: string;
    /** 文档模板名称，长度最大100个字符 */
    signTaskSubject: string;
    /**
     * 若该签署任务关联了审批流，当前的审批状态。
     * in_progress：审批中
     * approved：已通过
     * rejected：已驳回
     */
    approvalStatus?: string;
    /** 如审批被驳回，审批方填写的驳回原因 */
    rejectNote?: string;
    /** 该签署任务在SaaS的文件夹id */
    catalogId: string;
    /** 该签署任务在SaaS的文件夹名称 */
    catalogName: string;
    /** 该签署任务所属的业务类型id */
    businessTypeId?: number;
    /** 该签署任务所属的业务类型名称 */
    businessTypeName?: string;
    /** 该签署任务的业务编号 */
    businessCode?: string;
    /** 如使用模板创建，该签署任务使用的模板id */
    templateId?: string;
    /** 签署任务状态 */
    signTaskStatus: string;
    /** 关联的作废签署任务ID，若任务发起过作废会返回 */
    abolishedSignTaskId?: string;
    /** 原签署任务ID，仅查询任务为作废签署任务时返回 */
    originalSignTaskId?: string;
    /** 签署任务异常停止的原因 */
    terminationNote?: string;
    /** 该签署任务的发起方名称，如果是个人即姓名，如果是企业即企业全称 */
    initiatorName: string;
    /** 签署任务创建时间 */
    createTime: string;
    /** 签署任务的发起时间 */
    startTime: string;
    /** 签署任务完成时间(含异常停止) */
    finishTime: string;
    /** 签署任务的截止时间。返回【null】表示长期有效 */
    deadlineTime: string;
}
/** getOwnerList 获取指定归属方的签署任务列表-响应参数结构体 */
export interface GetOwnerListResponse extends ListPageModel {
    /** 签署任务列表，数组类型 */
    signTasks: Array<OwnerSignTask>;
}
interface ActorInfo {
    /** 参与方标识 */
    actorId: string;
    /** 参与方主体类型：corp: 企业，person: 个人 */
    actorType: string;
    /** 参与方名称 */
    actorName: string;
    /** 参与方权限列表：fill: 填写和确认内容；sign: 确定签署 */
    permissions: string;
}
export interface SignTaskDetailField {
    /** 签章控件状态：stamped：已盖章，unstamped：未盖章 */
    signFieldStatus: string;
    /** 控件所在的文档序号。文档序号必须在文档列表中存在 */
    fieldDocId: string;
    /** 控件编码 */
    fieldId: string;
    /** 控件名称(不推荐) */
    fieldName: string;
    /** 印章位置是否可以拖动，默认为false */
    moveable?: boolean;
    position: {
        /** 定位页码。首页从1开始 */
        positionPageNo: number;
        /** 中心点定位横向坐标 */
        positionX: string;
        /** 中心点定位纵向坐标 */
        positionY: string;
    };
}
/** getDetail 获取签署任务详情-请求参数结构体 */
export interface GetDetailRequest {
    signTaskId: string;
}
/** getDetail 获取签署任务详情-响应参数结构体 */
export interface GetDetailResponse {
    initiator: OpenId;
    signTaskId: string;
    /** 签署任务主题 */
    signTaskSubject: string;
    /** 签署文档类型，contract：合同，document：单据 */
    signDocType?: string;
    /**
     * 签署任务来源，表示该任务是用户在法大大saas创建的或者通过接口创建的
     * fdd：用户在法大大SaaS创建
     * api：用户通过api接口创建
     */
    signTaskSource: string;
    /**
     * 若该签署任务关联了审批流，当前的审批状态。
     * in_progress：审批中
     * approved：已通过
     * rejected：已驳回
     */
    approvalStatus?: string;
    /** 如审批被驳回，审批方填写的驳回原因 */
    rejectNote?: string;
    /** 该签署任务在SaaS的文件夹id */
    catalogId: string;
    /** 该签署任务所属的业务类型id */
    businessTypeId?: number;
    /** 该签署任务所属的业务类型名称 */
    businessTypeName?: string;
    /** 该签署任务的业务编号 */
    businessCode?: string;
    templateId?: string;
    /**
     * 签署任务状态
     * 类型: enum
     */
    signTaskStatus: string;
    /** 关联的作废签署任务ID，若任务发起过作废会返回 */
    abolishedSignTaskId?: string;
    /** 原签署任务ID，仅查询任务为作废签署任务时返回 */
    originalSignTaskId?: string;
    /** 签署任务异常停止的原因 */
    terminationNote?: string;
    /** 签署任务作废的原因 */
    revokeReason?: string;
    createTime: string;
    startTime: string;
    /** 签署任务完成时间(含异常停止) */
    finishTime: string;
    /** 签署任务的截止时间 */
    deadlineTime: string;
    docs?: Array<{
        docId: string;
        docName: string;
    }>;
    attachs?: Array<{
        attachId: number;
        attachName: string;
    }>;
    actors: {
        actorInfo: Array<ActorInfo & {
            isInitiator: boolean;
        }>;
        signFields: Array<SignTaskDetailField>;
        /** 参与方阅读状态：no_read: 未读，read: 已读 */
        readStatus: string;
        /** 阅读时间 */
        readTime?: string;
        /** 参与方加入状态：no_join: 未加入, joined: 已加入 */
        joinStatus: string;
        /** 加入时间 */
        joinTime?: string;
        /** 参与方填写状态：wait_fill: 待填写 (等待填写), filled: 已填写 (已完成了需自己必填控件的填写) , fill_rejected: 已拒填 (拒绝了填写) */
        fillStatus?: string;
        /** 最后的填写操作时间 */
        fillTime?: string;
        /** 参与方签署状态: wait_sign: 待签署 (等待签署), signed: 已签署 (已完成签署), sign_rejected: 已拒签 (拒绝了签署)。 */
        signStatus?: string;
        /** 最后的签署操作时间 */
        signTime?: string;
        /** 该参与方拒填、拒签、或填写内容被驳回的原因 */
        actorNote?: string;
        /** 参与方签署序号 */
        signOrderNo?: number;
        /** 是否设置了阻塞该参与方: 是否设置了阻塞该参与方：, blocked：阻塞中(参与方被阻塞), unblocked：未阻塞(参与方未阻塞) */
        blockStatus?: string;
        /** 参与方签署任务专属链接。该链接由应用主动分发给有权限的参与方 */
        actorSignTaskUrl?: string;
        /** 参与方签署长链接。该链接由应用主动分发给对应参与方，可嵌入小程序或iframe */
        actorSignTaskEmbedUrl?: string;
    };
}
/** getOwnerDownLoadUrl 获取签署文档下载地址-请求参数结构体 */
export interface GetOwnerDownLoadUrlRequest {
    ownerId: OpenId;
    signTaskId: string;
    /** 文档类型，doc：签署任务中的文档，attach：签署任务中的附件 */
    fileType?: string;
    /** 指定签署任务中的docId或attachId */
    id?: number;
    /** 客户下载文件的自定义名称 */
    customName?: string;
}
/** getOwnerDownLoadUrl 获取签署文档下载地址-响应参数结构体 */
export interface GetOwnerDownLoadUrlResponse {
    /** 文档的下载地址，文件压缩格式zip，长度最长500字符 */
    downloadUrl?: string;
}
/** getSignTaskActorList 查询参与方身份信息-请求结构体 */
export interface GetSignTaskActorListRequest {
    signTaskId: string;
}
/** getSignTaskActorList 查询参与方身份信息-响应结构体 */
export interface GetSignTaskActorListResponse {
    /** 参与方标识 */
    actorId: string;
    /** 参与方主体类型：corp: 企业，person: 个人 */
    actorType: string;
    /** 参与方名称 */
    actorName: string;
    /** 企业实名名称 */
    corpName?: string;
    /** 企业统一社会信用代码或各种类型组织的唯一代码 */
    corpIdentNo?: string;
    /** 企业签署经办人信息 */
    memberInfo?: {
        /** 经办人真实姓名 */
        memberName?: string;
        /** 经办人个人手机号 */
        mobile?: string;
    };
    /** 参与方权限列表：fill: 填写和确认内容；sign: 确定签署 */
    permissions: Array<string>;
    /** 该参与方是否是发起方：
     * true: 参与方也是发起方
     * false: 仅为参与方
     */
    isInitiator: boolean;
    /** 参与方身份名称匹配信息：个人姓名或企业全称 */
    identNameForMatch?: string;
    /** 参与方证件号码匹配信息：个人身份证号或企业统信码 */
    certNoForMatch?: string;
    /** 参与方阅读状态：no_read: 未读，read: 已读 */
    readStatus: string;
    /** 阅读时间 */
    readTime?: string;
    /** 参与方加入状态：no_join: 未加入, joined: 已加入 */
    joinStatus: string;
    /** 加入时间 */
    joinTime?: string;
    /** 加入的参与方名称：个人为实名名称、企业为企业实名名称 */
    joinName?: string;
    /** 加入的参与方证件号：企业为统信码、个人为身份证号 */
    joinIdentNo?: string;
    /** 参与方填写状态：wait_fill: 待填写 (等待填写), filled: 已填写 (已完成了需自己必填控件的填写) , fill_rejected: 已拒填 (拒绝了填写) */
    fillStatus?: string;
    /** 最后的填写操作时间 */
    fillTime?: string;
    /** 参与方签署状态: wait_sign: 待签署 (等待签署), signed: 已签署 (已完成签署), sign_rejected: 已拒签 (拒绝了签署)。 */
    signStatus?: string;
    /** 最后的签署操作时间 */
    signTime?: string;
    /** 该参与方拒填、拒签、或填写内容被驳回的原因 */
    actorNote?: string;
    /** 参与方签署序号 */
    signOrderNo?: number;
    /** 是否设置了阻塞该参与方: 是否设置了阻塞该参与方：, blocked：阻塞中(参与方被阻塞), unblocked：未阻塞(参与方未阻塞) */
    blockStatus?: string;
    notification?: {
        /**
         * 是否需要法大大平台送达：
         * false: 不送达
         * true: 送达
         */
        sendNotification: boolean;
        /** 送达方式：mobile: 手机，email: 邮箱 */
        notifyWay: string;
        /** 送达地址，手机号或邮箱地址，和送达方式匹配一致 */
        notifyAddress: string;
    };
}
/** getSignTaskFieldList 查询参与方填写内容-请求结构体 */
export interface GetSignTaskFieldListRequest {
    signTaskId: string;
}
export interface FillField {
    /** 控件编码 */
    fieldId: string;
    /** 控件名称(不推荐) */
    fieldName: string;
    /** 控件类型 */
    fieldType: string;
    /** 控件缺省填充值 */
    fieldValue?: string;
    actorId?: string;
    actorName?: string;
    docId: string;
    docName?: string;
}
/** getSignTaskFieldList 查询参与方填写内容-响应结构体 */
export interface GetSignTaskFieldListResponse {
    signTaskId: string;
    signTaskSubject: string;
    fillFields?: Array<FillField>;
}
/** getSignTaskApprovalInfo 查询签署任务审批信息-请求结构体 */
export interface GetSignTaskApprovalInfoRequest {
    signTaskId: string;
}
export interface ApproversInfo {
    /** 该节点需要审批的人员名称 */
    approverName: string;
    /** 该审批人员的状态：waiting：待审批，in-progress：审批中，approved：已通过，rejected：已驳回 */
    approverStatus: string;
    /** 审批操作时间 */
    operateTime?: string;
    /** 如审批被驳回，该操作人填写的驳回原因 */
    rejectNote?: string;
}
export interface ApprovalNode {
    /** 审批节点编号 */
    nodeId: number;
    /** 审批类型：single-sign：单人审批，jointly-sign：会签，either-sign：或签 */
    approvalType: string;
    /** 该审批节点的状态：waiting：待审批，in-progress：审批中，approved：已通过，rejected：已驳回 */
    nodeStatus: string;
    approversInfo: Array<ApproversInfo>;
}
/** getSignTaskApprovalInfo 查询签署任务审批信息-响应结构体 */
export interface GetSignTaskApprovalInfoResponse {
    /** 签署任务ID */
    signTaskId: string;
    /** 签署任务主题 */
    signTaskSubject: string;
    /** 审批编号 */
    approvalId: string;
    /** 审批主体 */
    approvalSubject: string;
    /** 审批申请人名称 */
    applicantName: string;
    /** 申请时间 */
    applicationTime: string;
    /** 当前的审批状态。in_progress：审批中，approved：已通过，rejected：已驳回 */
    approvalStatus: string;
    approvalNode: Array<ApprovalNode>;
}
/** getSignTaskCatalogList 查询企业签署任务文件夹列表-请求结构体 */
export interface GetSignTaskCatalogListRequest {
    ownerId: OpenId;
}
export interface SignTaskCatalog {
    /** 文件夹id */
    catalogId: string;
    /** 文件夹名称 */
    catalogName: string;
    /** 父文件夹id */
    parentCatalogId?: string;
}
/** getSignTaskCatalogList 查询企业签署任务文件夹列表-响应结构体 */
export declare type GetSignTaskCatalogListResponse = Array<SignTaskCatalog>;
/** getSignTaskBusinessTypeList 查询签署业务类型列表-请求结构体 */
export interface GetSignTaskBusinessTypeListRequest {
    openCorpId: string;
}
export interface BusinessType {
    businessTypeId?: number;
    businessTypeName?: string;
}
/** getSignTaskBusinessTypeList 查询签署业务类型列表-响应结构体 */
export declare type GetSignTaskBusinessTypeListResponse = Array<BusinessType>;
/** getEvidenceReportDownloadUrl 获取签署过程保全报告下载地址-请求结构体 */
export interface GetEvidenceReportDownloadRequest {
    signTaskId: string;
}
/** getEvidenceReportDownloadUrl 获取签署过程保全报告下载地址-响应结构体 */
export interface GetEvidenceReportDownloadResponse {
    /** 保全报告下载地址，文件压缩格式zip，长度最长500字符 */
    downloadUrl?: string;
}
/** getActorFacePicture 获取签署任务参与方刷脸底图-请求结构体 */
export interface GetActorFacePictureRequest {
    signTaskId: string;
    actorId: string;
}
/** getActorFacePicture 获取签署任务参与方刷脸底图-响应结构体 */
export interface GetActorFacePictureResponse {
    /** 刷脸底图的BASE64格式数据 */
    picture?: string;
}
/** getSignTaskPicDownLoadUrl 获取图片版签署文档下载地址-请求结构体 */
export interface GetSignTaskPicDownLoadUrlRequest {
    slicingTicketId: string;
}
/** getSignTaskPicDownLoadUrl 获取图片版签署文档下载地址-请响应结构体 */
export interface GetSignTaskPicDownLoadUrlResponse {
    downloadUrl?: string;
}
export {};
