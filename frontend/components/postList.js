import React, { useState, useEffect } from 'react'
import NoLogBlock from './noLoginQuestionBlock'

const postList = ({ posts, loggedIn }) => {
  // console.log('logged in inside question list')
  // console.log(loggedIn)
  let count = 0
  return posts.map(x => {
    const str = `{post${count}}`
    count += 1
    return (
      <div key={str}>
        <NoLogBlock postText={x.postText} author={x.author} postPlay={x.postPlay} comments={x.comments} loggedIn={loggedIn[0]} id={x._id} />
      </div>
    )
  })
}

export default postList
