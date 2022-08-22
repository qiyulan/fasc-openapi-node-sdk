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
  BlockRequest,
  BlockResponse,
  UnblockRequest,
  UnblockResponse,
  GetOwnerListRequest,
  GetOwnerListResponse,
  GetDetailRequest,
  GetDetailResponse,
  GetOwnerDownLoadUrlRequest,
  GetOwnerDownLoadUrlResponse,
} from "./sign_task_models"

export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super(clientConfig)
  }

  /**
   * 创建一个签署任务。该接口可创建一个简单的或要素完备的签署任务
   */
  async create(req: CreateRequest): Promise<CreateResponse> {
    return this.request({ url: "/sign-task/create", reqMethod: "POST", req })
  }

  /**
   * 在预先已经创作好签署模板的情况下，直接基于签署模板创建比较完整的签署任务。这种方式更快捷方便
   */
  async createWithTemplate(req: CreateWithTemplateRequest): Promise<CreateWithTemplateResponse> {
    return this.request({ url: "/sign-task/create-with-template", reqMethod: "POST", req })
  }

  /**
   * 在**签署任务提交**之前，向签署任务添加文档。可以将已经上传的文档文件或预先定义好的文档模板作为签署任务文档添加进去
   */
  async addDoc(req: AddDocRequest): Promise<AddDocResponse> {
    return this.request({ url: "/sign-task/doc/add", reqMethod: "POST", req })
  }

  /**
   * 在**签署任务提交**之前，从签署任务中删除文档
   */
  async deleteDoc(req: DeleteDocRequest): Promise<DeleteDocResponse> {
    return this.request({ url: "/sign-task/doc/delete", reqMethod: "POST", req })
  }

  /**
   * 在签署任务发起之前，向签署任务添加文档控件
   */
  async addField(req: AddFieldRequest): Promise<AddFieldResponse> {
    return this.request({ url: "/sign-task/field/add", reqMethod: "POST", req })
  }

  /**
   * 在签署任务发起之前，从签署任务的文档中删除指定控件
   */
  async deleteField(req: DeleteFieldRequest): Promise<DeleteFieldResponse> {
    return this.request({ url: "/sign-task/field/delete", reqMethod: "POST", req })
  }

  /**
   * 在签署任务发起之前，向一些填写控件中预先填写内容
   */
  async fillFieldValues(req: FillFieldValuesRequest): Promise<FillFieldValuesResponse> {
    return this.request({ url: "/sign-task/field/fill-values", reqMethod: "POST", req })
  }

  /**
   * 对尚未发起的任务添加附件。可以将已经上传的文件添加进去
   */
  async addAttach(req: AddAttachRequest): Promise<AddAttachResponse> {
    return this.request({ url: "/sign-task/attach/add", reqMethod: "POST", req })
  }

  /**
   * 从尚未发起的签署任务移除附件
   */
  async deleteAttach(req: DeleteAttachRequest): Promise<DeleteAttachResponse> {
    return this.request({ url: "/sign-task/attach/delete", reqMethod: "POST", req })
  }

  /**
   * 对已经创建但尚未完成的签署任务添加参与方(包括填写方、签署方、抄送方)
   */
  async addActor(req: AddActorRequest): Promise<AddActorResponse> {
    return this.request({ url: "/sign-task/actor/add", reqMethod: "POST", req })
  }

  /**
   * 移除签署任务中的某些参与方。注意：被移除的参与方必须是尚未执行操作的参与方，若某填写方已经完成填写则不能被移除，若某签署方已完成签署则不能被移除
   */
  async deleteActor(req: DeleteActorRequest): Promise<DeleteActorResponse> {
    return this.request({ url: "/sign-task/actor/delete", reqMethod: "POST", req })
  }

  /**
   * 提交签署任务
   * 对**尚未提交**的签署任务，下发提交指令，签署任务将进入内容协同流程
   */
  async start(req: StartRequest): Promise<StartResponse> {
    return this.request({ url: "/sign-task/start", reqMethod: "POST", req })
  }

  /**
   * 发起方撤销尚未结束的签署任务
   */
  async cancel(req: CancelRequest): Promise<CancelResponse> {
    return this.request({ url: "/sign-task/cancel", reqMethod: "POST", req })
  }

  /**
   * 对**内容已填写**的签署任务，下发定稿指令，签署任务将进入定稿流程。如果创建时设定签署任务不自动定稿
   */
  async finalizeDoc(req: FinalizeDocRequest): Promise<FinalizeDocResponse> {
    return this.request({ url: "/sign-task/doc-finalize", reqMethod: "POST", req })
  }

  /**
   * 设置签署任务在某个参与方节点的自动阻塞
   */
  async block(req: BlockRequest): Promise<BlockResponse> {
    return this.request({ url: "/sign-task/block", reqMethod: "POST", req })
  }

  /**
   * 解除签署任务某个参与方节点的阻塞设置。如果该签署任务正巧被阻塞在指定的参与方节点，则签署任务继续向下流转
   */
  async unblock(req: UnblockRequest): Promise<UnblockResponse> {
    return this.request({ url: "/sign-task/unblock", reqMethod: "POST", req })
  }

  /**
   * 获取指定签署任务的详情信息和状态
   */
  async getDetail(req: GetDetailRequest): Promise<GetDetailResponse> {
    return this.request({ url: "/sign-task/app/get-detail", reqMethod: "POST", req })
  }

  /**
   * 获取指定归属方的签署任务列表
   * 支持指定归属方的签署任务列表
   */
  async getOwnerList(req: GetOwnerListRequest): Promise<GetOwnerListResponse> {
    return this.request({ url: "/sign-task/owner/get-list", reqMethod: "POST", req })
  }

  /**
   * 获取指定归属方的签署任务文档下载地址
   * 获取签署文档的下载地址，集成方根据该接口返回的下载地址下载具体的签署文档或附件
   */
  async getOwnerDownLoadUrl(req: GetOwnerDownLoadUrlRequest): Promise<GetOwnerDownLoadUrlResponse> {
    return this.request({ url: "/sign-task/owner/get-download-url", reqMethod: "POST", req })
  }
}