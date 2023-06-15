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
    /** 通过网络文件地址上传 */
    Client.prototype.uploadFileByUrl = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/file/upload-by-url", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 上传本地文件到法大大 */
    Client.prototype.getUploadUrl = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/file/get-upload-url", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 文件处理 */
    Client.prototype.fileProcess = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/file/process", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 文件验签 */
    Client.prototype.fileVerifySign = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/file/verify-sign", reqMethod: "POST", req: req })];
            });
        });
    };
    return Client;
}(abstract_client_1.AbstractClient));
exports.Client = Client;
