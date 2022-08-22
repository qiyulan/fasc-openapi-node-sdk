import { AbstractClient } from "../../common/abstract_client"
import { GetSealListRequest, GetSealListResponse, GetSealUserListRequest, GetSealUserListResponse } from './seal_models'

export class Client extends AbstractClient {
  /**
   * 查询印章列表
   * 根据指定的企业主体openCorpId查询企业在法大大组织中管理的印章列表数据
   */
  async getSealList(
    req: GetSealListRequest,
  ): Promise<GetSealListResponse> {
    return this.request({ url: "/seal/get-list", req, reqMethod: "POST" })
  }

  /**
   * 查询企业用印员列表
   * 根据指定的企业主体openCorpId查询企业在法大大组织中管理的印章的用印人员列表
   */
  async getSealUserList(
    req: GetSealUserListRequest,
  ): Promise<GetSealUserListResponse> {
    return this.request({ url: "/seal/get-user-list", req, reqMethod: "POST" })
  }
}