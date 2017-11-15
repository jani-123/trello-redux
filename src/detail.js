import React, { Component } from "react";
import trello from "./trello-logo.png";
import "./App.css";
import { connect } from "redux-zero/react";
import { changeNote } from "./actions";
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

const Detailist = ({ listBoard, active, selectedListBoard }) => {
  return (
    <div>
      <p>{listBoard[selectedListBoard].title}</p>
      {listBoard[selectedListBoard].list.map((item, index) => {
        return <div key={index}>
            <h5>{item.subTitle}</h5>
            <div>{item.note}</div>
            {active ? <div className="addboard col-md-3" onClick={() => {
                  changeNote();
                }}>
                <p>add my board...</p>
              </div> : <div className="noteList">
                <form>
                  <input className="title" placeholder="añadir titulo..." ref={e => (this.inputTitle = e)} />
                  <button className="btn btn-success guardar" type="submit">
                    Guardar
                  </button>
                  <button className="btn btn-defaul elimina">X</button>
                </form>
              </div>
            }
          </div>;
      })}
    </div>
  );
};

const Detail = ({ listBoard, active, selectedListBoard }) => {
  return (
    <div>
      <NavApp />
      <Detailist
        listBoard={listBoard}
        active={active}
        selectedListBoard={selectedListBoard}
      />
    </div>
  );
};

const mapToProps = ({ listBoard, active, selectedListBoard }) => ({
  listBoard,
  active,
  selectedListBoard
});

export default connect(mapToProps)(Detail);
