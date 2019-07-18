import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// Import Reducers
import userReducer from './reducers/userReducer';
import dataReducer from './reducers/dataReducers';
import uiReducer from './reducers/uiReducers';

// Set initial state
const initialState = {};

const middleware = [thunk];

// Combine reducers
const reducers = combineReducers({
  user: userReducer,
  data: dataReducer,
  UI: uiReducer
});

// Create store 
const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
