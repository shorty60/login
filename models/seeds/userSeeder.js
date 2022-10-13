const mongoose = require('mongoose')
const User = require('../user')
const db = require('../../config/mongoose')

const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman',
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday',
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram',
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!',
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password',
  },
]

db.once('open', () => {
  console.log('Start writing seeds...')
  return User.insertMany(users)
    .then(() => {
      console.log('Seeds Written.')
    })
    .catch(error => {
      console.log(error)
    })
    .finally(() => {
      console.log('type "npm run start"')
      db.close()
    })
})
