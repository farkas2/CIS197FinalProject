const express = require('express')
const mongoose = require('mongoose')
const session = require('cookie-session')

const QuestionRouter = require('./routes/api')
const AccountRouter = require('./routes/account')

const app = express()

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/HW6'

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// handling POST --> req.body
app.use(express.json())

app.use(session({
  name: 'session',
  keys: ['key1', 'key2'],
  maxAge: 24 * 60 * 60 * 1000,
}))

// can only access req.session within a POST request
app.post('/', (req, res) => {
  if (req.session.username && req.session.password) {
    res.send(`hello ${req.session.username}`)
  } else {
    res.send('please log in to send a POST request')
  }
})

app.use('/api', QuestionRouter)
app.use('/account', AccountRouter)

// app.use('/transaction', TransactionRouter)

app.get('/', (req, res) => {
  res.send('should print on page load')
})

app.listen(3000, () => {
  // console.log('listening on port 3000')
})

app.use((err, req, res, next) => {
  res.status(500).send(`An error was caught: ${err.message}`)
})
