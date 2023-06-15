import { OpenId, IdentTypeEnum, CorpIdentTypeEnum } from "../../common/models";
/** 获取个人用户授权链接-请求参数结构体 */
export interface GetUserAuthUrlRequest {
    /** 个人用户在应用中的唯一标识 */
    clientUserId: string;
    /** 个人用户的法大大帐号，仅限手机号或邮箱 */
    accountName?: string;
    /** 个人认证信息 */
    userIdentInfo?: {
        /** 个人用户真实姓名。长度最大50个字符 */
        userName?: string;
        /** 证件类型 */
        userIdentType?: IdentTypeEnum;
        /** 证件号 */
        userIdentNo?: string;
        /** 个人手机号 */
        mobile?: string;
        /** 个人银行账户号 */
        bankAccountNo?: string;
        /** 经办人实名认证方式：传多项按字段顺序为优先级展示，face: 人脸识别认证，mobile: 实名手机号三要素认证， bank: 个人银行卡四要素认证，offline: 人工审核认证 */
        identMethod?: Array<string>;
    };
    /** 页面中不可编辑的个人信息，不传默认都可编辑。 */
    nonEditableInfo?: Array<string>;
    /**
     * 业务请求的个人授权范围列表，多个之间用英文逗号隔开：
     * ident_info: 授权允许获取个人身份信息
     * seal_info：授权允许获取个人用户的签名资源
     * signtask_init: 授权允许代表个人发起签署
     * signtask_info: 授权允许获取个人用户的签署任务
     * signtask_file: 授权允许获取个人用户的签署文件
     */
    authScopes?: Array<string>;
    /** 重定向地址 */
    redirectUrl?: string;
}
/** 获取个人用户授权链接-响应参数结构体 */
export interface GetUserAuthUrlResponse {
    /** 授权链接的Embedded URL形式 */
    authUrl: string;
}
/** getAuthUrl 获取企业用户授权链接-请求参数结构体 */
export interface GetCorpAuthUrlRequest {
    /** 企业在应用中的唯一标识 */
    clientCorpId: string;
    /** 经办人在业务系统中的唯一标识 */
    clientUserId?: string;
    /** 经办人个人用户的法大大帐号，仅限手机号或邮箱 */
    accountName?: string;
    /** 需要开通电子签的企业信息 */
    corpIdentInfo?: {
        /** 法大大平台上企业主体的名称 */
        corpName?: string;
        /** 企业组织类型：corp: 企业，individual_biz: 个体工商户，other: 其他类型 */
        corpIdentType?: Omit<CorpIdentTypeEnum, "government">;
        /** 企业统一社会信用代码或各种类型组织的唯一代码 */
        corpIdentNo?: string;
        /** 法定代表人姓名 */
        legalRepName?: string;
        /** 营业执照的图片的Base64编码数据 */
        license?: string;
        /** 企业实名认证方式，legalRep：法人认证，agent：代理人认证 */
        corpIdentMethod?: Array<string>;
    };
    /** 不可修改的企业信息，默认都可修改。corpName：企业名称，corpIdentType：企业组织类型，corpIdentNo：企业统一社会信用代码或各种类型组织的唯一代码 */
    corpNonEditableInfo?: Array<string>;
    /** 企业经办人信息。仅用于需要经办人实名认证时的信息带入，经办人可根据实际情况修改 */
    oprIdentInfo?: {
        /** 经办人真实姓名。长度最大50个字符 */
        userName?: string;
        /** 经办人证件类型 */
        userIdentType?: IdentTypeEnum;
        /** 经办人证件号 */
        userIdentNo?: string;
        /** 经办人个人手机号 */
        mobile?: string;
        /** 经办人个人银行账户号 */
        bankAccountNo?: string;
        /** 经办人实名认证方式：传多项按字段顺序为优先级展示，face: 人脸识别认证，mobile: 实名手机号三要素认证， bank: 个人银行卡四要素认证 */
        oprIdentMethod?: Array<string>;
    };
    /** 页面中不可编辑的个人信息，不传默认都可编辑。 */
    oprNonEditableInfo?: Array<string>;
    /**
     * 业务请求的个人授权范围列表，多个之间用英文逗号隔开：
     * ident_info: 授权允许获取企业身份信息，
     * signtask_info: 授权允许获取企业的签署任务。
     * organization: 授权允许获取企业的组织数据
     * template: 授权允许获取企业的模板数据
     * seal_info：授权允许获取企业的印章相关资源，
     * signtask_init: 授权允许代表企业发起签署，
     * signtask_file: 授权允许获取企业的签署文件
     */
    authScopes?: Array<string>;
    /** 重定向地址 */
    redirectUrl?: string;
}
/** getAuthUrl 获取企业用户授权链接返回参数结构体 */
export interface GetCorpAuthUrlResponse {
    /** 授权链接的Embedded URL形式 */
    eUrl: string;
}
interface Resource {
    /** 法大大平台资源标识（签署任务编辑、模板管理等） SIGNTASK: 签署任务 */
    resourceId: "SIGNTASK" | "TEMPLATE";
    /** 资源操作行为如：（编辑）EDIT */
    action: "EDIT" | "CREATE" | "PREVIEW" | "MANAGE";
    /** 访问资源携带的参数 */
    params?: string;
}
/** getAppPageResourceUrl 获取应用级资源访问链接-请求参数结构体 */
export interface GetAppPageResourceUrlRequest {
    /** 授权主体 */
    ownerId?: OpenId;
    /** 法大大平台资源以及操作行为的结构体 */
    resource: Resource;
}
/** getAppPageResourceUrl 获取应用级资源访问链接-响应参数结构体 */
export interface GetAppPageResourceUrlResponse {
    /** 访问法大大平台资源的链接 */
    resourceUrl: string;
}
/** getUserPageResourceUrl 获取用户级资源访问链接-请求参数结构体 */
export interface GetUserPageResourceUrlRequest {
    openCorpId?: string;
    /** 应用系统中唯一确定登录用户身份的标识，用于法大大完成登录后进行账号映射，便于后续应用系统跳转到法大大的授权免登 */
    clientUserId: string;
    /** 法大大平台资源以及操作行为的结构体 */
    resource: Resource;
}
/** getUserPageResourceUrl 获取用户级资源访问链接-响应参数结构体 */
export interface GetUserPageResourceUrlResponse {
    /** 访问法大大平台资源的链接 */
    resourceUrl: string;
}
/** getBillUrl 获取计费链接-请求参数结构体 */
export interface GetBillUrlRequest {
    /** 应用系统中唯一确定登录用户身份的标识，如应用系统中该用户标识和法大大的帐号存在映射关系，则可以实现免登进入页面。该字段为空表示生成的链接不接入帐号免登机制 */
    clientUserId?: string;
    openId: OpenId;
    /** 计费页面类型：account: 费用页，order: 订购页。默认为account */
    urlType: string;
    /** 访问法大大平台资源的链接 */
    resourceUrl: string;
}
/** getBillUrl 获取计费链接-响应参数结构体 */
export interface GetBillUrlResponse {
    /** 用于应用中使用的查询计费账户链接 */
    eUrl: string;
}
export {};
