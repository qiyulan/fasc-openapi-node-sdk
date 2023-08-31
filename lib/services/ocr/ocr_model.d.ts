/** getOcrCompareResult 获取历史文件对比数据-请求结构体 */
export interface GetOcrCompareResultRequest {
    /** 合同比对的发起方 */
    initiator: {
        idType: string;
        openId: string;
    };
    /** 合同比对返回的id。 */
    compareId: string;
}
/** getOcrCompareResult 获取历史文件对比数据-响应结构体 */
export interface GetOcrCompareResultResponse {
    compareData: object;
}
