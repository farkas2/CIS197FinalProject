import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'
import {
  Button, Dropdown, DropdownButton, Form,
} from 'react-bootstrap'

const addPostModal = ({ setAddQClicked, postAuthor }) => {
  const x = 69
  const [selectedPlay, setSelectedPlay] = useState('')
  const [postBody, setPostBody] = useState('') /* React Hook for body of new question */

  const addPost = async () => {
    // console.log(postBody)
    // console.log(selectedPlay)

    // dictionary that maps play name to play code for get
    const postVariable = {
      postPlay: selectedPlay,
      postText: postBody,
      comments: [],
      author: postAuthor,
    }
    // console.log(selectedPlay)
    // console.log(postBody)
    // console.log(postAuthor)
    const qCreationReturn = await axios.post('/api/Posts/add', postVariable)
    if (qCreationReturn.data === 'Post creation has problems') {
      alert('Errors occured in Post creation')
      return
    }
    setAddQClicked(false)
  }

  const handleSelect = (e, a) => {
    setSelectedPlay(a.target.text)
  }

  return (
    <>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>
            <b>
              Add Post:
            </b>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            Which play would you like to make a post about?
          </div>
          <Dropdown>
            <DropdownButton id="dropdown-basic-button" title="Select a play" autoClose="inside" onSelect={handleSelect}>
              <Dropdown.Item href="#/action-1">All&apos;s Well That Ends Well</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Antony and Cleopatra</Dropdown.Item>
              <Dropdown.Item href="#/action-3">As You Like It</Dropdown.Item>
              <Dropdown.Item href="#/action-4">The Comedy of Errors</Dropdown.Item>
              <Dropdown.Item href="#/action-5">Coriolanus</Dropdown.Item>
              <Dropdown.Item href="#/action-6">Cymbeline</Dropdown.Item>
              <Dropdown.Item href="#/action-7">Hamlet</Dropdown.Item>
              <Dropdown.Item href="#/action-8">Henry IV, Part 1</Dropdown.Item>
              <Dropdown.Item href="#/action-9">Henry IV, Part 2</Dropdown.Item>
              <Dropdown.Item href="#/action-10">Henry V</Dropdown.Item>
              <Dropdown.Item href="#/action-11">Henry VI, Part 1</Dropdown.Item>
              <Dropdown.Item href="#/action-12">Henry VI, Part 2</Dropdown.Item>
              <Dropdown.Item href="#/action-13">Henry VI, Part 3</Dropdown.Item>
              <Dropdown.Item href="#/action-14">Henry VIII</Dropdown.Item>
              <Dropdown.Item href="#/action-15">Julius Caesar</Dropdown.Item>
              <Dropdown.Item href="#/action-16">King John</Dropdown.Item>
              <Dropdown.Item href="#/action-17">King Lear</Dropdown.Item>
              <Dropdown.Item href="#/action-18">Love&apos;s Labour&apos;s Lost</Dropdown.Item>
              <Dropdown.Item href="#/action-19">Macbeth</Dropdown.Item>
              <Dropdown.Item href="#/action-20">Measure for Measure</Dropdown.Item>
              <Dropdown.Item href="#/action-21">The Merchant of Venice</Dropdown.Item>
              <Dropdown.Item href="#/action-22">The Merry Wives of Windsor</Dropdown.Item>
              <Dropdown.Item href="#/action-23">A Midsummer Night&apos;s Dream</Dropdown.Item>
              <Dropdown.Item href="#/action-24">Much Ado About Nothing</Dropdown.Item>
              <Dropdown.Item href="#/action-25">Othello</Dropdown.Item>
              <Dropdown.Item href="#/action-26">Pericles</Dropdown.Item>
              <Dropdown.Item href="#/action-27">Richard II</Dropdown.Item>
              <Dropdown.Item href="#/action-28">Richard III</Dropdown.Item>
              <Dropdown.Item href="#/action-29">Romeo and Juliet</Dropdown.Item>
              <Dropdown.Item href="#/action-30">The Taming of the Shrew</Dropdown.Item>
              <Dropdown.Item href="#/action-31">The Tempest</Dropdown.Item>
              <Dropdown.Item href="#/action-32">Timon of Athens</Dropdown.Item>
              <Dropdown.Item href="#/action-33">Titus Andronicus</Dropdown.Item>
              <Dropdown.Item href="#/action-34">Troilus and Cressida</Dropdown.Item>
              <Dropdown.Item href="#/action-35">Twelfth Night</Dropdown.Item>
              <Dropdown.Item href="#/action-36">Two Gentlemen of Verona</Dropdown.Item>
              <Dropdown.Item href="#/action-37">Two Noble Kinsmen</Dropdown.Item>
              <Dropdown.Item href="#/action-38">The Winter&apos;s Tale</Dropdown.Item>
            </DropdownButton>
          </Dropdown>
          <div>
            You have selected:
            <b>
              { ' ' }
              { selectedPlay }
            </b>
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="addPost.ControlTextarea1">
              <Form.Label> Enter Post Body: </Form.Label>
              <Form.Control as="textarea" rows={3} onChange={e => setPostBody(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setAddQClicked(false)}>Close</Button>
          <Button variant="primary" onClick={async () => addPost()}>Add Question</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </>
  )
}

export default addPostModal

// input onChange={e => setPostBody(e.target.value)}
