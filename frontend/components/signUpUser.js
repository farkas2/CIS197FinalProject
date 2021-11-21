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

  const signUp = async () => {
    const { data } = await axios.post('/account/signup', { username, password }) // POST request
    if (data === 'user created') {
      setSucceeded(true)
      hist('/')
    } else {
      alert('Issues occured in account creation-- try making an account with a differe username!')
    }
  }

  return (
    <>
      username:
      <input onChange={e => setUsername(e.target.value)} />
      <br />
      password:
      <input onChange={e => setPassword(e.target.value)} />
      <br />
      <Button onClick={() => signUp}> Sign up </Button>
    </>
  )
}

export default signUpUser
