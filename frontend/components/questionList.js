import React, { useState, useEffect } from 'react'
import NoLogBlock from './noLoginQuestionBlock'

const questionList = ({ questions, loggedIn }) => {
  // console.log('logged in inside question list')
  // console.log(loggedIn)
  let count = 0
  return questions.map(x => {
    const str = `{question${count}}`
    count += 1
    return (
      <div key={str}>
        <NoLogBlock question={x.questionText} author={x.author} answer={x.answer} loggedIn={loggedIn[0]} id={x._id} />
      </div>
    )
  })
}

export default questionList
