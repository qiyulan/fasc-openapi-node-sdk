import { AbstractClient } from "../../common/abstract_client"
import { ClientConfig } from "../../common/interface"
import {
  CreateSignTaskRequest,
  CreateSignTaskResponse,
  CreateWithTemplateRequest,
  CreateWithTemplateResponse,
  AddSignTaskDocRequest,
  AddSignTaskDocResponse,
  DeleteSignTaskDocRequest,
  DeleteSignTaskDocResponse,
  AddSignTaskFieldRequest,
  AddSignTaskFieldResponse,
  DeleteSignTaskFieldRequest,
  DeleteSignTaskFieldResponse,
  GetFieldUrlRequest,
  GetFieldUrlResponse,
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
  InitiateSignTaskRequest,
  InitiateSignTaskResponse,
  CancelSignTaskRequest,
  CancelSignTaskResponse,
  FinalizeSignTaskDocRequest,
  FinalizeSignTaskDocResponse,
  BlockSignTaskRequest,
  BlockSignTaskResponse,
  UnblockSignTaskRequest,
  UnblockSignTaskResponse,
  FinishSignTaskRequest,
  FinishSignTaskResponse,
  GetSignTaskDetailRequest,
  GetSignTaskDetailResponse,
  DownloadFilesRequest,
  DownloadFilesResponse,
  GetSignTaskUrlRequest,
  GetSignTaskUrlResponse,
} from "./sign_task_models"

