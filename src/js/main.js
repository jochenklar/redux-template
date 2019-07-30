import React from "react"
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers/rootReducer'

import Header from "./containers/Header.js"
import Main from "./containers/Main.js"
import Footer from "./containers/Footer.js"

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <Header />
  </Provider>,
  document.getElementById("header")
)
ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("main")
)
ReactDOM.render(
  <Provider store={store}>
    <Footer />
  </Provider>,
  document.getElementById("footer")
)
