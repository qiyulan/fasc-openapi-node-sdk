/**
 * 企业实名认证时所选择的认证方案
 */
export declare enum CorpIdentMethodEnum {
    /** "法定代表人身份认证" */
    LEGAL_REP = "legal_rep",
    /** "法定代表人授权认证" */
    DEPUTY_AUTH = "deputy_aut",
    /** "企业对公账户认证" */
    PAYMENT = "payment",
    /** "纸质材料审核认证" */
    OFFLINE = "offline"
}
/**
 * 企业实名认证状态
 */
export declare enum CorpIdentProcessStatusEnum {
    /** "未认证" */
    NO_START = "no_start",
    /** "认证中" */
    IDENTIFYING = "identifying",
    /** "审核中" */
    CHECKING = "checking",
    /** "初审通过" */
    CHECKED = "checked",
    /** "认证通过" */
    SUCCESS = "success",
    /** "认证不通过" */
    FAILED = "failed"
}
/** 企业成员添加状态 */
export declare enum MemberStatusEnum {
    /** 已加入 */
    JOINED = "joined",
    /** 未加入 */
    UNJOINED = "unjoined"
}
/** 企业认证经办人身份类型 */
export declare enum OperatorTypeEnum {
    /** 企业法定代表人 */
    LEGAL_REP = "legal_rep",
    /** 企业普通代理人 */
    DEPUTY_AUTH = "deputy_auth"
}
