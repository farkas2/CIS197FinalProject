const express = require('express')

const axios = require('axios')

const router = express.Router()
const Post = require('../models/post')
const isAuthenticated = require('../middlewares/isAuthenticated')

// //questions (get all questions)
router.get('/Post', async (req, res, next) => {
  try {
    const mongooseResponse = await Post.find()
    res.json(mongooseResponse)
    // res.send('questions grabbed')
  } catch (err) {
    const err2 = new Error('Getting posts has problems')
    next(err2)
    res.send('Getting posts has problems') // preferred
  }
})

// add Post
router.post('/Posts/add', isAuthenticated, async (req, res, next) => {
  const { postPlay, postText, author } = req.body
  try {
    await Post.create({ postPlay, postText, author })
    res.send('Post created-- great success')
  } catch (err) {
    // console.log(err)
    const err2 = new Error('Adding a Post has problems')
    next(err2)
    res.send('Post creation has problems') // preferred
  }
})

// pull the folger tetx from the given link
router.post('/Posts/pullPlay', async (req, res, next) => {
  const { playURL } = req.body
  const playGetReturn = await axios.get(playURL)
  res.send(playGetReturn.data)
})

// add a comment
router.post('/Posts/addComment', isAuthenticated, async (req, res, next) => {
  const { _id, comment, author } = req.body
  // find a question by ID, then update it's answer
  // const temp = await Post.findOneAndUpdate({ _id }, { comment })
  const temp = await Post.findById(_id)

  // if first comment we have to manually insert comments field
  if (typeof temp.comments === 'undefined') {
    try {
      const username = req
      const username2 = username.session
      const username3 = username2.username

      await Post.findOneAndUpdate({ _id }, { comments: [{ comment, username3 }] })
      res.send('comment provided-- great success')
    } catch (err) {
      const err2 = new Error('Comment creation has problems')
      next(err2)
    }
    return
  }
  // otherwise append the new comment to list of existing comments
  try {
    const username = req
    const username2 = username.session
    const username3 = username2.username

    // console.log(temp.comments)
    // add the comment to the array
    temp.comments.push({ comment, username3 })
    await Post.findOneAndUpdate({ _id }, { comments: temp.comments })
    res.send('comment provided-- great success')
  } catch (err) {
    const err2 = new Error('Comment creation has problems')
    next(err2)
  }
})
module.exports = router
