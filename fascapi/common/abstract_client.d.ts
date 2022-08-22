import { ClientConfig, Credential, ClientProfile } from "./interface";
export declare type ReqMethod = "POST" | "GET";
declare type ResponseCallback = (error: string, req: any) => void;
interface RequestOptions {
    multipart: boolean;
}
export interface RequestData {
    "X-FASC-App-Id": string;
    "X-FASC-Sign-Type": string;
    "X-FASC-Nonce": string;
    "X-FASC-Timestamp": number;
    "X-FASC-AccessToken"?: string;
    "X-FASC-Sign"?: string;
    "X-FASC-Grant-Type"?: string;
    "X-FASC-Api-SubVersion": string;
    bizContent: string;
}
declare type ResponseData = any;
export declare class AbstractClient {
    credential: Credential;
    serverUrl: string;
    profile: ClientProfile;
    constructor({ serverUrl, credential, profile }: ClientConfig);
    request({ url, reqMethod, req, options, }: {
        url: string;
        reqMethod: ReqMethod;
        req?: any;
        options?: ResponseCallback | RequestOptions;
    }): Promise<ResponseData>;
    private doRequest;
    private doRequestWithSign;
    private formatParams;
}
export {};
