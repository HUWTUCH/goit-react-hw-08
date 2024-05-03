import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://66320563c51e14d695631c4f.mockapi.io';
export const fetchContacts = createAsyncThunk("contacts/fetchContacts",
    async (_, thunkAPI) => {
    try {
        const response = await axios.get('/contacts');
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message)
    }
    }
)
export const addContact = createAsyncThunk("contacts/addContact",
    async (contact, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', contact);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)
export const deleteContact = createAsyncThunk("contacts/deleteContact",
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${id}`);
            return response.data.id;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)