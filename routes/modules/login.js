const express = require('express')
const { body, validationResult } = require('express-validator')

const User = require('../../models/user')

const router = express.Router()

// 登入頁面
router.get('/', (req, res) => {
  res.render('login')
})

// 使用者送出登入資料
router.post(
  '/',
  body('userEmail').isEmail(),
  body('userPassword').isLength({ min: 6 }),
  (req, res) => {
    const userEmail = req.body.userEmail.trim()
    const userPassword = req.body.userPassword.trim()
    const errors = validationResult(req)
    const Origin = req.get('origin')
    if (!errors.isEmpty()) {
      let badRequest = true
      return res.status(400).render('error', {
        badRequest,
        Origin,
        error: errors.array()[0],
      })
    }

    // 使用者帳號是唯一的，一個email只能註冊一次
    return User.findOne({ email: userEmail }).then(user => {
      if (user) {
        const { password: userPasswordInDB, firstName: userName } = user
        // 如果使用者輸入密碼和資料庫密碼相符，導向首頁
        if (userPassword === userPasswordInDB) {
          res.cookie('userName', userName)
          return res.redirect('/index')
        }
      }
      // 密碼不對，或是根本沒在資料庫找到這個email，一律請使用者重輸入
      let notCorrect = true
      return res.render('login', { notCorrect })
    })
  }
)

module.exports = router
