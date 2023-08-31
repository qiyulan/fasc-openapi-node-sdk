import { AbstractClient } from "../../common/abstract_client";
import { ClientConfig } from "../../common/interface";
import { DisableCorpRequest, DisableCorpResponse, EnableCorpRequest, EnableCorpResponse, UnbindCorpRequest, UnbindCorpResponse, GetBasicInfoRequest, GetBasicInfoResponse, GetIdentityInfoRequest, GetIdentityInfoResponse, GetIdentityStatusRequest, GetIdentityStatusResponse, GetCounterpartListRequest, GetCounterpartListResponse } from "./crop_model";
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 将已添加的企业用户暂时禁用。禁用后，该企业暂时不能通过该应用系统使用法大大平台服务
     */
    disable(req: DisableCorpRequest): Promise<DisableCorpResponse>;
    /**
     * 将已禁用的企业用户再次激活。激活后，该企业用户可继续通过该应用系统使用法大大平台服务
     */
    enable(req: EnableCorpRequest): Promise<EnableCorpResponse>;
    /**
     * 针对已绑定法大大帐号的企业用户，解除法大大帐号绑定和企业用户的授权范围。
     */
    unbind(req: UnbindCorpRequest): Promise<UnbindCorpResponse>;
    /**
     * 获取企业的基本信息、认证状态、授权状态和范围等。注意：该接口返回的信息中不涉及隐私，因此不需要授权
     */
    get(req: GetBasicInfoRequest): Promise<GetBasicInfoResponse>;
    /**
     * 用于获取企业的实名身份信息。注意：只有经过企业授权后，应用系统方可获得此信息
     */
    getIdentityInfo(req: GetIdentityInfoRequest): Promise<GetIdentityInfoResponse>;
    /**
     * 查询企业实名认证状态
     */
    getIdentityStatus(req: GetIdentityStatusRequest): Promise<GetIdentityStatusResponse>;
    /** 查询相对方列表 */
    getCounterpartList(req: GetCounterpartListRequest): Promise<GetCounterpartListResponse>;
}
