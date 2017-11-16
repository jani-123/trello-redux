import React, { Component } from "react";
import trello from "./trello-logo.png";
import "./App.css";
import { connect } from "redux-zero/react";
import {
  changeList,
  addTitleList,
  changeVista,
  changeTextList,
  addNote
} from "./actions";
import { NavLink } from "react-router-dom";

const NavApp = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid  Narvab">
        <div className="navbar-header">
          <button className="btn botones" type="submit">
            <i className="fa fa-trello fa-2x iconTrello" aria-hidden="true">
              Tableros
            </i>
          </button>
        </div>
        <form className="navbar-form navbar-left">
          <div className="input-group">
            <input type="text" className="form-control" />
            <div className="input-group-btn">
              <button className="btn" type="submit">
                <i className="glyphicon glyphicon-search" />
              </button>
            </div>
          </div>
        </form>
        <div className="navbar-header">
          <img src={trello} className="logo" />
        </div>
        <div className="navbar-header">
          <button className="btn user" type="submit">
            <i className="fa fa-user-circle fa-2x" aria-hidden="true" />
          </button>
          <button className="btn plus" type="submit">
            <i className="fa fa-plus fa-2x" aria-hidden="true" />
          </button>
        </div>
      </div>
    </nav>
  );
};

const ListBoard = ({ listBoard, active , addActive }) => {
  const onSubmit = e => {
    e.preventDefault();
    let title = this.inputTitle.value;
    console.log(title);
    addTitleList(title);
  };
  const onClick = (e) => {
    e.preventDefault();
    console.log(this.note.value);
    addNote(this.note.value);
    this.note.value = '';
  }
  return (
    <div className="container">
      {listBoard.map((item, index) => {
        return (
          <div className="row" key={index}>
            <div className={addActive?"tableNote col-md-3":"board col-md-3"}>
              <h4>{item.title}</h4>
              {addActive ? (
                <div>
                  <form>
                    <textarea
                      placeholder="add"
                      onChange={(e) => { this.note = e }}
                    />
                    <button className="btn btn-success guardar" type="submit" onClick={onClick}>
                      Guardar
                    </button>
                    <button className="btn btn-defaul elimina">X</button>
                  </form>
                </div>
              ) : (
                <div
                  className="add"
                  onClick={() => {
                    changeTextList();
                  }}
                >
                  <p>Añade tus listas...</p>
                </div>
              )}
            </div>
          </div>
        );
      })}
      {active ? (
        <div className="noteList">
          <form onSubmit={onSubmit}>
            <input
              className="title"
              placeholder="añadir titulo..."
              onChange={e => (this.inputTitle = e)}
            />
            <button className="btn btn-success guardar" type="submit">
              Guardar
            </button>
            <button className="btn btn-defaul elimina">X</button>
          </form>
        </div>
      ) : (
        <div className="row">
          <div
            className="addboard col-md-3"
            onClick={() => {
              changeList();
            }}
          >
            <p>Añade Tu List</p>
          </div>
        </div>
      )}
    </div>
  );
};

const App = ({ listBoard, active , addActive }) => {
  return (
    <div>
      <NavApp />
      <ListBoard listBoard={listBoard} active={active} addActive={addActive} />
    </div>
  );
};

const mapToProps = ({ listBoard, active , addActive}) => ({ listBoard, active , addActive});

export default connect(mapToProps)(App);
