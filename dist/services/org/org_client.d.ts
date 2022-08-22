import { AbstractClient } from "../../common/abstract_client";
import { GetMemberListRequest, GetMemberListResponse } from './org_models';
export declare class Client extends AbstractClient {
    /**
     * 查询企业成员列表
     * 根据指定的企业主体openCorpId查询企业在法大大组织中管理的员工列表数据
     */
    getMemberList(req: GetMemberListRequest): Promise<GetMemberListResponse>;
}
