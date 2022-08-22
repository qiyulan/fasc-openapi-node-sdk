/** getSealList 查询印章列表-请求结构体 */
export interface GetSealListRequest {
    /** 企业主体在应用上的openCorpId，**需检查授权** */
    ownerId: string;
    /** 查询条件。 */
    listFilter?: {
        /** 印章类型，支持传多项：official_seal：法定名称章，contract_seal：合同专用章，hr_seal：人事专用章，financial_seal：财务专用章，legal_representative_seal：法定代表人名章，other：其他。 */
        categoryType?: Array<string>;
    };
}
interface SealUser {
    /** 企业成员ID */
    memberId: number;
    /** 成员真实姓名，长度最大64个字符。 */
    memberName: string;
    /** 成员在企业内部的标识符。 如工号等，方便和业务系统对应。 */
    internalIdentifier: string;
    /** 企业成员邮箱 */
    memberEmail?: string;
}
interface SealInfo {
    /** 印章ID，长度最大20位 */
    sealId: number;
    /** 印章名称 */
    sealName: string;
    /** 印章类型：official_seal：法定名称章，contract_seal：合同专用章，hr_seal：人事专用章，financial_seal：财务专用章，legal_representative_seal：法定代表人名章，other：其他。 */
    categoryType: string;
    /** 印章图片地址 */
    picFileUrl: string;
    /** 印章创建时间 */
    createTime: string;
    /** 证书颁发机构：CFCA： 中国金融认证中心<br/>豸信CA：山东豸信认证服务有限公司，CSCA：世纪数码CA */
    certCAOrg: string;
    /** 证书加密算法类型：国密证书：SM2，标准证书：RSA */
    certEncryptType: number;
    /** 企业用印员列表 */
    sealUsers?: Array<SealUser>;
}
/** getSealList 查询印章列表-响应结构体 */
export interface GetSealListResponse {
    sealInfos: Array<SealInfo>;
}
/** getSealUserList 查询企业用印员列表-请求结构体 */
export interface GetSealUserListRequest {
    /** 企业主体在应用上的openCorpId，**需检查授权** */
    ownerId: string;
    /** 查询条件。 */
    listFilter?: {
        /** 印章类型，支持传多项：official_seal：法定名称章，contract_seal：合同专用章，hr_seal：人事专用章，financial_seal：财务专用章，legal_representative_seal：法定代表人名章，other：其他。 */
        categoryType?: Array<string>;
    };
}
interface SealUser2 extends SealUser {
    sealInfos: Array<Omit<SealInfo, 'createTime' | 'sealUsers'>>;
}
/** getSealUserList 查询企业用印员列表-响应结构体 */
export interface GetSealUserListResponse {
    sealUsers?: Array<SealUser2>;
    sealInfos: SealInfo;
}
export {};
