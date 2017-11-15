import store from "./store";
import firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCgwI7NBRYxV8goIh5rUpvY0JnMyH1XJhU",
  authDomain: "trello-d02bd.firebaseapp.com",
  databaseURL: "https://trello-d02bd.firebaseio.com",
  projectId: "trello-d02bd",
  storageBucket: "",
  messagingSenderId: "345740503579"
};
firebase.initializeApp(config);

const snapshotToArray = snapshot => {
  let comments = [];
  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    let key = childSnapshot.key;
    item.id = key;
    comments.push(item);
  });
  store.setState({ comments: comments });
};

export const changeBoard = () => {
  store.setState({
    active: true
  });
};
export const addTitleBoard = title => {
  let boardNews = store.getState().listBoard;
  const newBoard = boardNews.concat({
    title: title,
    list: []
  });
  store.setState({
    listBoard: newBoard,
    active: false
  });
};
export const changeVista = index => {
  store.setState({
    selectedListBoard: index
  });
};
export const changeNote = () => {
  store.setState({
    active: false
  });
};
