"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FascOpenApiSDKHttpException extends Error {
    constructor(error, requestId = "") {
        super(error);
        this.message = error;
        this.requestId = requestId || "";
    }
    getMessage() {
        return this.message;
    }
    getRequestId() {
        return this.requestId;
    }
    toString() {
        return `[FascOpenApiSDKException]message: ${this.getMessage()} requestId: ${this.getRequestId()}`;
    }
}
exports.default = FascOpenApiSDKHttpException;
