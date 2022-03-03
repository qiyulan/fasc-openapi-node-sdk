/** getManageUrl 获取企业管理链接-请求参数结构体 */
export interface GetManageUrlRequest {
  /** 企业openCorpId */
  openCorpId: string
  /** 企业经办人openUserId */
  operatorId: string
  /** 管理模块: seal: 印章管理、template: 模板管理 (暂未支持) */
  resourceId: string
  /** 重定向地址 */
  redirectUrl: string
}

/** getManageUrl 获取企业管理链接-响应参数结构体 */
export interface GetManageUrlResponse {
  /** 企业管理链接的Embedded URL形式 */
  eUrl: string
}
