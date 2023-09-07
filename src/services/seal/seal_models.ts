/** getSealList 查询印章列表-请求结构体 */
export interface GetSealListRequest {
  /** 企业主体在应用上的openCorpId，需检查授权 */
  openCorpId: string
  /**
   * 印章是否设置了免验证签，默认都查询：
   * free_sign：仅查询设置了免验证签的印章
   * no_free_sign：仅查询未设置免验证签的印章
   * both：不将是否设置了免验证签作为过滤条件
   */
  grantFreeSign?: string
  /** 查询条件。 */
  listFilter?: {
    /** 印章类型，支持传多项：official_seal：法定名称章，contract_seal：合同专用章，hr_seal：人事专用章，financial_seal：财务专用章，legal_representative_seal：法定代表人名章，other：其他。 */
    categoryType?: Array<string>
  }
}

interface SealUser {
  /** 企业成员ID */
  memberId: number
  /** 成员真实姓名，长度最大64个字符。 */
  memberName: string
  /** 成员在企业内部的标识符。 如工号等，方便和业务系统对应。 */
  internalIdentifier: string
  /** 企业成员手机号 */
  memberMobile?: string
  /** 企业成员邮箱 */
  memberEmail?: string
  /** 印章被授权用印员的时间 */
  grantTime: string
  /** 印章被授权用印员的生效时间 */
  grantStartTime?: string
  /** 印章被授权用印员的失效时间 */
  grantEndTime?: string
  /** 授权状态，to_be_effective：待生效，effective：生效中，ineffective：已失效 */
  grantStatus: string
}

export interface SealInfo {
  /** 印章ID，长度最大20位 */
  sealId: number
  /** 印章名称 */
  sealName: string
  /** 印章类型：official_seal：法定名称章，contract_seal：合同专用章，hr_seal：人事专用章，financial_seal：财务专用章，legal_representative_seal：法定代表人名章，other：其他。 */
  categoryType: string
  /** 印章图片地址 */
  picFileUrl: string
  sealWidth: number
  sealHeight: number
  /** 印章状态，只有系统生成或审核通过的印章才返回，enable：已启用，disable：已停用，cancelled：已注销 */
  sealStatus?: string
  /** 印章创建时间 */
  createTime: string
  /** 证书颁发机构：CFCA： 中国金融认证中心<br/>豸信CA：山东豸信认证服务有限公司，CSCA：世纪数码CA */
  certCAOrg: string
  /** 证书加密算法类型：国密证书：SM2，标准证书：RSA */
  certEncryptType: number
  /** 企业用印员列表 */
  sealUsers?: Array<SealUser>
}

/** getSealList 查询印章列表-响应结构体 */
export interface GetSealListResponse {
  sealInfos: Array<SealInfo>
  freeSignInfo?: Array<FreeSignInfo>
}

/** getSealDetail 查询印章详情-请求结构体 */
export interface GetSealDetailRequest {
  openCorpId: string
  sealId: number
}

/** 企业用印员详情 */
export interface SealUserInDetail {
  /** 企业成员ID */
  memberId: number
  /** 成员真实姓名，长度最大64个字符。 */
  memberName: string
  /** 成员在企业内部的标识符。 如工号等，方便和业务系统对应。 */
  internalIdentifier: string
  /** 企业成员邮箱 */
  memberEmail?: string
  /** 印章被授权用印员的时间 */
  grantTime?: string
  /** 印章被授权用印员的生效时间 */
  grantStartTime?: string
  /** 印章被授权用印员的失效时间 */
  grantEndTime?: string
  /** 授权状态，to_be_effective：待生效，effective：生效中，ineffective：已失效 */
  grantStatus?: string
}

/** 授权免验证签信息 */
export interface FreeSignInfo {
  /** 免验证签场景码 */
  businessId?: string
  /** 免验证签业务场景 */
  businessScene?: string
  /** 免验证签业务场景说明 */
  businessSceneExp?: string
  /** 免验证签授权的有效期 */
  expiresTime?: string
}

