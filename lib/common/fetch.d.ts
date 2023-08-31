import { AxiosRequestConfig } from "axios";
import { ProxyProfile } from "./interface";
export default function ({ url, baseURL, method, headers, data }: AxiosRequestConfig, proxy?: ProxyProfile): Promise<import("axios").AxiosResponse<any, any>>;
