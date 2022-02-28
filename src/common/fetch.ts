import axios, { AxiosRequestConfig } from "axios"
import https from "https"
import { ProxyProfile } from "./interface"

axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded"

export default function (
  { url, baseURL, method, headers, data }: AxiosRequestConfig,
  proxy?: ProxyProfile
) {
  let requestOptions: AxiosRequestConfig = {
    url,
    baseURL,
    method,
    headers,
    data,
    withCredentials: true,
  }
  if (proxy.proxyFlag === true) {
    requestOptions.proxy = {
      host: proxy.proxyHost,
      port: proxy.proxyPort,
    }
    requestOptions.httpsAgent = new https.Agent({ keepAlive: true })
  }
  return axios(requestOptions)
}
