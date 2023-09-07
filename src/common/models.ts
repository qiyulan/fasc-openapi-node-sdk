export enum SignMethod {
  hamcsha256 = "HMAC-SHA256",
}

/** 证件类型枚举 */
export enum IdentTypeEnum {
  /** 身份证 */
  ID_CARD = "id_card",
  /** 护照 */
  PASSPORT = "passport",
  /** 港澳居民来往内地通行证 */
  HK_MACAO = "hk_macao",
  /** 台湾居民来往大陆通行证 */
  TAIWAN = "taiwan",
}

/** 主体类型枚举 */
export enum IdTypeEnum {
  /** 企业 */
  CORP = "corp",
  /** 个人 */
  PERSON = "person",
}

/** 企业组织类型枚举 */
export enum CorpIdentTypeEnum {
  /** 企业 */
  CORP = "corp",
  /** 个体工商户 */
  INDIVIDUAL_BIZ = "individual_biz",
  /** 政府和事业单位 */
  GOVERNMENT = "government",
  /** 其他类型 */
  OTHER = "other",
}

/** 参与方主体类型 */
export enum ActorTypeEnum {
  /** 企业 */
  CORP = "corp",
  /** 个人 */
  PERSON = "person",
}

export enum RequestParamsEnum {
  /**
   * 企业控制台创建应用后得到的应用ID
  */
  APP_ID = "X-FASC-App-Id",
  /**
   * 签名算法类型:固定HMAC-SHA256
   */
  SIGN_TYPE = "X-FASC-Sign-Type",
  /**
   * 请求参数的签名值
   */
  SIGN = "X-FASC-Sign",
  /**
   * 时间戳(yyyy-MM-dd HH:mm:ss.sss)，时间戳必须是保证是当前时间，同时跟法大大这边的服务器时间正负不能相差5分钟
   */
  TIMESTAMP = "X-FASC-Timestamp",
  /**
   * FASC.openApi子版本号。如当前规划新版本为：5.1。注意：若指定子版本号下不存在接口，系统将会报错返回。
   */
  SUBVERSION = 'X-FASC-Api-SubVersion',
  /**
   * 随机数(32位, 10分钟内不能重复请求)
   */
  NONCE = "X-FASC-Nonce",
  /**
   * 平台令牌,通过获取令牌接口返回
   */
  ACCESS_TOKEN = "X-FASC-AccessToken",
  /**
   * 请求参数的集合，除公共请求参数都必须放在这个参数中传递（除文件，字节流等）,json字符串.
   */
  DATA_KEY = "bizContent",
  GRANT_TYPE = "X-FASC-Grant-Type",
  FDD_REQUEST_ID = "X-FASC-Request-Id",
  /**
   * 默认授权类型
   **/
  CLIENT_CREDENTIAL = "client_credential",
  EUI_TIMESTAMP = "timestamp",
  EUI_SIGNATURE = "signature",
  METHOD_POST = 'POST',
  METHOD_GET = 'GET',
}

export const SUBVERSION = '5.1'

/** 统一标识应用系统上的用户(个人或企业) */
export interface OpenId {
  /** 主体类型 */
  idType: IdTypeEnum
  /**
   * 主体标识，长度最大64个字符。
   * 如果idType为corp：代表应用系统上的企业用户，主体方是openCorpId所指定的企业；
   * 如果idType为person：代表应用系统上的个人用户，主体方是openUserId所指定的个人；
   */
  openId: string
}

/** 参与方权限 */
export enum Permissions {
  /** 填写和确认内容 */
  FILL = 'fill',
  /** 确定签署 */
  SIGN = 'sign'
}

/** 参与方企业成员信息 */
export interface ActorCorpMember {
  /** 企业成员ID */
  memberId: string
}

/** 个人身份信息 */
export interface UserIdentInfo {
  /** 个人用户真实姓名 */
  userName?: string
  /** 证件类型 */
  identType: IdentTypeEnum
  identNo: string
}

/** 个人信息补充 */
export interface UserInfoExtend {
  /** 个人银行账号 */
  bankAccountNo?: string
  /** 个人实名手机号 */
  mobile?: string
}

