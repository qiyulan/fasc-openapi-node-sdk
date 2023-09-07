/** getFourElementVerifyUrl 个人四要素校验-请求参数结构体 */
export interface GetFourElementVerifyUrlRequest {
  clientUserId: string
  /** 用户姓名 */
  userName: string
  /** 用户身份证号 */
  userIdentNo: string
  /** 银行卡号 */
  bankAccountNo?: string
  /** 手机号 */
  mobile?: string
  /** 是否需要同时校验身份证照片，默认false，true：需要，false：不需要 */
  idCardImage?: boolean
  /** 身份证人像面base64 */
  faceSide?: string
  /** 身份证国徽面base64 */
  nationalEmblemSide?: string
  /** 重定向地址 */
  redirectUrl?: string
}

/** getFourElementVerifyUrl 个人四要素校验-响应参数结构体 */
export interface GetFourElementVerifyUrlResponse {
  /** 四要素校验页面链接，自适应PC/H5，有效期10分钟 */
  verifyUrl: string
}

/** getThreeElementVerifyUrl 个人三要素校验-请求参数结构体 */
export interface GetThreeElementVerifyUrlRequest {
  clientUserId: string
  /** 用户姓名 */
  userName: string
  /** 用户身份证号 */
  userIdentNo: string
  /** 手机号 */
  mobile?: string
  /** 是否需要同时校验身份证照片，默认false，true：需要，false：不需要 */
  idCardImage?: boolean
  /** 身份证人像面base64 */
  faceSide?: string
  /** 身份证国徽面base64 */
  nationalEmblemSide?: string
  /** 重定向地址 */
  redirectUrl?: string
}

/** getThreeElementVerifyUrl 个人三要素校验-响应参数结构体 */
export interface GetThreeElementVerifyUrlResponse {
  /** 四要素校验页面链接，自适应PC/H5，有效期10分钟 */
  verifyUrl: string
}

/** getIdCardImageDownloadUrl 获取要素校验身份证图片下载链接-请求参数结构体 */
export interface GetIdCardImageDownloadUrlRequest {
  /** 校验id，在回调事件中返回 */
  verifyId: string
}

/** getIdCardImageDownloadUrl 获取要素校验身份证图片下载链接-响应参数结构体 */
export interface GetIdCardImageDownloadUrlResponse {
  /** 要素校验身份证图片下载链接 */
  downloadUrl: string
}

/** getIdCardOcr 身份证OCR-请求参数结构体 */
export interface GetIdCardOcrRequest {
  /** 身份证人像面base64 */
  faceSide?: string
  /** 身份证国徽面base64 */
  nationalEmblemSide?: string
}

/** getIdCardOcr 身份证OCR-响应参数结构体 */
export interface GetIdCardOcrResponse {
  /** 姓名 */
  name?: string
  /** 身份证号 */
  identNo?: string
  /** 性别 */
  gender?: string
  /** 出生日期 */
  birthday?: string
  /** 民族 */
  nation?: string
  /** 住址 */
  address?: string
  /** 发证机关 */
  issueAuthority?: string
  /** 有效期 */
  validPeriod?: string
}

/** telecomThreeElementVerify 个人运营商三要素校验-请求结构体 */
export interface TelecomThreeElementVerifyRequest {
  userName: string
  userIdentNo: string
  mobile: string
}

/** telecomThreeElementVerify 个人运营商三要素校验-响应结构体 */
export interface TelecomThreeElementVerifyResponse {
  verifyResult: string
  serialNo?: string
}

/** bankFourElementVerify 个人银行卡四要素校验-请求结构体 */
export interface BankFourElementVerifyRequest {
  userName: string
  userIdentNo: string
  mobile: string
  bankAccountNo: string
}

/** bankFourElementVerify 个人银行卡四要素校验-响应结构体 */
export interface BankFourElementVerifyResponse {
  verifyResult: string
  serialNo?: string
}

/** bankThreeElementVerify 个人银行卡三要素校验-请求结构体 */
export interface BankThreeElementVerifyRequest {
  userName: string
  userIdentNo: string
  bankAccountNo: string
}

/** bankThreeElementVerify 个人银行卡三要素校验-响应结构体 */
export interface BankThreeElementVerifyResponse {
  verifyResult: string
  serialNo?: string
}

/** twoElementVerify 个人二要素校验-请求结构体 */
export interface TwoElementVerifyRequest {
  userName: string
  userIdentNo: string
}

/** twoElementVerify 个人二要素校验-响应结构体 */
export interface TwoElementVerifyResponse {
  verifyResult?: boolean
  serialNo?: string
}

/** idCardThreeElementVerify 人脸图片比对校验-请求结构体 */
export interface IdCardThreeElementVerifyRequest {
  userName: string
  userIdentNo: string
  imgBase64: string
}

/** idCardThreeElementVerify 人脸图片比对校验-响应结构体 */
export interface IdCardThreeElementVerifyResponse {
  serialNo?: string
  similarity?: string
}

/** businessThreeElementVerify 企业组织三要素校验-请求结构体 */
export interface BusinessThreeElementVerifyRequest {
  corpName: string
  corpIdentNo: string
  legalRepName: string
}

/** businessThreeElementVerify 企业组织三要素校验-响应结构体 */
export interface BusinessThreeElementVerifyResponse {
  serialNo?: string
  verifyResult?: boolean
}

