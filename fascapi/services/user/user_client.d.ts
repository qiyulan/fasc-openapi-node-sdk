import { AbstractClient } from "../../common/abstract_client";
import { DisableUserRequest, DisableUserResponse, EnableUserRequest, EnableUserResponse, UnbindUserRequest, UnbindUserResponse, GetUserInfoRequest, GetUserInfoResponse, GetIdentityInfoRequest, GetIdentityInfoResponse } from "./user_models";
import { ClientConfig } from "../../common/interface";
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 将已添加的用户暂时禁用。禁用后，该用户暂时不能通过该应用系统使用法大大平台服务
     */
    disableUser(req: DisableUserRequest): Promise<DisableUserResponse>;
    /**
     * 将已禁用的用户再次激活。激活后，该用户可继续通过该应用系统使用法大大平台服务
     */
    enableUser(req: EnableUserRequest): Promise<EnableUserResponse>;
    /**
   * 将已禁用的用户再次激活。激活后，该用户可继续通过该应用系统使用法大大平台服务
   */
    unbindUser(req: UnbindUserRequest): Promise<UnbindUserResponse>;
    /**
     * 获取个人用户的基本信息、认证状态、授权状态和范围等。注意：该接口返回的信息中不涉及个人隐私，因此不需要授权
     */
    getUserInfo(req: GetUserInfoRequest): Promise<GetUserInfoResponse>;
    /**
     * 用于获取个人用户的身份信息
     */
    getIdentInfo(req: GetIdentityInfoRequest): Promise<GetIdentityInfoResponse>;
}
