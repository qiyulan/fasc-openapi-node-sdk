import { SignMethod } from "./models"

/** client对象参数类型 */
export interface ClientConfig {
  /**
   * @param {Credential} credential - 认证信息
   */
  credential: Credential
  /**
   * @type {string} -服务请求地址
   */
  serverUrl: string
  /**
   * @param {ClientProfile} ClientProfile - 可选配置项
   */
  profile?: ClientProfile
}

/** 认证信息 */
export interface Credential {
  /**
   * @type {string} - 法大大平台（FASC-OPENAPI）为每个应用生成唯一的标识AppId，用于在API接口对接时识别不同的应用系统
   */
  appId: string
  /**
   * @type {string} - 法大大平台（FASC-OPENAPI）为每个应用生成唯一的安全访问秘钥，和AppId组成<AppId,AppSecret>对，用于接入认证和参数签名
   */
  appSecret: string
  /**
   * @type {string} - 法大大平台（FASC-OPENAPI）服务访问凭证
   */
  accessToken?: string
}

export interface ProxyProfile {
  /**
   * @type {boolean} - 是否打开代理
   */
  proxyFlag?: boolean
  /**
   * @type {string} - 代理ip
   */
  proxyHost?: string
  /**
   * @type {string} - 代理端口
   */
  proxyPort?: string
}

/** 可选配置项 */
export interface ClientProfile {
  /**
   * @type {string} - 签名方法（HMAC-SHA256）
   */
  signMethod?: SignMethod
  /**
   * @type {number} - 请求超时时间，默认 60s
   */
  reqTimeout?: number
  /**
   * @type {proxyProfile} 代理配置
   */
  proxyProfile?: ProxyProfile
  /**
   * @type {"zh-CN" | "en-US"} - api 请求时附带的 language 字段
   * 非必选
   */
  language?: "zh-CN" | "en-US"
}
