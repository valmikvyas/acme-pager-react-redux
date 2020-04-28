import axios from "axios";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunks from "redux-thunk";
import { createLogger } from "redux-logger";

const initialState = {};

const LOAD_EMPLOYEES = "LOAD_EMPLOYEES";

const employeesReducer = (state = {}, action) => {
  if (action.type === LOAD_EMPLOYEES) {
    state = initialState;
    return action.employees;
  }
  return state;
};

const reducer = combineReducers({
  employees: employeesReducer
});

const store = createStore(
  reducer,
  applyMiddleware(thunks, createLogger({ collapsed: true }))
);

const _loadEmployees = employees => {
  return {
    type: LOAD_EMPLOYEES,
    employees
  };
};

const loadEmployees = num => {
  return async dispatch => {
    const response = await axios.get(`/api/employees/${num}`);
    console.log(response.data, "in loadEmployees");
    const actionToDispatch = _loadEmployees(response.data);
    dispatch(actionToDispatch);
  };
};

console.log(store.getState(), "getstate");

export default store;
export { loadEmployees };
