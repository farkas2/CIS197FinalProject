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
    console.log('about to make sign up request')
    console.log({ username, password })
    const { data } = await axios.post('/account/signup', { username, password }) // POST request
    console.log(data)
    if (data === 'user created') {
      console.log('tryna create user')
      setSucceeded(true)
      console.log('going to hist')
      hist('/')
    } else {
      alert('Issues occured in account creation-- try making an account with a differe username!')
    }
  }
  console.log('sign up rendering')
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
        <h1>Sign up</h1>
        username:
        <input onChange={e => setUsername(e.target.value)} />
        <br />
        password:
        <input onChange={e => setPassword(e.target.value)} />
        <br />
        <Button onClick={() => signUp()}> Sign up </Button>
      </div>
    </>
  )
}

export default signUpUser
