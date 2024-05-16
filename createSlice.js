const { createSlice, configureStore } = require("@reduxjs/toolkit");

//initial state
const initialState = {
    counter: 0
}

//createSlice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increament: (state, action) => {
      state.counter += 1;
    },
    decrement: (state, action) => {
      state.counter -= 1;
    },
    reset: (state, action) => {
      state.counter = 0;
    },

    increamentBy: (state, action) => {
      state.counter += action.payload;
    },
  },
});


// generate actions
const { increament, decrement, increamentBy, reset } = counterSlice.actions;

//generate reducer
const counterReducer = counterSlice.reducer


//store
const store = configureStore({
    reducer: counterReducer
})

// dispatch
store.dispatch( increament());
store.dispatch( increament()); 
store.dispatch(increament());
store.dispatch(decrement())
store.dispatch(reset())
store.dispatch(increamentBy(100))

console.log(store.getState())
