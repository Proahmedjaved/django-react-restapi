import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import { Provider as AlertProvider, positions, transitions } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";

import Alerts from "./layout/Alerts"

import Form from "./leads/Form";
import Leads from "./leads/Leads";

import store from '../store';


const alertOptions = {
  timeout: 5000,
  position: positions.TOP_CENTER,
  transition: transitions.SCALE
}


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...alertOptions} >
        <Fragment>
          <Header/>
          <Alerts/>
          <div className="container">
            <Dashboard />
            <Form />
            <Leads />
          </div>
        </Fragment>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
