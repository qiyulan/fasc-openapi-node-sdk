import { OpenId } from "../../common/models"

/** getBillUrl 获取计费链接-请求参数结构体 */
export interface GetBillUrlRequest {
  /** 需要获取计费链接的应用系统上的个人或企业主体信息 */
  openId: OpenId
  /** 计费页面类型：
   * account: 账户信息
   * order: 套餐订购
   * 默认为account
   */
  urlType?: string
  /** 返回地址 */
  redirectUrl?: string
}

/** getBillUrl 获取计费链接-响应参数结构体 */
export interface GetBillUrlResponse {
  /** 订购下单链接的Embedded URL形式 */
  eUrl: string
}
