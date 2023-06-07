import { UserIdentInfo, UserInfoExtend, CorpIdentInfo, OpenId } from "../../common/models";
export interface GetOpenCorpAuthorizeUrlRequest {
    openCorpId: string;
    corpName: string;
    authScopes: string;
    redirectUrl: string;
}
export declare type GetOpenCorpAuthorizeUrlResponse = string;
/** 获取个人用户授权链接-请求参数结构体 */
export interface GetUserAuthUrlRequest {
    clientUserId: string;
    userName?: string;
    userIdentType?: string;
    userIdentNo?: string;
    /** 是否需要匹配个人身份信息一致：true，false */
    userIdentInfoMatch?: boolean;
    /** 查询类：ident_info: 身份信息，**signtask_info**:  签署任务。管理类：signtask_init: 发起签署任务，**signtask_file**:  签署文件 */
    authScopes?: Array<string>;
    /** 重定向地址 */
    redirectUrl?: string;
}
/** 获取个人用户授权链接-响应参数结构体 */
export interface GetUserAuthUrlResponse {
    /** 授权链接的Embedded URL形式 */
    authUrl: string;
}
/** getAuthUrl 获取企业用户授权链接-请求参数结构体 */
export interface GetCorpAuthUrlRequest {
    /** 法大大平台为该企业在该应用appId范围内分配的唯一标识 */
    openCorpId: string;
    /**
     * 企业身份信息
     * @type {CorpIdentInfo}
     */
    corpIdentInfo?: CorpIdentInfo;
    /** 是否需要匹配企业身份信息一致 */
    corpIdentInfoMatch?: boolean;
    /** 企业经办人的openUserId */
    operatorId: string;
    /**
     * 企业经办人身份信息
     * @type {UserIdentInfo}
     */
    operatorIdentInfo?: UserIdentInfo;
    /**
     * 企业经办人补充信息
     * @type {UserInfoExtend}
     */
    operatorInfoExtend?: UserInfoExtend;
    /** 是否需要匹配企业经办人身份信息一致 */
    operatorIdentInfoMatch?: boolean;
    /** 用户授权范围列表，ident_info: 身份信息，signtask_init: 发起签署任务，resource_for_sign: 签署相关数据资源 */
    requestAuthScope?: Array<string>;
    /** 重定向地址 */
    redirectUrl?: string;
}
/** getAuthUrl 获取企业用户授权链接返回参数结构体 */
export interface GetCorpAuthUrlResponse {
    /** 授权链接的Embedded URL形式 */
    eUrl: string;
}
interface Resource {
    /** 法大大平台资源标识（签署任务编辑、模板管理等） SIGNTASK: 签署任务 */
    resourceId: 'SIGNTASK' | 'TEMPLATE';
    /** 资源操作行为如：（编辑）EDIT */
    action: 'EDIT' | 'CREATE' | 'PREVIEW' | 'MANAGE';
    /** 访问资源携带的参数 */
    params?: string;
}
/** getAppPageResourceUrl 获取应用级资源访问链接-请求参数结构体 */
export interface GetAppPageResourceUrlRequest {
    /** 授权主体 */
    ownerId?: OpenId;
    /** 法大大平台资源以及操作行为的结构体 */
    resource: Resource;
}
/** getAppPageResourceUrl 获取应用级资源访问链接-响应参数结构体 */
export interface GetAppPageResourceUrlResponse {
    /** 访问法大大平台资源的链接 */
    resourceUrl: string;
}
/** getUserPageResourceUrl 获取用户级资源访问链接-请求参数结构体 */
export interface GetUserPageResourceUrlRequest {
    openCorpId?: string;
    /** 应用系统中唯一确定登录用户身份的标识，用于法大大完成登录后进行账号映射，便于后续应用系统跳转到法大大的授权免登 */
    clientUserId: string;
    /** 法大大平台资源以及操作行为的结构体 */
    resource: Resource;
}
/** getUserPageResourceUrl 获取用户级资源访问链接-响应参数结构体 */
export interface GetUserPageResourceUrlResponse {
    /** 访问法大大平台资源的链接 */
    resourceUrl: string;
}
/** getBillUrl 获取计费链接-请求参数结构体 */
export interface GetBillUrlRequest {
    openId: OpenId;
    /** 计费页面类型：account: 账户信息，order: 套餐订购。默认为account */
    urlType: string;
    /** 访问法大大平台资源的链接 */
    resourceUrl: string;
}
/** getBillUrl 获取计费链接-响应参数结构体 */
export interface GetBillUrlResponse {
    /** 用于应用中使用的查询计费账户链接 */
    eUrl: string;
}
export {};