/** getSealDetail 查询印章详情-响应结构体 */
export interface GetSealDetailResponse {
  sealId: number
  /** 印章名称 */
  sealName: string
  /** 印章标签 */
  sealTag?: string
  /** 法大大平台定义的印章类型，分两大类和若干种类型 */
  categoryType: string
  /** 印章图片地址 */
  picFileUrl: string
  sealWidth: number
  sealHeight: number
  /** 印章状态 */
  sealStatus?: string
  /** 印章创建时间 */
  createTime: string
  /** 证书办法机构 */
  certCAOrg: string
  /** 证书加密算法类型 */
  certEncryptType: string
  /** 企业用印员列表 */
  sealUsers: Array<SealUserInDetail>
  freeSignInfo?: Array<FreeSignInfo>
}

/** getSealUserList 查询企业用印员列表-请求结构体 */
export interface GetSealUserListRequest {
  /** 企业主体在应用上的openCorpId，需检查授权 */
  openCorpId: string
  /** 查询条件。 */
  listFilter?: {
    /** 印章类型，支持传多项：official_seal：法定名称章，contract_seal：合同专用章，hr_seal：人事专用章，financial_seal：财务专用章，legal_representative_seal：法定代表人名章，other：其他。 */
    categoryType?: Array<string>
  }
}

export interface SealInfoForUserList {
  /** 印章ID，长度最大20位 */
  sealId: number
  /** 印章名称 */
  sealName: string
  /** 印章类型：official_seal：法定名称章，contract_seal：合同专用章，hr_seal：人事专用章，financial_seal：财务专用章，legal_representative_seal：法定代表人名章，other：其他。 */
  categoryType: string
  /** 印章图片地址 */
  picFileUrl: string
  /** 印章状态，只有系统生成或审核通过的印章才返回，enable：已启用，disable：已停用，cancelled：已注销 */
  sealStatus?: string
  /** 证书颁发机构：CFCA： 中国金融认证中心<br/>豸信CA：山东豸信认证服务有限公司，CSCA：世纪数码CA */
  certCAOrg: string
  /** 证书加密算法类型：国密证书：SM2，标准证书：RSA */
  certEncryptType: number
  /** 印章被授权用印员的时间 */
  grantTime: string
  /** 印章被授权用印员的生效时间 */
  grantStartTime?: string
  /** 印章被授权用印员的失效时间 */
  grantEndTime?: string
  /** 授权状态，to_be_effective：待生效，effective：生效中，ineffective：已失效 */
  grantStatus: string
}

interface SealUser2 extends SealUser {
  /** 企业成员ID */
  memberId: number
  /** 成员真实姓名，长度最大64个字符。 */
  memberName: string
  /** 成员在企业内部的标识符。 如工号等，方便和业务系统对应。 */
  internalIdentifier: string
  /** 企业成员手机号 */
  memberMobile?: string
  /** 企业成员邮箱 */
  memberEmail?: string
  sealInfos: Array<SealInfoForUserList>
}

/** getSealUserList 查询企业用印员列表-响应结构体 */
export interface GetSealUserListResponse {
  sealUsers?: Array<SealUser2>
}

/** getUserSealList 查询成员被授权的印章列表-请求结构体 */
export interface GetUserSealListRequest {
  /** 企业主体在应用上的openCorpId，需检查授权 */
  openCorpId: string
  memberId: number
}

/** getUserSealList 查询成员被授权的印章列表-响应结构体 */
export type GetUserSealListResponse = SealInfoForUserList & { sealStatus: string }

/** getSealVerifyList 查询审核中的印章列表-请求结构体 */
export interface GetSealVerifyListRequest {
  openCorpId: string
}

