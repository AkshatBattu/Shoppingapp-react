import { CALL_DATA } from "../Action/Index";

const initialstate = {Cards : []}

const alldata = (state = initialstate, action = {}) => {
    if ( action.type === CALL_DATA){
        const Cards = action.payload
        return{...state, Cards : Cards}
    }
    return{
        ...state,
    }
}
export default alldata;

