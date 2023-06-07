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
    /**
     * 获取服务访问凭证
     * 应用系统获取法大大平台的服务访问凭证(accessToken)。获取的凭证有效时间为2小时。有效期内重复获取会返回相同的结果，并自动续期。该接口的参数必须进行签名才能正常获得accessToken
     */
    Client.prototype.getAccessToken = function () {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/service/get-access-token", reqMethod: "POST" })];
            });
        });
    };
    return Client;
}(abstract_client_1.AbstractClient));
exports.Client = Client;
