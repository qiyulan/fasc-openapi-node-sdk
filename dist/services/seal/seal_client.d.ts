import { AbstractClient } from "../../common/abstract_client";
import { GetSealListRequest, GetSealListResponse, GetSealUserListRequest, GetSealUserListResponse } from './seal_models';
export declare class Client extends AbstractClient {
    /**
     * 查询印章列表
     * 根据指定的企业主体openCorpId查询企业在法大大组织中管理的印章列表数据
     */
    getSealList(req: GetSealListRequest): Promise<GetSealListResponse>;
    /**
     * 查询企业用印员列表
     * 根据指定的企业主体openCorpId查询企业在法大大组织中管理的印章的用印人员列表
     */
    getSealUserList(req: GetSealUserListRequest): Promise<GetSealUserListResponse>;
}
