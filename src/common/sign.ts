import * as crypto from "crypto"
import isStream from "is-stream"

interface Obj {
  [propName: string]: any
}

export default class Sign {
  static sign({
    signStr,
    timestamp,
    appSecret,
  }: {
    signStr: string
    timestamp: number | string
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

  static formatSignString(signParams: Obj): string {
    let params = {...signParams}
    let strParam = ""
    // 去除字节流参数
    removeStream(params)
    // 去除值为空的字段
    params = deepRemoveNull(params)
    const keys = Object.keys(params)
    // 排序
    keys.sort()
    // 参数拼接，去除重复的key
    for (const k in keys) {
      if (!keys.hasOwnProperty(k)) {
        continue
      }
      strParam += "&" + keys[k] + "=" + params[keys[k] as keyof Obj]
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
      if (!isBlank(value)) {
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
  return typeof x === "object" && !isArray(x) && !isStream(x) && !isBuffer(x)
}

function isNull(x: any): boolean {
  return x === null
}

function isBlank(x: any): boolean {
  if (typeof x === 'string') {
    return x.trim() === ''
  } else {
    return x === null || x === undefined
  }
}
