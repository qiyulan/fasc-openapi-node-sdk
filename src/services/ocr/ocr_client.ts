import { AbstractClient } from "../../common/abstract_client"
import { ClientConfig } from "../../common/interface"
import { GetOcrCompareResultRequest, GetOcrCompareResultResponse } from './ocr_model'

export class Client extends AbstractClient{
  constructor(clientConfig: ClientConfig) {
    super(clientConfig)
  }

  /** 获取历史文件对比数据 */
  async getOcrCompareResult(req: GetOcrCompareResultRequest): Promise<GetOcrCompareResultResponse> {
    return this.request({ url: "/ocr/edit/compare-result-data", req, reqMethod: "POST" })
  }
}