/** 印章审核工单 */
export interface VerifyInfo {
  verifyId: number
  /** 印章名称 */
  sealName: string
  /** 印章类型：official_seal：法定名称章，contract_seal：合同专用章，hr_seal：人事专用章，financial_seal：财务专用章，legal_representative_seal：法定代表人名章，other：其他。 */
  categoryType: string
  /** 印章图片地址 */
  picFileUrl: string
  /** 印章创建时间 */
  createTime: string
  /** 印章审核状态，verifing：审核中，verify_failed：审核不通过 */
  verifyStatus: string
  rejectReasons?: string
}

/** getSealVerifyList 查询审核中的印章列表-响应结构体 */
export type GetSealVerifyListResponse = Array<VerifyInfo>

/** getSealManageList 获取印章管理链接-请求结构体 */
export interface GetSealManageListRequest {
  openCorpId: string
  clientUserId?: string
  redirectUrl?: string
}

/** getSealManageList 获取印章管理链接-响应结构体 */
export interface GetSealManageListResponse {
  resourceUrl: string
}

/** getCreateSealList 获取创建印章链接-请求结构体 */
export interface GetCreateSealListRequest {
  openCorpId: string
  clientUserId: string
  /** 印章名称 */
  sealName?: string
  /** 印章标签 */
  sealTag?: string
  /** 法大大平台定义的印章类型，分两大类和若干种类型 */
  categoryType?: string
  /** 业务系统定义的印章创建序列号，用于在印章创建后的回调事件中将sealId和createSerialNo进行 对应 */
  createSerialNo?: string
  /** 重定向地址 */
  redirectUrl?: string
}

/** getCreateSealList 获取创建印章链接-响应结构体 */
export interface GetCreateSealListResponse {
  sealCreateUrl: string
}

/** getAppointedSealUrl 取印章详情链接-请求结构体 */
export interface GetAppointedSealUrlRequest {
  openCorpId: string
  sealId: number
  clientUserId?: string
  redirectUrl?: string
}

/** getAppointedSealUrl 取印章详情链接-响应结构体 */
export interface GetAppointedSealUrlResponse {
  appointedSealUrl: string
}

export interface MemberInfo {
  memberIds?: Array<number>
  /** 印章被授权用印员的生效时间 */
  grantStartTime?: string
  /** 印章被授权用印员的失效时间 */
  grantEndTime?: string
}

/** getSealGrantUrl 获取印章授权给成员链接-请求结构体 */
export interface GetSealGrantUrlRequest {
  openCorpId: string
  sealId: number
  /** 需要被授权的成员ID */
  memberInfo?: MemberInfo
  clientUserId?: string
  redirectUrl?: string
}

/** getSealGrantUrl 获取印章授权给成员链接-响应结构体 */
export interface GetSealGrantUrlResponse {
  sealGrantUrl: string
}

/** getSealFreeSignUrl 获取印章设置免验证签链接-请求结构体 */
export interface GetSealFreeSignUrlRequest {
  openCorpId: string
  clientUserId?: string
  /** 需要授权免验证签的印章ID列表 */
  sealIds: Array<number>
  /** 需要绑定该印章的免验证签场景码 */
  businessId: string
  /** 通知邮箱 */
  email?: string
  /** 免验证签授权的有效期 */
  expiresTime?: string
  redirectUrl?: string
}

/** getSealFreeSignUrl 获取印章设置免验证签链接-响应结构体 */
export interface GetSealFreeSignUrlResponse {
  /** 印章授权免验证签的页面 */
  freeSignUrl: string
  /** 印章授权免验证签的短链，集成方可用于短信推送 */
  freeSignShortUrl: string
}

/** cancelSealGrant 解除印章授权-请求结构体 */
export interface CancelSealGrantRequest {
  openCorpId: string
  sealId: number
  memberId: number
}

/** cancelSealGrant 解除印章授权-响应结构体 */
export type CancelSealGrantResponse = null

/** cancelSealFreeSign 解除印章免验证签-请求结构体 */
export interface CancelSealFreeSignRequest {
  openCorpId: string
  sealId: number
  /** 需要解除该印章的免验证签场景码 */
  businessId: string
}

