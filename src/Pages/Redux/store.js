import { createStore, combineReducers } from "redux";
import doctorReducer from "./Reducer/DoctorReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const rootreducer = combineReducers({
      doctor: doctorReducer
})

const store = createStore(rootreducer, composeWithDevTools())

export default store;