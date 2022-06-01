import { URLSearchParams } from 'url'
import { AbstractClient } from "../../common/abstract_client"
import { ClientConfig } from "../../common/interface"
import { GetOpenCorpAuthorizeUrlRequest, GetOpenCorpAuthorizeUrlResponse } from './eui_model'
import Sign from "../../common/sign"
import { EuiEnvironmentEnum } from '../../common/models'

const SYMBOL = '%s'

const EnvEnvironmentMap = new Map([
  [EuiEnvironmentEnum.SIT, `https://${SYMBOL}.sit-e.fadada.com`],
  [EuiEnvironmentEnum.UAT, `https://${SYMBOL}.uat-e.fadada.com`],
  [EuiEnvironmentEnum.PROD, `https://${SYMBOL}.e.fadada.com`],
])

export class Client extends AbstractClient{
  constructor(clientConfig: ClientConfig) {
    super(clientConfig)
  }

  getOpenCorpAuthorizeUrl(data: GetOpenCorpAuthorizeUrlRequest, environmentEnum: EuiEnvironmentEnum): GetOpenCorpAuthorizeUrlResponse {
    const { openCorpId, corpName, authScopes, redirectUrl } = data

    const timestamp = new Date().getTime()
    const appId = this.credential.appId.toUpperCase()
    const signParams = {
      appId,
      openCorpId,
      corpName,
      authScopes,
      redirectUrl
    }

    const signStr = Sign.formatSignString(signParams)

    const signature = Sign.sign({
      signStr,
      timestamp,
      appSecret: this.credential.appSecret,
    })

    const params = new URLSearchParams()

    params.append('openCorpId', openCorpId)
    params.append('corpName', corpName)
    params.append('authScopes', authScopes)
    params.append('redirectUrl', redirectUrl)
    params.append('timestamp', String(timestamp))
    params.append('signature', signature)

    const host = EnvEnvironmentMap.get(environmentEnum).replace(SYMBOL, appId)
    
    return (host + '/authorize/list?' + decodeURIComponent(params.toString()))
  }
}