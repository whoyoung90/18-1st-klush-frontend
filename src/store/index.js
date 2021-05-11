import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";

const rootReducers = combineReducers({ cartReducer });
export default rootReducers;
