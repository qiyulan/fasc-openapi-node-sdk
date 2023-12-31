import { CorpIdentInfo, CorpInfoExtend } from "../../common/models";
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
/** getBasicInfo 查询企业用户基本信息-请求参数结构体 */
export interface GetBasicInfoRequest {
    /** 企业在应用中的唯一标识 */
    clientCorpId?: string;
    /** 法大大平台为该企业在该应用appId范围内分配的唯一标识 */
    openCorpId?: string;
}
/** getBasicInfo 查询企业用户基本信息返回参数结构体 */
export interface GetBasicInfoResponse {
    clientCorpId: string;
    openCorpId: string;
    /** 授权状态，unauthorized: 未授权，authorized: 已授权 */
    bindingStatus: string;
    /** 返回企业实际授权的范围，企业授权范围列表逗号分隔,ident_info, seal_info, signtask_init, signtask_init, organization, template, signtask_file */
    authScope?: Array<string>;
    /** 实名认证状态，unidentified，identified */
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
    /** 实名认证状态，unidentified，identified */
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
    /** 审核提交时间。格式为：Unix标准时间戳，精确到毫秒 */
    identSubmitTime?: string;
    /** 认证通过时间。格式为：Unix标准时间戳，精确到毫秒 */
    identSuccessTime?: string;
    /** 该企业用户的法大大号 */
    fddId?: string;
}
/** getIdentityStatus 查询企业实名认证状态-请求参数机构体 */
export interface GetIdentityStatusRequest {
    /** 企业名称 */
    corpName: string;
    /** 企业统一社会信用代码或各种类型组织的唯一代码 */
    corpIdentNo: string;
}
/** getIdentityStatus 查询企业实名认证状态-响应参数机构体 */
export interface GetIdentityStatusResponse {
    /** 实名认证状态 */
    identStatus: boolean;
}
/** getCounterpartList 查询相对方列表-请求结构体 */
export interface GetCounterpartListRequest {
    openCorpId: string;
}
/** getCounterpartList 查询相对方列表-响应结构体 */
export interface GetCounterpartListResponse {
    /** 相对方列表信息 */
    counterpartInfos: Array<{
        /** 相对方企业名称 */
        corpName: string;
        /** 企业统一社会信用代码或各种类型组织的唯一代码 */
        corpIdentNo: string;
        /** 相对方企业在法大大的状态 */
        status: string;
    }>;
}
