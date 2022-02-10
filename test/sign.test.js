const crypto = require("crypto")
const Sign = require("../fascapi/common/sign").default

function getSign() {
  const data = null
  const timestamp = 1643164810494
  const appSecret = "Q0KNS3VL1NZPHGUKRBLCP1E4ECQAQSIC"
  const nonce = "94e71987017d4c8f9602c0517bb40e08" //v4()
  const signStr = Sign.formatSignString({
    data,
    appId: "CLOUD00077908",
    signMethod: "HMAC-SHA256",
    nonce,
    timestamp,
    appSecret,
  }) // ee53166b6120ea61ba90038d28bcb7b722913bc6ff9a63b8f7231c7382f74346

  const signature = Sign.sign({ signStr, timestamp, appSecret }) // eb61bb97026caa72dbec41c5b51afc89426030d6667d54a2acc9be5dbdb8a0a5
  console.log("signature: ", signature)
}

getSign()
