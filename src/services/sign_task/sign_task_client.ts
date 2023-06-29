import { AbstractClient } from "../../common/abstract_client"
import { ClientConfig } from "../../common/interface"
import {
  CreateRequest,
  CreateResponse,
  CreateWithTemplateRequest,
  CreateWithTemplateResponse,
  AddDocRequest,
  AddDocResponse,
  DeleteDocRequest,
  DeleteDocResponse,
  AddFieldRequest,
  AddFieldResponse,
  DeleteFieldRequest,
  DeleteFieldResponse,
  FillFieldValuesRequest,
  FillFieldValuesResponse,
  AddAttachRequest,
  AddAttachResponse,
  DeleteAttachRequest,
  DeleteAttachResponse,
  AddActorRequest,
  AddActorResponse,
  DeleteActorRequest,
  DeleteActorResponse,
  StartRequest,
  StartResponse,
  CancelRequest,
  CancelResponse,
  FinalizeDocRequest,
  FinalizeDocResponse,
  UrgeSignTaskRequest,
  UrgeSignTaskResponse,
  BlockRequest,
  BlockResponse,
  UnblockRequest,
  UnblockResponse,
  FinishRequest,
  FinishResponse,
  GetOwnerListRequest,
  GetOwnerListResponse,
  GetDetailRequest,
  GetDetailResponse,
  GetOwnerDownLoadUrlRequest,
  GetOwnerDownLoadUrlResponse,
  GetSignTaskEditUrlRequest,
  GetSignTaskEditUrlResponse,
  GetSignTaskPreviewUrlRequest,
  GetSignTaskPreviewUrlResponse,
  GetActorUrlRequest,
  GetActorUrlResponse,
  GetActorBatchSignTaskUrlRequest,
  GetActorBatchSignTaskUrlResponse,
  GetSignTaskActorListRequest,
  GetSignTaskActorListResponse,
  GetSignTaskFieldListRequest,
  GetSignTaskFieldListResponse,
  GetSignTaskApprovalInfoRequest,
  GetSignTaskApprovalInfoResponse,
  GetSignTaskCatalogListRequest,
  GetSignTaskCatalogListResponse,
  GetSignTaskBusinessTypeListRequest,
  GetSignTaskBusinessTypeListResponse,
  GetEvidenceReportDownloadRequest,
  GetEvidenceReportDownloadResponse,
  GetActorFacePictureRequest,
  GetActorFacePictureResponse,
  GetSignTaskPicDownLoadUrlRequest,
  GetSignTaskPicDownLoadUrlResponse,
  AbolishRequest,
  AbolishResponse,
  DeleteRequest,
  DeleteResponse,
  GetV3ActorSignTaskUrlRequest,
  GetV3ActorSignTaskUrlResponse
} from "./sign_task_models"

