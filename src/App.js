import React, { Component } from 'react';
import trello from './trello-logo.png';
import './App.css';
import { connect } from "redux-zero/react";
import { changeStatus,clearText } from "./actions";
const NavApp = () => {
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

const ListAdd = ({ active }) => {
  const onClick = () => {
    changeStatus();
  }
  const onSubmit = e => {
    e.preventDefault();
    let text = this.inputTitle.value;
    console.log(text);
    clearText(text);
  };
  return (
    <div>
      {
        active ? 
        <div className="noteList" >
          <form onSubmit={onSubmit} >
            <input className="title" placeholder="añadir lista ..." ref={e => (this.inputTitle = e)}/>
            <button className="btn btn-success guardar" type="submit">Guardar</button>
            <button className="btn btn-defaul elimina">X</button>
          </form>
        </div>
          :
        <div className="cajaText" onClick={onClick}>
          <span className="text" >Añade una lista</span>
        </div>
      }
    </div>
  );

}

const App = ({ active }) => {
  return (
    <div>
      <NavApp />
      <ListAdd active={active} />
    </div>
  );
}

const mapToProps = ({ active }) => ({ active });

export default connect(mapToProps)(App);


