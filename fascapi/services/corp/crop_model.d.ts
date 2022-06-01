import { CorpIdentInfo, CorpInfoExtend, UserIdentInfo, UserInfoExtend } from "../../common/models";
/** addCorp 添加企业用户-请求参数结构体 */
export interface AddCorpRequest {
    /** 企业在应用系统中的唯一标识 */
    clientCorpId: string;
    /** 企业名称 */
    clientCorpName?: string;
}
/** addCorp 添加企业用户返回参数结构体 */
export interface AddCorpResponse {
    /** 法大大平台为该企业在该应用appId范围内分配的唯一标识 */
    openCorpId: string;
}
/** updateCorp 更新企业用户-请求参数结构体 */
export interface UpdateCorpRequest {
    /** 法大大平台为该企业在该应用appId范围内分配的唯一标识 */
    openCorpId: string;
    /** 企业在应用系统中的唯一标识 */
    clientCorpId: string;
    /** 企业名称 */
    clientCorpName?: string;
}
/** updateCorp 更新企业用户返回参数结构体 */
export declare type UpdateCorpResponse = null;
/** deleteCorp 删除企业用户-请求参数结构体 */
export interface DeleteCorpRequest {
    /** 法大大平台为该企业在该应用appId范围内分配的唯一标识 */
    openCorpId: string;
}
/** deleteCorp 删除企业用户返回参数结构体 */
export declare type DeleteCorpResponse = null;
/** disableCorp 禁用企业用户-请求参数结构体 */
export interface DisableCorpRequest {
    /** 法大大平台为该企业在该应用appId范围内分配的唯一标识 */
    openCorpId: string;
}
/** disableCorp 请用企业用户-返回参数结构体 */
export declare type DisableCorpResponse = null;
/** enableCorp 恢复企业用户-请求参数结构体 */
export interface EnableCorpRequest {
    /** 法大大平台为该企业在该应用appId范围内分配的唯一标识 */
    openCorpId: string;
}
/** enableCorp 恢复企业用户返回参数结构体 */
export declare type EnableCorpResponse = null;
/** unbindCorp 解绑企业用户-请求参数结构体 */
export interface UnbindCorpRequest {
    /** 法大大平台为该企业在该应用appId范围内分配的唯一标识 */
    openCorpId: string;
}
/** unbindCorp 解绑企业用户返回参数结构体 */
export declare type UnbindCorpResponse = null;
/** getAuthUrl 获取企业用户授权链接-请求参数结构体 */
export interface GetAuthUrlRequest {
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
export interface GetAuthUrlResponse {
    /** 授权链接的Embedded URL形式 */
    eUrl: string;
}
/** getBasicInfo 查询企业用户基本信息-请求参数结构体 */
export interface GetBasicInfoRequest {
    /** 法大大平台为该企业在该应用appId范围内分配的唯一标识 */
    openCorpId: string;
}
/** getBasicInfo 查询企业用户基本信息返回参数结构体 */
export interface GetBasicInfoResponse {
    clientCorpId: string;
    clientCorpName?: string;
    /** 授权状态，unauthorized: 未授权，authorized: 已授权 */
    bindingStatus: string;
    /** 返回企业实际授权的范围，企业授权范围列表逗号分隔,ident_info, signtask_init, resource_for_sign */
    authScope?: Array<string>;
    /** 实名认证状态，unidentified，identified，ident_invalid */
    identStatus?: string;
    /** 企业用户有效状态，disable，enable */
    availableStatus: string;
}
/** getIdentityInfo 查询企业用户身份信息-请求参数结构体 */
export interface GetIdentityInfoRequest {
    /** 法大大平台为该企业在该应用appId范围内分配的唯一标识 */
    openCorpId: string;
}
/** getIdentityInfo 查询企业用户身份信息-响应参数结构体 */
export interface GetIdentityInfoResponse {
    /** 法大大平台为该企业在该应用appId范围内分配的唯一标识 */
    openCorpId: string;
    /** 实名认证状态，unidentified，identified，ident_invalid */
    corpIdentStatus: string;
    /**
     * @type {CorpIdentInfo}
     */
    corpIdentInfo?: CorpIdentInfo;
    /**
     * @type {CorpInfoExtend}
     */
    corpInfoExtend?: CorpInfoExtend;
    /** 企业实名认证时所选择的认证方案：legal_rep、deputy_auth、payment、offline */
    corpIdentMethod: string;
    /** 企业认证经办人身份类型: legal_rep、deputy_auth */
    operatorType: string;
    /** 企业经办人的openUserId */
    operatorId: string;
    /** 企业经办人实名认证时所选择的认证方案：mobile、face、bank、offline */
    operatorIdentMethod: string;
    /** 审核提交时间。格式为：Unix标准时间戳，精确到毫秒 */
    identSubmitTime?: string;
    /** 认证通过时间。格式为：Unix标准时间戳，精确到毫秒 */
    identSuccessTime?: string;
}
