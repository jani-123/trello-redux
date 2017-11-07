import createStore from "redux-zero";

const LISTCOMMENT = [
	{
		 id: 0,
		 title:'Tarea hackaton',
		 comment: 'me gusta la pagina'
	},
	{
	 id: 1,
	 name:'Maricielo',
	 comment: 'Esta pagina es super!!!'
}
];
const initialState = {
	active: false,
};

const store = createStore(initialState);

export default store;
