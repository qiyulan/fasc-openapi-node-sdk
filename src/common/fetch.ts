import fetch, { RequestInit, Response } from "node-fetch"
import HttpsProxyAgent = require("https-proxy-agent")
import { ProxyProfile } from "./interface"

export default function (
  url: string,
  options: RequestInit,
  proxy?: ProxyProfile
): Promise<Response> {
  const instanceOptions = options || {}

  if (!options.agent && proxy.proxyFlag) {
    instanceOptions.agent = new (HttpsProxyAgent as any)(
      proxy.proxyHost + proxy.proxyPort ? `:${proxy.proxyPort}` : ""
    )
  }

  return fetch(url, instanceOptions)
}
