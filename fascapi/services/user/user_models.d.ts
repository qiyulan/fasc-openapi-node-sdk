import { UserIdentInfo, UserInfoExtend } from "../../common/models";
/** 用户实名认证时所选择的认证方案 */
/** addUser 新增个人用户-请求参数结构体 */
export interface AddUserRequest {
    clientUserId: string;
    clientUserName: string;
}
/** addUser 新增个人用户-响应参数结构体 */
export interface AddUserResponse {
    openUserId: string;
}
/** updateUser 更新个人用户-请求参数结构体 */
export interface UpdateUserRequest {
    openUserId: string;
    clientUserId: string;
    clientUserName: string;
}
/** updateUser 更新个人用户响应参数结构体 */
export declare type UpdateUserResponse = null;
/** deleteUser 删除个人用户-请求参数结构体 */
export interface DeleteUserRequest {
    openUserId: string;
}
/** deleteUser 删除个人用户-响应参数结构体 */
export declare type DeleteUserResponse = null;
/** disableUser 禁用个人用户-请求参数结构体 */
export interface DisableUserRequest {
    openUserId: string;
}
/** disableUser 禁用个人用户-响应参数结构体 */
export declare type DisableUserResponse = null;
/** enableUser 恢复个人用户-请求参数结构体 */
export interface EnableUserRequest {
    openUserId: string;
}
/** enableUser 恢复个人用户-响应参数结构体 */
export declare type EnableUserResponse = null;
/** 获取个人用户授权链接-请求参数结构体 */
export interface GetAuthUrlRequest {
    openUserId: string;
    userInfo?: UserIdentInfo;
    userInfoExtend?: UserInfoExtend;
    /** 是否需要匹配个人身份信息一致：true，false */
    identInfoMatch?: boolean;
    /** 用户授权范围列表，ident_info: 身份信息，signtask_init: 发起签署任务，resource_for_sign: 签署相关数据资源 */
    requestAuthScope?: Array<string>;
    /** 重定向地址 */
    redirectUrl?: string;
}
/** 获取个人用户授权链接-响应参数结构体 */
export interface GetAuthUrlResponse {
    /** 授权链接的Embedded URL形式 */
    eUrl: string;
}
/** 查询个人用户基本信息-请求参数结构体 */
export interface GetUserInfoRequest {
    openUserId: string;
}
/** 查询个人用户基本信息-响应参数结构体 */
export interface GetUserInfoResponse {
    clientUserId: string;
    clientUserName?: string;
    /** 授权状态：unauthorized, authorized */
    bindingStatus: string;
    /** 用户授权范围列表: ident_info, signtask_init, resource_for_sign */
    authScope?: Array<string>;
    /** 实名认证状态: unidentified: 未认证, identified: 已认证且有效, ident_invalid：认证失效*/
    identStatus: string;
    /** 个人用户有效状态: disable, enable */
    availableStatus: string;
}
/** 获取个人用户身份信息-请求参数结构体 */
export interface GetIdentityInfoRequest {
    openUserId: string;
}
/** 获取个人用户身份信息-响应参数结构体 */
export interface GetIdentityInfoResponse {
    openUserId: string;
    /** 实名认证状态: unidentified: 未认证, identified: 已认证且有效, ident_invalid：认证失效*/
    identStatus: string;
    userInfo?: UserIdentInfo;
    userInfoExtend?: UserInfoExtend;
    /** 用户实名认证时所选择的认证方式，mobile: 实名手机号认证，face: 人脸识别认证，bank: 个人银行卡认证，offline: 人工审核认证 */
    identMethod?: string;
    /** 认证提交时间。格式为：Unix标准时间戳，精确到毫秒 */
    identSubmitTime?: string;
    /** 认证通过时间。格式为：Unix标准时间戳，精确到毫秒 */
    identSuccessTime?: string;
}
/** 查询个人用户实名认证进度-请求参数结构体 */
export interface GetIdentityProgressRequest {
    openUserId: string;
}
/** 查询个人用户实名认证进度-响应参数结构体 */
export interface GetIdentityProgressResponse {
    /** 实名认证进展状态：no_start: 未认证，identifying: 认证中，checking: 审核中，success: 认证通过，failed: 认证不通过 */
    identProcessStatus: string;
    /** 实名认证状态更新时间。格式为：Unix标准时间戳，精确到毫秒 */
    identUpdateTime: string;
    /** 用户实名认证时所选择的认证方案，mobile: 实名手机号认证，face: 人脸识别认证，bank: 个人银行卡认证，offline: 人工审核认证 */
    identMethod?: string;
    /** 如果identProcessStatus是认证不通过，则该参数可能可以说明原因 */
    identFailedReason?: string;
}
