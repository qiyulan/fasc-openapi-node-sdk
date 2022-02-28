import * as crypto from "crypto"
import isStream from "is-stream"
import { RequestData } from "./abstract_client"
import { SignMethod } from "./models"

export default class Sign {
  static sign({
    signStr,
    timestamp,
    appSecret,
  }: {
    signStr: string
    timestamp: number
    appSecret: string
  }): string {
    // SHA256算法加密排序后的字符串
    const signText = crypto.createHash("sha256").update(signStr).digest("hex")

    const timestampSecret = crypto
      .createHmac("sha256", appSecret)
      .update(String(timestamp))
      .digest()

    const hash = crypto.createHmac("sha256", timestampSecret).update(signText).digest("hex")

    return hash
  }

  static formatSignString({
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
  }): string {
    const data2JsonStr = JSON.stringify(data)
    const signParams: RequestData = {
      bizContent: data2JsonStr,
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

    let strParam = ""
    // 去除字节流参数
    removeStream(signParams)
    // 去除值为空的字段
    deepRemoveNull(signParams)
    const keys = Object.keys(signParams)
    // 排序
    keys.sort()
    // 参数拼接，去除重复的key
    for (const k in keys) {
      if (!keys.hasOwnProperty(k)) {
        continue
      }
      //k = k.replace(/_/g, '.');
      strParam += "&" + keys[k] + "=" + signParams[keys[k] as keyof RequestData]
    }
    const signStr = strParam.slice(1)
    return signStr
  }
}

function removeStream(data: any) {
  for (const key in data) {
    if (isStream(data[key])) {
      delete data[key]
    }
  }
}

function deepRemoveNull(obj: any) {
  if (isArray(obj)) {
    return obj.map(deepRemoveNull)
  } else if (isObject(obj)) {
    const result: any = {}
    for (const key in obj) {
      const value = obj[key]
      if (!isNull(value)) {
        result[key] = deepRemoveNull(value)
      }
    }
    return result
  } else {
    return obj
  }
}

function isBuffer(x: any): boolean {
  return Buffer.isBuffer(x)
}

function isArray(x: any): boolean {
  return Array.isArray(x)
}

function isObject(x: any): boolean {
  return typeof x === "object" && !isArray(x) && !isStream(x) && !isBuffer(x) && x !== null
}

function isNull(x: any): boolean {
  return x === null
}
