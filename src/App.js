import React, { Component } from "react";
import trello from "./trello-logo.png";
import "./App.css";
import { connect } from "redux-zero/react";
import { changeBoard, addTitleBoard ,changeVista} from "./actions";
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

const ListBoard = ({ listBoard, active }) => {
  const onSubmit = e => {
    e.preventDefault();
    let title = this.inputTitle.value;
    console.log(title);
    addTitleBoard(title);
  };
  return (
    <div>
      <h3>My Board</h3>
      {listBoard.map((item, index) => {
        return <NavLink to="/detail" onClick={() => {
              changeVista(index);
            }}>
            <div className="board col-md-3" key={index}>
              <h4>{item.title}</h4>
            </div>
          </NavLink>;
      })}
      {active ? (
        <div className="noteList">
          <form onSubmit={onSubmit}>
            <input
              className="title"
              placeholder="añadir titulo..."
              ref={e => (this.inputTitle = e)}
            />
            <button className="btn btn-success guardar" type="submit">
              Guardar
            </button>
            <button className="btn btn-defaul elimina">X</button>
          </form>
        </div>
      ) : (
        <div
          className="addboard col-md-3"
          onClick={() => {
            changeBoard();
          }}
        >
          <p>add my board...</p>
        </div>
      )}
    </div>
  );
};

const BoarApp = ({ listBoard, active }) => {
  return (
    <div>
      <NavApp />
      <ListBoard listBoard={listBoard} active={active} />
    </div>
  );
};

const mapToProps = ({ listBoard, active }) => ({ listBoard, active });

export default connect(mapToProps)(BoarApp);
