import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'

export const store = configureStore({
  reducer: { //nơi chứa các slice
    counter: counterReducer, 
  }
})
