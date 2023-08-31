import { AbstractClient } from "../../common/abstract_client";
import { ClientConfig } from "../../common/interface";
import { GetSealListRequest, GetSealListResponse, GetSealUserListRequest, GetSealUserListResponse, GetSealDetailRequest, GetSealDetailResponse, GetUserSealListRequest, GetUserSealListResponse, GetSealVerifyListRequest, GetSealVerifyListResponse, GetSealManageListRequest, GetSealManageListResponse, GetCreateSealListRequest, GetCreateSealListResponse, GetAppointedSealUrlRequest, GetAppointedSealUrlResponse, GetSealGrantUrlRequest, GetSealGrantUrlResponse, GetSealFreeSignUrlRequest, GetSealFreeSignUrlResponse, CancelSealGrantRequest, CancelSealGrantResponse, CancelSealFreeSignRequest, CancelSealFreeSignResponse, ModifySealRequest, ModifySealResponse, DeleteSealRequest, DeleteSealResponse, GetPersonalSealManageUrlRequest, GetPersonalSealManageUrlResponse, GetPersonalSealCreateUrlRequest, GetPersonalSealCreateUrlResponse, GetPersonalSealListRequest, GetPersonalSealListResponse, GetPersonalFreeSignUrlRequest, GetPersonalFreeSignUrlResponse, CancelPersonalFreeSignRequest, CancelPersonalFreeSignResponse, DeletePersonalSealRequest, DeletePersonalSealResponse } from "./seal_models";
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /** 查询印章列表 */
    getSealList(req: GetSealListRequest): Promise<GetSealListResponse>;
    /** 查询印章详情 */
    getSealDetail(req: GetSealDetailRequest): Promise<GetSealDetailResponse>;
    /** 查询企业用印员列表 */
    getSealUserList(req: GetSealUserListRequest): Promise<GetSealUserListResponse>;
    /** 查询成员被授权的印章列表 */
    getUserSealList(req: GetUserSealListRequest): Promise<GetUserSealListResponse>;
    /** 查询审核中的印章列表 */
    getSealVerifyList(req: GetSealVerifyListRequest): Promise<GetSealVerifyListResponse>;
    /** 获取印章管理链接 */
    getSealManageList(req: GetSealManageListRequest): Promise<GetSealManageListResponse>;
    /** 获取创建印章链接 */
    getCreateSealList(req: GetCreateSealListRequest): Promise<GetCreateSealListResponse>;
    /** 取印章详情链接 */
    getAppointedSealUrl(req: GetAppointedSealUrlRequest): Promise<GetAppointedSealUrlResponse>;
    /** 获取印章授权给成员链接 */
    getSealGrantUrl(req: GetSealGrantUrlRequest): Promise<GetSealGrantUrlResponse>;
    /** 获取印章设置免验证签链接 */
    getSealFreeSignUrl(req: GetSealFreeSignUrlRequest): Promise<GetSealFreeSignUrlResponse>;
    /** 解除印章授权 */
    cancelSealGrant(req: CancelSealGrantRequest): Promise<CancelSealGrantResponse>;
    /** 解除印章免验证签 */
    cancelSealFreeSign(req: CancelSealFreeSignRequest): Promise<CancelSealFreeSignResponse>;
    /** 修改印章 */
    modifySeal(req: ModifySealRequest): Promise<ModifySealResponse>;
    /** 删除印章 */
    deleteSeal(req: DeleteSealRequest): Promise<DeleteSealResponse>;
    /** 获取签名管理链接 */
    getPersonalSealManageUrl(req: GetPersonalSealCreateUrlRequest): Promise<GetPersonalSealCreateUrlResponse>;
    /** 获取签名创建链接 */
    getPersonalSealCreateUrl(req: GetPersonalSealManageUrlRequest): Promise<GetPersonalSealManageUrlResponse>;
    /** 查询个人签名列表 */
    getPersonalSealList(req: GetPersonalSealListRequest): Promise<GetPersonalSealListResponse>;
    /** 获取签名设置免验证签链接 */
    getPersonalFreeSignUrl(req: GetPersonalFreeSignUrlRequest): Promise<GetPersonalFreeSignUrlResponse>;
    /** 解除签名免验证签 */
    cancelPersonalFreeSign(req: CancelPersonalFreeSignRequest): Promise<CancelPersonalFreeSignResponse>;
    /** 删除签名 */
    deletePersonalSeal(req: DeletePersonalSealRequest): Promise<DeletePersonalSealResponse>;
}
