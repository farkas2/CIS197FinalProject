import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, Modal, Form } from 'react-bootstrap'
import CommentList from './commentList'

const questionBlock = ({
  postText, author, postPlay, comments, loggedIn, id,
}) => {
  const x = 0
  const [addCommentClicked, setAddCommentClicked] = useState(false) /* React hook for keeping track of whether add comment button has been clicked */
  const [commentToAppend, setComment] = useState('') /* React hook for keeping track of input answer */
  const [readPlayClicked, setReadPlay] = useState(false)
  const [playText, setPlayText] = useState('')

  const addComment = async () => {
    const x2 = 0
    // need the ID
    const commentToPush = { _id: id, comment: commentToAppend, author }
    const commentAddReturn = await axios.post('/api/Posts/addComment', commentToPush)
    if (commentAddReturn === 'Comment creation has problems') {
      alert('Error in comment creation-- try again!')
    }
    // const answerCreateReturn = await axios.post('/api/questions/answer', { _id: id, answer: answerToSend })
    // console.log(answerCreateReturn)
    // if (answerCreateReturn.data === 'answer provided-- great success') {
    // }
    setAddCommentClicked(false)
  }

  function removeTags(str) {
    if ((str === null) || (str === '')) {
      return false
    }
    const temp = str.toString()
    return temp.replace(/(<([^>]+)>)/ig, '')
  }
  const handleReadPlay = async () => {
    console.log('display the requested play in a widget')
    // build the URL to request the folger play
    const playToCodeDictionairy = {
      'All\'s Well That Ends Well': 'AWW',
      'Antony and Cleopatra': 'Ant',
      'As You Like It': 'AYL',
      'The Comedy of Errors': 'Err',
      Coriolanus: 'Cor',
      Cymbeline: 'Cym',
      Hamlet: 'Ham',
      'Henry IV, Part 1': '1H4',
      'Henry IV, Part 2': '2H4',
      'Henry V': 'H5',
      'Henry VI, Part 1': '1H6',
      'Henry VI, Part 2': '2H6',
      'Henry VI, Part 3': '3H6',
      'Henry VIII': 'H8',
      'Julius Caesar': 'JC',
      'King John': 'Jn',
      'King Lear': 'Lr',
      'Love\'s Labor\'s Lost': 'LLL',
      Macbeth: 'Mac',
      'Measure for Measure': 'MM',
      'The Merchant of Venice': 'MV',
      'The Merry Wives of Windsor': 'Wiv',
      'A Midsummer Night\'s Dream': 'MND',
      'Much Ado About Nothing': 'Ado',
      Othello: 'Oth',
      Pericles: 'Per',
      'Richard II': 'R2',
      'Richard III': 'R3',
      'Romeo and Juliet': 'Rom',
      'The Taming of the Shrew': 'Shr',
      'The Tempest': 'Tmp',
      'Timon of Athens': 'Tit',
      'Troilus and Cressida': 'Tro',
      'Twelfth Night': 'TN',
      'Two Gentlemen of Verona': 'TGV',
      'Two Noble Kinsmen': 'TNK',
      'The Winter\'s Tale': 'WT',
    }
    // console.log(playToCodeDictionairy['Julius Caesar'])
    // console.log('The selected play')
    // console.log(postPlay)
    // console.log('Selected play code')
    const selectedPlayCode = playToCodeDictionairy[postPlay]
    console.log(postPlay)
    console.log(selectedPlayCode)
    // https://www.folgerdigitaltexts.org/AYL/text

    // need link + code + /text
    const playRequestURL = `https://www.folgerdigitaltexts.org/${selectedPlayCode}/text`
    console.log(playRequestURL)
    const folgerAPIReturn = await axios.post('/api/Posts/pullPlay', { playURL: playRequestURL.toString() })
    // console.log(typeof (folgerAPIReturn.data))
    setReadPlay(true)
    setPlayText(removeTags(folgerAPIReturn.data))
  }

  if (readPlayClicked) {
    return (
      <>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>
              <Button variant="secondary" onClick={() => setReadPlay(false)}>Close</Button>
              <div>
                <b>
                  Text of discussed play:
                </b>
              </div>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div>
              { playText }
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => setReadPlay(false)}>Close</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </>
    )
  }
  if (loggedIn && !addCommentClicked && !readPlayClicked) {
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
            <b> Play: </b>
            { postPlay }
          </div>
          <div>
            <b> Post: </b>
            { postText }
          </div>
          <div>
            <b> Author: </b>
            { author }
          </div>
          <div>
            <b> Discussion: </b>
            <CommentList comments={comments} loggedIn={loggedIn} />
          </div>
          <div>
            <Button onClick={() => setAddCommentClicked(true)}> Add a comment </Button>
            <Button onClick={() => handleReadPlay()}> Read play </Button>
          </div>
        </div>
      </>
    )
  }

  if (loggedIn && addCommentClicked && !readPlayClicked) {
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
            <b> Play: </b>
            { postPlay }
          </div>
          <div>
            <b> Post: </b>
            { postText }
          </div>
          <div>
            <b> Author: </b>
            { author }
          </div>
          <div>
            Enter Comment:
            <input onChange={e => setComment(e.target.value)} />
          </div>
          <div>
            <b> Discussion: </b>
          </div>
          <div>
            <Button onClick={() => addComment()}> Submit Comment </Button>
            <Button onClick={() => setAddCommentClicked(false)}> Cancel </Button>
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
          <b> Play: </b>
          { postPlay }
        </div>
        <div>
          <b> Post: </b>
          { postText }
        </div>
        <div>
          <b> Discussion: </b>
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
