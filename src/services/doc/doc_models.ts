/** uploadFileByUrl 通过网络文件地址上传-请求参数结构体 */
export interface UploadFileByUrlRequest {
  /** 文件的用途类型: doc | attach */
  fileType: string
  /** 网络文件URL，法大大平台将从该地址拉取文档 */
  fileUrl: string
}

/** uploadFileByUrl 通过网络文件地址上传-响应参数结构体 */
export interface UploadFileByUrlResponse {
  /** 法大大云存储中的源文件地址 */
  fddFileUrl: string
}

/** uploadFileByUrl 通过网络文件地址上传-请求参数结构体 */
export interface GetUploadUrlRequest {
  /** 文件的用途类型: doc | attach */
  fileType: string
}

/** getUploadUrl 通过网络文件地址上传-响应参数结构体 */
export interface GetUploadUrlResponse {
  /** 文件上传地址，通过该链接，可以将用于签署的文档或附件上传到法大大云平台 */
  uploadUrl: string
   /** 法大大云存储中的源文件地址 */
  fddFileUrl: string
}

interface FddFileUrl {
  /** 文件的用途类型: doc | attach */
  fileType: string
  /** 法大大云存储中的源文件地址 */
  fddFileUrl: string
  /** 指定文件名称，包含扩展名 */
  fileName: string
}

/** fileProcess 文件处理-请求参数结构体 */
export interface FileProcessRequest {
  fddFileUrlList: Array<FddFileUrl>
}

interface FileId {
  /** 文件ID，长度最大32个字符 */
  fileId: string
  /** 文件的用途类型: doc | attach */
  fileType: string
  /** 法大大云存储中的源文件地址 */
  fddFileUrl: string
  /** 指定文件名称，包含扩展名 */
  fileName: string
  /** 文件总页数（仅fileType为doc时有值） */
  fileTotalPages: number
}

/** fileProcess 文件处理-请求参数结构体 */
export interface FileProcessResponse {
  fileIdList: Array<FileId>
}

/** fileVerifySign 文档验签-请求结构体 */
export interface FileVerifySignRequest {
  fileId: string
  /** 计算合同pdf文件hash值(sha256), 输出hexString */
  fileHash: string
}

export interface SignatureInfo {
  /** 签署主体信息 */
  signer: string
  /** 签署时间 */
  signedonTime: string
  /** 证书颁发机构 */
  authority: string
  /** 是否使用时间戳 */
  timestampFlag: boolean
  /** 时间戳时间 */
  timestampTime: string
  /** 时间戳是否验证通过 */
  timestampVerifyFlag: boolean
  /** 内容是否未被篡改 */
  integrityFlag: boolean
}

/** fileVerifySign 文档验签-响应结构体 */
export interface FileVerifySignResponse {
  verifyResult: boolean
  reason?: string
  signatureInfos: Array<SignatureInfo>
}