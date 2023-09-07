import { AbstractClient } from "../../common/abstract_client"
import { ClientConfig } from "../../common/interface"
import { GetApprovalListRequest, GetApprovalListResponse, GetApprovalDetailRequest, GetApprovalDetailResponse,
  GetApprovalUrlRequest, GetApprovalUrlResponse, GetApprovalFlowListRequest, GetApprovalFlowListResponse } from './approval_model'

export class Client extends AbstractClient{
  constructor(clientConfig: ClientConfig) {
    super(clientConfig)
  }

  /** 查询审批列表 */
  async getApprovalList(req: GetApprovalListRequest): Promise<GetApprovalListResponse> {
    return this.request({ url: "/approval/get-list", req, reqMethod: "POST" })
  }

  /** 查询审批详情 */
  async getApprovalDetail(req: GetApprovalDetailRequest): Promise<GetApprovalDetailResponse> {
    return this.request({ url: "/approval/get-detail", req, reqMethod: "POST" })
  }
  
  /** 获取审批链接 */
  async getApprovalUrl(req: GetApprovalUrlRequest): Promise<GetApprovalUrlResponse> {
    return this.request({ url: "/approval/get-url", req, reqMethod: "POST" })
  }
  
  /** 查询审批流程列表 */
  async getApprovalFlowList(req: GetApprovalFlowListRequest): Promise<GetApprovalFlowListResponse> {
    return this.request({ url: "/approval-flow/get-list", req, reqMethod: "POST" })
  }
  
  /** 查询审批流程详情 */
  async getApprovalFlowDetail(req: GetApprovalFlowListRequest): Promise<GetApprovalFlowListResponse> {
    return this.request({ url: "/approval-flow/get-detail", req, reqMethod: "POST" })
  }
}