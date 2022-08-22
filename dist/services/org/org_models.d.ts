/** getMemberList 查询企业成员列表-请求结构体 */
export interface GetMemberListRequest {
    /** 企业主体在应用上的openCorpId，**需检查授权** */
    ownerId: string;
    /** 查询条件。 */
    listFilter?: {
        /** 角色类型super_admin：超级管理员 */
        roleType?: string;
    };
    /** 查询结果分页返回，此处指定第几页，如果不传默从第一页返回。页码从1开始，即首页为1。 */
    listPageNo?: number;
    /** 指定每页多少条数据，如果不传默认为100，单页最大100。 */
    listPageSize?: number;
}
interface EmployeeInfo {
    memberId: number;
    /** 成员真实姓名 */
    memberName?: string;
    /** 成员在企业内部的标识符 */
    internalIdentifier: string;
    /** 企业成员邮箱 */
    memberEmail?: string;
    /** 员工法大大成员状态, inactive: 未激活, activated: 已激活，disabled: 已禁用。 */
    memberStatus: string;
    /** 企业成员角色列表。super_admin：超级管理员 */
    roleType?: Array<string>;
    /** 列表当前分页，当前第几页。页码从1开始，即首页为1 */
    listPageNo: number;
    /** 当前返回页中的成员数量，即数组大小。 */
    countInPage: number;
    /** 列表总分页数 */
    listPageCount: number;
    /** 查询到的成员总数 */
    totalCount: number;
}
/** getMemberList 查询企业成员列表-响应结构体 */
export interface GetMemberListResponse {
    employeeInfos: EmployeeInfo;
}
export {};
