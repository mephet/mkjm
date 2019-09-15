import { combineReducers } from "redux";
import sortingReducer from './sortingReducer';

const rootReducer = combineReducers({
    sortingDetails: sortingReducer
})

export default rootReducer;