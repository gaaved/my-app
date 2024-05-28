import { createStore, combineReducers } from "redux";
import reducer from "./reducers";

const rootReducer = combineReducers({
  user: reducer,
});

const store = createStore(rootReducer);

export default store;
