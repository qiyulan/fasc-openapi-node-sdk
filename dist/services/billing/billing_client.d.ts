import { AbstractClient } from "../../common/abstract_client";
import { ClientConfig } from "../../common/interface";
import { GetBillUrlRequest, GetBillUrlResponse } from "./billing_models";
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 应用系统向法大大平台获取计费页面链接，用于账户信息查询或套餐订购
     */
    getBillUrl(req: GetBillUrlRequest): Promise<GetBillUrlResponse>;
}
