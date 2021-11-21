const express = require('express')

const router = express.Router()
const Question = require('../models/question')
const isAuthenticated = require('../middlewares/isAuthenticated')

// //questions (get all questions)
router.get('/questions', async (req, res, next) => {
  try {
    const mongooseResponse = await Question.find()
    res.json(mongooseResponse)
    // res.send('questions grabbed')
  } catch (err) {
    const err2 = new Error('Getting questions has problems')
    next(err2)
    res.send('Getting questions has problems') // preferred
  }
})

// add question
router.post('/questions/add', isAuthenticated, async (req, res, next) => {
  const { question, answer, author } = req.body
  try {
    await Question.create({ questionText: question, answer, author })
    res.send('question created-- great success')
  } catch (err) {
    // console.log(err)
    const err2 = new Error('Adding a question has problems')
    next(err2)
    res.send('question creation has problems') // preferred
  }
})

// answer a question
router.post('/questions/answer', isAuthenticated, async (req, res, next) => {
  const { _id, answer } = req.body
  // find a question by ID, then update it's answer
  try {
    await Question.findOneAndUpdate({ _id }, { answer })
    res.send('answer provided-- great success')
  } catch (err) {
    const err2 = new Error('Answer creation has problems')
    next(err2)
    res.send('answer creation has problems') // preferred
  }
})
module.exports = router
