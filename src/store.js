import axios from "axios";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunks from "redux-thunk";
import { createLogger } from "redux-logger";

const initialState = {};

const LOAD_EMPLOYEES = "LOAD_EMPLOYEES";

const employeesReducer = (state = {}, action) => {
  if (action.type === LOAD_EMPLOYEES) {
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

export default store;

const _loadEmployees = employees => {
  return {
    type: LOAD_EMPLOYEES,
    employees
  };
};

const loadEmployees = (num) => {
  return async dispatch => {
    const response = await axios.get(`/api/employees/${num}`);
    // console.log(response);
    const actionToDispatch = _loadEmployees(response.data);
    return dispatch(actionToDispatch);
  };
};

console.log(store.getState(), 'getstate');

export { loadEmployees };
