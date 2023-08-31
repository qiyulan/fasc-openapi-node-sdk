import { AbstractClient } from "../../common/abstract_client";
import { ClientConfig } from "../../common/interface";
import { GetOcrCompareResultRequest, GetOcrCompareResultResponse } from './ocr_model';
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /** 获取历史文件对比数据 */
    getOcrCompareResult(req: GetOcrCompareResultRequest): Promise<GetOcrCompareResultResponse>;
}
