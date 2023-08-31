import { AbstractClient } from "../../common/abstract_client";
import { ClientConfig } from "../../common/interface";
import { GetDocTemplateDetailRequest, GetDocTemplateDetailResponse, GetDocTemplateListRequest, GetDocTemplateListResponse, GetSignTemplateDetailRequest, GetSignTemplateDetailResponse, GetSignTemplateListRequest, GetSignTemplateListResponse, GetTemplateManageUrlRequest, GetTemplateManageUrlResponse, SetDocTemplateStatusRequest, SetDocTemplateStatusResponse, DeleteDocTemplateRequest, DeleteDocTemplateResponse, SetSignTemplateStatusRequest, SetSignTemplateStatusResponse, DeleteSignTemplateRequest, DeleteSignTemplateResponse, GetTemplateCreateUrlRequest, GetTemplateCreateUrlResponse, GetTemplateEditUrlRequest, GetTemplateEditUrlResponse, GetTemplatePreviewUrlRequest, GetTemplatePreviewUrlResponse, GetAppDocTemplateListRequest, GetAppDocTemplateListResponse, GetAppDocTemplateDetailRequest, GetAppDocTemplateDetailResponse, SetAppDocTemplateStatusRequest, SetAppDocTemplateStatusResponse, DeleteAppDocTemplateRequest, DeleteAppDocTemplateResponse, GetAppSignTemplateListRequest, GetAppSignTemplateListResponse, GetAppSignTemplateDetailRequest, GetAppSignTemplateDetailResponse, SetAppSignTemplateStatusRequest, SetAppSignTemplateStatusResponse, GetAppTemplateCreateUrlRequest, GetAppTemplateCreateUrlResponse, GetAppTemplateEditUrlRequest, GetAppTemplateEditUrlResponse, GetAppTemplatePreviewUrlRequest, GetAppTemplatePreviewUrlResponse, CreateAppFieldRequest, CreateAppFieldResponse, ModifyAppFieldRequest, ModifyAppFieldResponse, SetAppFieldStatusRequest, SetAppFieldStatusResponse, GetAppFieldListRequest, GetAppFieldListResponse, CreateCorpFieldRequest, CreateCorpFieldResponse, DeleteCorpFieldRequest, DeleteCorpFieldResponse } from "./template_models";
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /** 查询文档模板列表 */
    getDocTemplateList(req?: GetDocTemplateListRequest): Promise<GetDocTemplateListResponse>;
    /** 查询文档模板详情 */
    getDocTemplateDetail(req: GetDocTemplateDetailRequest): Promise<GetDocTemplateDetailResponse>;
    /** 启用/停用文档模板 */
    setDocTemplateStatus(req: SetDocTemplateStatusRequest): Promise<SetDocTemplateStatusResponse>;
    /** 删除文档模板 */
    deleteDocTemplate(req: DeleteDocTemplateRequest): Promise<DeleteDocTemplateResponse>;
    /** 查询签署任务模板列表 */
    getSignTemplateList(req: GetSignTemplateListRequest): Promise<GetSignTemplateListResponse>;
    /** 查询签署任务模板详情 */
    getSignTemplateDetail(req: GetSignTemplateDetailRequest): Promise<GetSignTemplateDetailResponse>;
    /** 启用/停用签署任务模板 */
    setSignTemplateStatus(req: SetSignTemplateStatusRequest): Promise<SetSignTemplateStatusResponse>;
    /** 删除签署任务模板 */
    deleteSignTemplate(req: DeleteSignTemplateRequest): Promise<DeleteSignTemplateResponse>;
    /** 获取模板管理链接 */
    getTemplateManageUrl(req: GetTemplateManageUrlRequest): Promise<GetTemplateManageUrlResponse>;
    /** 获取模板新增链接 */
    getTemplateCreateUrl(req: GetTemplateCreateUrlRequest): Promise<GetTemplateCreateUrlResponse>;
    /** 获取模板编辑链接 */
    getTemplateEditUrl(req: GetTemplateEditUrlRequest): Promise<GetTemplateEditUrlResponse>;
    /** 获取模板预览链接 */
    getTemplatePreviewUrl(req: GetTemplatePreviewUrlRequest): Promise<GetTemplatePreviewUrlResponse>;
    /** 查询应用文档模板列表 */
    getAppDocTemplateList(req: GetAppDocTemplateListRequest): Promise<GetAppDocTemplateListResponse>;
    /** 查询应用文档模板详情 */
    getAppDocTemplateDetail(req: GetAppDocTemplateDetailRequest): Promise<GetAppDocTemplateDetailResponse>;
    /** 启用/停用应用文档模板 */
    setAppDocTemplateStatus(req: SetAppDocTemplateStatusRequest): Promise<SetAppDocTemplateStatusResponse>;
    /** 删除应用文档模板 */
    deleteAppDocTemplate(req: DeleteAppDocTemplateRequest): Promise<DeleteAppDocTemplateResponse>;
    /** 查询应用签署任务模板列表 */
    getAppSignTemplateList(req: GetAppSignTemplateListRequest): Promise<GetAppSignTemplateListResponse>;
    /** 查询应用签署任务模板详情 */
    getAppSignTemplateDetail(req: GetAppSignTemplateDetailRequest): Promise<GetAppSignTemplateDetailResponse>;
    /** 启用/停用应用签署任务模板 */
    setAppSignTemplateStatus(req: SetAppSignTemplateStatusRequest): Promise<SetAppSignTemplateStatusResponse>;
    /** 获取应用模板新增链接 */
    getAppTemplateCreateUrl(req: GetAppTemplateCreateUrlRequest): Promise<GetAppTemplateCreateUrlResponse>;
    /** 获取应用模板编辑链接 */
    getAppTemplateEditUrl(req: GetAppTemplateEditUrlRequest): Promise<GetAppTemplateEditUrlResponse>;
    /** 获取应用模板预览链接 */
    getAppTemplatePreviewUrl(req: GetAppTemplatePreviewUrlRequest): Promise<GetAppTemplatePreviewUrlResponse>;
    /** 创建业务控件 */
    createAppField(req: CreateAppFieldRequest): Promise<CreateAppFieldResponse>;
    /** 修改业务控件 */
    modifyAppField(req: ModifyAppFieldRequest): Promise<ModifyAppFieldResponse>;
    /** 设置业务控件状态 */
    setAppFieldStatus(req: SetAppFieldStatusRequest): Promise<SetAppFieldStatusResponse>;
    /** 查询业务控件列表 */
    getAppFieldList(req: GetAppFieldListRequest): Promise<GetAppFieldListResponse>;
    /** 创建自定义控件 */
    createCorpField(req: CreateCorpFieldRequest): Promise<CreateCorpFieldResponse>;
    /** 删除自定义控件 */
    deleteCorpField(req: DeleteCorpFieldRequest): Promise<DeleteCorpFieldResponse>;
    /** 查询自定义控件列表 */
    getCorpFieldList(req: DeleteCorpFieldRequest): Promise<DeleteCorpFieldResponse>;
}
