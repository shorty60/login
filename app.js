const express = require('express')
const { engine } = require('express-handlebars')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection
db.on('error', () => {
  console.log('MongoDB connection fail!')
})

db.once('open', () => {
  console.log('MongoDB connected.')
})

const app = express()
const port = 3000

app.engine('hbs', engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(express.static('public'))
app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})
