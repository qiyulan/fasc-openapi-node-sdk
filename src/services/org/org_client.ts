import { AbstractClient } from "../../common/abstract_client"
import { ClientConfig } from "../../common/interface"
import { 
  GetMemberListRequest, GetMemberListResponse, GetCorpOrgManageUrlRequest, GetCorpOrgManageUrlResponse, GetCorpDeptListRequest, GetCorpDeptListResponse,
  GetCorpDeptDetailRequest, GetCorpDeptDetailResponse, CreateCorpDeptRequest, CreateCorpDeptResponse, ModifyCorpDeptRequest, ModifyCorpDeptResponse,
  DeleteCorpDeptRequest, DeleteCorpDeptResponse, GetMemberDetailRequest, GetMemberDetailResponse, CrateCorpMemberRequest, CrateCorpMemberResponse,
  ModifyMemberRequest, ModifyMemberResponse, DeleteMemberRequest, DeleteMemberResponse, GetActiveMemberUrlRequest, GetActiveMemberUrlResponse,
  SetMemberDeptRequest, SetMemberDeptResponse,
} from "./org_models"

export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super(clientConfig)
  }
  /** 获取组织管理链接 */
  async getCorpOrgManageUrl(req: GetCorpOrgManageUrlRequest): Promise<GetCorpOrgManageUrlResponse> {
    return this.request({ url: "/corp/organization/manage/get-url", req, reqMethod: "POST" })
  }

  /** 查询部门列表 */
  async getCorpDeptList(req: GetCorpDeptListRequest): Promise<GetCorpDeptListResponse> {
    return this.request({ url: "/corp/dept/get-list", req, reqMethod: "POST" })
  }

  /** 查询部门详情 */
  async getCorpDeptDetail(req: GetCorpDeptDetailRequest): Promise<GetCorpDeptDetailResponse> {
    return this.request({ url: "/corp/dept/get-detail", req, reqMethod: "POST" })
  }

  /** 创建部门 */
  async createCorpDept(req: CreateCorpDeptRequest): Promise<CreateCorpDeptResponse> {
    return this.request({ url: "/corp/dept/create", req, reqMethod: "POST" })
  }

  /** 修改部门 */
  async modifyCorpDept(req: ModifyCorpDeptRequest): Promise<ModifyCorpDeptResponse> {
    return this.request({ url: "/corp/dept/modify", req, reqMethod: "POST" })
  }

  /** 删除部门 */
  async deleteCorpDept(req: DeleteCorpDeptRequest): Promise<DeleteCorpDeptResponse> {
    return this.request({ url: "/corp/dept/delete", req, reqMethod: "POST" })
  }

  /** 查询企业成员列表 */
  async getMemberList(req: GetMemberListRequest): Promise<GetMemberListResponse> {
    return this.request({ url: "/corp/member/get-list", req, reqMethod: "POST" })
  }

  /** 查询企业成员详情 */
  async getMemberDetail(req: GetMemberDetailRequest): Promise<GetMemberDetailResponse> {
    return this.request({ url: "/corp/member/get-detail", req, reqMethod: "POST" })
  }

  /** 创建成员 */
  async crateCorpMember(req: CrateCorpMemberRequest): Promise<CrateCorpMemberResponse> {
    return this.request({ url: "/corp/member/create", req, reqMethod: "POST" })
  }

  /** 修改成员 */
  async modifyCorpMember(req: ModifyMemberRequest): Promise<ModifyMemberResponse> {
    return this.request({ url: "/corp/member/modify", req, reqMethod: "POST" })
  }

  /** 删除成员 */
  async deleteCorpMember(req: DeleteMemberRequest): Promise<DeleteMemberResponse> {
    return this.request({ url: "/corp/member/delete", req, reqMethod: "POST" })
  }

  /** 获取成员激活链接 */
  async getActiveMemberUrl(req: GetActiveMemberUrlRequest): Promise<GetActiveMemberUrlResponse> {
    return this.request({ url: "/corp/member/get-active-url", req, reqMethod: "POST" })
  }

  /** 设置成员所属部门 */
  async setMemberDept(req: SetMemberDeptRequest): Promise<SetMemberDeptResponse> {
    return this.request({ url: "/corp/member/set-dept", req, reqMethod: "POST" })
  }

  /** 设置成员状态 */
  async setMemberStatus(req: SetMemberDeptRequest): Promise<SetMemberDeptResponse> {
    return this.request({ url: "/corp/member/set-status", req, reqMethod: "POST" })
  }
}
