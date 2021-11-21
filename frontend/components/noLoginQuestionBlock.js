import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'

const questionBlock = ({
  question, author, answer, loggedIn, id,
}) => {
  const x = 0
  const [answerClicked, setAnswerClicked] = useState(false) /* React hook for keeping track of whether answer has been clicked */
  const [answerToSend, setAnswer] = useState('') /* React hook for keeping track of input answer */
  const [answerToDisp, setAnswerToDisp] = useState(answer) /* React hook for keeping track of input answer */

  const sendAnswer = async () => {
    const x2 = 0
    // need the ID
    const answerCreateReturn = await axios.post('/api/questions/answer', { _id: id, answer: answerToSend })
    // console.log(answerCreateReturn)
    // if (answerCreateReturn.data === 'answer provided-- great success') {
    // }
    setAnswerClicked(false)
    setAnswerToDisp(answerToSend)
  }

  if (loggedIn && !answerClicked) {
    return (
      <>
        <div
          style={
                  {
                    border: '2px solid black',
                    width: '300px',
                  }
                }
        >
          <div>
            <b> Question: </b>
            { question }
          </div>
          <div>
            <b> Answer: </b>
            { answerToDisp }
          </div>
          <div>
            <b> Author: </b>
            { author }
          </div>
          <div>
            <Button onClick={() => setAnswerClicked(true)}> Answer </Button>
          </div>
        </div>
      </>
    )
  }

  if (loggedIn && answerClicked) {
    return (
      <>
        <div
          style={
                  {
                    border: '2px solid black',
                    width: '300px',
                  }
                }
        >
          <div>
            <b> Question: </b>
            { question }
          </div>
          <div>
            <b> Answer: </b>
            { answerToDisp }
          </div>
          <div>
            <b> Author: </b>
            { author }
          </div>
          <div>
            Enter Answer:
            <input onChange={e => setAnswer(e.target.value)} />
          </div>
          <div>
            <Button onClick={() => sendAnswer()}> Submit Answer </Button>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <div
        style={
                {
                  border: '2px solid black',
                  width: '300px',
                }
              }
      >
        <div>
          <b> Question: </b>
          { question }
        </div>
        <div>
          <b> Answer: </b>
          { answerToDisp }
        </div>
        <div>
          <b> Author: </b>
          { author }
        </div>
      </div>
    </>
  )
}

export default questionBlock
