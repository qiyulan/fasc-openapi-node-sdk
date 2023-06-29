import { ListPageModel } from '../../common/models'

/** getCallbackList 查询回调列表-请求结构体 */
export interface GetCallbackListRequest {
  callbackType: string
  startTime: string
  endTime: string
  listPageNo?: string
  listPageSize?: string
}

export interface CallbackInfo {
  eventId: string
  eventInfo: string
  success: boolean
}

/** getCallbackList 查询回调列表-响应结构体 */
export interface GetCallbackListResponse extends ListPageModel {
  callbackInfos: Array<CallbackInfo>
}