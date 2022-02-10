"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentTypeEnum = exports.IdentStatusEnum = exports.IdentProcessStatusEnum = exports.IdentMethodEnum = void 0;
/** 用户实名认证时所选择的认证方案 */
var IdentMethodEnum;
(function (IdentMethodEnum) {
    /** 实名手机号认证 (该方案校验的是用户在电信运营商绑定的真实姓名、身份证号码、手机号及对应的短信验证码) */
    IdentMethodEnum["MOBILE"] = "mobile";
    /** 人脸识别认证 (该方案校验的是用户的真实姓名、身份证号码和人脸比对) */
    IdentMethodEnum["FACE"] = "face";
    /** 个人银行卡认证 (该方案校验的是用户在银行绑定的真实姓名、身份证号码、银行卡卡号、预留在银行的手机号及对应的短信验证码) */
    IdentMethodEnum["BANK"] = "bank";
    /** 人工审核认证 (该方案主要为特殊人群提供的人工审核通道，如部分用户因为特殊原因，无法在其他方案下完成认证。例如：手机不可用、人脸比对不成功、外国人等)。 */
    IdentMethodEnum["OFFLINE"] = "offline";
})(IdentMethodEnum = exports.IdentMethodEnum || (exports.IdentMethodEnum = {}));
/** 实名认证进展状态 */
var IdentProcessStatusEnum;
(function (IdentProcessStatusEnum) {
    /** 未认证 (表示用户并未提交认证请求，认证尚未开始) */
    IdentProcessStatusEnum["NO_START"] = "no_start";
    /** 认证中 (实名认证常常包括多个步骤，表示正在进行) */
    IdentProcessStatusEnum["IDENTIFYING"] = "identifying";
    /** 审核中 (用户选择了提交资料审核方式的认证，审核尚未完成，需等待审核反馈) */
    IdentProcessStatusEnum["CHECKING"] = "checking";
    /** 认证通过  (整个实名认证进程结束并通过认证) */
    IdentProcessStatusEnum["SUCCESS"] = "success";
    /** 认证不通过  (整个实名认证进程结束但未通过认证，可能是某个步骤认证失败或审核拒绝)。 */
    IdentProcessStatusEnum["FAILED"] = "failed";
})(IdentProcessStatusEnum = exports.IdentProcessStatusEnum || (exports.IdentProcessStatusEnum = {}));
/** 实名认证状态 */
var IdentStatusEnum;
(function (IdentStatusEnum) {
    /** 未认证 */
    IdentStatusEnum["UNIDENTIFIED"] = "unidentified";
    /** 已认证且有效 */
    IdentStatusEnum["IDENTIFIED"] = "identified";
    /** 认证失效 */
    IdentStatusEnum["IDENT_INVALID"] = "ident_invalid";
})(IdentStatusEnum = exports.IdentStatusEnum || (exports.IdentStatusEnum = {}));
/** 证件类型 */
var IdentTypeEnum;
(function (IdentTypeEnum) {
    /** 身份证 */
    IdentTypeEnum["ID_CARD"] = "id_card";
    /** 护照 */
    IdentTypeEnum["PASSPORT"] = "passport";
    /** 港澳居民来往内地通行证 */
    IdentTypeEnum["HK_MACAO"] = "hk_macao";
    /** 台湾居民来往大陆通行证 */
    IdentTypeEnum["TAIWAN"] = "taiwan";
})(IdentTypeEnum = exports.IdentTypeEnum || (exports.IdentTypeEnum = {}));
