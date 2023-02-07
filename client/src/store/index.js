import { createStore, applyMiddleware } from "redux";
//import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = [];

const store = createStore();

export default store;
