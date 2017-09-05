import React from 'react';
import { render } from 'react-dom';

import { Provider } from "react-redux"

import store from "./store"

import './styles/mdbootstrap/sass/bootstrap.min.scss'
import './styles/mdbootstrap/sass/mdb.scss'
import './styles/font-awesome/sass/font-awesome.scss'


import Root from './root';

// ========================================
render(<Root store={store} />, document.getElementById('root'));