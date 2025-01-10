import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './Hello'
import Twoq from './Twoq'
import Threeq from './Threeq'
import Fourq from './Fourq'
import Fifthq from './Fifthq'
import Sixq from './Sixq'
import Crud from './Crud'
import Display from './Display'
import Usercrud from './Usercrud'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
// import Contact from './Contact'



function App() {

  return (
    <>
    
      <Hello/>
      {/* <Twoq/> */}
      {/* <Threeq myname={name}/> */}
      {/* <Fourq/> */}
      {/* <Fifthq name="John Doe" age={30} location="New York"  /> */}
      {/* <Sixq/> */}
      {/* <Crud/> */}
      {/* <Display/> */}
      {/* <Usercrud/> */}
      {/* <Home /> */}
    

{/* <BrowserRouter> */}
<Routes>
  <Route path='/Home' element={<Home/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/Contact' element={<Contact/>}/>

</Routes>
{/* </BrowserRouter> */}
    </>
  )
}

export default App
