import { combineReducers, createStore } from 'redux';
import { authReducer } from '../reducers/authReducer';
import { dataReducer } from '../reducers/dataReduer';



const allCombinedReducers = combineReducers({ dataReducer, authReducer });







export default function store() {
  return createStore(allCombinedReducers);
};


