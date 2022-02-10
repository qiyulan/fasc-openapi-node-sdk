import { AbstractClient } from "../../common/abstract_client";
import { AddUserRequest, AddUserResponse } from "../../models/user";
import { ClientConfig } from "../../common/interface";
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    addUser(req: AddUserRequest, cb?: (error: unknown | string, req: any) => void): Promise<AddUserResponse>;
}
