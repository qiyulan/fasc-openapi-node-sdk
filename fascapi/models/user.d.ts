/** 用户实名认证时所选择的认证方案 */
export declare enum IdentMethodEnum {
    /** 实名手机号认证 (该方案校验的是用户在电信运营商绑定的真实姓名、身份证号码、手机号及对应的短信验证码) */
    MOBILE = "mobile",
    /** 人脸识别认证 (该方案校验的是用户的真实姓名、身份证号码和人脸比对) */
    FACE = "face",
    /** 个人银行卡认证 (该方案校验的是用户在银行绑定的真实姓名、身份证号码、银行卡卡号、预留在银行的手机号及对应的短信验证码) */
    BANK = "bank",
    /** 人工审核认证 (该方案主要为特殊人群提供的人工审核通道，如部分用户因为特殊原因，无法在其他方案下完成认证。例如：手机不可用、人脸比对不成功、外国人等)。 */
    OFFLINE = "offline"
}
/** 实名认证进展状态 */
export declare enum IdentProcessStatusEnum {
    /** 未认证 (表示用户并未提交认证请求，认证尚未开始) */
    NO_START = "no_start",
    /** 认证中 (实名认证常常包括多个步骤，表示正在进行) */
    IDENTIFYING = "identifying",
    /** 审核中 (用户选择了提交资料审核方式的认证，审核尚未完成，需等待审核反馈) */
    CHECKING = "checking",
    /** 认证通过  (整个实名认证进程结束并通过认证) */
    SUCCESS = "success",
    /** 认证不通过  (整个实名认证进程结束但未通过认证，可能是某个步骤认证失败或审核拒绝)。 */
    FAILED = "failed"
}
/** 实名认证状态 */
export declare enum IdentStatusEnum {
    /** 未认证 */
    UNIDENTIFIED = "unidentified",
    /** 已认证且有效 */
    IDENTIFIED = "identified",
    /** 认证失效 */
    IDENT_INVALID = "ident_invalid"
}
/** 证件类型 */
export declare enum IdentTypeEnum {
    /** 身份证 */
    ID_CARD = "id_card",
    /** 护照 */
    PASSPORT = "passport",
    /** 港澳居民来往内地通行证 */
    HK_MACAO = "hk_macao",
    /** 台湾居民来往大陆通行证 */
    TAIWAN = "taiwan"
}
/** addUser 新增个人用户请求参数结构体 */
export interface AddUserRequest {
    clientUserId: string;
    clientUserName: string;
}
/** addUser 新增个人用户返回参数结构体 */
export interface AddUserResponse {
    openUserId: string;
}
/** updateUser 更新个人用户请求参数结构体 */
export interface AddUserRequest {
    openUserId: string;
    clientUserId: string;
    clientUserName: string;
}