export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super(clientConfig)
  }

  /**
   * 创建一个签署任务。该接口可创建一个简单的或要素完备的签署任务
   */
  async createSignTask(
    req: CreateSignTaskRequest,
    cb?: (error: string, res: CreateSignTaskResponse) => void
  ): Promise<CreateSignTaskResponse> {
    return this.request({ url: "/sign-task/create", reqMethod: "POST", req, cb })
  }

  /**
   * 在预先已经创作好签署模板的情况下，直接基于签署模板创建比较完整的签署任务。这种方式更快捷方便
   */
  async createWithTemplate(
    req: CreateWithTemplateRequest,
    cb?: (error: string, res: CreateWithTemplateResponse) => void
  ): Promise<CreateWithTemplateResponse> {
    return this.request({ url: "/sign-task/create-with-template", reqMethod: "POST", req, cb })
  }

  /**
   * 从已经创建但尚未发起的签署任务删除文档
   */
  async addSignTaskDoc(
    req: AddSignTaskDocRequest,
    cb?: (error: string, res: AddSignTaskDocResponse) => void
  ): Promise<AddSignTaskDocResponse> {
    return this.request({ url: "/sign-task/doc/add", reqMethod: "POST", req, cb })
  }

  /**
   * 从已经创建但尚未发起的签署任务删除文档
   */
  async deleteSignTaskDoc(
    req: DeleteSignTaskDocRequest,
    cb?: (error: string, res: DeleteSignTaskDocResponse) => void
  ): Promise<DeleteSignTaskDocResponse> {
    return this.request({ url: "/sign-task/doc/delete", reqMethod: "POST", req, cb })
  }

  /**
   * 在签署任务发起之前，向签署任务添加文档控件
   */
  async addSignTaskField(
    req: AddSignTaskFieldRequest,
    cb?: (error: string, res: AddSignTaskFieldResponse) => void
  ): Promise<AddSignTaskFieldResponse> {
    return this.request({ url: "/sign-task/field/add", reqMethod: "POST", req, cb })
  }

  /**
   * 在签署任务发起之前，从签署任务的文档中删除指定控件
   */
  async deleteSignTaskField(
    req: DeleteSignTaskFieldRequest,
    cb?: (error: string, res: DeleteSignTaskFieldResponse) => void
  ): Promise<DeleteSignTaskFieldResponse> {
    return this.request({ url: "/sign-task/field/delete", reqMethod: "POST", req, cb })
  }

  /**
   * 获取签署任务的填写控件、签章控件与参与方关系的设置链接
   */
  async getFieldUrl(
    req: GetFieldUrlRequest,
    cb?: (error: string, res: GetFieldUrlResponse) => void
  ): Promise<GetFieldUrlResponse> {
    return this.request({ url: "/sign-task/field/get-url", reqMethod: "POST", req, cb })
  }

  /**
   * 在签署任务发起之前，向一些填写控件中预先填写内容
   */
  async fillFieldValues(
    req: FillFieldValuesRequest,
    cb?: (error: string, res: FillFieldValuesResponse) => void
  ): Promise<FillFieldValuesResponse> {
    return this.request({ url: "/sign-task/field/fill-values", reqMethod: "POST", req, cb })
  }

  /**
   * 对尚未发起的任务添加附件。可以将已经上传的文件添加进去
   */
  async addAttach(
    req: AddAttachRequest,
    cb?: (error: string, res: AddAttachResponse) => void
  ): Promise<AddAttachResponse> {
    return this.request({ url: "/sign-task/attach/add", reqMethod: "POST", req, cb })
  }

  /**
   * 从尚未发起的签署任务移除附件
   */
  async deleteAttach(
    req: DeleteAttachRequest,
    cb?: (error: string, res: DeleteAttachResponse) => void
  ): Promise<DeleteAttachResponse> {
    return this.request({ url: "/sign-task/attach/delete", reqMethod: "POST", req, cb })
  }

  /**
   * 对已经创建但尚未完成的签署任务添加参与方(包括填写方、签署方、抄送方)
   */
  async addActor(
    req: AddActorRequest,
    cb?: (error: string, res: AddActorResponse) => void
  ): Promise<AddActorResponse> {
    return this.request({ url: "/sign-task/actor/add", reqMethod: "POST", req, cb })
  }

  /**
   * 移除签署任务中的某些参与方。注意：被移除的参与方必须是尚未执行操作的参与方，若某填写方已经完成填写则不能被移除，若某签署方已完成签署则不能被移除
   */
  async deleteActor(
    req: DeleteActorRequest,
    cb?: (error: string, res: DeleteActorResponse) => void
  ): Promise<DeleteActorResponse> {
    return this.request({ url: "/sign-task/actor/delete", reqMethod: "POST", req, cb })
  }

  /**
   * 对已经创建好且尚未发起的签署任务，下发发起指令，签署任务将按照预先设定的流程流转。只有签署任务中的必备要素完备时，才可以发起，例如：必须有文档、参与方等基本参数
   */
  async initiateSignTask(
    req: InitiateSignTaskRequest,
    cb?: (error: string, res: InitiateSignTaskResponse) => void
  ): Promise<InitiateSignTaskResponse> {
    return this.request({ url: "/sign-task/initiate", reqMethod: "POST", req, cb })
  }

  /**
   * 发起方撤销尚未结束的签署任务
   */
  async cancelSignTask(
    req: CancelSignTaskRequest,
    cb?: (error: string, res: CancelSignTaskResponse) => void
  ): Promise<CancelSignTaskResponse> {
    return this.request({ url: "/sign-task/cancel", reqMethod: "POST", req, cb })
  }

  /**
   * 如果创建时设定签署任务不自动定稿(autoFillFinalize=false)，签署任务的所有必填控件填写完成后，调用本接口定稿，定稿完成后的文档将不可再被做任何填写修改
   */
  async finalizeSignTaskDoc(
    req: FinalizeSignTaskDocRequest,
    cb?: (error: string, res: FinalizeSignTaskDocResponse) => void
  ): Promise<FinalizeSignTaskDocResponse> {
    return this.request({ url: "/sign-task/doc/finalize", reqMethod: "POST", req, cb })
  }

  /**
   * 设置签署任务在某个参与方节点的自动阻塞
   */
  async blockSignTask(
    req: BlockSignTaskRequest,
    cb?: (error: string, res: BlockSignTaskResponse) => void
  ): Promise<BlockSignTaskResponse> {
    return this.request({ url: "/sign-task/block", reqMethod: "POST", req, cb })
  }

  /**
   * 解除签署任务某个参与方节点的阻塞设置。如果该签署任务正巧被阻塞在指定的参与方节点，则签署任务继续向下流转
   */
  async unblockSignTask(
    req: UnblockSignTaskRequest,
    cb?: (error: string, res: UnblockSignTaskResponse) => void
  ): Promise<UnblockSignTaskResponse> {
    return this.request({ url: "/sign-task/unblock", reqMethod: "POST", req, cb })
  }

  /**
   * 若创建签署任务时设定不自动结束(autoFinish=false)，则在所有签署方都完成签署后，需要调动本接口驱动签署任务结束。
   * 签署任务结束后，会形成签署完结的合同，且不可再对该签署任务做任何动作
   */
  async finishSignTask(
    req: FinishSignTaskRequest,
    cb?: (error: string, res: FinishSignTaskResponse) => void
  ): Promise<FinishSignTaskResponse> {
    return this.request({ url: "/sign-task/finish", reqMethod: "POST", req, cb })
  }

  /**
   * 获取指定签署任务的详情信息和状态
   */
  async getSignTaskDetail(
    req: GetSignTaskDetailRequest,
    cb?: (error: string, res: GetSignTaskDetailResponse) => void
  ): Promise<GetSignTaskDetailResponse> {
    return this.request({ url: "/sign-task/get-detail", reqMethod: "POST", req, cb })
  }

  /**
   * 直接以文件流形式下载签署任务中的文档或附件
   */
  async downloadFiles(
    req: DownloadFilesRequest,
    cb?: (error: string, res: DownloadFilesResponse) => void
  ): Promise<DownloadFilesResponse> {
    return this.request({ url: "/sign-task/download-files", reqMethod: "POST", req, cb })
  }

  /**
   * 针对有访问此签署任务详情和操作权限的**参与方或发起方**，返回该签署任务的链接
   */
  async getSignTaskUrl(
    req: GetSignTaskUrlRequest,
    cb?: (error: string, res: GetSignTaskUrlResponse) => void
  ): Promise<GetSignTaskUrlResponse> {
    return this.request({ url: "/sign-task/get-url", reqMethod: "POST", req, cb })
  }
}
