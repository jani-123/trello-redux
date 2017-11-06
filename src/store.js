import createStore from "redux-zero";

const initialState = {
	players: 'hola',
	selectedPlayerIndex: -1
};

const store = createStore(initialState);

export default store;
