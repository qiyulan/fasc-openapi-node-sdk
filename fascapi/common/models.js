"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorTypeEnum = exports.CorpIdentTypeEnum = exports.IdTypeEnum = exports.IdentTypeEnum = exports.SignMethod = void 0;
var SignMethod;
(function (SignMethod) {
    SignMethod["hamcsha256"] = "HMAC-SHA256";
})(SignMethod = exports.SignMethod || (exports.SignMethod = {}));
/** 证件类型枚举 */
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
/** 主体类型枚举 */
var IdTypeEnum;
(function (IdTypeEnum) {
    /** 企业 */
    IdTypeEnum["CORP"] = "corp";
    /** 个人 */
    IdTypeEnum["PERSON"] = "person";
})(IdTypeEnum = exports.IdTypeEnum || (exports.IdTypeEnum = {}));
/** 企业组织类型枚举 */
var CorpIdentTypeEnum;
(function (CorpIdentTypeEnum) {
    /** 企业 */
    CorpIdentTypeEnum["CORP"] = "corp";
    /** 个体工商户 */
    CorpIdentTypeEnum["INDIVIDUAL_BIZ"] = "individual_biz";
    /** 政府和事业单位 */
    CorpIdentTypeEnum["GOVERNMENT"] = "government";
    /** 其他类型 */
    CorpIdentTypeEnum["OTHER"] = "other";
})(CorpIdentTypeEnum = exports.CorpIdentTypeEnum || (exports.CorpIdentTypeEnum = {}));
/** 参与方类型 */
var ActorTypeEnum;
(function (ActorTypeEnum) {
    /** 发起方 */
    ActorTypeEnum["INITIATOR"] = "initiator";
    /** 填写方 */
    ActorTypeEnum["FILLER"] = "filler";
    /** 签署方 */
    ActorTypeEnum["SIGNER"] = "signer";
    /** 抄送方 */
    ActorTypeEnum["CC"] = "cc";
})(ActorTypeEnum = exports.ActorTypeEnum || (exports.ActorTypeEnum = {}));
