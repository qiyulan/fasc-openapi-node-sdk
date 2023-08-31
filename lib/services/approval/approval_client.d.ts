import { AbstractClient } from "../../common/abstract_client";
import { ClientConfig } from "../../common/interface";
import { GetApprovalListRequest, GetApprovalListResponse, GetApprovalDetailRequest, GetApprovalDetailResponse, GetApprovalUrlRequest, GetApprovalUrlResponse } from './approval_model';
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /** 查询审批列表 */
    getApprovalList(req: GetApprovalListRequest): Promise<GetApprovalListResponse>;
    /** 查询审批详情 */
    getApprovalDetail(req: GetApprovalDetailRequest): Promise<GetApprovalDetailResponse>;
    /** 获取审批链接 */
    getApprovalUrl(req: GetApprovalUrlRequest): Promise<GetApprovalUrlResponse>;
}
