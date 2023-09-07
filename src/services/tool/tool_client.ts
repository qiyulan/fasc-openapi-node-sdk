import { AbstractClient } from "../../common/abstract_client"
import {
  GetFourElementVerifyUrlRequest,
  GetFourElementVerifyUrlResponse,
  GetThreeElementVerifyUrlRequest,
  GetThreeElementVerifyUrlResponse,
  GetIdCardImageDownloadUrlRequest,
  GetIdCardImageDownloadUrlResponse,
  GetIdCardOcrRequest,
  GetIdCardOcrResponse,
  TelecomThreeElementVerifyRequest,
  TelecomThreeElementVerifyResponse,
  BankFourElementVerifyRequest,
  BankFourElementVerifyResponse,
  TwoElementVerifyRequest,
  TwoElementVerifyResponse,
  BankThreeElementVerifyRequest,
  BankThreeElementVerifyResponse,
  IdCardThreeElementVerifyRequest,
  IdCardThreeElementVerifyResponse,
  BusinessThreeElementVerifyRequest,
  BusinessThreeElementVerifyResponse,
  BusinessFourElementVerifyRequest,
  BusinessFourElementVerifyResponse,
  BusinessInfoQueryRequest,
  BusinessInfoQueryResponse,
  GetFaceRecognitionUrlRequest,
  GetFaceRecognitionUrlResponse,
  QueryFaceStatusRequest,
  QueryFaceStatusResponse,
  IdCardOcrRequest,
  IdCardOcrResponse,
  BankcardOcrRequest,
  BankcardOcrResponse,
  LicenseOcrRequest,
  LicenseOcrResponse,
  DrivingLicenseOcrRequest,
  DrivingLicenseOcrResponse,
  VehicleLicenseOcrRequest,
  VehicleLicenseOcrResponse,
  MainlandPermitOcrRequest,
  MainlandPermitOcrResponse
} from "./tool_models"
import { ClientConfig } from "../../common/interface"

export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super(clientConfig)
  }

  /**
   * 个人四要素校验
   * 从法大大获取一个链接，用户可在页面中校验其姓名、身份证号、运营商手机号是否一致
   */
  async getFourElementVerifyUrl(req: GetFourElementVerifyUrlRequest): Promise<GetFourElementVerifyUrlResponse> {
    return this.request({ url: "/user/four-element-verify/get-url", req, reqMethod: "POST" })
  }

  /**
   * 个人三要素校验
   * 从法大大获取一个链接，用户可在页面中校验其姓名、身份证号、运营商手机号是否一致
   */
  async getThreeElementVerifyUrl(req: GetThreeElementVerifyUrlRequest): Promise<GetThreeElementVerifyUrlResponse> {
    return this.request({ url: "/user/three-element-verify/get-url", req, reqMethod: "POST" })
  }

  /**
   * 获取要素校验身份证图片下载链接
   */
  async getIdCardImageDownloadUrl(req: GetIdCardImageDownloadUrlRequest): Promise<GetIdCardImageDownloadUrlResponse> {
    return this.request({ url: "/user/element-verify/get-idcard-image-download-url", req, reqMethod: "POST" })
  }

  /**
   * 身份证OCR
   */
  async getIdCardOcrUrl(req: GetIdCardOcrRequest): Promise<GetIdCardOcrResponse> {
    return this.request({ url: "/user/ocr/id-card", req, reqMethod: "POST" })
  }

  /** 个人运营商三要素校验 */
  async telecomThreeElementVerify(req: TelecomThreeElementVerifyRequest): Promise<TelecomThreeElementVerifyResponse> {
    return this.request({ url: "/user/telecom/three-element-verify", req, reqMethod: "POST" })
  }

  /** 个人银行卡四要素校验 */
  async bankFourElementVerify(req: BankFourElementVerifyRequest): Promise<BankFourElementVerifyResponse> {
    return this.request({ url: "/user/bank/four-element-verify", req, reqMethod: "POST" })
  }

  /** 个人银行卡三要素校验 */
  async bankThreeElementVerify(req: BankThreeElementVerifyRequest): Promise<BankThreeElementVerifyResponse> {
    return this.request({ url: "/user/identity/bank-three-element-verify", req, reqMethod: "POST" })
  }

  /** 个人二要素校验 */
  async twoElementVerify(req: TwoElementVerifyRequest): Promise<TwoElementVerifyResponse> {
    return this.request({ url: "/user/identity/two-element-verify", req, reqMethod: "POST" })
  }
  
  /** 人脸图片比对校验 */
  async idCardThreeElementVerify(req: IdCardThreeElementVerifyRequest): Promise<IdCardThreeElementVerifyResponse> {
    return this.request({ url: "/user/identity/idcard-three-element-verify", req, reqMethod: "POST" })
  }
  
  /** 企业组织三要素校验 */
  async businessThreeElementVerify(req: BusinessThreeElementVerifyRequest): Promise<BusinessThreeElementVerifyResponse> {
    return this.request({ url: "/corp/identity/business-three-element-verify", req, reqMethod: "POST" })
  }
    
  /** 企业组织四要素校验 */
  async businessFourElementVerify(req: BusinessFourElementVerifyRequest): Promise<BusinessFourElementVerifyResponse> {
    return this.request({ url: "/corp/identity/business-four-element-verify", req, reqMethod: "POST" })
  }
  
  /** 企业工商信息查询 */
  async businessInfoQuery(req: BusinessInfoQueryRequest): Promise<BusinessInfoQueryResponse> {
    return this.request({ url: "/corp/identity/business-info-query", req, reqMethod: "POST" })
  }
    
  /** 获取人脸核验链接 */
  async getFaceRecognitionUrl(req: GetFaceRecognitionUrlRequest): Promise<GetFaceRecognitionUrlResponse> {
    return this.request({ url: "/user/verify/face-recognition", req, reqMethod: "POST" })
  }
      
  /** 查询人脸核验结果 */
  async queryFaceStatus(req: QueryFaceStatusRequest): Promise<QueryFaceStatusResponse> {
    return this.request({ url: "/user/verify/face-status-query", req, reqMethod: "POST" })
  }

  /** 身份证ocr */
  async idCardOcr(req: IdCardOcrRequest): Promise<IdCardOcrResponse> {
    return this.request({ url: "/user/ocr/id-card", req, reqMethod: "POST" })
  }

  /** 银行卡ocr */
  async bankcardOcr(req: BankcardOcrRequest): Promise<BankcardOcrResponse> {
    return this.request({ url: "/user/ocr/bankcard", req, reqMethod: "POST" })
  }

  /** 营业执照ocr */
  async licenseOcr(req: LicenseOcrRequest): Promise<LicenseOcrResponse> {
    return this.request({ url: "/user/ocr/license", req, reqMethod: "POST" })
  }
  
  /** 驾驶证ocr */
  async drivingLicenseOcr(req: DrivingLicenseOcrRequest): Promise<DrivingLicenseOcrResponse> {
    return this.request({ url: "/user/ocr/drivinglicense", req, reqMethod: "POST" })
  }
    
  /** 行驶证ocr */
  async vehicleLicenseOcr(req: VehicleLicenseOcrRequest): Promise<VehicleLicenseOcrResponse> {
    return this.request({ url: "/user/ocr/vehiclelicense", req, reqMethod: "POST" })
  }
      
  /** 通行证ocr */
  async mainlandPermitOcr(req: MainlandPermitOcrRequest): Promise<MainlandPermitOcrResponse> {
    return this.request({ url: "/user/ocr/mainland-permit", req, reqMethod: "POST" })
  }
}
