import React, { Component } from 'react';
import logo from './logo.svg';
import trello from './trello-logo.png';
import './App.css';
import { connect } from "redux-zero/react";
//import { incrementScore} from "./actions";
import { NavLink } from 'react-router-dom';
const SignUp = () => {
  return <div className="sign">
      <form className="form-horizontal formulario">
        <div className="form-group">
          <div className="col-sm-10">
            <input type="text" className="form-control texto" placeholder="First name" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-10">
            <input type="text" className="form-control texto" placeholder="Last name" />
          </div>
        </div>
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
          <div className="col-sm-10">
            <input type="password" className="form-control texto" placeholder="Confirm password" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <NavLink to="/App" type="submit" className="btn btn-lg btn-sign-in">
              Sign Up
            </NavLink>
          </div>
        </div>
      </form>
      <div className="new-vist">
        <NavLink to="/sign_in" type="submit" className="btn new">
          Sign In
        </NavLink>
      </div>
      <div className="footer">
        <a href="https://trello.com" className="new">
          Trello
        </a> tribute for educational purposes crafted with ♥ for Chio by @ChioQA
      </div>
    </div>;
}

const mapToProps = ({ trello }) => ({ trello });

export default connect(mapToProps)(SignUp);


