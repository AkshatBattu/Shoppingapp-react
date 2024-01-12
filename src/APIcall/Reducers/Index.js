import alldata from "./Alldata";
import { combineReducers } from 'redux'
import changeTheNumber from './Addtocart'

const rootReducer = combineReducers({
  alldata,changeTheNumber
});
export default rootReducer;
