interface Obj {
    [propName: string]: any;
}
export default class Sign {
    static sign({ signStr, timestamp, appSecret, }: {
        signStr: string;
        timestamp: number | string;
        appSecret: string;
    }): string;
    static formatSignString(signParams: Obj): string;
}
export {};
