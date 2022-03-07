/** getPageManageUrl 获取模板管理链接-请求参数结构体 */
export interface GetPageManageUrlRequest {
  openCorpId: string
  redirectUrl?: string
}

/** getPageManageUrl 获取模板管理链接-响应参数结构体 */
export interface GetPageManageUrlResponse {
  pUrl: string
}