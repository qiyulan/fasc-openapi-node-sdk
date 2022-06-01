export declare enum SignMethod {
    hamcsha256 = "HMAC-SHA256"
}
/** 证件类型枚举 */
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
/** 主体类型枚举 */
export declare enum IdTypeEnum {
    /** 企业 */
    CORP = "corp",
    /** 个人 */
    PERSON = "person"
}
/** 企业组织类型枚举 */
export declare enum CorpIdentTypeEnum {
    /** 企业 */
    CORP = "corp",
    /** 个体工商户 */
    INDIVIDUAL_BIZ = "individual_biz",
    /** 政府和事业单位 */
    GOVERNMENT = "government",
    /** 其他类型 */
    OTHER = "other"
}
/** 参与方类型 */
export declare enum ActorTypeEnum {
    /** 发起方 */
    INITIATOR = "initiator",
    /** 填写方 */
    FILLER = "filler",
    /** 签署方 */
    SIGNER = "signer",
    /** 抄送方 */
    CC = "cc"
}
/** eui环境枚举 */
export declare enum EuiEnvironmentEnum {
    SIT = "sit",
    UAT = "uat",
    PROD = "prod"
}
/** 统一标识应用系统上的用户(个人或企业) */
export interface OpenId {
    /** 主体类型 */
    idType: IdTypeEnum;
    openCorpId?: string;
    openUserId?: string;
}
/** 个人身份信息 */
export interface UserIdentInfo {
    /** 个人用户真实姓名 */
    userName?: string;
    /** 证件类型 */
    identType: IdentTypeEnum;
    identNo: string;
}
/** 个人信息补充 */
export interface UserInfoExtend {
    /** 个人银行账号 */
    bankAccountNo?: string;
    /** 个人实名手机号 */
    mobile?: string;
}
/** 企业身份信息 */
export interface CorpIdentInfo {
    /** 企业名称全程 */
    corpName?: string;
    /** 企业组织类型 */
    corpIdentType: keyof CorpIdentTypeEnum;
    /** 统一标识应用系统上的用户(个人或企业) */
    corpIdentNo: string;
    /** 法定代表人名称 */
    legalRepName?: string;
}
/** 企业信息补充 */
export interface CorpInfoExtend {
    /** 企业对公银行账户开户行名称 */
    bankName?: string;
    /** 企业对公银行账户开户行支行名称 */
    bankBranchName?: string;
    /** 企业对公银行帐户号 */
    bankAccountNo?: string;
    /** 企业对公银行帐户银行所在省份 */
    bankProvinceName?: string;
    /** 企业对公银行帐户银行所在市 */
    bankCityName?: string;
}
/** 个人用户参与方 */
export interface ActorUser {
    /** 个人用户参与方的openUserId */
    actorUserId?: string;
    /** 个人用户参与方的身份信息 */
    userIdentInfo?: UserIdentInfo;
    /** 个人用户参与方的补充信息 */
    userInfoExtend?: UserInfoExtend;
}
/** 企业参与方 */
export interface ActorCorp {
    /** 企业参与方的openCorpId */
    actorCorpId?: string;
    /** 企业参与方的身份信息 */
    corpIdentInfo?: CorpIdentInfo;
    /** 企业参与方的补充信息 */
    corpInfoExtend?: CorpInfoExtend;
    /** 企业经办人的openUserId */
    operatorId?: string;
    /** 企业经办人的身份信息 */
    operatorIdentInfo?: UserIdentInfo;
    /** 企业经办人的补充信息 */
    operatorInfoExtend?: UserInfoExtend;
}
/** 通知控制参数 */
export interface Notification {
    /** 是否需要法大大平台发送通知 */
    sendNotification: boolean;
    /** 通知方式 */
    notifyWay?: "mobile" | "email";
    /** 通知地址，手机号或邮箱地址，和通知方式匹配一致 */
    notifyAddress?: string;
}
/** 签署任务参与方 */
export interface Actor {
    /** 参与方类型，filler: 填充方、signer: 签署方、cc: 抄送方 */
    actorType: keyof ActorTypeEnum;
    /** 参与方标识。在同一个签署任务中，同类型的各参与方标识不可重复 */
    actorId: string;
    /** 参与方主体类型：corp、person */
    actorIdentType: string;
    /** 个人用户参与方信息。在actorIdentType=person(个人)时有效，但也可以不提供 */
    actorUser?: ActorUser;
    /** 企业参与方信息。在actorIdentType=corp(企业)时有效，但也可以不提供 */
    actorCorp?: ActorCorp;
    /** 定义是否及如何向该参与方发送通知。默认不通知，需要设置属性Notification.sendNotification=false */
    notification: Notification;
}
/** 控件定位 */
export interface FieldPosition {
    /** 定位模式：pixel、keyword */
    positionMode: string;
    /** 定位页码 */
    positionPageNo?: string;
    /** 中心点定位坐标横向偏移量 */
    positionX?: string;
    /** 中心点定位坐标纵向偏移量 */
    positionY?: string;
    /** 关键字定位 */
    positionKeyword?: string;
}
/** 文档控件 */
export interface Field {
    /** 控件编码 */
    fieldId: string;
    /** 控件名称 */
    fieldName: string;
    /** 控件定位 */
    position: FieldPosition;
    /**  */
    fieldType: string;
    /** 控件类型：person_sign、corp_seal、corp_seal_cross_page、date_sign、text_single_line、text_multi_line、check_box */
    fieldTextSingleLine?: FieldTextSingleLine;
    /**  */
    fieldTextMultiLine?: FieldTextMultiLine;
    /**  */
    fieldCheckBox?: FieldCheckBox;
}
/** 单行文本控件 */
export interface FieldTextSingleLine {
    /** 是否必须：false/true，默认为true */
    required?: boolean;
    /** 指定默认值 */
    defaultValue?: string;
}
/** 多行文本控件 */
export interface FieldTextMultiLine {
    /** 是否必须：false/true，默认为true */
    required?: boolean;
    /** 指定默认值 */
    defaultValue?: string;
}
/** 复选框控件 */
export interface FieldCheckBox {
    /** 是否必须：false/true，默认为true */
    required?: boolean;
    /** 指定默认值 */
    defaultValue?: string;
}
