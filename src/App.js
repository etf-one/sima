import React from 'react'
import Navigation from './container/Header'
import Home from './container/Home'
import Login from './container/Login'
import Signup from './container/Signup'
import Footer from './container/Footer'


import {BrowserRouter as Router, Route} from 'react-router-dom'

export default() => (
  <Router>
    <div>
      <Navigation/>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Footer/>
    </div>
  </Router>
)