/** 企业身份信息 */
export interface CorpIdentInfo {
  /** 企业名称全程 */
  corpName?: string
  /** 企业组织类型 */
  corpIdentType: CorpIdentTypeEnum
  /** 统一标识应用系统上的用户(个人或企业) */
  corpIdentNo: string
  /** 法定代表人名称 */
  legalRepName?: string
}

/** 企业信息补充 */
export interface CorpInfoExtend {
  /** 企业对公银行账户开户行名称 */
  bankName?: string
  /** 企业对公银行账户开户行支行名称 */
  bankBranchName?: string
  /** 企业对公银行帐户号 */
  bankAccountNo?: string
  /** 企业对公银行帐户银行所在省份 */
  bankProvinceName?: string
  /** 企业对公银行帐户银行所在市 */
  bankCityName?: string
}

/** 通知控制参数 */
export interface Notification {
  /** 是否需要法大大平台发送通知 */
  sendNotification: boolean
  /** 通知方式 */
  notifyWay?: "mobile" | "email"
  /** 通知地址，手机号或邮箱地址，和通知方式匹配一致 */
  notifyAddress?: string
}

/** 签署任务参与方信息 */
export interface Actor {
  /** 参与方标识。在同一个签署任务中，同类型的各参与方标识不可重复 */
  actorId: string
  /** 参与方主体类型：corp、person */
  actorType: ActorTypeEnum
  /** 参与方名称。长度最大128个字符 */
  actorName: string
  /** 参与方权限数组 */
  permissions: Array<Permissions>
  /** 参与方主体在应用上的OpenId，用于参与方主体身份识别 */
  actorOpenId?: string
  /** 参与方主体的法大大号，用于参与方主体身份识别 */
  actorFDDId?: string
  /** 参与方企业主体Id */
  actorEntityId?: string
  /** 参与方企业成员列表，用于参与方企业主体成员的身份识别 */
  actorCorpMembers?: Array<ActorCorpMember>
  /** 参与方身份名称匹配信息：个人姓名或企业全称 */
  identNameForMatch?: string
  /** 个人参与方证件类型，默认为身份证 */
  certType?: string
  /** 参与方的法大大帐号，为手机号或邮箱，仅对个人参与方有效 */
  accountName?: string
  /** 参与方证件号码匹配信息：个人身份证号或企业统信码 */
  certNoForMatch?: string
  /** 法大大通知信息 */
  notification?: Notification
}

/** 控件定位 */
export interface FieldPosition {
  /** 定位模式：pixel、keyword */
  positionMode: 'pixel' | 'keyword'
  /** 定位页码。首页从1开始。 */
  positionPageNo?: string
  /** 中心点定位坐标横向偏移量 */
  positionX?: string
  /** 中心点定位坐标纵向偏移量 */
  positionY?: string
  /** 关键字定位 */
  positionKeyword?: string
  /** 关键字中心点横向偏移量。只能传入数字，可支持小数，正数代表向右偏移，负数代表向左偏移 */
  keywordOffsetX?: string
  /** 关键字中心点纵向偏移量。只能传入数字，可支持小数，正数代表向上偏移，负数代表向下偏移 */
  keywordOffsetY?: string
}

/** 文档控件 */
export interface Field {
  /** 控件编码 */
  fieldId: string
  /** 控件名称 */
  fieldName: string
  fieldKey?: string
  /** 控件定位 */
  position: FieldPosition
  moveable?: boolean
  /** 控件类型：person_sign、corp_seal、corp_seal_cross_page、date_sign、text_single_line、text_multi_line、check_box */
  fieldType: string
  /** 单行文本控件属性参数 */
  fieldTextSingleLine?: FieldTextSingleLine
  /** 多行文本控件属性参数 */
  fieldTextMultiLine?: FieldTextMultiLine
  /** 数字控件属性参数 */
  fieldNumber?: FieldNumber
  /** 身份证控件属性参数 */
  fieldIdCard?: FieldIdCard
  /** 填写日期控件属性参数 */
  fieldFillDate?: FieldFillDate
  /** 单选框-多项控件属性参数 */
  fieldMultiRadio?: FieldMultiRadio
  /** 复选框-多项控件属性参数 */
  fieldMultiCheckbox?: FieldMultiCheckbox
  /** 复选框控件属性参数 */
  fieldCheckBox?: FieldCheckBox
}

/** 个人签名空间 */
export interface FieldPersonSign {
  width?: number
  height?: number
}

