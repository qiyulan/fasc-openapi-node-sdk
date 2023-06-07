import { AbstractClient } from "../../common/abstract_client";
import { ClientConfig } from "../../common/interface";
import { CreateRequest, CreateResponse, CreateWithTemplateRequest, CreateWithTemplateResponse, AddDocRequest, AddDocResponse, DeleteDocRequest, DeleteDocResponse, AddFieldRequest, AddFieldResponse, DeleteFieldRequest, DeleteFieldResponse, FillFieldValuesRequest, FillFieldValuesResponse, AddAttachRequest, AddAttachResponse, DeleteAttachRequest, DeleteAttachResponse, AddActorRequest, AddActorResponse, DeleteActorRequest, DeleteActorResponse, StartRequest, StartResponse, CancelRequest, CancelResponse, FinalizeDocRequest, FinalizeDocResponse, BlockRequest, BlockResponse, UnblockRequest, UnblockResponse, GetOwnerListRequest, GetOwnerListResponse, GetDetailRequest, GetDetailResponse, GetOwnerDownLoadUrlRequest, GetOwnerDownLoadUrlResponse } from "./sign_task_models";
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 创建一个签署任务。该接口可创建一个简单的或要素完备的签署任务
     */
    create(req: CreateRequest): Promise<CreateResponse>;
    /**
     * 在预先已经创作好签署模板的情况下，直接基于签署模板创建比较完整的签署任务。这种方式更快捷方便
     */
    createWithTemplate(req: CreateWithTemplateRequest): Promise<CreateWithTemplateResponse>;
    /**
     * 在**签署任务提交**之前，向签署任务添加文档。可以将已经上传的文档文件或预先定义好的文档模板作为签署任务文档添加进去
     */
    addDoc(req: AddDocRequest): Promise<AddDocResponse>;
    /**
     * 在**签署任务提交**之前，从签署任务中删除文档
     */
    deleteDoc(req: DeleteDocRequest): Promise<DeleteDocResponse>;
    /**
     * 在签署任务发起之前，向签署任务添加文档控件
     */
    addField(req: AddFieldRequest): Promise<AddFieldResponse>;
    /**
     * 在签署任务发起之前，从签署任务的文档中删除指定控件
     */
    deleteField(req: DeleteFieldRequest): Promise<DeleteFieldResponse>;
    /**
     * 在签署任务发起之前，向一些填写控件中预先填写内容
     */
    fillFieldValues(req: FillFieldValuesRequest): Promise<FillFieldValuesResponse>;
    /**
     * 对尚未发起的任务添加附件。可以将已经上传的文件添加进去
     */
    addAttach(req: AddAttachRequest): Promise<AddAttachResponse>;
    /**
     * 从尚未发起的签署任务移除附件
     */
    deleteAttach(req: DeleteAttachRequest): Promise<DeleteAttachResponse>;
    /**
     * 对已经创建但尚未完成的签署任务添加参与方(包括填写方、签署方、抄送方)
     */
    addActor(req: AddActorRequest): Promise<AddActorResponse>;
    /**
     * 移除签署任务中的某些参与方。注意：被移除的参与方必须是尚未执行操作的参与方，若某填写方已经完成填写则不能被移除，若某签署方已完成签署则不能被移除
     */
    deleteActor(req: DeleteActorRequest): Promise<DeleteActorResponse>;
    /** 获取签署任务参与方专属链接 */
    getActorUrl(req: DeleteActorRequest): Promise<DeleteActorResponse>;
    /**
     * 提交签署任务
     * 对**尚未提交**的签署任务，下发提交指令，签署任务将进入内容协同流程
     */
    start(req: StartRequest): Promise<StartResponse>;
    /**
     * 发起方撤销尚未结束的签署任务
     */
    cancel(req: CancelRequest): Promise<CancelResponse>;
    /**
     * 对内容已填写的签署任务，下发定稿指令，签署任务将进入定稿流程。如果创建时设定签署任务不自动定稿
     */
    finalizeDoc(req: FinalizeDocRequest): Promise<FinalizeDocResponse>;
    /**
     * 设置签署任务在某个参与方节点的自动阻塞
     */
    block(req: BlockRequest): Promise<BlockResponse>;
    /**
     * 解除签署任务某个参与方节点的阻塞设置。如果该签署任务正巧被阻塞在指定的参与方节点，则签署任务继续向下流转
     */
    unblock(req: UnblockRequest): Promise<UnblockResponse>;
    /**
     * 获取指定签署任务的详情信息和状态
     */
    getDetail(req: GetDetailRequest): Promise<GetDetailResponse>;
    /**
     * 获取指定归属方的签署任务列表
     * 支持指定归属方的签署任务列表
     */
    getOwnerList(req: GetOwnerListRequest): Promise<GetOwnerListResponse>;
    /**
     * 获取指定归属方的签署任务文档下载地址
     * 获取签署文档的下载地址，集成方根据该接口返回的下载地址下载具体的签署文档或附件
     */
    getOwnerDownLoadUrl(req: GetOwnerDownLoadUrlRequest): Promise<GetOwnerDownLoadUrlResponse>;
}
