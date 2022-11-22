import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getNotes = createAsyncThunk(
    'notes/getNotes',
    async()=>{
        const response = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/notes`);
        return  response.data;
    }
)

export const addNote = createAsyncThunk(
    'notes/addNote',
    async(data)=>{
        console.log(data);
        const response = await axios.post(`${process.env.REACT_APP_API_BASE_ENDPOINT}/note`,data);
        return  response.data;
    }
)

export const removeNote = createAsyncThunk(
    'notes/removeNote',
    async(id)=>{
        console.log(id);
        await axios.delete(`${process.env.REACT_APP_API_BASE_ENDPOINT}/notes/${id}`);
        return  id;
    }
)

export const noteSlice = createSlice({
    name:'notes',
    initialState:{
        items:[],
        isLoading:false,
        isAddLoading:false,
        error:null,
        activeFilter:localStorage.getItem('activeFilter')
    },
    reducers:{
        changeActiveFilter:(state,action)=>{
            state.activeFilter = action.payload
        },
    },
    extraReducers:{
        //get notes
        [getNotes.pending]:(state,action)=>{
            state.isLoading=true
        },
        [getNotes.fulfilled]:(state,action)=>{
          
            state.items = action.payload.reverse();
            state.isLoading=false
        },
        [getNotes.rejected]:(state,action)=>{
            state.error = action.error.message
            state.isLoading=false
        },
        // addNote
        [addNote.pending]:(state,action)=>{
            state.isAddLoading=true
        },
        [addNote.fulfilled]:(state,action)=>{      
           console.log(action.payload);
           state.items.unshift(action.payload)
           state.isAddLoading=false
        },
        //removeNote
        [removeNote.fulfilled]:(state,action)=>{
            const id = action.payload
            const filtered = state.items.filter(item=>item.id !==id)
            state.items = filtered
         }
    }
})
export const filteredNotes= (state) => {
    if(state.noteReducer.activeFilter){
        return state.noteReducer.items.filter((item) =>
        item.title.toLowerCase().includes(state.noteReducer.activeFilter.toLowerCase())
      )
    }
    return state.noteReducer.items
};
export const {changeActiveFilter} = noteSlice.actions;
export default noteSlice.reducer;