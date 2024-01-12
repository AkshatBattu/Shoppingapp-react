import rootReducer from "./APIcall/Reducers/Index";
import {createStore} from "redux";

 const store = createStore (rootReducer);

 export default store;