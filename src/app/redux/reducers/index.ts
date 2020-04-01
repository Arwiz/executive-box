import { combineReducers } from 'redux'
import productHandlerApp from "./template.master.reducer";
import loginReducer from "./login.reducer";

export default combineReducers({
    product: productHandlerApp,
    login: loginReducer
});
