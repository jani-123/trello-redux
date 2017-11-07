import createStore from "redux-zero";

const initialState = {
	active: false,
};

const store = createStore(initialState);

export default store;
