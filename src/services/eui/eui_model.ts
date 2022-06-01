export interface GetOpenCorpAuthorizeUrlRequest {
  openCorpId: string
  corpName: string
  authScopes: string
  redirectUrl: string
}

export type GetOpenCorpAuthorizeUrlResponse = string
