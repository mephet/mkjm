import { combineReducers } from "redux";
import sortingReducer from './sortingReducer';
import windowReducer from "./windowReducer";
import optimizationReducer from "./optimizationReducer";

const rootReducer = combineReducers({
    sortingDetails: sortingReducer,
    windowDetails: windowReducer,
    optimizationDetails: optimizationReducer
})

export default rootReducer;