/** 企业印章控件 */
export interface FieldCorpSeal {
  width?: number
  height?: number
}

/** 备注区控件 */
export interface FieldRemarkSign {
  defaultValue?: string
  tips?: string
  editable?: boolean
  width?: number
  height?: number
  fontType?: string
  fontSize?: number
}

/** 单行文本控件 */
export interface FieldTextSingleLine {
  /** 是否必须：false/true，默认为true */
  required?: boolean
  /** 指定默认值 */
  defaultValue?: string
  tips?: string
  width?: number
  height?: number
  fontType?: string
  fontSize?: number
  alignment?: string
}

/** 多行文本控件 */
export interface FieldTextMultiLine {
  /** 是否必须：false/true，默认为true */
  required?: boolean
  /** 指定默认值 */
  defaultValue?: string
  tips?: string
  width?: number
  height?: number
  fontType?: string
  fontSize?: number
  alignment?: string
}

/** 数字控件 */
export interface FieldNumber {
  /** 是否必须：false/true，默认为true */
  required?: boolean
  /** 指定默认值 */
  defaultValue?: string
  tips?: string
  width?: number
  height?: number
  fontType?: string
  fontSize?: number
  alignment?: string
}

/** 身份证控件 */
export interface FieldIdCard {
  /** 是否必须：false/true，默认为true */
  required?: boolean
  /** 指定默认值 */
  defaultValue?: string
  tips?: string
  width?: number
  height?: number
  fontType?: string
  fontSize?: number
  alignment?: string
}

/** 填写日期控件 */
export interface FieldFillDate {
  /** 是否必须：false/true，默认为true */
  required?: boolean
  /** 指定默认值 */
  defaultValue?: string
  tips?: string
  width?: number
  height?: number
  fontType?: string
  fontSize?: number
  alignment?: string
}

/** 单选框-多项控件 */
export interface FieldMultiRadio {
  /** 是否必须：false/true，默认为true */
  required?: boolean
  /** 选项，[“选项一”,“选项二”] */
  option?: Array<string>
  /** 指定默认值 */
  defaultValue?: Array<boolean>
}

/** 复选框-多项控件 */
export interface FieldMultiCheckbox {
  /** 是否必须：false/true，默认为true */
  required?: boolean
 /** 选项，[“选项一”,“选项二”] */
  option?: Array<string>
 /** 指定默认值 */
  defaultValue?: Array<boolean>
}

/** 复选框控件 */
export interface FieldCheckBox {
  /** 是否必须：false/true，默认为true */
  required?: boolean
  /** 指定默认值 */
  defaultValue?: string
}

/** 图片控件 */
export interface FieldPicture {
  required?: boolean
  /** 指定默认值 */
  defaultValue?: string
  width?: number
  height?: number
}

/** 下拉选择控件 */
export interface FieldSelectBox {
  required?: boolean
  option?: Array<string>
  defaultValue?: string
  tips?: string
  width?: number
  height?: number
  fontType?: string
  fontSize?: number
  alignment?: string
}

/** 表格控件 */
export interface FieldTable {
  required?: boolean
  header: Array<string>
  requiredCount?: number
  fontType?: string
  fontSize?: number
  alignment?: string
  /** 表格方向，默认横向，broadwise：横向，vertical：竖向，竖向无法设置动态表格 */
  headerPosition?: string
  rows?: number
  cols?: number
  rowHeight?: number
  /** 每列的宽度，单位px */
  widths?: Array<number>
  /** 是否可额外动态增删行数，默认false */
  dynamicFilling?: boolean
  defaultValue?: Array<Array<string>>
  /** 是否隐藏表头，默认faslse */
  hideHeader?: boolean
}

export interface ListPageModel {
  /** 列表当前分页 */
  listPageNo: number
  /** 当前返回页中的文档模板数量，即数组大小 */
  countInPage: number
  /** 列表总分页数 */
  listPageCount: number
  /** 查询到的文档模板总数 */
  totalCount: number
}

export interface Watermark {
  /**
   * 水印类型
   * text：文字
   * picture：图片
   */
  type: string
  picBase64?: string
  picWidth?: string
  picHeight?: string
  content?: string
  fontSize?: number
  fontColor?: string
  rotation?: number
  transparency?: number
  position?: string
  density?: string
}