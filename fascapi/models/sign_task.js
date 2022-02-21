"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyMethodEnum = exports.SignTaskStatusEnum = exports.SignerSignMethodEnum = exports.SignActorStatusEnum = exports.FillActorStatusEnum = exports.FileTypeEnum = void 0;
var FileTypeEnum;
(function (FileTypeEnum) {
    FileTypeEnum["DOC"] = "doc";
    FileTypeEnum["ATTACH"] = "attach";
})(FileTypeEnum = exports.FileTypeEnum || (exports.FileTypeEnum = {}));
/** 填写方状态 */
var FillActorStatusEnum;
(function (FillActorStatusEnum) {
    /** 未投递 (尚未发送给本填写方) */
    FillActorStatusEnum["NO_SEND"] = "no_send";
    /** 待接收 (正在等待本填写方接收) */
    FillActorStatusEnum["TO_ACCEPT"] = "to_accept";
    /** 已接收 (已被本填写方接收) */
    FillActorStatusEnum["ACCEPTED"] = "accepted";
    /** 待填写 (等待本填写方填写) */
    FillActorStatusEnum["TO_FILL"] = "to_fill";
    /** 已填写 (本填写方已完成了需自己必填控件的填写) */
    FillActorStatusEnum["FILLED"] = "filled";
    /** 已拒填 (本填写方拒绝了填写) */
    FillActorStatusEnum["REJECTED"] = "rejected";
})(FillActorStatusEnum = exports.FillActorStatusEnum || (exports.FillActorStatusEnum = {}));
/** 签署方状态 */
var SignActorStatusEnum;
(function (SignActorStatusEnum) {
    /** 未投递  (尚未发送给本签署方) */
    SignActorStatusEnum["NO_SEND"] = "no_send";
    /** 待接收  (正在等待本签署方接收) */
    SignActorStatusEnum["TO_ACCEPT"] = "to_accept";
    /** 已接收  (已被本签署方已接收) */
    SignActorStatusEnum["ACCEPTED"] = "accepted";
    /** 待签署  (等待本签署方签署) */
    SignActorStatusEnum["TO_SIGN"] = "to_sign";
    /** 已签署  (本签署方已完成签署) */
    SignActorStatusEnum["SIGNED"] = "signed";
    /** 已拒签  (本签署方拒绝了签署) */
    SignActorStatusEnum["REJECTED"] = "rejected";
    /** 阻塞中  (本签署方被阻塞) */
    SignActorStatusEnum["BLOCKED"] = "blocked";
})(SignActorStatusEnum = exports.SignActorStatusEnum || (exports.SignActorStatusEnum = {}));
/** 该签署任务要求的该方签署人(个人参与方或者企业经办人)的签署方式 */
var SignerSignMethodEnum;
(function (SignerSignMethodEnum) {
    /** 不限制 (签署人可用系统支持的任何方式签署) */
    SignerSignMethodEnum["UNLIMITED"] = "unlimited";
    /** 使用标准签名 (签署人必须使用通过系统创建的标准签名，因为标准签名字体工整，便于肉眼识别，是常用的推荐方式) */
    SignerSignMethodEnum["STANDARD"] = "standard";
    /** 使用手绘签名 (签署人必须通过手绘进行签名，即必须现场手写签名) */
    SignerSignMethodEnum["HANDWRITE"] = "handWrite";
})(SignerSignMethodEnum = exports.SignerSignMethodEnum || (exports.SignerSignMethodEnum = {}));
/** 签署任务状态 */
var SignTaskStatusEnum;
(function (SignTaskStatusEnum) {
    /** 任务已创建 (签署任务创建成功，但未发起) */
    SignTaskStatusEnum["TASK_CREATED"] = "task_created";
    /** 任务已发起 (签署任务已经发起) */
    SignTaskStatusEnum["TASK_INITIATED"] = "task_initiated";
    /** 填写进行中 (签署任务正在进行协同填写流程阶段，必填控件尚未填完) */
    SignTaskStatusEnum["FILL_PROGRESS"] = "fill_progress";
    /** 填写已完成 (签署任务文档中所有的必填控件均已填写，但文档尚未定稿) */
    SignTaskStatusEnum["FILL_COMPLETED"] = "fill_completed";
    /** 文档定稿中 (所有须填写内容都已完成，服务器正在合成pdf文档) */
    SignTaskStatusEnum["FILL_FINALIZING"] = "fill_finalizing";
    /** 文档已定稿 (文档内容已经确定) */
    SignTaskStatusEnum["FILL_FINALIZED"] = "fill_finalized";
    /** 签署进行中 (签署任务正在进行签署流程阶段) */
    SignTaskStatusEnum["SIGN_PROGRESS"] = "sign_progress";
    /** 签署已完成 (签署任务所有签署方均已签署完成) */
    SignTaskStatusEnum["SIGN_COMPLETED"] = "sign_completed";
    /** 任务已结束 (签署任务已成功结束) */
    SignTaskStatusEnum["TASK_FINISHED"] = "task_finished";
    /** 任务已撤销 (签署任务已经被撤销) */
    SignTaskStatusEnum["TASK_CANCELED"] = "task_canceled";
    /** 任务异常停止 (签署任务已经因为某种原因而停止运行，如因为某方拒填或拒签) */
    SignTaskStatusEnum["TASK_STOPPED"] = "task_stopped";
})(SignTaskStatusEnum = exports.SignTaskStatusEnum || (exports.SignTaskStatusEnum = {}));
/** 允许该参与方使用的身份和意愿确认方式 */
var VerifyMethodEnum;
(function (VerifyMethodEnum) {
    /** 短信验证码 */
    VerifyMethodEnum["SMS"] = "sms";
    /** 刷脸验证 */
    VerifyMethodEnum["FACE"] = "face";
    /** 邮件验证码 */
    VerifyMethodEnum["EMAIL"] = "email";
})(VerifyMethodEnum = exports.VerifyMethodEnum || (exports.VerifyMethodEnum = {}));
