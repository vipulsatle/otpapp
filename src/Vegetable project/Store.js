import { useReducer, userReducer } from './Reducer';
import { createStore, combineReducers, applyMiddleware } from 'redux';
//thunk ek middleware hai
import thunk from 'redux-thunk';

const reducer = combineReducers({
    userDetails:userReducer
})

const Store = createStore(reducer,applyMiddleware(thunk))
export default Store



//  import VegetableReducer from './Reducer';

// import { createStore, combineReducers } from 'redux'

// const rootReducer = combineReducers({
//     VegetableReducer: VegetableReducer
//   })

// const store = createStore(rootReducer);

// export default store;









// // import {Reducer} from './Reducers'
// // import { createStore } from 'redux' 
// // const Store=createStore(Reducer)
// // export default Store