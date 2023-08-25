import { createSlice } from '@reduxjs/toolkit';
//import Data from '../components/Data';

const generateRandomId = () => {
  return Math.floor(Math.random() * 100000); // You can adjust the range as needed
};

const initialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      const { name, lname, status } = action.payload;
      const newContact = {
        id: generateRandomId(), // Generate a random ID
        name,
        lname,
        status,
      };
      state.contacts.push(newContact);
    },
    
    editContact: (state, action) => {
      const { id, name, lname, status } = action.payload;
      const userToUpdate = state.contacts.find(user => user.id === id);

      if (userToUpdate) {
        userToUpdate.name = name;
        userToUpdate.lname = lname;
        userToUpdate.status = status;
      }
    },
     deleteContact: (state, action) => {
      const idToRemove = action.payload;
      state.contacts = state.contacts.filter(user => user.id !== idToRemove);

      // Update remaining users' IDs
 
    },
 }, },
);

export const { addContact, editContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;


  






