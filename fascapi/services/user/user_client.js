"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const abstract_client_1 = require("../../common/abstract_client");
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super(clientConfig);
    }
    async addUser(req, cb) {
        return this.request({ url: "/user/add", req, reqMethod: "POST", cb });
    }
}
exports.Client = Client;
