import { combineReducers } from "redux";
import cartReducer from "./modules/cartReducer";

const rootReducers = combineReducers({ cartReducer });
export default rootReducers;
