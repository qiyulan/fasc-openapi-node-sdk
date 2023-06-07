import * as crypto from "crypto"
import FormData from "form-data"
import r2curl from 'r2curl'
import { ClientConfig, Credential, ClientProfile } from "./interface"
import Sign from "./sign"
import fetch from "./fetch"
import { SignMethod, RequestParamsEnum, SUBVERSION } from "./models"
import FascOpenApiSDKHttpException from "./fasc_openapi_sdk_exception"

export type ReqMethod = "POST" | "GET"

type ResponseCallback = (error: string, req: any) => void
interface RequestOptions {
  multipart: boolean
}

export interface RequestData {
  "X-FASC-App-Id": string
  "X-FASC-Sign-Type": string
  "X-FASC-Nonce": string
  "X-FASC-Timestamp": number
  "X-FASC-AccessToken"?: string
  "X-FASC-Sign"?: string
  "X-FASC-Grant-Type"?: string
  "X-FASC-Api-SubVersion": string
  bizContent: string
}

type ResponseData = any

export class AbstractClient {
  credential: Credential
  serverUrl: string
  profile: ClientProfile
  constructor({ serverUrl, credential, profile }: ClientConfig) {
    this.credential = { appId: null, appSecret: null, accessToken: null, ...credential }
    this.serverUrl = serverUrl
    this.profile = {
      signMethod: profile?.signMethod || SignMethod.hamcsha256,
      reqTimeout: profile?.reqTimeout || 15,
      proxyProfile: {
        proxyFlag: false,
        proxyHost: "",
        proxyPort: 80,
      },
      language: profile?.language || "zh-CN",
    }
  }

  async request({
    url,
    reqMethod,
    req,
    options,
  }: {
    url: string
    reqMethod: ReqMethod
    req?: any
    options?: ResponseCallback | RequestOptions
  }): Promise<ResponseData> {
    try {
      const res = await this.doRequest(url, req, reqMethod, options as RequestOptions)
      return res
    } catch (e) {
      return Promise.reject(e)
    }
  }

  private async doRequest(url: string, req: any, reqMethod: ReqMethod, options: RequestOptions) {
    if (this.profile.signMethod === SignMethod.hamcsha256) {
      return this.doRequestWithSign(url, req, reqMethod, options)
    } else {
      throw new FascOpenApiSDKHttpException("签名算法错误，仅支持HMAC-SHA256")
    }
  }

  private async doRequestWithSign(
    url: string,
    data: any,
    reqMethod: ReqMethod,
    options?: RequestOptions
  ) {
    const timestamp = new Date().getTime()

    const nonce = crypto.randomBytes(16).toString("hex")

    const headers: { [key: string]: any } = {
      [RequestParamsEnum.APP_ID]: this.credential.appId,
      [RequestParamsEnum.SIGN_TYPE]: this.profile.signMethod,
      [RequestParamsEnum.NONCE]: nonce,
      [RequestParamsEnum.TIMESTAMP]: timestamp,
      [RequestParamsEnum.SUBVERSION]: SUBVERSION,
      "Content-Type": "application/x-www-form-urlencoded",
    }

    let reqData: string | FormData = JSON.stringify(data) || ""

    let form
    if (reqMethod === RequestParamsEnum.METHOD_POST && options?.multipart) {
      form = new FormData()
      for (const key in data) {
        form.append(key, data[key])
      }
      reqData = form
      headers["Content-Type"] = form.getHeaders()["content-type"]
    }

    const params = this.formatParams({
      data,
      appId: this.credential.appId,
      signMethod: this.profile.signMethod,
      nonce,
      timestamp,
      accessToken: this.credential.accessToken,
      subversion: SUBVERSION
    })

    const signStr = Sign.formatSignString(params)

    const signature = Sign.sign({
      signStr,
      timestamp,
      appSecret: this.credential.appSecret,
    })

    headers[RequestParamsEnum.SIGN] = signature

    if (!this.credential.accessToken) {
      reqData = null
      headers[RequestParamsEnum.GRANT_TYPE] = RequestParamsEnum.CLIENT_CREDENTIAL
    } else {
      headers[RequestParamsEnum.ACCESS_TOKEN] = this.credential.accessToken
    }

    const fetchParams = {
      url,
      baseURL: this.serverUrl,
      method: reqMethod,
      headers,
      data: { [RequestParamsEnum.DATA_KEY]: reqData},
      timeout: this.profile.reqTimeout * 1000,
    }
    const curl = r2curl(fetchParams)
    console.log(curl)
    return await fetch(fetchParams, this.profile.proxyProfile)
  }

  private formatParams({
    data,
    appId,
    signMethod,
    nonce,
    timestamp,
    accessToken = null,
    subversion
  }: {
    data: any
    appId: string
    signMethod: SignMethod
    nonce: string
    timestamp: number
    accessToken?: string,
    subversion: string
  }): RequestData {
    const signParams: RequestData = {
      [RequestParamsEnum.DATA_KEY]: JSON.stringify(data || ''),
      [RequestParamsEnum.APP_ID]: appId,
      [RequestParamsEnum.SIGN_TYPE]: signMethod,
      [RequestParamsEnum.NONCE]: nonce,
      [RequestParamsEnum.TIMESTAMP]: timestamp,
      [RequestParamsEnum.SUBVERSION]: subversion
    }

    if (accessToken !== null) {
      signParams[RequestParamsEnum.ACCESS_TOKEN] = accessToken
    } else {
      signParams[RequestParamsEnum.GRANT_TYPE] = RequestParamsEnum.CLIENT_CREDENTIAL
      delete signParams[RequestParamsEnum.DATA_KEY]
    }

    return signParams
  }
}
