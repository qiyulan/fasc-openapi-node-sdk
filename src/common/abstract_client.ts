import * as crypto from "crypto"
import FormData from "form-data"
import { ClientConfig, Credential, ClientProfile } from "./interface"
import Sign from "./sign"
import fetch from "./fetch"
import { SignMethod } from "./models"
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
    cb,
  }: {
    url: string
    reqMethod: ReqMethod
    req?: any
    options?: ResponseCallback | RequestOptions
    cb?: ResponseCallback
  }): Promise<ResponseData> {
    if (typeof options === "function") {
      cb = options
      options = {} as RequestOptions
    }

    try {
      const res = await this.doRequest(url, req, reqMethod, options as RequestOptions)
      cb && cb(null, res)
      return res
    } catch (e) {
      cb && cb(e, null)
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
      "X-FASC-App-Id": this.credential.appId,
      "X-FASC-Sign-Type": this.profile.signMethod,
      "X-FASC-Nonce": nonce,
      "X-FASC-Timestamp": timestamp,
      "Content-Type": "application/x-www-form-urlencoded",
    }

    let formatData = null

    let form
    if (reqMethod === "POST" && options?.multipart) {
      form = new FormData()
      for (const key in data) {
        form.append(key, data[key])
      }
      formatData = form
      headers["Content-Type"] = form.getHeaders()["content-type"]
    } else {
      url += "?bizContent=" + encodeURIComponent(JSON.stringify(data) || "")
    }

    const params = this.formatParams({
      data,
      appId: this.credential.appId,
      signMethod: this.profile.signMethod,
      nonce,
      timestamp,
      accessToken: this.credential.accessToken,
    })

    const signStr = Sign.formatSignString(params)

    const signature = Sign.sign({
      signStr,
      timestamp,
      appSecret: this.credential.appSecret,
    })

    headers["X-FASC-Sign"] = signature

    if (this.credential.accessToken !== null) {
      headers["X-FASC-AccessToken"] = this.credential.accessToken
    } else {
      formatData = null
      headers["X-FASC-Grant-Type"] = "client_credential"
    }

    const fetchParams = {
      url,
      baseURL: this.serverUrl,
      method: reqMethod,
      headers,
      data: formatData,
      timeout: this.profile.reqTimeout * 1000,
    }
    return await fetch(fetchParams, this.profile.proxyProfile)
  }

  private formatParams({
    data,
    appId,
    signMethod,
    nonce,
    timestamp,
    accessToken = null,
  }: {
    data: any
    appId: string
    signMethod: SignMethod
    nonce: string
    timestamp: number
    accessToken?: string
  }): RequestData {
    const signParams: RequestData = {
      bizContent: JSON.stringify(data || ''),
      "X-FASC-App-Id": appId,
      "X-FASC-Sign-Type": signMethod,
      "X-FASC-Nonce": nonce,
      "X-FASC-Timestamp": timestamp,
    }

    if (accessToken !== null) {
      signParams["X-FASC-AccessToken"] = accessToken
    } else {
      signParams["X-FASC-Grant-Type"] = "client_credential"
      delete signParams.bizContent
    }

    return signParams
  }
}
