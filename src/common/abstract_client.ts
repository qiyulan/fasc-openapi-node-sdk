import { Response } from "node-fetch"
import * as crypto from "crypto"
import { ClientConfig, Credential, ClientProfile } from "./interface"
import { sdkVersion } from "./skd_version"
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
  sdkVersion: string
  credential: Credential
  serverUrl: string
  profile: ClientProfile
  constructor({ serverUrl, credential, profile }: ClientConfig) {
    this.credential = { appId: null, appSecret: null, accessToken: null, ...credential }

    this.sdkVersion = sdkVersion
    this.serverUrl = serverUrl
    this.profile = {
      signMethod: profile?.signMethod || SignMethod.hamcsha256,
      reqTimeout: profile?.reqTimeout || 60,
      proxyProfile: {
        proxyFlag: false,
        proxyHost: "",
        proxyPort: "",
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
    } catch (e) {
      cb && cb(e, null)
      throw e
    }
  }

  private async doRequest(url: string, req: any, reqMethod: ReqMethod, options: RequestOptions) {
    if (this.profile.signMethod === SignMethod.hamcsha256) {
      return this.doRequestWithSign(url, req, reqMethod, options)
    } else {
      // TODO 提醒不支持的签名方式
    }
  }

  private async doRequestWithSign(
    url: string,
    data: any,
    reqMethod: ReqMethod,
    options?: RequestOptions
  ) {
    let res
    try {
      const timestamp = new Date().getTime()

      const nonce = crypto.randomBytes(16).toString("hex")
      const config: {
        method: string
        timeout: number
        headers: {
          [key: string]: any
        }
        body?: any
      } = {
        method: reqMethod,
        timeout: this.profile.reqTimeout * 1000,
        headers: {
          "X-FASC-App-Id": this.credential.appId,
          "X-FASC-Sign-Type": this.profile.signMethod,
          "X-FASC-Nonce": nonce,
          "X-FASC-Timestamp": timestamp,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }

      const dataStr = new URLSearchParams(data).toString()

      let form
      if (reqMethod === "POST" && !options?.multipart) {
        config.body = { bizContent: JSON.stringify(data) }
      }
      if (reqMethod === "POST" && options?.multipart) {
        form = new FormData()
        for (const key in data) {
          form.append(key, data[key])
        }
        config.body = form
        config.headers["Content-Type"] = "multipart/form-data"
      }

      if (reqMethod === "GET") {
        url += "?" + new URLSearchParams(data).toString()
      }

      url = this.serverUrl + url

      const signStr = Sign.formatSignString({
        data,
        appId: this.credential.appId,
        signMethod: this.profile.signMethod,
        nonce,
        timestamp,
        accessToken: this.credential.accessToken,
        appSecret: this.credential.appSecret,
      })
      const signature = Sign.sign({
        signStr,
        timestamp,
        appSecret: this.credential.appSecret,
      })

      config.headers["X-FASC-Sign"] = signature

      if (this.credential.accessToken !== null) {
        config.headers["X-FASC-AccessToken"] = this.credential.accessToken
        config.body = null
      } else {
        config.headers["X-FASC-Grant-Type"] = "client_credential"
      }

      console.info("config: ", config)
      console.info("url: ", url)

      res = await fetch(url, config, this.profile.proxyProfile)
    } catch (e: any) {
      throw new FascOpenApiSDKHttpException(e.message)
    }

    return this.parseResponse(res)
  }

  private async parseResponse(res: Response): Promise<ResponseData> {
    if (res) {
      if (res.status !== 200) {
      } else {
        const data = await res.json()
        console.info("响应数据：", data)
      }
    } else {
      throw new FascOpenApiSDKHttpException(`响应为空(${res})`)
    }
  }
}
