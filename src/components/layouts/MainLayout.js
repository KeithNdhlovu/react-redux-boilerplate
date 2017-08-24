import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'

import MasterAuthLayout from './MasterAuthLayout';
import MasterCleanLayout from './MasterCleanLayout';

import logo from '../../styles/logo.svg';
import '../../styles/index.css';


// Check if is logged in
const isLoggedIn = () => {
  return (localStorage.getItem("jwt-token") !== null) ? true : false
}


export default (store) => {
  return (isLoggedIn() ? <MasterAuthLayout /> : <MasterCleanLayout />)
}