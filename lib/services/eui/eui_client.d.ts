import { AbstractClient } from "../../common/abstract_client";
import { ClientConfig } from "../../common/interface";
import { GetUserAuthUrlRequest, GetUserAuthUrlResponse, GetCorpAuthUrlRequest, GetCorpAuthUrlResponse, GetAppPageResourceUrlRequest, GetAppPageResourceUrlResponse, GetUserPageResourceUrlRequest, GetUserPageResourceUrlResponse, GetBillUrlRequest, GetBillUrlResponse } from './eui_model';
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /** 获取企业授权链接 */
    getCorpAuthUrl(req: GetCorpAuthUrlRequest): Promise<GetCorpAuthUrlResponse>;
    /** 获取个人授权链接 */
    getUserAuthUrl(req: GetUserAuthUrlRequest): Promise<GetUserAuthUrlResponse>;
    /**
     * 获取应用级资源访问链接
     * 获取法大大平台主体授权给应用可访问的资源链接
     */
    getAppPageResourceUrl(req: GetAppPageResourceUrlRequest): Promise<GetAppPageResourceUrlResponse>;
    /**
     * 获取用户级资源访问链接
     * 获取法大大登录用户访问资源的链接
     */
    getUserPageResourceUrl(req: GetUserPageResourceUrlRequest): Promise<GetUserPageResourceUrlResponse>;
    /** 获取计费链接 */
    getBillUrl(req: GetBillUrlRequest): Promise<GetBillUrlResponse>;
}
