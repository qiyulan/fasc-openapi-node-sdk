"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var tslib_1 = require("tslib");
var abstract_client_1 = require("../../common/abstract_client");
var Client = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(Client, _super);
    function Client() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 查询印章列表
     * 根据指定的企业主体openCorpId查询企业在法大大组织中管理的印章列表数据
     */
    Client.prototype.getSealList = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/seal/get-list", req: req, reqMethod: "POST" })];
            });
        });
    };
    /**
     * 查询企业用印员列表
     * 根据指定的企业主体openCorpId查询企业在法大大组织中管理的印章的用印人员列表
     */
    Client.prototype.getSealUserList = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/seal/get-user-list", req: req, reqMethod: "POST" })];
            });
        });
    };
    return Client;
}(abstract_client_1.AbstractClient));
exports.Client = Client;
