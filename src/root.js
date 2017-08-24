
import React from 'react';
import { Provider } from "react-redux"
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// Layouts
import MainLayout from './components/layouts/MainLayout';

const Root = ({ store }) => (
  <Provider store={store}>
    <MainLayout store={store}/>
  </Provider>
)

export default Root;