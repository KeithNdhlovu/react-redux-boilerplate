import React from 'react'
import { render } from 'react-dom'

import store from "./store"

// This version(v4.0.0-alpha-6)
import './styles/bootstrap/scss/bootstrap.scss'


// This version(v4.0.0-alpha) of bootstrap works together with MDBootstrap
import './styles/mdbootstrap/sass/bootstrap.min.scss'
import './styles/mdbootstrap/sass/mdb.scss'
import './styles/font-awesome/sass/font-awesome.scss'
import 'react-select/scss/default.scss'

import Root from './root'

// ========================================
render(<Root store={store} />, document.getElementById('root'));