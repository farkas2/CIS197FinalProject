import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import App from './src/App'
import Login from './components/logInUser'
import Signup from './components/signUpUser'
// import your route components too

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('react-root'),
)

// render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} />
//     </Routes>
//   </BrowserRouter>,
//   document.getElementById('react-root'),
// )
