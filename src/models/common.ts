export const SHA256 = "HMAC-SHA256"

/**
 * 主体类型
 */
export enum IdTypeEnum {
  /** 企业 */
  CORP = "corp",
  /** 个人 */
  PERSON = "person",
}

export enum NotifyWayEnum {
  /** 手机 */
  MOBILE = "mobile",
  /** 邮箱 */
  EMAIL = "email",
}

export enum AuthFailedReasonEnum {
  /** 个人身份信息匹配失败 */
  USER_IDENT_INFO_MISMATCH = "user_ident_info_mismatch",
  /** 企业身份信息匹配失败 */
  CORP_IDENT_INFO_MISMATCH = "corp_ident_info_mismatch",
  /** 企业经办人操作不允许授权 */
  REJECT = "reject",
}

export enum AuthResultEnum {
  /** 成功 */
  SUCCESS = "success",
  /** 失败 */
  FAIL = "fail",
}

export enum AuthScopeEnum {
  /** 获取实名信息 */
  IDENT_INFO = "ident_info",
  /** 发起签署任务 */
  SIGNTASK_INIT = "signtask_init",
  /** 获取资源 */
  RESOURCE_FOR_SIGN = "resource_for_sign",
}

export enum PositionModeEnum {
  /** 像素值 */
  PIXEL = "pixel",
  /** 关键字定位 */
  KEYWORD = "keyword",
}
