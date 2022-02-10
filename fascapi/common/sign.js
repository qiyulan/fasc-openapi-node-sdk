"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const crypto = (0, tslib_1.__importStar)(require("crypto"));
const is_stream_1 = (0, tslib_1.__importDefault)(require("is-stream"));
class Sign {
    static sign({ signStr, timestamp, appSecret, }) {
        // SHA256算法加密排序后的字符串
        const signText = crypto.createHash("sha256").update(signStr).digest("hex");
        const timestampSecret = crypto
            .createHmac("sha256", appSecret)
            .update(String(timestamp))
            .digest();
        const hash = crypto.createHmac("sha256", timestampSecret).update(signText).digest("hex");
        return hash;
    }
    static formatSignString({ data, appId, signMethod, nonce, timestamp, accessToken = null, appSecret, }) {
        const data2JsonStr = JSON.stringify(data);
        const signParams = {
            bizContent: data2JsonStr,
            "X-FASC-App-Id": appId,
            "X-FASC-Sign-Type": signMethod,
            "X-FASC-Nonce": nonce,
            "X-FASC-Timestamp": timestamp,
        };
        if (accessToken !== null) {
            signParams["X-FASC-AccessToken"] = accessToken;
        }
        else {
            signParams["X-FASC-Grant-Type"] = "client_credential";
            delete signParams.bizContent;
        }
        let strParam = "";
        // 去除字节流参数
        removeStream(signParams);
        // 去除值为空的字段
        deepRemoveNull(signParams);
        const keys = Object.keys(signParams);
        // 排序
        keys.sort();
        // 参数拼接，去除重复的key
        for (const k in keys) {
            if (!keys.hasOwnProperty(k)) {
                continue;
            }
            //k = k.replace(/_/g, '.');
            strParam += "&" + keys[k] + "=" + signParams[keys[k]];
        }
        const signStr = strParam.slice(1);
        return signStr;
    }
}
exports.default = Sign;
function removeStream(data) {
    for (const key in data) {
        if ((0, is_stream_1.default)(data[key])) {
            delete data[key];
        }
    }
}
function deepRemoveNull(obj) {
    if (isArray(obj)) {
        return obj.map(deepRemoveNull);
    }
    else if (isObject(obj)) {
        const result = {};
        for (const key in obj) {
            const value = obj[key];
            if (!isNull(value)) {
                result[key] = deepRemoveNull(value);
            }
        }
        return result;
    }
    else {
        return obj;
    }
}
function isBuffer(x) {
    return Buffer.isBuffer(x);
}
function isArray(x) {
    return Array.isArray(x);
}
function isObject(x) {
    return typeof x === "object" && !isArray(x) && !(0, is_stream_1.default)(x) && !isBuffer(x) && x !== null;
}
function isNull(x) {
    return x === null;
}
