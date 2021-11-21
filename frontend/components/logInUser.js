import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Button } from 'react-bootstrap'

const signUpUser = () => {
  // const [data, setData] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [succeeded, setSucceeded] = useState(false)
  const hist = useNavigate()

  const logIn = async () => {
    const { data } = await axios.post('/account/login', { username, password }) // POST request
    if (data === 'user logged in successfully') {
      setSucceeded(true)
      hist('/')
    } else {
      alert('Issues occured with login-- try again!')
    }
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
        <h1>Log in</h1>
        username:
        <input onChange={e => setUsername(e.target.value)} />
        <br />
        password:
        <input onChange={e => setPassword(e.target.value)} />
        <br />
        <Button onClick={() => logIn()}> Log in </Button>
      </div>
    </>
  )
}

export default signUpUser