/** cancelSealFreeSign 解除印章免验证签-请求结构体 */
export type CancelSealFreeSignResponse = null

/** modifySeal 修改印章-请求结构体 */
export interface ModifySealRequest {
  openCorpId: string
  sealId: number
  /** 印章名称 */
  sealName?: string
  /** 印章标签 */
  sealTag?: string
  /** 法大大平台定义的印章类型，分两大类和若干种类型 */
  categoryType?: string
}

/** modifySeal 修改印章-响应结构体 */
export type ModifySealResponse = null

/** deleteSeal 删除印章-请求结构体 */
export interface DeleteSealRequest {
  openCorpId: string
  sealId: number
}

/** deleteSeal 修改印章-响应结构体 */
export type DeleteSealResponse = null

/** getPersonalSealManageUrl 获取签名管理链接-请求结构体 */
export interface GetPersonalSealManageUrlRequest {
  clientUserId?: string
  redirectUrl?: string
}

/** getPersonalSealManageUrl 获取签名管理链接-响应结构体 */
export interface GetPersonalSealManageUrlResponse {
  resourceUrl: string
}

/** getPersonalSealCreateUrl 获取签名创建链接-请求结构体 */
export interface GetPersonalSealCreateUrlRequest {
  clientUserId?: string
  redirectUrl?: string
  /** 业务系统定义的签名创建序列号，用于在签名创建后的回调事件中将sealId和createSerialNo进行对应 */
  createSerialNo?: string
}

/** getPersonalSealCreateUrl 获取签名创建链接-响应结构体 */
export interface GetPersonalSealCreateUrlResponse {
  sealCreateUrl: string
}

/** getPersonalSealList 查询个人签名列表-请求结构体 */
export interface GetPersonalSealListRequest {
  openCorpId: string
}

export interface FreeSignInfos {
  /** 需要解除该印章的免验证签场景码 */
  businessId: string
  /** 免验证签业务场景 */
  businessScene: string
  /** 免验证签业务场景说明 */
  businessSceneExp?: string
  /** 免验证签授权的有效期 */
  expiresTime?: string
}

/** getPersonalSealList 查询个人签名列表-响应结构体 */
export interface GetPersonalSealListResponse {
  sealId: number
  /** 印章名称 */
  sealName: string
  /** 印章图片地址 */
  picFileUrl: string
  sealWidth: number
  sealHeight: number
  /** 印章创建时间 */
  createTime: string
  /** 证书颁发机构：CFCA： 中国金融认证中心<br/>豸信CA：山东豸信认证服务有限公司，CSCA：世纪数码CA */
  certCAOrg: string
  /** 证书加密算法类型：国密证书：SM2，标准证书：RSA */
  certEncryptType: number
  freeSignInfos: Array<FreeSignInfos>
}

/** getPersonalFreeSignUrl 获取签名设置免验证签链接-请求结构体 */
export interface GetPersonalFreeSignUrlRequest {
  openUserId: string
  /** 需要授权免验证签的印章ID列表 */
  sealIds: Array<number>
  /** 需要绑定该印章的免验证签场景码 */
  businessId: string
  /** 通知邮箱 */
  email?: string
  /** 免验证签授权的有效期 */
  expiresTime?: string
  redirectUrl?: string
}

/** getPersonalFreeSignUrl 获取签名设置免验证签链接-响应结构体 */
export interface GetPersonalFreeSignUrlResponse {
  freeSignUrl: string
  freeSignShortUrl: string
}

/** cancelPersonalFreeSign 解除签名免验证签-请求结构体 */
export interface CancelPersonalFreeSignRequest {
  openUserId: string
  sealId: number
  businessId: string
}

/** cancelPersonalFreeSign 解除签名免验证签-响应结构体 */
export type CancelPersonalFreeSignResponse = null

