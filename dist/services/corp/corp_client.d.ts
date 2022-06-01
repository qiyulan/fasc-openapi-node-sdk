import { AbstractClient } from "../../common/abstract_client";
import { ClientConfig } from "../../common/interface";
import { AddCorpRequest, AddCorpResponse, UpdateCorpRequest, UpdateCorpResponse, DeleteCorpRequest, DeleteCorpResponse, DisableCorpRequest, DisableCorpResponse, EnableCorpRequest, EnableCorpResponse, UnbindCorpRequest, UnbindCorpResponse, GetAuthUrlRequest, GetAuthUrlResponse, GetBasicInfoRequest, GetBasicInfoResponse, GetIdentityInfoRequest, GetIdentityInfoResponse } from "./crop_model";
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 把应用系统上将要使用法大大电子签服务的企业添加到法大大平台。法大大平台会为这些企业分配在该appId范围内的唯一标识openCorpId。
     * 后续，针对该企业进行的授权请求、签署任务等调用都将使用该openCorpId标识该企业。您可以在应该管理后台查看和管理已经添加的企业
     */
    addCorp(req: AddCorpRequest, cb?: (error: string, res: AddCorpResponse) => void): Promise<AddCorpResponse>;
    /**
     * 为已添加的企业修改在应用系统中的关联参数
     */
    updateCorp(req: UpdateCorpRequest, cb?: (error: string, res: UpdateCorpResponse) => void): Promise<UpdateCorpResponse>;
    /**
     * 删除企业。删除后再次使用相同的clientCorpId添加该企业时，返回新的openCorpId
     */
    deleteCorp(req: DeleteCorpRequest, cb?: (error: string, res: DeleteCorpResponse) => void): Promise<DeleteCorpResponse>;
    /**
     * 将已添加的企业用户暂时禁用。禁用后，该企业暂时不能通过该应用系统使用法大大平台服务
     */
    disableCorp(req: DisableCorpRequest, cb?: (error: string, res: DisableCorpResponse) => void): Promise<DisableCorpResponse>;
    /**
     * 将已禁用的企业用户再次激活。激活后，该企业用户可继续通过该应用系统使用法大大平台服务
     */
    enableCorp(req: EnableCorpRequest, cb?: (error: string, res: EnableCorpResponse) => void): Promise<EnableCorpResponse>;
    /**
   * 将已禁用的企业用户再次激活。激活后，该企业用户可继续通过该应用系统使用法大大平台服务
   */
    unbindCorp(req: UnbindCorpRequest, cb?: (error: string, res: UnbindCorpRequest) => void): Promise<UnbindCorpResponse>;
    /**
     * 应用系统向法大大平台获取一个页面链接，用于提醒企业经办人进行授权操作，以授权应用系统访问该企业在法大大平台的某些数据和操作权限。
     * 在企业操作授权前，法大大平台要求企业及其经办人必须先完成登录和实名认证 (即: Authorization的前提是必须先完成Authentication)
     */
    getAuthUrl(req: GetAuthUrlRequest, cb?: (error: string, res: GetAuthUrlResponse) => void): Promise<GetAuthUrlResponse>;
    /**
     * 获取企业的基本信息、认证状态、授权状态和范围等。注意：该接口返回的信息中不涉及隐私，因此不需要授权
     */
    getBasicInfo(req: GetBasicInfoRequest, cb?: (error: string, res: GetBasicInfoResponse) => void): Promise<GetBasicInfoResponse>;
    /**
     * 用于获取企业的实名身份信息。注意：只有经过企业授权后，应用系统方可获得此信息
     */
    getIdentityInfo(req: GetIdentityInfoRequest, cb?: (error: string, res: GetIdentityInfoResponse) => void): Promise<GetIdentityInfoResponse>;
}
