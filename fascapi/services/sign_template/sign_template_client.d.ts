import { AbstractClient } from "../../common/abstract_client";
import { ClientConfig } from "../../common/interface";
import { GetSignTemplateDetailRequest, GetSignTemplateDetailResponse, GetSignTemplateListRequest, GetSignTemplateListResponse } from "./sign_template_models";
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询签署模板列表，列表根据签署模板更新时间倒序排序返回
     */
    getSignTemplateList(req: GetSignTemplateListRequest, cb?: (error: string, res: GetSignTemplateListResponse) => void): Promise<GetSignTemplateListResponse>;
    /**
     * 获取签署模板详情，包括签署模板基本信息、文档信息、参与方信息(含各参与方填写控件、签章控件)
     */
    getSignTemplateDetail(req: GetSignTemplateDetailRequest, cb?: (error: string, res: GetSignTemplateDetailResponse) => void): Promise<GetSignTemplateDetailResponse>;
}
