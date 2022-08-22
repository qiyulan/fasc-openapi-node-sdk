import { AbstractClient } from "../../common/abstract_client";
import { ClientConfig } from "../../common/interface";
import { GetDocTemplateDetailRequest, GetDocTemplateDetailResponse, GetDocTemplateListRequest, GetDocTemplateListResponse, GetSignTemplateDetailRequest, GetSignTemplateDetailResponse, GetSignTemplateListRequest, GetSignTemplateListResponse, GetManageUrlRequest, GetManageUrlResponse } from "./template_models";
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询文档模板列表，列表根据文档模板更新时间倒序排序返回
     */
    getDocTemplateList(req?: GetDocTemplateListRequest): Promise<GetDocTemplateListResponse>;
    /**
     * 获取文档模板详情，包括文档模板的基本信息、填写和签章控件和区域信息等
     */
    getDocTemplateDetail(req: GetDocTemplateDetailRequest): Promise<GetDocTemplateDetailResponse>;
    /**
     * 查询签署模板列表，列表根据签署模板更新时间倒序排序返回
     */
    getSignTemplateList(req: GetSignTemplateListRequest): Promise<GetSignTemplateListResponse>;
    /**
     * 获取签署模板详情，包括签署模板基本信息、文档信息、参与方信息(含各参与方填写控件、签章控件)
     */
    getSignTemplateDetail(req: GetSignTemplateDetailRequest): Promise<GetSignTemplateDetailResponse>;
    /**
     * 业务系统向法大大平台获取模板管理页面链接，该页面无需法大大账号登录，用于对指定企业主体的模板进行管理操作
     */
    getManageUrl(req: GetManageUrlRequest): Promise<GetManageUrlResponse>;
}
