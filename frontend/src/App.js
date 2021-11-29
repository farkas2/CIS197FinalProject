import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'
import QuestionList from '../components/questionList'
import 'bootstrap/dist/css/bootstrap.min.css'

// const App = () => {
//   const [questionsList, setQuestions] = useState([]) /* React hook for getting the list of questions */
//   // const [loggedIn, setLoggedIn] = useState(false) /* React hook for keeping track of whether logged in */
//   const [username, setUsername] = useState('') /* React hook for keeping track of username */
//   const [addQClicked, setAddQClicked] = useState(false) /* React hook for keeping track of whether logged in */

//   const [qBody, setQBody] = useState('') /* React Hook for body of new question */
//   const [loggedInHook, setLoggedIn] = useState(false) /* React Hook for body of new question */

//   /* Get request to populate the array of questions */
//   useEffect(async () => {
//     const temp = await axios.get('/api/questions') // GET request
//     if (temp.data === 'Getting questions has problems') {
//       alert('Errors occured in grabbing questions')
//     }
//     setQuestions(temp.data)
//   }, [])

//   useEffect(async () => {
//     const intervalID = setInterval(async () => {
//       const temp = await axios.get('/api/questions') // GET request
//       if (temp.data === 'Getting questions has problems') {
//         alert('Errors occured in grabbing questions')
//       }
//       setQuestions(temp.data)
//     }, 2000)
//     // return a clean-up function so that the repetition can be stopped
//     // when the component is unmounted
//     return () => clearInterval(intervalID)
//   }, [])

//   const addQuestion = async () => {
//     const qCreationReturn = await axios.post('/api/questions/add', { question: qBody, author: username })
//     if (qCreationReturn.data === 'question creation has problems') {
//       alert('Errors occured in question creation')
//       return
//     }
//     setAddQClicked(false)
//   }

//   const logOut = async () => {
//     const temp = await axios.post('/account/logout')
//     if (temp.data !== 'user is logged out // session terminated') {
//       alert('Errors occured in logout')
//       return
//     }
//     setLoggedIn(false)
//   }

//   // once I figure out how to redirect here with logged in user, uncomment this
//   const loggedIn = async () => {
//     const { data } = await axios.post('/account') // post request
//     if (data.data === 'user logged in successfully' || data.data === 'user is logged in') {
//       /* TODO: test this// make sure it the logged in user hits this */
//       // console.log(loggedInRes)
//       // console.log(usernameTemp)
//       // console.log('user is logged in on call to login()')
//       setUsername(data.username)
//       setLoggedIn(true)
//       return true
//     }
//     // console.log('user is not logged in on call to login()')
//     setLoggedIn(false)
//     return false
//     // await logInHelper()
//     // return true
//   }

//   loggedIn() /* whenever app render, check if user is logged in to decide what to return */

//   if (loggedInHook && addQClicked) {
//     return (
//       <>
//         <h1>
//           Hello
//           {' '}
//           {username}
//           !
//         </h1>
//         <div>
//           <Modal.Dialog>
//             <Modal.Header>
//               <Modal.Title>
//                 <b>
//                   Add Question:
//                 </b>
//               </Modal.Title>
//             </Modal.Header>

//             <Modal.Body>
//               <div>
//                 Enter Question text
//               </div>
//               <input onChange={e => setQBody(e.target.value)} />
//             </Modal.Body>

//             <Modal.Footer>
//               <Button variant="secondary" onClick={() => setAddQClicked(false)}>Close</Button>
//               <Button variant="primary" onClick={async () => addQuestion()}>Add Question</Button>
//             </Modal.Footer>
//           </Modal.Dialog>
//         </div>
//         <div>
//           <QuestionList questions={questionsList} loggedIn={[true]} />
//         </div>
//       </>
//     )
//   }

//   // user is logged in an daddQ not clicked
//   if (loggedInHook && !addQClicked) {
//     return (
//       <>
//         <h1>
//           Hello
//           {' '}
//           {username}
//           !
//         </h1>
//         <div>
//           <Button onClick={() => logOut()}> Log Out </Button>
//         </div>
//         <Button onClick={() => setAddQClicked(true)}> Add a question </Button>
//         <div>
//           <QuestionList questions={questionsList} loggedIn={[true]} />
//         </div>
//       </>
//     )
//   }
//   return (
//     <>
//       <h1>Not Logged In!</h1>
//       <nav
//         style={{
//           borderBottom: 'solid 1px',
//           paddingBottom: '1rem',
//         }}
//       >
//         <div>
//           <Link to="login">Login</Link>
//         </div>
//         <div>
//           <Link to="signup">Signup</Link>
//         </div>
//       </nav>
//       <div>
//         <QuestionList questions={questionsList} loggedIn={[false]} />
//       </div>
//     </>
//   )
// }
const App = () => {
  console.log('App rendering')
  return (
    <>
      App Text
    </>
  )
}
export default App

// {/* <button type="button" onClick={navigate('/signup')}> Go to sign-up page </button>
// <button type="button" onClick={navigate('/login')}> Go to login page </button> */}