/** businessFourElementVerify 企业组织四要素校验-请求结构体 */
export interface BusinessFourElementVerifyRequest {
  corpName: string
  corpIdentNo: string
  legalRepName: string
  legalRepIdCertNo: string
}

/** businessFourElementVerify 企业组织四要素校验-响应结构体 */
export interface BusinessFourElementVerifyResponse {
  serialNo?: string
  verifyResult?: boolean
}

/** businessInfoQuery 企业工商信息查询-请求结构体 */
export interface BusinessInfoQueryRequest {
  corpName?: string
  corpIdentNo?: string
}

/** businessInfoQuery 企业工商信息查询-响应结构体 */
export interface BusinessInfoQueryResponse {
  serialNo?: string
  orgName?: string
  organizationNo?: string
  companyCode?: string
  legalRepName?: string
  orgType?: string
  orgStatus?: string
  authority?: string
  capital?: string
  address?: string
  businessScope?: string
  establishDate?: string
  startDate?: string
  endDate?: string
  issueDate?: string
}

/** getFaceRecognitionUrl 获取人脸核验链接-请求结构体 */
export interface GetFaceRecognitionUrlRequest {
  userName: string
  userIdentNo: string
  faceauthMode: string
  createSerialNo?: string
  redirectUrl: string
}

/** getFaceRecognitionUrl 获取人脸核验链接-响应结构体 */
export interface GetFaceRecognitionUrlResponse {
  serialNo?: string
  shortUrl?: string
  url?: string
  bizToken?: string
  miniProgramAppId?: string
  miniProgramPath?: string
}

/** queryFaceStatus 查询人脸核验结果-请求结构体 */
export interface QueryFaceStatusRequest {
  serialNo: string
  getFile?: string
}

/** queryFaceStatus 查询人脸核验结果-响应结构体 */
export interface QueryFaceStatusResponse {
  userName: string
  userIdentNo: string
  faceauthMode: string
  resultStatus: string
  resultTime?: string
  failedReason?: string
  urlStatus?: number
  faceImg?: string
  faceImgs?: Array<string>
  similarity?: string
  liveRate?: string
}

/** idCardOcr 身份证OCR-请求结构体 */
export interface IdCardOcrRequest {
  faceSide?: string
  nationalEmblemSide?: string
}

/** idCardOcr 身份证OCR-响应结构体 */
export interface IdCardOcrResponse {
  name?: string
  identNo?: string
  gender?: string
  birthday?: string
  nation?: string
  address?: string
  issueAuthority?: string
  validPeriod?: string
}

/** bankcardOcr 银行卡OCR-请求结构体 */
export interface BankcardOcrRequest {
  imageBase64: string
}

/** bankcardOcr 银行卡OCR-响应结构体 */
export interface BankcardOcrResponse {
  serialNo?: string
  bankName?: string
  bankCardType?: string
  bankCardNo?: string
  validDate?: string
  warningCode?: string
}

/** licenseOcr 营业执照ocr-请求结构体 */
export interface LicenseOcrRequest {
  imageBase64: string
}

/** licenseOcr 营业执照ocr-响应结构体 */
export interface LicenseOcrResponse {
  serialNo?: string
  creditNo?: string
  companyName?: string
  companyType?: string
  address?: string
  registerNo?: string
  serialNumber?: string
  artificialName?: string
  regCapital?: string
  startTime?: string
  operatingPeriod?: string
  scope?: string
  warningCode?: string
}

/** drivingLicenseOcr 驾驶证ocr-请求结构体 */
export interface DrivingLicenseOcrRequest {
  imageBase64?: string
  backImageBase64?: string
}

/** drivingLicenseOcr 驾驶证ocr-响应结构体 */
export interface DrivingLicenseOcrResponse {
  serialNo?: string
  name?: string
  nationality?: string
  sex?: string
  address?: string
  birthday?: string
  firstIssueDate?: string
  number?: string
  quasiDrivingType?: string
  startDate?: string
  endDate?: string
  archivesCode?: string
  record?: string
  warningCode?: string
}

/** vehicleLicenseOcr 行驶证ocr-请求结构体 */
export interface VehicleLicenseOcrRequest {
  imageBase64?: string
  backImageBase64?: string
}

export interface VehicleFrontInfo {
  plateNo?: string
  vehicleType?: string
  owner?: string
  address?: string
  useCharacter?: string
  model?: string
  vin?: string
  engineNo?: string
  registerDate?: string
  issueDate?: string
  issuingAuthority?: string
}

export interface VehicleBackInfo {
  plateNo?: string
  fileNo?: string
  allowNum?: string
  totalMass?: string
  curbWeight?: string
  loadQuality?: string
  externalSize?: string
  totalQuasiMass?: string
  marks?: string
  record?: string
  warningCode?: string
}

/** vehicleLicenseOcr 行驶证ocr-响应结构体 */
export interface VehicleLicenseOcrResponse {
  serialNo?: string
  vehicleFrontInfo: VehicleFrontInfo
  vehicleBackInfo: VehicleBackInfo
}

/** mainlandPermitOcr 通行证ocr-请求结构体 */
export interface MainlandPermitOcrRequest {
  imageBase64?: string
}

/** mainlandPermitOcr 通行证ocr-响应结构体 */
export interface MainlandPermitOcrResponse {
  serialNo?: string
  name?: string
  englishName?: string
  sex?: string
  birthday?: string
  issueAuthority?: string
  validDate?: string
  number?: string
  issueAddress?: string
  issueNumber?: string
  type?: string
}