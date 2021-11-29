const express = require('express')

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
  const { postText, author } = req.body
  try {
    await Post.create({ postText, author })
    res.send('Post created-- great success')
  } catch (err) {
    // console.log(err)
    const err2 = new Error('Adding a Post has problems')
    next(err2)
    res.send('Post creation has problems') // preferred
  }
})

// answer a question
router.post('/Posts/addComment', isAuthenticated, async (req, res, next) => {
  const { _id, comment, author } = req.body
  // find a question by ID, then update it's answer
  // const temp = await Post.findOneAndUpdate({ _id }, { comment })
  const temp = await Post.findById(_id)

  // handle first comment case
  if (typeof temp.comments === 'undefined') {
    try {
      await Post.findOneAndUpdate({ _id }, { comments: [{ comment, author }] })
      res.send('comment provided-- great success')
    } catch (err) {
      const err2 = new Error('Comment creation has problems')
      next(err2)
    }
    return
  }
  // otherwise append the comments
  try {
    console.log(temp.comments)
    // add the comment to the array
    temp.comments.push({ comment, author })
    await Post.findOneAndUpdate({ _id }, { comments: temp.comments })
    res.send('comment provided-- great success')
  } catch (err) {
    const err2 = new Error('Comment creation has problems')
    next(err2)
  }
})
module.exports = router
