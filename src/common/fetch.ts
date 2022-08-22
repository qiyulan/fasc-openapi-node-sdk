import axios, { AxiosRequestConfig } from "axios"
import https from "https"
import qs from "qs"
import { ProxyProfile } from "./interface"

axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded"
axios.defaults.withCredentials = true

export default function (
  { url, baseURL, method, headers, data }: AxiosRequestConfig,
  proxy?: ProxyProfile
) {
  const requestOptions: AxiosRequestConfig = {
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
  return axios.post(requestOptions.baseURL + url, qs.stringify(data), { headers, withCredentials: true })
}