/** deletePersonalSeal 删除签名-请求结构体 */
export interface DeletePersonalSealRequest {
  openUserId: string
  sealId: number
}

/** deletePersonalSeal 删除签名-响应结构体 */
export type DeletePersonalSealResponse = null

/** createTemplateSeal 创建模板印章-请求结构体 */
export interface CreateTemplateSealRequest {
  openCorpId: string
  sealName: string
  /**
   * 法大大平台定义的企业印章类型，默认为公章：
    official_seal：公章（默认值）
    contract_seal：合同专用章
    hr_seal：人事专用章
    financial_seal：财务专用章
    other：其他
   */
  categoryType?: string
  /** 印章标签，可以和业务系统的印章业务类型或者印章的子分类对应 */
  sealTag?: string
  /**
   * 印章样式,示例：
    round：圆形章（默认值）
    round_no_star：圆形章-不带星
    oval：椭圆章
   */
  sealTemplateStyle?: string
  /**
   * 印章规格，即宽高（单位：毫米mm），示例：
    round圆形章才设置规格
    round_38_38：38X38mm
    round_40_40：40X40mm
    round_42_42：42X42mm（默认值）
    椭圆章，默认45X30mm
   */
  sealSize?: string
  /** 印章横排文字，最多10个字符 */
  sealHorizontalText?: string
  /** 印章下弦文（实体印章防伪码），最多15字符，数字、字母、英文符号 */
  sealBottomText?: string
  /** 
   * 印章颜色，默认红色
    red：红色（默认值）
    blue ：蓝色
    black：黑色
  */
  sealColor?: string
  /** 业务系统定义的印章创建序列号 */
  createSerialNo?: string
}

/** createTemplateSeal 创建模板印章-响应结构体 */
export interface CreateTemplateSealResponse {
  sealId: number
}

/** createSealByImage 创建图片印章-请求结构体 */
export interface CreateSealByImageRequest {
  openCorpId: string
  sealName: string
  /**
   * 法大大平台定义的企业印章类型，默认为公章：
    official_seal：公章（默认值）
    contract_seal：合同专用章
    hr_seal：人事专用章
    financial_seal：财务专用章
    other：其他
   */
  categoryType?: string
  /** 印章标签，可以和业务系统的印章业务类型或者印章的子分类对应 */
  sealTag?: string
  /** 印章图片base64，图片大小5M以内 */
  sealImage: string
  sealWidth?: number
  sealHeight?: number
  /** 印章做旧，默认为0不做旧，数值范围0-1.85 */
  sealOldStyle?: number
  /** 
   * 印章颜色，默认红色
    red：红色（默认值）
    blue ：蓝色
    black：黑色
  */
  sealColor?: string
  createSerialNo?: string
}

/** createSealByImage 创建图片印章-响应结构体 */
export interface CreateSealByImageResponse {
  /** 印章审核工单ID */
  verifyId: number
}

/** createLegalRepSealByTemplate 创建法定代表人模板印章-请求结构体 */
export interface CreateLegalRepSealByTemplateRequest {
  openCorpId: string
  openUserId: string
  sealName: string
  /** 印章标签，可以和业务系统的印章业务类型或者印章的子分类对应 */
  sealTag?: string
  /**
   * 印章样式，示例：
    rectangle：矩形（默认值）
    rectangle_frame：矩形带框
    square_left_bigword：方形左大字
    square_left_bigword_frame：方形左大字带框
    square_right_bigword：方形右大字
    square_right_bigword_frame：方形右大字带框
   */
  sealTemplateStyle?: string
  /**
   * 印章规格，即宽高（单位：毫米mm），示例：
    round圆形章才设置规格
    round_38_38：38X38mm
    round_40_40：40X40mm
    round_42_42：42X42mm（默认值）
    椭圆章，默认45X30mm
   */
  sealSize?: string
  /** 
   * 印章颜色，默认红色
    red：红色（默认值）
    blue ：蓝色
    black：黑色
    */
  sealColor?: string
  /** 
   * 印章内容规则（印章中姓名后缀），默认值为仅名字
    name：仅名字，无后缀（仅显示姓名，如：包小豸）
    name_with_suffix_seal：加“印”（姓名后添加“印”字，如：包小豸印）
    name_with_suffix_of_seal：加“之印”（姓名后添加“之印”，如：包小豸之印）
   */
  sealSuffix?: string
  /** 防伪码 */
  securityCode?: string
  createSerialNo?: string
}

