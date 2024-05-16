const logger = require("redux-logger");
const {
  createAction,
  nanoid,
  createReducer,
  configureStore,
} = require("@reduxjs/toolkit");
// initial state
const initialState = {
  counter: 0,
};

//create action
const increment = createAction("INCREMENT");

const decrement = createAction("DECREMENT");

const reset = createAction("RESET");

//customize create action with payload
const incrementBy = createAction("INCREMENTED_BY", (amount) => {
  return {
    payload: { amount },
  };
});

//create reducer
// 1. builder callback mutation
//2. map object notation

//builder callback mutation
const counterSlice = createReducer(initialState, (builder) => {
  //  increment
  builder.addCase(increment, (state) => {
    state.counter += 1;
  });
  // decrement
  builder.addCase(decrement, (state) => {
    state.counter -= 1;
  });
  // reset
  builder.addCase(reset, (state) => {
    state.counter = 0;
  });
  // customized, increament by 

  builder.addCase(incrementBy, (state, action) => {
    state.counter += action.payload.amount;
  });
});

//store

const store = configureStore({
  reducer: counterSlice,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

//dispatch action
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(incrementBy(135));
console.log(store.getState());
