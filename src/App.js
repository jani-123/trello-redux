import React, { Component } from 'react';
import logo from './logo.svg';
import trello from './trello-logo.png';
import './App.css';
import { connect } from "redux-zero/react";
//import { incrementScore} from "./actions";
const App = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid  Narvab">
        <div className="navbar-header">
          <button className="btn botones" type="submit">
            <i className="fa fa-trello fa-2x iconTrello" aria-hidden="true">Tableros</i>
          </button>
        </div>
        <form className="navbar-form navbar-left">
          <div className="input-group">
            <input type="text" className="form-control" />
            <div className="input-group-btn">
              <button className="btn" type="submit" >
                <i className="glyphicon glyphicon-search"></i>
              </button>
            </div>
          </div>
        </form>
        <div className="navbar-header">
          <img src={trello} className="logo" />
        </div>
        <div className="navbar-header">
          <button className="btn user" type="submit">
            <i className="fa fa-user-circle fa-2x" aria-hidden="true"></i>
          </button>
          <button className="btn plus" type="submit">
            <i className="fa fa-plus fa-2x" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

const mapToProps = ({ trello }) => ({ trello });

export default connect(mapToProps)(App);


