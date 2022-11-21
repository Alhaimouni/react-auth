import { combineReducers, createStore } from 'redux';


const allCombinedReducers = combineReducers({});


export default function store() {
  return createStore(allCombinedReducers);
};


