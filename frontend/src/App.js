import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Button, Dropdown, DropdownButton } from 'react-bootstrap'
import AddPostModal from '../components/addPostModal'
import PostList from '../components/postList'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [postsList, setPosts] = useState([]) /* React hook for getting the list of posts */
  // const [loggedIn, setLoggedIn] = useState(false) /* React hook for keeping track of whether logged in */
  const [username, setUsername] = useState('') /* React hook for keeping track of username */
  const [addQClicked, setAddQClicked] = useState(false) /* React hook for keeping track of whether logged in */
  const [loggedInHook, setLoggedIn] = useState(false) /* React Hook for body of new question */

  /* Get request to populate the array of questions */
  useEffect(async () => {
    const temp = await axios.get('/api/Post') // GET request
    if (temp.data === 'Getting questions has problems') {
      alert('Errors occured in grabbing posts')
    }
    setPosts(temp.data)
  }, [])

  useEffect(async () => {
    const intervalID = setInterval(async () => {
      const temp = await axios.get('/api/Post') // GET request
      if (temp.data === 'Getting posts has problems') {
        alert('Errors occured in grabbing posts')
      }
      setPosts(temp.data)
    }, 2000)
    // return a clean-up function so that the repetition can be stopped
    // when the component is unmounted
    return () => clearInterval(intervalID)
  }, [])

  const logOut = async () => {
    const temp = await axios.post('/account/logout')
    if (temp.data !== 'user is logged out // session terminated') {
      alert('Errors occured in logout')
      return
    }
    setLoggedIn(false)
  }

  // once I figure out how to redirect here with logged in user, uncomment this
  const loggedIn = async () => {
    const { data } = await axios.post('/account') // post request
    if (data.data === 'user logged in successfully' || data.data === 'user is logged in') {
      /* TODO: test this// make sure it the logged in user hits this */
      // console.log(loggedInRes)
      // console.log(usernameTemp)
      // console.log('user is logged in on call to login()')
      setUsername(data.username)
      setLoggedIn(true)
      return true
    }
    // console.log('user is not logged in on call to login()')
    setLoggedIn(false)
    return false
    // await logInHelper()
    // return true
  }

  loggedIn() /* whenever app render, check if user is logged in to decide what to return */

  if (loggedInHook && addQClicked) {
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
          <h1>
            You are logged in as:
            {' '}
            {username}
          </h1>
        </div>
        <div>
          <AddPostModal setAddQClicked={setAddQClicked} postAuthor={username} />
        </div>
        <div>
          <PostList posts={postsList} loggedIn={[true]} />
        </div>
      </>
    )
  }

  // user is logged in an daddQ not clicked
  if (loggedInHook && !addQClicked) {
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
          <h1>
            You are logged in as:
            {' '}
            {username}
          </h1>
          <div>
            <Button onClick={() => logOut()}> Log Out </Button>
          </div>
        </div>
        <Button onClick={() => setAddQClicked(true)}> Add a question </Button>
        <div>
          <PostList posts={postsList} loggedIn={[true]} />
        </div>
      </>
    )
  }
  return (
    <>
      <h1>Not Logged In!</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <div>
          <Link to="login">Login</Link>
        </div>
        <div>
          <Link to="signup">Signup</Link>
        </div>
      </nav>
    </>
  //   <div>
  //   <QuestionList questions={postsList} loggedIn={[false]} />
  // </div>
  )
}
// const App = () => {
//   console.log('App rendering')
//   return (
//     <>
//       App Text
//     </>
//   )
// }
export default App

// {/* <button type="button" onClick={navigate('/signup')}> Go to sign-up page </button>
// <button type="button" onClick={navigate('/login')}> Go to login page </button> */}
