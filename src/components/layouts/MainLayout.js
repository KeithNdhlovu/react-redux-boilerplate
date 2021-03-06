import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'

import MasterAuthLayout from './MasterAuthLayout';
import MasterCleanLayout from './MasterCleanLayout';


// Check if is logged in
const isLoggedIn = () => {
  return (localStorage.getItem("access_token") !== null) ? true : false
}


export default (store) => {
  return (isLoggedIn() ? <MasterAuthLayout /> : <MasterCleanLayout />)
}