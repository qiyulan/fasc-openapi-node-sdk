import { SignMethod } from "./models";
export default class Sign {
    static sign({ signStr, timestamp, appSecret, }: {
        signStr: string;
        timestamp: number;
        appSecret: string;
    }): string;
    static formatSignString({ data, appId, signMethod, nonce, timestamp, accessToken, }: {
        data: any;
        appId: string;
        signMethod: SignMethod;
        nonce: string;
        timestamp: number;
        accessToken?: string;
    }): string;
}
