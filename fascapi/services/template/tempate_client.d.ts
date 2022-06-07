import { AbstractClient } from "../../common/abstract_client";
import { ClientConfig } from "../../common/interface";
import { GetPageManageUrlRequest, GetPageManageUrlResponse } from "./template_models";
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
    * 获取模板管理链接
    * 业务系统向法大大平台获取模板管理页面链接，该页面无需法大大账号登录，用于对指定企业主体的模板进行管理操作
    */
    getPageManageUrl(req: GetPageManageUrlRequest): Promise<GetPageManageUrlResponse>;
}
