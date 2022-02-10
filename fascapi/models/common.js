"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionModeEnum = exports.AuthScopeEnum = exports.AuthResultEnum = exports.AuthFailedReasonEnum = exports.NotifyWayEnum = exports.IdTypeEnum = exports.SHA256 = void 0;
exports.SHA256 = "HMAC-SHA256";
/**
 * 主体类型
 */
var IdTypeEnum;
(function (IdTypeEnum) {
    /** 企业 */
    IdTypeEnum["CORP"] = "corp";
    /** 个人 */
    IdTypeEnum["PERSON"] = "person";
})(IdTypeEnum = exports.IdTypeEnum || (exports.IdTypeEnum = {}));
var NotifyWayEnum;
(function (NotifyWayEnum) {
    /** 手机 */
    NotifyWayEnum["MOBILE"] = "mobile";
    /** 邮箱 */
    NotifyWayEnum["EMAIL"] = "email";
})(NotifyWayEnum = exports.NotifyWayEnum || (exports.NotifyWayEnum = {}));
var AuthFailedReasonEnum;
(function (AuthFailedReasonEnum) {
    /** 个人身份信息匹配失败 */
    AuthFailedReasonEnum["USER_IDENT_INFO_MISMATCH"] = "user_ident_info_mismatch";
    /** 企业身份信息匹配失败 */
    AuthFailedReasonEnum["CORP_IDENT_INFO_MISMATCH"] = "corp_ident_info_mismatch";
    /** 企业经办人操作不允许授权 */
    AuthFailedReasonEnum["REJECT"] = "reject";
})(AuthFailedReasonEnum = exports.AuthFailedReasonEnum || (exports.AuthFailedReasonEnum = {}));
var AuthResultEnum;
(function (AuthResultEnum) {
    /** 成功 */
    AuthResultEnum["SUCCESS"] = "success";
    /** 失败 */
    AuthResultEnum["FAIL"] = "fail";
})(AuthResultEnum = exports.AuthResultEnum || (exports.AuthResultEnum = {}));
var AuthScopeEnum;
(function (AuthScopeEnum) {
    /** 获取实名信息 */
    AuthScopeEnum["IDENT_INFO"] = "ident_info";
    /** 发起签署任务 */
    AuthScopeEnum["SIGNTASK_INIT"] = "signtask_init";
    /** 获取资源 */
    AuthScopeEnum["RESOURCE_FOR_SIGN"] = "resource_for_sign";
})(AuthScopeEnum = exports.AuthScopeEnum || (exports.AuthScopeEnum = {}));
var PositionModeEnum;
(function (PositionModeEnum) {
    /** 像素值 */
    PositionModeEnum["PIXEL"] = "pixel";
    /** 关键字定位 */
    PositionModeEnum["KEYWORD"] = "keyword";
})(PositionModeEnum = exports.PositionModeEnum || (exports.PositionModeEnum = {}));
