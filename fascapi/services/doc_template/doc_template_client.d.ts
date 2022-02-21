import { AbstractClient } from "../../common/abstract_client";
import { ClientConfig } from "../../common/interface";
import { GetDocTemplateDetailRequest, GetDocTemplateDetailResponse, GetDocTemplateListRequest, GetDocTemplateListResponse } from "./doc_template_models";
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询文档模板列表，列表根据文档模板更新时间倒序排序返回
     */
    getDocTemplateList(req: GetDocTemplateListRequest, cb?: (error: string, res: GetDocTemplateListResponse) => void): Promise<GetDocTemplateListResponse>;
    /**
     * 获取文档模板详情，包括文档模板的基本信息、填写和签章控件和区域信息等
     */
    getDocTemplateDetail(req: GetDocTemplateDetailRequest, cb?: (error: string, res: GetDocTemplateDetailResponse) => void): Promise<GetDocTemplateDetailResponse>;
}
