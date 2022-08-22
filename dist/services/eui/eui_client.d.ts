import { AbstractClient } from "../../common/abstract_client";
import { ClientConfig } from "../../common/interface";
import { GetOpenCorpAuthorizeUrlRequest, GetOpenCorpAuthorizeUrlResponse, GetUserAuthUrlRequest, GetUserAuthUrlResponse, GetCorpAuthUrlRequest, GetCorpAuthUrlResponse, GetAppPageResourceUrlRequest, GetAppPageResourceUrlResponse, GetUserPageResourceUrlRequest, GetUserPageResourceUrlResponse, GetBillUrlRequest, GetBillUrlResponse } from './eui_model';
import { EuiEnvironmentEnum } from '../../common/models';
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    getOpenCorpAuthorizeUrl(data: GetOpenCorpAuthorizeUrlRequest, environmentEnum: EuiEnvironmentEnum): GetOpenCorpAuthorizeUrlResponse;
    /**
     * 应用系统向法大大平台获取一个页面链接，用于提醒企业经办人进行授权操作，以授权应用系统访问该企业在法大大平台的某些数据和操作权限。
     * 在企业操作授权前，法大大平台要求企业及其经办人必须先完成登录和实名认证 (即: Authorization的前提是必须先完成Authentication)
     */
    getCorpAuthUrl(req: GetCorpAuthUrlRequest): Promise<GetCorpAuthUrlResponse>;
    /**
     * 应用系统向法大大平台获取一个页面链接，用于提醒用户进行授权操作，以授权应用系统访问用户在法大大平台的某些数据资源和操作权限。
     * 在用户操作授权前，法大大平台要求用户必须先完成登录和实名认证 (即: Authorization的前提是必须先完成Authentication)
     */
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
    /**
     * 获取计费链接
     * 应用系统向法大大平台获取计费页面链接，用于账户信息查询或套餐订购
     */
    getBillUrl(req: GetBillUrlRequest): Promise<GetBillUrlResponse>;
}
