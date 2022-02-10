import { RequestInit, Response } from "node-fetch";
import { ProxyProfile } from "./interface";
export default function (url: string, options: RequestInit, proxy?: ProxyProfile): Promise<Response>;