export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super(clientConfig)
  }

  /** 创建签署任务(基于文档) */
  async create(req: CreateRequest): Promise<CreateResponse> {
    return this.request({ url: "/sign-task/create", reqMethod: "POST", req })
  }

  /** 创建签署任务(基于签署任务模板) */
  async createWithTemplate(req: CreateWithTemplateRequest): Promise<CreateWithTemplateResponse> {
    return this.request({ url: "/sign-task/create-with-template", reqMethod: "POST", req })
  }

  /** 添加签署任务文档 */
  async addDoc(req: AddDocRequest): Promise<AddDocResponse> {
    return this.request({ url: "/sign-task/doc/add", reqMethod: "POST", req })
  }

  /** 移除签署任务文档 */
  async deleteDoc(req: DeleteDocRequest): Promise<DeleteDocResponse> {
    return this.request({ url: "/sign-task/doc/delete", reqMethod: "POST", req })
  }

  /** 添加签署任务控件 */
  async addField(req: AddFieldRequest): Promise<AddFieldResponse> {
    return this.request({ url: "/sign-task/field/add", reqMethod: "POST", req })
  }

  /** 移除签署任务控件 */
  async deleteField(req: DeleteFieldRequest): Promise<DeleteFieldResponse> {
    return this.request({ url: "/sign-task/field/delete", reqMethod: "POST", req })
  }

  /** 填写签署任务控件内容 */
  async fillFieldValues(req: FillFieldValuesRequest): Promise<FillFieldValuesResponse> {
    return this.request({ url: "/sign-task/field/fill-values", reqMethod: "POST", req })
  }

  /** 添加签署任务附件 */
  async addAttach(req: AddAttachRequest): Promise<AddAttachResponse> {
    return this.request({ url: "/sign-task/attach/add", reqMethod: "POST", req })
  }

  /** 移除签署任务附件 */
  async deleteAttach(req: DeleteAttachRequest): Promise<DeleteAttachResponse> {
    return this.request({ url: "/sign-task/attach/delete", reqMethod: "POST", req })
  }

  /** 添加签署任务参与方 */
  async addActor(req: AddActorRequest): Promise<AddActorResponse> {
    return this.request({ url: "/sign-task/actor/add", reqMethod: "POST", req })
  }

  /** 移除签署任务参与方 */
  async deleteActor(req: DeleteActorRequest): Promise<DeleteActorResponse> {
    return this.request({ url: "/sign-task/actor/delete", reqMethod: "POST", req })
  }

  /** 获取签署任务编辑链接 */
  async getSignTaskEditUrl(req: GetSignTaskEditUrlRequest): Promise<GetSignTaskEditUrlResponse> {
    return this.request({ url: "/sign-task/get-edit-url", reqMethod: "POST", req })
  }

  /** 获取签署任务预览链接 */
  async getSignTaskPreviewUrl(req: GetSignTaskPreviewUrlRequest): Promise<GetSignTaskPreviewUrlResponse> {
    return this.request({ url: "/sign-task/get-preview-url", reqMethod: "POST", req })
  }

  /** 获取参与方签署链接 */
  async getActorUrl(req: GetActorUrlRequest): Promise<GetActorUrlResponse> {
    return this.request({ url: "/sign-task/actor/get-url", reqMethod: "POST", req })
  }

  /** 获取参与方批量签署链接 */
  async getActorBatchSignTaskUrl(req: GetActorBatchSignTaskUrlRequest): Promise<GetActorBatchSignTaskUrlResponse> {
    return this.request({ url: "/sign-task/get-batch-sign-url", reqMethod: "POST", req })
  }

  /** 获取参与方签署链接（API3.0任务专属） */
  async getV3ActorSignTaskUrl(req: GetV3ActorSignTaskUrlRequest): Promise<GetV3ActorSignTaskUrlResponse> {
    return this.request({ url: "/sign-task/actor/v3/get-url", reqMethod: "POST", req })
  }

  /** 提交签署任务 */
  async start(req: StartRequest): Promise<StartResponse> {
    return this.request({ url: "/sign-task/start", reqMethod: "POST", req })
  }

  /** 撤销签署任务 */
  async cancel(req: CancelRequest): Promise<CancelResponse> {
    return this.request({ url: "/sign-task/cancel", reqMethod: "POST", req })
  }

  /** 定稿签署任务 */
  async finalizeDoc(req: FinalizeDocRequest): Promise<FinalizeDocResponse> {
    return this.request({ url: "/sign-task/doc-finalize", reqMethod: "POST", req })
  }

  /** 催办签署任务 */
  async urgeSignTask(req: UrgeSignTaskRequest): Promise<UrgeSignTaskResponse> {
    return this.request({ url: "/sign-task/urge", reqMethod: "POST", req })
  }

  /** 阻塞签署任务 */
  async block(req: BlockRequest): Promise<BlockResponse> {
    return this.request({ url: "/sign-task/block", reqMethod: "POST", req })
  }

  /** 解阻签署任务 */
  async unblock(req: UnblockRequest): Promise<UnblockResponse> {
    return this.request({ url: "/sign-task/unblock", reqMethod: "POST", req })
  }

  /** 结束签署任务 */
  async finish(req: FinishRequest): Promise<FinishResponse> {
    return this.request({ url: "/sign-task/finish", reqMethod: "POST", req })
  }

  /** 作废签署任务 */
  async abolish(req: AbolishRequest): Promise<AbolishResponse> {
    return this.request({ url: "/sign-task/abolish", reqMethod: "POST", req })
  }

  /** 删除签署任务 */
  async delete(req: DeleteRequest): Promise<DeleteResponse> {
    return this.request({ url: "/sign-task/delete", reqMethod: "POST", req })
  }

  /** 查询签署任务详情 */
  async getDetail(req: GetDetailRequest): Promise<GetDetailResponse> {
    return this.request({ url: "/sign-task/app/get-detail", reqMethod: "POST", req })
  }

  /** 查询签署任务列表 */
  async getOwnerList(req: GetOwnerListRequest): Promise<GetOwnerListResponse> {
    return this.request({ url: "/sign-task/owner/get-list", reqMethod: "POST", req })
  }

  /** 查询参与方身份信息 */
  async getSignTaskActorList(req: GetSignTaskActorListRequest): Promise<GetSignTaskActorListResponse> {
    return this.request({ url: "/sign-task/actor/list", reqMethod: "POST", req })
  }

  /** 查询参与方填写内容 */
  async getSignTaskFieldList(req: GetSignTaskFieldListRequest): Promise<GetSignTaskFieldListResponse> {
    return this.request({ url: "/sign-task/field/list", reqMethod: "POST", req })
  }

  /** 查询签署任务审批信息 */
  async getSignTaskApprovalInfo(req: GetSignTaskApprovalInfoRequest): Promise<GetSignTaskApprovalInfoResponse> {
    return this.request({ url: "/sign-task/get-approval-info", reqMethod: "POST", req })
  }

  /** 查询企业签署任务文件夹列表 */
  async getSignTaskCatalogList(req: GetSignTaskCatalogListRequest): Promise<GetSignTaskCatalogListResponse> {
    return this.request({ url: "/sign-task-catalog/list", reqMethod: "POST", req })
  }

  /** 查询签署业务类型列表 */
  async getSignTaskBusinessTypeList(req: GetSignTaskBusinessTypeListRequest): Promise<GetSignTaskBusinessTypeListResponse> {
    return this.request({ url: "/sign-task/business-type/get-list", reqMethod: "POST", req })
  }

  /** 获取签署过程保全报告下载地址 */
  async getEvidenceReportDownloadUrl(req: GetEvidenceReportDownloadRequest): Promise<GetEvidenceReportDownloadResponse> {
    return this.request({ url: "/sign-task/evidence-report/get-download-url", reqMethod: "POST", req })
  }

  /** 获取签署文档下载地址 */
  async getOwnerDownLoadUrl(req: GetOwnerDownLoadUrlRequest): Promise<GetOwnerDownLoadUrlResponse> {
    return this.request({ url: "/sign-task/owner/get-download-url", reqMethod: "POST", req })
  }

  /** 获取签署任务参与方刷脸底图 */
  async getActorFacePicture(req: GetActorFacePictureRequest): Promise<GetActorFacePictureResponse> {
    return this.request({ url: "/sign-task/actor/get-face-picture", reqMethod: "POST", req })
  }

  /** 获取图片版签署文档下载地址 */
  async getSignTaskPicDownLoadUrl(req: GetSignTaskPicDownLoadUrlRequest): Promise<GetSignTaskPicDownLoadUrlResponse> {
    return this.request({ url: "/sign-task/owner/get-pic-download-url", reqMethod: "POST", req })
  }


}