"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const abstract_client_1 = require("../../common/abstract_client");
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super(clientConfig);
    }
    /**
     * 把应用系统上将要使用法大大电子签服务的企业添加到法大大平台。法大大平台会为这些企业分配在该appId范围内的唯一标识openCorpId。
     * 后续，针对该企业进行的授权请求、签署任务等调用都将使用该openCorpId标识该企业。您可以在应该管理后台查看和管理已经添加的企业
     */
    async addCorp(req, cb) {
        return this.request({ url: "/corp/add", req, reqMethod: "POST", cb });
    }
    /**
     * 为已添加的企业修改在应用系统中的关联参数
     */
    async updateCorp(req, cb) {
        return this.request({ url: "/corp/update", req, reqMethod: "POST", cb });
    }
    /**
     * 删除企业。删除后再次使用相同的clientCorpId添加该企业时，可能返回新的openCorpId
     */
    async deleteCorp(req, cb) {
        return this.request({ url: "/corp/delete", req, reqMethod: "POST", cb });
    }
    /**
     * 将已添加的企业用户暂时禁用。禁用后，该企业暂时不能通过该应用系统使用法大大平台服务
     */
    async disableCorp(req, cb) {
        return this.request({ url: "/corp/disable", req, reqMethod: "POST", cb });
    }
    /**
     * 将已禁用的企业用户再次激活。激活后，该企业用户可继续通过该应用系统使用法大大平台服务
     */
    async enableCorp(req, cb) {
        return this.request({ url: "/corp/enable", req, reqMethod: "POST", cb });
    }
    /**
     * 应用系统向法大大平台获取一个页面链接，用于提醒企业经办人进行授权操作，以授权应用系统访问该企业在法大大平台的某些数据和操作权限。
     * 在企业操作授权前，法大大平台要求企业及其经办人必须先完成登录和实名认证 (即: Authorization的前提是必须先完成Authentication)
     */
    async getAuthUrl(req, cb) {
        return this.request({ url: "/corp/get-auth-url", req, reqMethod: "POST", cb });
    }
    /**
     * 获取企业的基本信息、认证状态、授权状态和范围等。注意：该接口返回的信息中不涉及隐私，因此不需要授权
     */
    async getBasicInfo(req, cb) {
        return this.request({ url: "/corp/get", req, reqMethod: "POST", cb });
    }
    /**
     * 用于获取企业的实名身份信息。注意：只有经过企业授权后，应用系统方可获得此信息
     */
    async getIdentityInfo(req, cb) {
        return this.request({ url: "/corp/get-identity-info", req, reqMethod: "POST", cb });
    }
    /**
     * 查询企业当前或最近进行的实名认证进度。如果当前有多条正在进行的企业实名认证进程，则都返回；如果有生效的企业实名认证进程，则只需返回最后生效的即可
     */
    async getIdentityProgress(req, cb) {
        return this.request({ url: "/corp/get-identity-progress", req, reqMethod: "POST", cb });
    }
    /**
     * 为应用系统上用户发起申请加入指定企业。申请成功后，法大大会通过短信通知企业管理员审批
     */
    async addMember(req, cb) {
        return this.request({ url: "/corp/member/add", req, reqMethod: "POST", cb });
    }
    /**
     * 查询企业成员是否已加入企业
     */
    async checkMemberStatus(req, cb) {
        return this.request({ url: "/corp/member/status", req, reqMethod: "POST", cb });
    }
}
exports.Client = Client;
