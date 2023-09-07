import exp from "constants"
import { type } from "os"
import { ListPageModel } from "../../common/models"

/** getCorpOrgManageUrl 获取组织管理链接-请求结构体 */
export interface GetCorpOrgManageUrlRequest {
  /** 法大大平台为该企业在该应用appId范围内分配的唯一标识 */
  openCorpId: string
  /** 应用系统中唯一确定登录用户身份的标识，用于法大大完成登录后进行帐号映射，便于后续从应用系统免登到法大大 */
  clientUserId?: string
  /** 包含的模块，可以传多个，member: 成员管理，connect: 关联企业管理 */
  modules: Array<string>
  redirectUrl: string
}

/** getCorpOrgManageUrl 获取组织管理链接-响应结构体 */
export interface GetCorpOrgManageUrlResponse {
  /** 组织管理页面链接，有效期10分钟，仅提供PC端 */
  resourceUrl: string
}

/** getCorpDeptList 查询部门列表-请求结构体 */
export interface GetCorpDeptListRequest {
  /** 企业主体在应用上的openCorpId，需检查授权 */
  openCorpId: string
  /** 父部门Id */
  parentDeptId?: number
}

/** getCorpDeptList 查询部门列表-响应结构体 */
export interface GetCorpDeptListResponse {
  /** 部门ID */
  deptId: number
  /** 部门名称 */
  deptName: string
  /** 部门排序号 */
  deptOrderNum: number
  /** 父部门Id */
  parentDeptId: number
}

/** getCorpDeptDetail 查询部门详情-请求结构体 */
export interface GetCorpDeptDetailRequest {
  /** 企业主体在应用上的openCorpId，需检查授权 */
  openCorpId: string
  /** 部门Id */
  deptId?: number
}

/** getCorpDeptDetail 查询部门详情-响应结构体 */
export interface GetCorpDeptDetailResponse {
  /** 部门Id */
  deptId: number
  /** 部门名称 */
  deptName: string
  /** 部门排序号 */
  deptOrderNum: number
  /** 父部门Id */
  parentDeptId: number
}

/** createCorpDept 创建部门-请求结构体 */
export interface CreateCorpDeptRequest {
  /** 企业主体在应用上的openCorpId，需检查授权 */
  openCorpId: string
  /** 父部门Id */
  parentDeptId?: number
  /** 部门名称 */
  deptName: string
  /** 部门排序号 */
  deptOrderNum?: number
}

/** createCorpDept 创建部门-响应结构体 */
export interface CreateCorpDeptResponse {
  /** 部门ID */
  deptId: number
  /** 部门排序号 */
  deptOrderNum: number
}

/** modifyCorpDept 修改部门-请求结构体 */
export interface ModifyCorpDeptRequest {
  /** 企业主体在应用上的openCorpId，需检查授权 */
  openCorpId: string
  /** 部门Id */
  deptId: number
  /** 部门名称 */
  deptName?: string
  /** 部门排序号 */
  deptOrderNum?: number
}

/** modifyCorpDept 修改部门-响应结构体 */
export type ModifyCorpDeptResponse = null

/** deleteCorpDept 删除部门-请求结构体 */
export interface DeleteCorpDeptRequest {
  /** 部门ID */
  deptId: number
  /** 企业主体在应用上的openCorpId，需检查授权 */
  openCorpId: string
}

/** deleteCorpDept 删除部门-请求结构体 */
export type DeleteCorpDeptResponse = null

/** getMemberList 查询企业成员列表-请求结构体 */
export interface GetMemberListRequest {
  /** 企业主体在应用上的openCorpId，需检查授权 */
  openCorpId: string
  /** 查询条件。 */
  listFilter?: {
    /** 角色类型super_admin：超级管理员 */
    roleType?: string
    /** 部门Id */
    deptId?: number
    /** 如果为true，则同时获取其所有子部门员工; 如果为false或者不传，则只获取当前部门员工 */
    fetchChild?: boolean
  }
  /** 查询结果分页返回，此处指定第几页，如果不传默从第一页返回。页码从1开始，即首页为1。 */
  listPageNo?: number
  /** 指定每页多少条数据，如果不传默认为100，单页最大100。 */
  listPageSize?: number
}

interface EmployeeInfo extends ListPageModel {
  memberId: number
  /** 成员真实姓名 */
  memberName?: string
  /** 成员在企业内部的标识符 */
  internalIdentifier: string
  /** 企业成员邮箱 */
  memberEmail?: string
  /** 企业成员手机号 */
  memberMobile?: string
  /** 员工法大大成员状态, inactive: 未激活, activated: 已激活，disabled: 已禁用。 */
  memberStatus: string
  /** 企业成员所属部门列表。如返回值包含 [0] 表示该成员在公司下。 */
  memberDeptIds?: Array<number>
  /** 企业成员角色列表。super_admin：超级管理员 */
  roleType?: Array<string>
}

/** getMemberList 查询企业成员列表-响应结构体 */
export interface GetMemberListResponse {
  employeeInfos: EmployeeInfo
}

