import React, { Component } from 'react';
import logo from './logo.svg';
import trello from './trello-logo.png';
import './App.css';
import { connect } from "redux-zero/react";
//import { incrementScore} from "./actions";
import { NavLink } from 'react-router-dom';
const SignIn = () => {
  return (
    <div className="sign">
      <img src={trello} className="logo2" />
      <form className="form-horizontal formulario">
        <div className="form-group">
          <div className="col-sm-10">
            <input type="email" className="form-control texto" placeholder="Email" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-10">
            <input type="password" className="form-control texto" placeholder="Password" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-lg btn-sign-in">Sign in</button>
          </div>
        </div>
      </form>
    </div>
  );
}

const mapToProps = ({ trello }) => ({ trello });

export default connect(mapToProps)(SignIn);


