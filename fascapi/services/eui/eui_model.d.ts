export interface GetOpenCorpAuthorizeUrlRequest {
    openCorpId: string;
    corpName: string;
    authScopes: string;
    redirectUrl: string;
}
export declare type GetOpenCorpAuthorizeUrlResponse = string;
