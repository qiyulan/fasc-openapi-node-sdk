# FASC OpenApi Node SDK v5.1说明

# 简介

欢迎使用法大大开发者工具套件（SDK），NODEJS SDK 是法大大电子合同和电子签云服务开放平台（FASC OPEN API）的配套工具。



# 版本说明

FASC.openAPI 产品目前存在两个子版本号：v5.0、v5.1， 均在持续迭代维护。 

当前页面SDK基于FASC.openAPI v5.1子版本开发，如需使用FASC.openAPI v5.0版本SDK，请访问： 

https://gitee.com/fadada-cloud/fasc-openapi-node-sdk/tree/v5.0



# 目录结构
- SDK项目层级     
```js
fascapi
	- services  // client客户端。
	- common // 包含了http,hash工具类方法 和全局常量等。
	- model // 主要常用数据模型定义。
```

- SDK 目前支持以下模块，对应 client 可支持具体的业务方法：

| 模块               | 模块中文名       | 模块说明                                                               |
| ------------------ | ---------------- | ---------------------------------------------------------------------- |
| accessTokenClient  | 服务访问凭证     | 获取服务访问凭证                                                       |
| userClient         | 个人用户管理     | 包含个人用户信息增删改查、认证、授权                                   |
| corpClient         | 企业用户账号管理 | 包含企业用户信息增删改查、认证、授权                                   |
| fileClient         | 文件管理         | 包含文件和附件上传                                                     |
| docTemplateClient  | 文档模板管理     | 包含文档模板列表、详情查询                                             |
| signTemplateClient | 签署模板管理     | 包含签署模板列表、详情查询                                             |
| signTaskClient     | 签署任务管理     | 包含签署任务的创建、维护、各个流程节点的流转操作，以及签署任务文件下载 |
| templateClient | 企业模板管理  | 企业模板管理PUI |
| billingClient      | 计费             | 获取计费页面链接，用于账户信息查询或套餐订购                           |
| corpManageClient   | 企业管理         | 对指定模块进行管理操作，如印章管理等                         |
| euiClient | EUI页面链接管理 | 对构造类EUI页面链接进行管理操作，如新企业授权等 |

实例化 `client` 的入参支持 `clientConfig` 数据结构和说明 详见 [ClientConfig](https://gitee.com/fadada-cloud/fasc-openapi-node-sdk/blob/master/src/common/interface.ts)


# 依赖环境

1. NODEJS 12 版本及以上
2. 在法大大平台开通相应应用
3. 获取 appId、appSecret 及服务请求地址（serverUrl）

# 获取安装

## 通过 yarn / npm 安装：

1. 获取 [fasc-openapi-node-sdk](git+https://gitee.com/fadada-cloud/fasc-openapi-node-sdk.git) 的码云安装地址
2. 打开 package.json 文件，在 dependencies 中加入如下代码：
>  "fasc-openapi-node-sdk": "git+https://gitee.com/fadada-cloud/fasc-openapi-node-sdk.git"
3. 进入项目根目录下，执行如下命令：
>  yarn install 或者 npm install

## 下载包安装：

1. 下载压缩包解压
2. 复制 dist 目录下的 fascapi.js 文件（其余 ts 文件可根据需要自行提取）到项目文件夹下
3. 在使用是通过 var fascapi = require('fascapi.js') 引入使用

# 示例

```js
// 导入sdk
const fascOpenApi = require('fasc-openapi-node-sdk);

// 导入对应模块的client
const UserClient = fascOpenApi.userClient.Client;

// 配置信息
const clientConfig = {
  // 认证信息
  credential: {
    appId: 'appId值',
    appSecret: 'appSecret值',
    accessToken: 'accessToken值'
  },
  // 服务请求地址
  serverUrl: '服务请求地址'
}

// 实例化模块的client对象
const client = new UserClient(clientConfig)
// 通过client对象调用想要访问的接口，传入请求对象以及响应回调函数
client.getUserInfo({openUserId: 'openUserId'}).then(
  res => {
    console.log(res)
  },
  err => {
    console.error('error: ', err)
  }
)

```


## 更多示例

更丰富的示例请前往 [demo](https://gitee.com/fadada-cloud/fasc-openapi-node-sdk-demo/master) 中查看



# 版本更新日志

5.1.0 - 2022-07-28   基于FASC OpenAPI 5.1.0版本开发，初始版本。



# 参考

FASC OpenAPI (服务端) 接口文档 v5.1

https://dev.fadada.com/api-doc/MTE9YIK1SP/QMMRYYN5RMPREAZH/5-1 