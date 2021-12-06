import React, { useState, useEffect } from 'react'
import Comment from './comments'

const commentList = ({ comments, loggedIn }) => {
  // console.log('logged in inside question list')
  // console.log(loggedIn)
  let count = 0
  return comments.map(x => {
    const str = `{comment${count}}`
    const doubleStr = `{comment${count}${'blurp'}}`
    count += 1
    return (
      <>
        <div
          style={
            {
              border: '2px solid black',
              width: '200px',
            }
          }
          key={doubleStr}
        >
          <div key={str}>
            <Comment comment={x.comment} author={x.username3} commentNum={count - 1} />
          </div>
        </div>
      </>
    )
  })
}

export default commentList
