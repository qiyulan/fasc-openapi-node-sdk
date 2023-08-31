import { AbstractClient } from "../../common/abstract_client";
import { ClientConfig } from "../../common/interface";
import { GetCallbackListRequest, GetCallbackListResponse } from './callback_model';
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /** 查询回调列表 */
    getCallbackList(req: GetCallbackListRequest): Promise<GetCallbackListResponse>;
}
