import React, { useState, useEffect } from 'react'

const commentList = ({
  comment, author, commentNum,
}) => {
  const x = 5
  return (
    <>
      <div>
        <b>
          Comment
          {'#'}
          { commentNum }
        </b>
        :
        {' '}
        { comment }
      </div>
      <div>
        Author:
        {' '}
        { author }
      </div>
    </>
  )
}

export default commentList
