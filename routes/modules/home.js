const express = require('express')
const router = express.Router()

// 使用者進入首頁，就到登入頁面
router.get('/', (req, res) => {
  res.redirect('/login')
})

router.get('/index', (req, res) => {
  const userName = req.cookies.userName
  res.render('index', { userName })
})

module.exports = router
