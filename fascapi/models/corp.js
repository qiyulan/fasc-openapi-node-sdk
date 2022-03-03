"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperatorTypeEnum = exports.MemberStatusEnum = exports.CorpIdentProcessStatusEnum = exports.CorpIdentMethodEnum = void 0;
/**
 * 企业实名认证时所选择的认证方案
 */
var CorpIdentMethodEnum;
(function (CorpIdentMethodEnum) {
    /** "法定代表人身份认证" */
    CorpIdentMethodEnum["LEGAL_REP"] = "legal_rep";
    /** "法定代表人授权认证" */
    CorpIdentMethodEnum["DEPUTY_AUTH"] = "deputy_aut";
    /** "企业对公账户认证" */
    CorpIdentMethodEnum["PAYMENT"] = "payment";
    /** "纸质材料审核认证" */
    CorpIdentMethodEnum["OFFLINE"] = "offline";
})(CorpIdentMethodEnum = exports.CorpIdentMethodEnum || (exports.CorpIdentMethodEnum = {}));
/**
 * 企业实名认证状态
 */
var CorpIdentProcessStatusEnum;
(function (CorpIdentProcessStatusEnum) {
    /** "未认证" */
    CorpIdentProcessStatusEnum["NO_START"] = "no_start";
    /** "认证中" */
    CorpIdentProcessStatusEnum["IDENTIFYING"] = "identifying";
    /** "审核中" */
    CorpIdentProcessStatusEnum["CHECKING"] = "checking";
    /** "初审通过" */
    CorpIdentProcessStatusEnum["CHECKED"] = "checked";
    /** "认证通过" */
    CorpIdentProcessStatusEnum["SUCCESS"] = "success";
    /** "认证不通过" */
    CorpIdentProcessStatusEnum["FAILED"] = "failed";
})(CorpIdentProcessStatusEnum = exports.CorpIdentProcessStatusEnum || (exports.CorpIdentProcessStatusEnum = {}));
/** 企业成员添加状态 */
var MemberStatusEnum;
(function (MemberStatusEnum) {
    /** 已加入 */
    MemberStatusEnum["JOINED"] = "joined";
    /** 未加入 */
    MemberStatusEnum["UNJOINED"] = "unjoined";
})(MemberStatusEnum = exports.MemberStatusEnum || (exports.MemberStatusEnum = {}));
/** 企业认证经办人身份类型 */
var OperatorTypeEnum;
(function (OperatorTypeEnum) {
    /** 企业法定代表人 */
    OperatorTypeEnum["LEGAL_REP"] = "legal_rep";
    /** 企业普通代理人 */
    OperatorTypeEnum["DEPUTY_AUTH"] = "deputy_auth";
})(OperatorTypeEnum = exports.OperatorTypeEnum || (exports.OperatorTypeEnum = {}));
