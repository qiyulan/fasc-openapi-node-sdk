"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var FascOpenApiSDKHttpException = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(FascOpenApiSDKHttpException, _super);
    function FascOpenApiSDKHttpException(error, requestId) {
        if (requestId === void 0) { requestId = ""; }
        var _this = _super.call(this, error) || this;
        _this.message = error;
        _this.requestId = requestId || "";
        return _this;
    }
    FascOpenApiSDKHttpException.prototype.getMessage = function () {
        return this.message;
    };
    FascOpenApiSDKHttpException.prototype.getRequestId = function () {
        return this.requestId;
    };
    FascOpenApiSDKHttpException.prototype.toString = function () {
        return "[FascOpenApiSDKException]message: ".concat(this.getMessage(), " requestId: ").concat(this.getRequestId());
    };
    return FascOpenApiSDKHttpException;
}(Error));
exports.default = FascOpenApiSDKHttpException;
