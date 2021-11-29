const express = require('express')
const mongoose = require('mongoose')
const session = require('cookie-session')

const path = require('path')
const QuestionRouter = require('./routes/api')
const AccountRouter = require('./routes/account')

const app = express()

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/FinalProject'

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(express.static('dist')) // set the static folder

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

app.get('/', (req, res) => {
  res.send('should print on page load')
})

// set favicon
app.get('/favicon.ico', (req, res) => {
  res.status(404).send()
})

// set the initial entry point
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.listen(3000, () => {
  // console.log('listening on port 3000')
})

app.use((err, req, res, next) => {
  res.status(500).send(`An error was caught: ${err.message}`)
})
