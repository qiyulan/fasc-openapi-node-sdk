import { AbstractClient } from "../../common/abstract_client";
import { ClientConfig } from "../../common/interface";
import { GetManageUrlRequest, GetManageUrlResponse } from "./corp_manage_models";
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 业务系统向法大大平台获取一个页面链接，用于对指定模块进行管理操作，如印章管理、模板管理等
     */
    getManageUrl(req: GetManageUrlRequest): Promise<GetManageUrlResponse>;
}
