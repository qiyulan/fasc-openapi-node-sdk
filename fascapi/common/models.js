"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Permissions = exports.SUBVERSION = exports.RequestParamsEnum = exports.EuiEnvironmentEnum = exports.ActorTypeEnum = exports.CorpIdentTypeEnum = exports.IdTypeEnum = exports.IdentTypeEnum = exports.SignMethod = void 0;
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
/** 参与方主体类型 */
var ActorTypeEnum;
(function (ActorTypeEnum) {
    /** 企业 */
    ActorTypeEnum["CORP"] = "corp";
    /** 个人 */
    ActorTypeEnum["PERSON"] = "person";
})(ActorTypeEnum = exports.ActorTypeEnum || (exports.ActorTypeEnum = {}));
/** eui环境枚举 */
var EuiEnvironmentEnum;
(function (EuiEnvironmentEnum) {
    EuiEnvironmentEnum["SIT"] = "sit";
    EuiEnvironmentEnum["UAT"] = "uat";
    EuiEnvironmentEnum["PROD"] = "prod";
})(EuiEnvironmentEnum = exports.EuiEnvironmentEnum || (exports.EuiEnvironmentEnum = {}));
var RequestParamsEnum;
(function (RequestParamsEnum) {
    /**
     * 企业控制台创建应用后得到的应用ID
    */
    RequestParamsEnum["APP_ID"] = "X-FASC-App-Id";
    /**
     * 签名算法类型:固定HMAC-SHA256
     */
    RequestParamsEnum["SIGN_TYPE"] = "X-FASC-Sign-Type";
    /**
     * 请求参数的签名值
     */
    RequestParamsEnum["SIGN"] = "X-FASC-Sign";
    /**
     * 时间戳(yyyy-MM-dd HH:mm:ss.sss)，时间戳必须是保证是当前时间，同时跟法大大这边的服务器时间正负不能相差5分钟
     */
    RequestParamsEnum["TIMESTAMP"] = "X-FASC-Timestamp";
    /**
     * FASC.openApi子版本号。如当前规划新版本为：5.1。注意：若指定子版本号下不存在接口，系统将会报错返回。
     */
    RequestParamsEnum["SUBVERSION"] = "X-FASC-Api-SubVersion";
    /**
     * 随机数(32位, 10分钟内不能重复请求)
     */
    RequestParamsEnum["NONCE"] = "X-FASC-Nonce";
    /**
     * 平台令牌,通过获取令牌接口返回
     */
    RequestParamsEnum["ACCESS_TOKEN"] = "X-FASC-AccessToken";
    /**
     * 请求参数的集合，除公共请求参数都必须放在这个参数中传递（除文件，字节流等）,json字符串.
     */
    RequestParamsEnum["DATA_KEY"] = "bizContent";
    RequestParamsEnum["GRANT_TYPE"] = "X-FASC-Grant-Type";
    RequestParamsEnum["FDD_REQEUST_ID"] = "X-FASC-Request-Id";
    /**
     * 默认授权类型
     **/
    RequestParamsEnum["CLIENT_CREDENTIAL"] = "client_credential";
    RequestParamsEnum["EUI_TIMESTAMP"] = "timestamp";
    RequestParamsEnum["EUI_SIGNATURE"] = "signature";
    RequestParamsEnum["METHOD_POST"] = "POST";
    RequestParamsEnum["METHOD_GET"] = "GET";
})(RequestParamsEnum = exports.RequestParamsEnum || (exports.RequestParamsEnum = {}));
exports.SUBVERSION = '5.1';
/** 参与方权限 */
var Permissions;
(function (Permissions) {
    /** 填写和确认内容 */
    Permissions["FILL"] = "fill";
    /** 确定签署 */
    Permissions["SIGN"] = "sign";
})(Permissions = exports.Permissions || (exports.Permissions = {}));
