/** 参与方类型 */
export enum ActorTypeEnum {
  /** 发起方 */
  INITIATOR = "initiator",
  /** 填写方 */
  FILLER = "filler",
  /** 签署方 */
  SIGNER = "signer",
  /** 抄送方 */
  CC = "cc",
}

export enum FileTypeEnum {
  DOC = "doc",

  ATTACH = "attach",
}

/** 填写方状态 */
export enum FillActorStatusEnum {
  /** 未投递 (尚未发送给本填写方) */
  NO_SEND = "no_send",
  /** 待接收 (正在等待本填写方接收) */
  TO_ACCEPT = "to_accept",
  /** 已接收 (已被本填写方接收) */
  ACCEPTED = "accepted",
  /** 待填写 (等待本填写方填写) */
  TO_FILL = "to_fill",
  /** 已填写 (本填写方已完成了需自己必填控件的填写) */
  FILLED = "filled",
  /** 已拒填 (本填写方拒绝了填写) */
  REJECTED = "rejected",
}

/** 签署方状态 */
export enum SignActorStatusEnum {
  /** 未投递  (尚未发送给本签署方) */
  NO_SEND = "no_send",
  /** 待接收  (正在等待本签署方接收) */
  TO_ACCEPT = "to_accept",
  /** 已接收  (已被本签署方已接收) */
  ACCEPTED = "accepted",
  /** 待签署  (等待本签署方签署) */
  TO_SIGN = "to_sign",
  /** 已签署  (本签署方已完成签署) */
  SIGNED = "signed",
  /** 已拒签  (本签署方拒绝了签署) */
  REJECTED = "rejected",
  /** 阻塞中  (本签署方被阻塞) */
  BLOCKED = "blocked",
}

/** 该签署任务要求的该方签署人(个人参与方或者企业经办人)的签署方式 */
export enum SignerSignMethodEnum {
  /** 不限制 (签署人可用系统支持的任何方式签署) */
  UNLIMITED = "unlimited",
  /** 使用标准签名 (签署人必须使用通过系统创建的标准签名，因为标准签名字体工整，便于肉眼识别，是常用的推荐方式) */
  STANDARD = "standard",
  /** 使用手绘签名 (签署人必须通过手绘进行签名，即必须现场手写签名) */
  HANDWRITE = "handWrite",
}

/** 签署任务状态 */
export enum SignTaskStatusEnum {
  /** 任务已创建 (签署任务创建成功，但未发起) */
  TASK_CREATED = "task_created",
  /** 任务已发起 (签署任务已经发起) */
  TASK_INITIATED = "task_initiated",
  /** 填写进行中 (签署任务正在进行协同填写流程阶段，必填控件尚未填完) */
  FILL_PROGRESS = "fill_progress",
  /** 填写已完成 (签署任务文档中所有的必填控件均已填写，但文档尚未定稿) */
  FILL_COMPLETED = "fill_completed",
  /** 文档定稿中 (所有须填写内容都已完成，服务器正在合成pdf文档) */
  FILL_FINALIZING = "fill_finalizing",
  /** 文档已定稿 (文档内容已经确定) */
  FILL_FINALIZED = "fill_finalized",
  /** 签署进行中 (签署任务正在进行签署流程阶段) */
  SIGN_PROGRESS = "sign_progress",
  /** 签署已完成 (签署任务所有签署方均已签署完成) */
  SIGN_COMPLETED = "sign_completed",
  /** 任务已结束 (签署任务已成功结束) */
  TASK_FINISHED = "task_finished",
  /** 任务已撤销 (签署任务已经被撤销) */
  TASK_CANCELED = "task_canceled",
  /** 任务异常停止 (签署任务已经因为某种原因而停止运行，如因为某方拒填或拒签) */
  TASK_STOPPED = "task_stopped",
}

/** 允许该参与方使用的身份和意愿确认方式 */
export enum VerifyMethodEnum {
  /** 短信验证码 */
  SMS = "sms",
  /** 刷脸验证 */
  FACE = "face",
  /** 邮件验证码 */
  EMAIL = "email",
}
