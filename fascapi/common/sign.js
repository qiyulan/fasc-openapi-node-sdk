"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var crypto = (0, tslib_1.__importStar)(require("crypto"));
var is_stream_1 = (0, tslib_1.__importDefault)(require("is-stream"));
var Sign = /** @class */ (function () {
    function Sign() {
    }
    Sign.sign = function (_a) {
        var signStr = _a.signStr, timestamp = _a.timestamp, appSecret = _a.appSecret;
        // SHA256算法加密排序后的字符串
        var signText = crypto.createHash("sha256").update(signStr).digest("hex");
        var timestampSecret = crypto
            .createHmac("sha256", appSecret)
            .update(String(timestamp))
            .digest();
        var hash = crypto.createHmac("sha256", timestampSecret).update(signText).digest("hex");
        return hash;
    };
    Sign.formatSignString = function (signParams) {
        var params = (0, tslib_1.__assign)({}, signParams);
        var strParam = "";
        // 去除字节流参数
        removeStream(params);
        // 去除值为空的字段
        params = deepRemoveNull(params);
        var keys = Object.keys(params);
        // 排序
        keys.sort();
        // 参数拼接，去除重复的key
        for (var k in keys) {
            if (!keys.hasOwnProperty(k)) {
                continue;
            }
            strParam += "&" + keys[k] + "=" + params[keys[k]];
        }
        var signStr = strParam.slice(1);
        return signStr;
    };
    return Sign;
}());
exports.default = Sign;
function removeStream(data) {
    for (var key in data) {
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
        var result = {};
        for (var key in obj) {
            var value = obj[key];
            if (!isBlank(value)) {
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
    return typeof x === "object" && !isArray(x) && !(0, is_stream_1.default)(x) && !isBuffer(x);
}
function isNull(x) {
    return x === null;
}
function isBlank(x) {
    if (typeof x === 'string') {
        return x.trim() === '';
    }
    else {
        return x === null || x === undefined;
    }
}
