const fascapi = require("../fascapi")

const client = new fascapi.accessTokenClient.Client({
  credential: { appId: "CLOUD00077908", appSecret: "Q0KNS3VL1NZPHGUKRBLCP1E4ECQAQSIC" },
  serverUrl: "https://sit-openapi.fadada.com/api/v5",
})

client.getAccessToken((err, req) => {
  console.log(req)
})
