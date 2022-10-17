const express = require('express')
const Session = require('../../models/session')
const User = require('../../models/user')
const router = express.Router()

// 使用者進入首頁，就到登入頁面
router.get('/', (req, res) => {
  res.redirect('/login')
})

router.get('/index', (req, res) => {
  const sessionID = req.signedCookies.sessionID
  return Session.findOne({ sessionID: sessionID })
    .then(data => {
      const userEmail = data.userEmail
      return User.findOne({ email: userEmail })
    })
    .then(data => {
      const userName = data.firstName
      return res.render('index', { userName, sessionID })
    })
    .catch(error => {
      console.log(error)
      return res.redirect('/login')
    })
})

router.post('/index', (req, res) => {
  const sessionID = req.signedCookies.sessionID
  Session.findOne({ sessionID: sessionID })
    .then(data => {
      if (!data) {
        return
      }
      return data.remove()
    })
    .then(() => {
      return res.clearCookie('sessionID')
    })
    .then(() => res.redirect('/login'))
    .catch(error => {
      console.log(error)
      res.redirect('/login')
    })
})

module.exports = router
