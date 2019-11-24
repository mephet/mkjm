import { combineReducers } from "redux";
import sortingReducer from './sortingReducer';
import windowReducer from "./windowReducer";

const rootReducer = combineReducers({
    sortingDetails: sortingReducer,
    windowDetails: windowReducer
})

export default rootReducer;