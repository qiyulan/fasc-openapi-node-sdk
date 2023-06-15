"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var tslib_1 = require("tslib");
var abstract_client_1 = require("../../common/abstract_client");
var Client = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(Client, _super);
    function Client(clientConfig) {
        return _super.call(this, clientConfig) || this;
    }
    /** 创建签署任务(基于文档) */
    Client.prototype.create = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/sign-task/create", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 创建签署任务(基于签署任务模板) */
    Client.prototype.createWithTemplate = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/sign-task/create-with-template", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 添加签署任务文档 */
    Client.prototype.addDoc = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/sign-task/doc/add", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 移除签署任务文档 */
    Client.prototype.deleteDoc = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/sign-task/doc/delete", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 添加签署任务控件 */
    Client.prototype.addField = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/sign-task/field/add", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 移除签署任务控件 */
    Client.prototype.deleteField = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/sign-task/field/delete", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 填写签署任务控件内容 */
    Client.prototype.fillFieldValues = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/sign-task/field/fill-values", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 添加签署任务附件 */
    Client.prototype.addAttach = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/sign-task/attach/add", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 移除签署任务附件 */
    Client.prototype.deleteAttach = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/sign-task/attach/delete", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 添加签署任务参与方 */
    Client.prototype.addActor = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/sign-task/actor/add", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 移除签署任务参与方 */
    Client.prototype.deleteActor = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/sign-task/actor/delete", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 获取签署任务编辑链接 */
    Client.prototype.getSignTaskEditUrl = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/sign-task/get-edit-url", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 获取签署任务预览链接 */
    Client.prototype.getSignTaskPreviewUrl = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/sign-task/get-preview-url", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 获取参与方签署链接 */
    Client.prototype.getActorUrl = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/sign-task/actor/get-url", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 获取参与方批量签署链接 */
    Client.prototype.getActorBatchSignTaskUrl = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/sign-task/actor/get-url", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 提交签署任务 */
    Client.prototype.start = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/sign-task/start", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 撤销签署任务 */
    Client.prototype.cancel = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/sign-task/cancel", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 定稿签署任务 */
    Client.prototype.finalizeDoc = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/sign-task/doc-finalize", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 催办签署任务 */
    Client.prototype.urgeSignTask = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/sign-task/urge", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 阻塞签署任务 */
    Client.prototype.block = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/sign-task/block", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 解阻签署任务 */
    Client.prototype.unblock = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/sign-task/unblock", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 结束签署任务 */
    Client.prototype.finish = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/sign-task/finish", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 作废签署任务 */
    Client.prototype.abolish = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/sign-task/abolish", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 删除签署任务 */
    Client.prototype.delete = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/sign-task/delete", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 查询签署任务详情 */
    Client.prototype.getDetail = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/sign-task/app/get-detail", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 查询签署任务列表 */
    Client.prototype.getOwnerList = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/sign-task/owner/get-list", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 查询参与方身份信息 */
    Client.prototype.getSignTaskActorList = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/sign-task/actor/list", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 查询参与方填写内容 */
    Client.prototype.getSignTaskFieldList = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/sign-task/field/list", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 查询签署任务审批信息 */
    Client.prototype.getSignTaskApprovalInfo = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/sign-task/get-approval-info", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 查询企业签署任务文件夹列表 */
    Client.prototype.getSignTaskCatalogList = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/sign-task-catalog/list", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 查询签署业务类型列表 */
    Client.prototype.getSignTaskBusinessTypeList = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/sign-task/business-type/get-list", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 获取签署过程保全报告下载地址 */
    Client.prototype.getEvidenceReportDownloadUrl = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/sign-task/evidence-report/get-download-url", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 获取签署文档下载地址 */
    Client.prototype.getOwnerDownLoadUrl = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/sign-task/owner/get-download-url", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 获取签署任务参与方刷脸底图 */
    Client.prototype.getActorFacePicture = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/sign-task/actor/get-face-picture", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 获取图片版签署文档下载地址 */
    Client.prototype.getSignTaskPicDownLoadUrl = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/sign-task/owner/get-pic-download-url", reqMethod: "POST", req: req })];
            });
        });
    };
    return Client;
}(abstract_client_1.AbstractClient));
exports.Client = Client;
