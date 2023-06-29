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
}

/** getFourElementVerifyUrl 个人四要素校验-请求参数结构体 */
export interface GetFourElementVerifyUrlRequest {
  clientUserId: string
  /** 要素校验的发起方，会扣除该主体的要素校验用量 */
  initiator: {
    /** 主体类型： corp: 企业 person: 个人  */
    idType: string
    /** 主体标识 */
    openId: string
  }
  /** 用户姓名 */
  userName: string
  /** 用户身份证号 */
  userIdentNo: string
  /** 银行卡号 */
  bankAccountNo?: string
  /** 手机号 */
  mobile?: string
  /** 是否需要同时校验身份证照片，默认false，true：需要，false：不需要 */
  idCardImage?: boolean
  /** 身份证人像面base64 */
  faceSide?: string
  /** 身份证国徽面base64 */
  nationalEmblemSide?: string
  /** 重定向地址 */
  redirectUrl?: string
}

/** getFourElementVerifyUrl 个人四要素校验-响应参数结构体 */
export interface GetFourElementVerifyUrlResponse {
  /** 四要素校验页面链接，自适应PC/H5，有效期10分钟 */
  verifyUrl: string
}

/** getThreeElementVerifyUrl 个人三要素校验-请求参数结构体 */
export interface GetThreeElementVerifyUrlRequest {
  clientUserId: string
  /** 要素校验的发起方，会扣除该主体的要素校验用量 */
  initiator: {
    /** 主体类型： corp: 企业 person: 个人  */
    idType: string
    /** 主体标识 */
    openId: string
  }
  /** 用户姓名 */
  userName: string
  /** 用户身份证号 */
  userIdentNo: string
  /** 手机号 */
  mobile?: string
  /** 是否需要同时校验身份证照片，默认false，true：需要，false：不需要 */
  idCardImage?: boolean
  /** 身份证人像面base64 */
  faceSide?: string
  /** 身份证国徽面base64 */
  nationalEmblemSide?: string
  /** 重定向地址 */
  redirectUrl?: string
}

/** getThreeElementVerifyUrl 个人三要素校验-响应参数结构体 */
export interface GetThreeElementVerifyUrlResponse {
  /** 四要素校验页面链接，自适应PC/H5，有效期10分钟 */
  verifyUrl: string
}

/** getIdCardImageDownloadUrl 获取要素校验身份证图片下载链接-请求参数结构体 */
export interface GetIdCardImageDownloadUrlRequest {
  /** 校验id，在回调事件中返回 */
  verifyId: string
}

/** getIdCardImageDownloadUrl 获取要素校验身份证图片下载链接-响应参数结构体 */
export interface GetIdCardImageDownloadUrlResponse {
  /** 要素校验身份证图片下载链接 */
  downloadUrl: string
}

/** getIdCardOcr 身份证OCR-请求参数结构体 */
export interface GetIdCardOcrRequest {
  /** 身份证OCR的发起方，会扣除该主体的OCR用量 */
  initiator: {
    /** 主体类型： corp: 企业 person: 个人  */
    idType: string
    /** 主体标识 */
    openId: string
  }
  /** 身份证人像面base64 */
  faceSide?: string
  /** 身份证国徽面base64 */
  nationalEmblemSide?: string
}

/** getIdCardOcr 身份证OCR-响应参数结构体 */
export interface GetIdCardOcrResponse {
  /** 姓名 */
  name?: string
  /** 身份证号 */
  identNo?: string
  /** 性别 */
  gender?: string
  /** 出生日期 */
  birthday?: string
  /** 民族 */
  nation?: string
  /** 住址 */
  address?: string
  /** 发证机关 */
  issueAuthority?: string
  /** 有效期 */
  validPeriod?: string
}

/** telecomThreeElementVerify 个人运营商三要素校验-请求结构体 */
export interface TelecomThreeElementVerifyRequest {
  userName: string
  userIdentNo: string
  mobile: string
}

/** telecomThreeElementVerify 个人运营商三要素校验-响应结构体 */
export interface TelecomThreeElementVerifyResponse {
  verifyResult: string
}

/** backFourElementVerify 个人银行卡四要素校验-请求结构体 */
export interface BackFourElementVerifyRequest {
  userName: string
  userIdentNo: string
  mobile: string
  bankAccountNo: string
}

/** backFourElementVerify-响应结构体 */
export interface BackFourElementVerifyResponse {
  verifyResult: string
}