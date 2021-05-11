import { combineReducers } from "redux";
import cartReducer from "./cartReducer";

const rootReducers = combineReducers({ cartReducer });
export default rootReducers;
