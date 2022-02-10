import { AbstractClient } from "../../common/abstract_client";
import { ClientConfig } from "../../common/interface";
import { GetAccessTokenResponse } from "./access_token_model";
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    getAccessToken(cb?: (error: unknown | string, req: any) => void): Promise<GetAccessTokenResponse>;
}