/** createLegalRepSealByTemplate 创建法定代表人模板印章-响应结构体 */
export interface CreateLegalRepSealByTemplateResponse {
  /** 印章ID */
  sealId: number
}

/** createLegalRepSealByImage 创建法定代表人图片印章-请求结构体 */
export interface CreateLegalRepSealByImageRequest {
  openCorpId: string
  openUserId: string
  sealName: string
  /** 印章标签，可以和业务系统的印章业务类型或者印章的子分类对应 */
  sealTag?: string
  /** 印章图片base64，图片大小5M以内 */
  sealImage: string
  sealWidth?: number
  sealHeight?: number
  /** 印章做旧，默认为0不做旧，数值范围0-1.85 */
  sealOldStyle?: number
  /** 
   * 印章颜色，默认红色
    red：红色（默认值）
    blue ：蓝色
    black：黑色
  */
  sealColor?: string
  createSerialNo?: string
}

/** createLegalRepSealByImage 创建法定代表人图片印章-响应结构体 */
export interface CreateLegalRepSealByImageResponse {
  sealId?: number
  verifyId?: number
}

/** createPersonalSealByTemplate 创建模板签名-请求结构体 */
export interface CreatePersonalSealByTemplateRequest {
  openUserId: string
  sealName: string
  /**
   * 印章样式，示例：
    rectangle：矩形（默认值）
    rectangle_frame：矩形带框
    square_left_bigword：方形左大字
    square_left_bigword_frame：方形左大字带框
    square_right_bigword：方形右大字
    square_right_bigword_frame：方形右大字带框
   */
  sealTemplateStyle?: string
  /**
   * 印章规格，即宽高（单位：毫米mm）
   * 矩形签名，示例：
   * rectangle_30_16：30X16mm（默认）
   * rectangle_20_11：20X11mm
   * 方形签名，默认20X20mm，示例：
   * square_16_16 ：16X16mm
   * square_18_18：18X18mm
   * square_20_20：20X20mm（默认值）
   * square_22_22：22X22mm
   */
  sealSize?: string
  /** 
   * 印章颜色，默认红色
    red：红色（默认值）
    blue ：蓝色
    black：黑色
    */
  sealColor?: string
  /** 
   * 印章内容规则（印章中姓名后缀），默认值为仅名字
    name：仅名字，无后缀（仅显示姓名，如：包小豸）
    name_with_suffix_seal：加“印”（姓名后添加“印”字，如：包小豸印）
    name_with_suffix_of_seal：加“之印”（姓名后添加“之印”，如：包小豸之印）
   */
  sealSuffix?: string
  /** 防伪码 */
  securityCode?: string
  createSerialNo?: string
}

/** createPersonalSealByTemplate 创建模板签名-响应结构体 */
export interface CreatePersonalSealByTemplateResponse {
  sealId: number
}

/** createPersonalSealByImage 创建图片签名-请求结构体 */
export interface CreatePersonalSealByImageRequest {
  openUserId: string
  sealName: string
  sealWidth?: number
  sealHeight?: number
  /** 印章做旧，默认为0不做旧，数值范围0-1.85 */
  sealOldStyle?: number
  /** 
   * 印章颜色，默认红色
    red：红色（默认值）
    blue ：蓝色
    black：黑色
  */
  sealColor?: string
  createSerialNo?: string
}

/** createPersonalSealByImage 创建图片签名-响应结构体 */
export interface CreatePersonalSealByImageResponse {
  sealId?: number
}