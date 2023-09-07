import { UserIdentInfo, UserInfoExtend } from "../../common/models"

/** disableUser 禁用个人用户-请求参数结构体 */
export interface DisableUserRequest {
  openUserId: string
}

/** disableUser 禁用个人用户-响应参数结构体 */
export type DisableUserResponse = null

/** enableUser 恢复个人用户-请求参数结构体 */
export interface EnableUserRequest {
  openUserId: string
}

/** enableUser 恢复个人用户-响应参数结构体 */
export type EnableUserResponse = null

/** unbindUser 解绑个人用户-请求参数结构体 */
export interface UnbindUserRequest {
  openUserId: string
}

/** unbindUser 解绑个人用户-响应参数结构体 */
export type UnbindUserResponse = null

/** getUserInfo  查询个人用户基本信息-请求参数结构体 */
export interface GetUserInfoRequest {
  /** 个人用户在应用中的唯一标识 */
  clientUserId?: string
  /** 法大大平台为该用户在该应用appId范围内分配的唯一标识 */
  openUserId?: string
}

/** getUserInfo  查询个人用户基本信息-响应参数结构体 */
export interface GetUserInfoResponse {
  clientUserId: string
  openUserId?: string
  /** 授权状态：unauthorized, authorized */
  bindingStatus: string
  /** 用户授权范围列表: ident_info, signtask_info, signtask_init, signtask_file */
  authScope?: Array<string>
  /** 实名认证状态: unidentified: 未认证, identified: 已认证且有效 */
  identStatus: string
  /** 个人用户有效状态: disable, enable */
  availableStatus: string
}

/** getIdentityInfo 获取个人用户身份信息-请求参数结构体 */
export interface GetIdentityInfoRequest {
  openUserId: string
}

/** getIdentityInfo 获取个人用户身份信息-响应参数结构体 */
export interface GetIdentityInfoResponse {
  openUserId: string
  /** 实名认证状态: unidentified: 未认证, identified: 已认证且有效, ident_invalid：认证失效*/
  identStatus: string
  userIdentInfo?: UserIdentInfo
  userIdentInfoExtend?: UserInfoExtend
  /** 用户实名认证时所选择的认证方式，mobile: 实名手机号认证，face: 人脸识别认证，bank: 个人银行卡认证，offline: 人工审核认证 */
  identMethod?: string
  /** 认证提交时间。格式为：Unix标准时间戳，精确到毫秒 */
  identSubmitTime?: string
  /** 认证通过时间。格式为：Unix标准时间戳，精确到毫秒 */
  identSuccessTime?: string
  /** 该用户的法大大号 */
  fddId?: string
  /** 该用户认证时的刷脸底图base64 */
  facePicture?: string
  accountName: string
}