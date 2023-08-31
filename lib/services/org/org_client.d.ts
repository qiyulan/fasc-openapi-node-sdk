import { AbstractClient } from "../../common/abstract_client";
import { ClientConfig } from "../../common/interface";
import { GetMemberListRequest, GetMemberListResponse, GetCorpOrgManageUrlRequest, GetCorpOrgManageUrlResponse, GetCorpDeptListRequest, GetCorpDeptListResponse, GetCorpDeptDetailRequest, GetCorpDeptDetailResponse, CreateCorpDeptRequest, CreateCorpDeptResponse, ModifyCorpDeptRequest, ModifyCorpDeptResponse, DeleteCorpDeptRequest, DeleteCorpDeptResponse, GetMemberDetailRequest, GetMemberDetailResponse, CrateCorpMemberRequest, CrateCorpMemberResponse, ModifyMemberRequest, ModifyMemberResponse, DeleteMemberRequest, DeleteMemberResponse, GetActiveMemberUrlRequest, GetActiveMemberUrlResponse, SetMemberDeptRequest, SetMemberDeptResponse } from "./org_models";
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /** 获取组织管理链接 */
    getCorpOrgManageUrl(req: GetCorpOrgManageUrlRequest): Promise<GetCorpOrgManageUrlResponse>;
    /** 查询部门列表 */
    getCorpDeptList(req: GetCorpDeptListRequest): Promise<GetCorpDeptListResponse>;
    /** 查询部门详情 */
    getCorpDeptDetail(req: GetCorpDeptDetailRequest): Promise<GetCorpDeptDetailResponse>;
    /** 创建部门 */
    createCorpDept(req: CreateCorpDeptRequest): Promise<CreateCorpDeptResponse>;
    /** 修改部门 */
    modifyCorpDept(req: ModifyCorpDeptRequest): Promise<ModifyCorpDeptResponse>;
    /** 删除部门 */
    deleteCorpDept(req: DeleteCorpDeptRequest): Promise<DeleteCorpDeptResponse>;
    /** 查询企业成员列表 */
    getMemberList(req: GetMemberListRequest): Promise<GetMemberListResponse>;
    /** 查询企业成员详情 */
    getMemberDetail(req: GetMemberDetailRequest): Promise<GetMemberDetailResponse>;
    /** 创建成员 */
    crateCorpMember(req: CrateCorpMemberRequest): Promise<CrateCorpMemberResponse>;
    /** 修改成员 */
    modifyCorpMember(req: ModifyMemberRequest): Promise<ModifyMemberResponse>;
    /** 删除成员 */
    deleteCorpMember(req: DeleteMemberRequest): Promise<DeleteMemberResponse>;
    /** 获取成员激活链接 */
    getActiveMemberUrl(req: GetActiveMemberUrlRequest): Promise<GetActiveMemberUrlResponse>;
    /** 设置成员所属部门 */
    setMemberDept(req: SetMemberDeptRequest): Promise<SetMemberDeptResponse>;
    /** 设置成员状态 */
    setMemberStatus(req: SetMemberDeptRequest): Promise<SetMemberDeptResponse>;
}
