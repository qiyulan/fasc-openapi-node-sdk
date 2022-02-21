import { AbstractClient } from "../../common/abstract_client";
import { AddUserRequest, AddUserResponse, UpdateUserRequest, UpdateUserResponse, DeleteUserRequest, DeleteUserResponse, DisableUserRequest, DisableUserResponse, EnableUserRequest, EnableUserResponse, GetAuthUrlRequest, GetAuthUrlResponse, GetUserInfoRequest, GetUserInfoResponse, GetIdentInfoRequest, GetIdentInfoResponse } from "./user_models";
import { ClientConfig } from "../../common/interface";
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    addUser(req: AddUserRequest, cb?: (error: string, res: AddUserResponse) => void): Promise<AddUserResponse>;
    updateUser(req: UpdateUserRequest, cb?: (error: string, res: UpdateUserResponse) => void): Promise<UpdateUserResponse>;
    deleteUser(req: DeleteUserRequest, cb?: (error: string, res: DeleteUserResponse) => void): Promise<DeleteUserResponse>;
    disableUser(req: DisableUserRequest, cb?: (error: string, res: DisableUserResponse) => void): Promise<DisableUserResponse>;
    enableUser(req: EnableUserRequest, cb?: (error: string, res: EnableUserResponse) => void): Promise<EnableUserResponse>;
    getAuthUrl(req: GetAuthUrlRequest, cb?: (error: string, res: GetAuthUrlResponse) => void): Promise<GetAuthUrlResponse>;
    getUserInfo(req: GetUserInfoRequest, cb?: (error: string, res: GetUserInfoResponse) => void): Promise<GetUserInfoResponse>;
    getIdentInfo(req: GetIdentInfoRequest, cb?: (error: string, res: GetIdentInfoResponse) => void): Promise<GetIdentInfoResponse>;
}
