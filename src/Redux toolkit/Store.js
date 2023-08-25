import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from "./Slice";


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
   
  },
})