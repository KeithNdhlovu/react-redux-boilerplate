
import React from 'react';
import { Provider } from "react-redux"
import { ConnectedRouter } from 'react-router-redux'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// Layouts
import MainLayout from './components/layouts/MainLayout';

import history from "./history"

const Root = ({ store }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MainLayout store={store}/>
    </ConnectedRouter>
  </Provider>
)

export default Root;