import store from './store';

export const changeStatus = () =>{
  store.setState({
     active: true,
  });
}
export const clearText = () =>{
  store.setState({
    active: false,
 });
}