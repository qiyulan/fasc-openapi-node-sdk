import { AbstractClient } from "../../common/abstract_client";
import { ClientConfig } from "../../common/interface";
import { GetOpenCorpAuthorizeUrlRequest, GetOpenCorpAuthorizeUrlResponse } from './eui_model';
import { EuiEnvironmentEnum } from '../../common/models';
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    getOpenCorpAuthorizeUrl(data: GetOpenCorpAuthorizeUrlRequest, environmentEnum: EuiEnvironmentEnum): GetOpenCorpAuthorizeUrlResponse;
}
