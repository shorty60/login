const SHA256 = require('crypto-js/sha256')
const Base64 = require('crypto-js/enc-base64')

function sessionIDgenerate(name, ip) {
  let randomNum = randomNumber()
  const hashDigest = SHA256(name + ip + randomNum)
  const sessionID = Base64.stringify(hashDigest).slice(0, 15)
  return sessionID
}

function randomNumber() {
  let randomNum = Math.floor(Math.random() * 10000).toString()
  return randomNum
}

module.exports = sessionIDgenerate
