/** getApprovalList 查询审批列表-请求结构体 */
export interface GetApprovalListRequest {
    openCorpId: string;
    approvalType?: string;
    listPageNo?: number;
    listPageSize?: number;
}
export interface ApprovalInfo {
    approvalType: string;
    templateId?: string;
    signTaskId?: string;
    approvalId: string;
    approvalName: string;
    approvalStatus: string;
}
/** getApprovalList 查询审批列表-响应结构体 */
export interface GetApprovalListResponse {
    approvalInfos?: Array<ApprovalInfo>;
}
/** getApprovalDetail 查询审批详情-请求结构体 */
export interface GetApprovalDetailRequest {
    openCorpId: string;
    approvalType: string;
    approvalId: string;
}
export interface ApprovalInfo {
    /** 需要审批的成员名称 */
    approverMemberName: string;
    /** 需要审批的成员Id */
    approverMemberId: string;
    /**
     * 该审批人员的状态：
     * not-need-approve：无需审批
     * waiting：待审批
     * approved：已通过
     * rejected：已驳回
     */
    approverStatus: string;
    /** 操作时间 */
    operateTime: string;
    /** 该操作人填写的说明 */
    note: string;
}
export interface ApprovalNode {
    /** 审批节点编号 */
    nodeId: string;
    /**
     * 节点审批类型：
     * single_sign：单人审批
     * jointly_sign：会签
     * either_sign：或签
     */
    approvalType: string;
    /**
     * 该节点审批状态：
     * waiting：待审批
     * approved：已通过
     * rejected：已驳回
     */
    nodeStatus: string;
    approversInfos: Array<ApprovalInfo>;
}
/** getApprovalDetail 查询审批详情-响应结构体 */
export interface GetApprovalDetailResponse {
    /**
     * 审批类型：
     * template：创建模板审批
     * sign_task_start：签署任务发起审批
     * sign_task_finalize：签署任务定稿审批
     * sign_task_seal：签署任务用印审批
     */
    approvalType: string;
    /** 审批的模板Id，仅审批类型为创建模板审批时返回 */
    templateId?: string;
    /** 审批的签署任务Id，审批类型为发起审批、定稿审批、用印审批时返回。 */
    signTaskId?: string;
    /** 审批编号 */
    approvalId: string;
    /** 审批名称 */
    applicantName: string;
    /** 申请人成员名称 */
    approvalName: string;
    /** 申请人成员id */
    applicantMemberId: string;
    /**
     * 当前的审批状态：
     * in_progress：审批中
     * approved：已通过
     * rejected：已驳回
     * cancelled：已撤回
     * abolished：已作废
     */
    approvalStatus: string;
    approvalNode: Array<ApprovalNode>;
}
/** getApprovalUrl 获取审批链接-请求结构体 */
export interface GetApprovalUrlRequest {
    openCorpId: string;
    clientUserId?: string;
    approvalId: string;
    redirectUrl?: string;
}
/** getApprovalUrl 获取审批链接-响应结构体 */
export interface GetApprovalUrlResponse {
    approvalUrl: string;
}
