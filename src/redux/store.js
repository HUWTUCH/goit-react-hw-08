import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { filtersSlice } from "./filtersSlice";
import {contactsReducer} from "./contactsSlice.js";


const rootReducer = combineReducers({
    contacts: contactsReducer,
    filters: filtersSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
});
