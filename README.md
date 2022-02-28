# 简介

欢迎使用法大大开发者工具套件（SDK），NODEJS SDK 是法大大电子合同和电子签云服务平台（FASC）平台的配套工具。

# 依赖环境

1.NODEJS 10.0.0 版本及以上

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
    appId: 'appId',
    appSecret: 'appSecret',
  },
  // 服务请求地址
  serverUrl: 'https://sit-openapi.fadada.com/api/v5'
}

// 实例化模块的client对象
const client = new ClientConfig(clientConfig)
// 通过client对象调用想要访问的接口，传入请求对象以及响应回调函数
const cb = (err, res) => {
  console.error('error: ', err)
  console.log('response: ', res)
}
client.getUserInfo({openUserId: 'openUserId'}, cb ).then(
  res => {
    console.log(res)
  },
  err => {
    console.error('error: ', err)
  }
)

```
