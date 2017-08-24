import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'

// Pages
import Home from '../views/Home';
import Login from '../views/Login';
import Shoelaces from '../views/Shoelaces';
import Bubblegum from '../views/Bubblegum';
import Navigation from '../views/Navigation';

import MasterAuthLayout from './MasterAuthLayout';
import MasterCleanLayout from './MasterCleanLayout';

import logo from '../../styles/logo.svg';
import '../../styles/index.css';


import createBrowserHistory from 'history/createBrowserHistory'
import createHashHistory from 'history/createHashHistory'

const history = createBrowserHistory()

// Check if is logged in
const isLoggedIn = () => {
  return (localStorage.getItem("jwt-token") !== null) ? true : false
}


export default (store) => {
  return (isLoggedIn() ? <MasterAuthLayout /> : <MasterCleanLayout />)
}

// export default MainLayout