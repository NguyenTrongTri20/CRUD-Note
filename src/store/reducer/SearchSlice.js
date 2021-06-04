import { createSlice } from '@reduxjs/toolkit'


const SearchSlice = createSlice({
    name:"search",
    initialState:"",
    reducers:{
        search(state, action){
            return action.payload
        }
    }
})

const {reducer, actions} = SearchSlice

export const { search } = actions

export default reducer