/** getMemberDetail 查询企业成员详情-请求结构体 */
export interface GetMemberDetailRequest {
  openCorpId: string
  memberId?: number
  /** 成员在企业内部的标识符。与成员Id不能同时为空。 */
  internalIdentifier?: string
}

/** getMemberDetail 查询企业成员详情-响应结构体 */
export interface GetMemberDetailResponse {
  memberId: number
  /** 成员名称 */
  memberName: string
  /** 成员在企业内部的标识符 */
  internalIdentifier: string
  /** 企业成员手机号 */
  memberMobile?: string
  /** 企业成员邮箱 */
  memberEmail?: string
  /** 该用户法大大号 */
  fddId?: string
  /** 企业成员状态，inactive: 未激活，activated: 已激活，disabled: 已禁用 */
  memberStatus: string
  /** 企业成员所属部门列表 */
  memberDeptIds?: Array<number>
  /** 企业成员角色列表 */
  roleType: Array<string>
}

/** crateCorpMember 创建成员-请求结构体 */
export interface CrateCorpMemberRequest {
  openCorpId: string
  employeeInfos: Array<{
    /** 成员真实姓名 */
    memberName?: string
    /** 成员在企业内部的标识符 */
    internalIdentifier: string
    /** 企业成员邮箱 */
    memberEmail?: string
    /** 企业成员手机号。如成员已激活则不可修改。 */
    memberMobile?: string
    /** 企业成员所属部门列表。如返回值包含 [0] 表示该成员在公司下。 */
    memberDeptIds?: Array<number>
  }>
  /** 是否通过邮箱通知激活。默认true */
  notifyActiveByEmail?: boolean
  mergeMemberInfo?: boolean
  redirectUrl?: string
}

export interface SimpleEmployeeInfo {
  memberId: number
  /** 成员激活链接 */
  memberActiveUrl: string
  /** 可嵌入的成员激活链接。未激活的成员才会返回 */
  memberActiveEmbedUrl: string
  internalIdentifier: string
  /** 企业成员状态
    inactive: 未加入
    activated: 已加入
    disabled: 已禁用
   */
  memberStatus: string
}

/** crateCorpMember 创建成员-响应结构体 */
export type CrateCorpMemberResponse = Array<SimpleEmployeeInfo>

/** modifyMember 修改成员-请求结构体 */
export interface ModifyMemberRequest {
  openCorpId: string
  memberId: number
  /** 成员真实姓名 */
  memberName?: string
  /** 成员在企业内部的标识符 */
  internalIdentifier?: string
  /** 企业成员邮箱 */
  memberEmail?: string
  /** 企业成员手机号。如成员已激活则不可修改。 */
  memberMobile?: string
  /** 企业成员所属部门列表。如返回值包含 [0] 表示该成员在公司下。 */
  memberDeptIds?: Array<number>
}

/** modifyMember 修改成员-响应结构体 */
export type ModifyMemberResponse = null

/** deleteMember 删除成员-请求结构体 */
export interface DeleteMemberRequest {
  openCorpId: string
  memberIds: Array<number>
}

/** deleteMember 删除成员-响应结构体 */
export type DeleteMemberResponse = null

/** getActiveMemberUrl 获取成员激活链接-请求结构体 */
export interface GetActiveMemberUrlRequest {
  openCorpId: string
  memberIds: Array<number>
  redirectUrl?: string
}

/** getActiveMemberUrl 获取成员激活链接-响应结构体 */
export type GetActiveMemberUrlResponse = Array<SimpleEmployeeInfo>

/** setMemberDept 设置成员所属部门-请求结构体 */
export interface SetMemberDeptRequest { 
  openCorpId: string
  memberIds: Array<number>
  memberDeptIds?: Array<number>
  /** 设置部门的模式，cover：覆盖，append：追加 */
  model: string
}

/** setMemberDept 设置成员所属部门-响应结构体 */
export type SetMemberDeptResponse = null

/** setMemberStatus 设置成员状态-请求结构体 */
export interface SetMemberStatusRequest { 
  openCorpId: string
  memberIds: Array<number>
  /** 员工法大大成员状态，enable: 启用，disable: 禁用 */
  memberStatus: string
}

/** setMemberStatus 设置成员状态-响应结构体 */
export type SetMemberStatusResponse = null

/** getEntityList 查询企业主体列表-请求结构体 */
export interface GetEntityListRequest {
  openCorpId: string
}

/** getEntityList 查询企业主体列表-响应结构体 */
export interface GetEntityListResponse {
  entityId: string
  /**
   * 该主体在企业帐号下的类型：
   * primary：主企业，即企业帐号对应的主体
   * subsidiary：子企业，即成员企业或子公司
   */
  entityType: string
  corpName: string
  corpIdentNo: string
  legalRepName: string
  /**
   * 企业认证状态：
   * identified：已认证
   * unidentified：未认证
   * invalid：认证已失效
   */
  identStatus: string
}