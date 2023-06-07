import { Actor, Field, OpenId } from "../../common/models";
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
interface FillFields {
    /** 控件所在的文档序号。文档序号必须在文档列表中存在 */
    fieldDocId: string;
    /** 控件编码 */
    fieldId?: string;
    /** 控件名称(不推荐) */
    fieldName?: string;
    /** 控件缺省填充值 */
    fieldValue?: string;
}
interface SignFields {
    /** 控件所在的文档序号。文档序号必须在文档列表中存在 */
    fieldDocId: string;
    /** 控件编码 */
    fieldId: string;
}
interface SignConfigInfo {
    /** 参与方签署序号 */
    orderNo?: number;
    /** 当签署任务流转到此参与方时，是否暂时阻塞。false: 不阻塞，true: 阻塞。默认为false */
    blockHere?: boolean;
    /** 是否请求该参与方免验证签：false: 否,true: 是,默认为false */
    requestVerifyFree?: boolean;
    /** 允许该参与方使用的身份和意愿确认方式。pw: 签署密码验证，sms: 短信验证码<br/>face: 刷脸验证<br/>默认选择全部，并按照法大大平台定义的顺序展示 */
    verifyMethods?: Array<string>;
    /** 个人参与方或企业参与方经办人的签署方式。 unlimited: 不限制，standard: 使用标准签名，hand_write: 使用手绘签名。默认为unlimited */
    signerSignMethod?: string;
    /** 企业参与方成员能否通过链接打开签署任务。false：不可以，true：可以，默认为true */
    joinByLink?: boolean;
}
interface SignTaskActor {
    /** 参与方基本信息 */
    actor: Actor;
    /** 该参与方关联的填写控件列表，建立参与方和控件关系 */
    fillFields?: Array<FillFields>;
    /** 该参与方关联的签署控件列表，建立参与方和控件关系 */
    signFields?: Array<SignFields>;
    /** 签署配置信息 */
    signConfigInfo?: SignConfigInfo;
}
/** create 创建签署任务-请求参数结构体 */
export interface CreateRequest {
    /** 签署任务主题 */
    signTaskSubject: string;
    /** 该签署任务的发起方 */
    initiator: OpenId;
    /** 任务过期时间 */
    expiresTime?: string;
    /** 是否自动提交协作，false: 不自动发起，true: 自动发起。默认为false */
    autoStart?: boolean;
    /** 如果签署任务中定义了填写参与方，在填写流程中，全部必填控件填写完成后是否自动定稿，false: 不自动定稿，true: 自动定稿，默认为true */
    autoFillFinalize?: boolean;
    /** 签署流程是否有序，false: 无序，true: 有序，默认为false */
    signInOrder?: boolean;
    /** 您的业务应用系统中的业务场景信息，用于更好地定义业务场景和签署任务的关系 */
    businessScene?: BusinessScene;
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
    signConfigInfo?: Pick<SignConfigInfo, 'blockHere' | 'requestVerifyFree' | 'verifyMethods' | 'joinByLink'>;
}
/** createWithTemplate 创建签署任务 (基于签署模板)-请求参数结构体 */
export interface CreateWithTemplateRequest {
    /** 签署任务主题 */
    signTaskSubject: string;
    /** 该签署任务的发起方。**特别注意授权要求：只有经过该发起方授权后，才可以将该发起方填写到此参数中并发起签署任务 */
    initiator: OpenId;
    /** 任务过期时间 */
    expiresTime?: string;
    /** 是否自动发起。false: 不自动发起，true: 自动发起，默认为false。 */
    autoStart?: boolean;
    /** 如果签署任务中定义了填写参与方，在填写流程中，全部必填控件填写完成后是否自动定稿：false: 不自动定稿，true: 自动定稿，默认为true */
    autoFillFinalize?: boolean;
    /** 所有签署方签署完成后，签署任务是否自动结束：false: 不自动结束，true: 自动结束，默认为true */
    autoFinish?: boolean;
    /** 您的业务应用系统中的业务场景信息，用于更好地定义业务场景和签署任务的关系 */
    businessScene?: BusinessScene;
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
    fieldId: string;
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
/** getActorUrl 获取签署任务参与方专属链接-请求参数结构体 */
export interface GetActorUrlRequest {
    signTaskId: string;
    actorId: string;
    clientUserId: string;
}
/** getActorUrl 获取签署任务参与方专属链接-请求参数结构体 */
export interface GetActorUrlResponse {
    /** 参与方签署任务专属链接 */
    actorSignTaskUrl: string;
    /** 可嵌入的参与方签署任务链接 */
    actorSignTaskEmbedUrl: string;
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
}
/** cancel 撤销签署任务-响应参数结构体 */
export declare type CancelResponse = null;
/** finalizeDoc 定稿签署任务文档-请求参数结构体 */
export interface FinalizeDocRequest {
    signTaskId: string;
}
/** finalizeDoc 定稿签署任务文档-响应参数结构体 */
export declare type FinalizeDocResponse = null;
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
        /** 业务参考号，由应用基于自身业务上下文提供 */
        transReferenceId?: string;
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
    /** 文档模板名称，长度最大100个字符 */
    signTaskSubject: string;
    /** 签署任务状态 */
    signTaskStatus: string;
    /** 该签署任务的发起方名称，如果是个人即姓名，如果是企业即企业全称 */
    initiatorName: string;
    /** 参与方名称串 */
    actorName: string;
    /** 签署任务创建时间 */
    createTime: string;
    /** 签署任务完成时间(含异常停止) */
    finishTime: string;
}
/** getOwnerList 获取指定归属方的签署任务列表-响应参数结构体 */
export interface GetOwnerListResponse {
    /** 签署任务列表，数组类型 */
    signTasks: Array<OwnerSignTask>;
    /** 列表当前分页，当前第几页。页码从1开始，即首页为1 */
    listPageNo: number;
    /** 当前返回页中的文档模板数量，即数组大小 */
    countInPage: number;
    /** 列表总分页数 */
    listPageCount: number;
    /** 查询到的文档模板总数 */
    totalCount: number;
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
    /**
     * 签署任务状态
     * 类型: enum
     */
    signTaskStatus: string;
    createTime: string;
    docs?: Array<{
        docId: string;
        docName: string;
    }>;
    attachs?: Array<{
        attachId: number;
        attachName: string;
    }>;
    actors: {
        actorInfo: Array<ActorInfo>;
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
        /** 参与方签署序号 */
        signOrderNo?: number;
        /** 是否设置了阻塞该参与方: 是否设置了阻塞该参与方：, blocked：阻塞中(参与方被阻塞), unblocked：未阻塞(参与方未阻塞) */
        blockStatus?: string;
        /** 参与方签署任务专属链接。该链接由应用主动分发给有权限的参与方 */
        actorSignTaskUrl?: string;
    };
}
/** getOwnerDownLoadUrl 获取指定归属方的签署任务文档下载地址-请求参数结构体 */
export interface GetOwnerDownLoadUrlRequest {
    signTaskId: string;
    /** 文档类型，doc：签署任务中的文档，attach：签署任务中的附件 */
    fileType?: string;
    /** 指定签署任务中的docId或attachId */
    id?: number;
}
/** getOwnerDownLoadUrl 获取指定归属方的签署任务文档下载地址-响应参数结构体 */
export interface GetOwnerDownLoadUrlResponse {
    /** 文档的下载地址，文件压缩格式zip，长度最长500字符 */
    downloadUrl?: string;
}
export {};
