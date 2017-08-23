import React from 'react';
import { render } from 'react-dom';

import { Provider } from "react-redux"

import store from "./store"

import 'mdbootstrap/css/bootstrap.css'
import 'mdbootstrap/css/mdb.css'


import Root from './root';

// ========================================
render(
<Root store={store} />, document.getElementById('root'));