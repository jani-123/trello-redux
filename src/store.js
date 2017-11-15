import createStore from "redux-zero";

const LISTCOMMENT = [
  // {
  //   title: "Comic Ingles",
  //   list: [
  //     {
  //       subTitle: "Ideas",
  //       note: ["drama", "comedia", "horor"],
  //       add: false
  //     },
  //     {
  //       subTitle: "Roles",
  //       note: ["dibujante", "guionista", "traductoda"],
  //       add: false
  //     }
  //   ],
  //   addnew: false
  // },
  // {
  //   title: "Demo",
  //   list: [
  //     {
  //       subTitle: "actividades",
  //       note: ["diseño", "funcionalidad", "estructura"],
  //       add: false
  //     },
  //     {
  //       subTitle: "prototipo",
  //       note: ["hacer pruebas", "exponer", "delegar funciones"],
  //       add: false
  //     }
  //   ],
  //   addnew: false
  // }
];

const initialState = {
	listBoard: LISTCOMMENT,
  selectedListBoard: 0,
	active: false
};

const store = createStore(initialState);

export default store;
