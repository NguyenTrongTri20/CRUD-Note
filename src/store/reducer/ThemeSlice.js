import {createSlice} from "@reduxjs/toolkit"


const ThemeSlice = createSlice({
    name:"theme",
    initialState:{
        isLightTheme:true,
    },
    reducers:{
        toggleThemeMode(state){
            state.isLightTheme =  !state.isLightTheme
        }
    }
})

const {reducer, actions} = ThemeSlice

export const { toggleThemeMode }  = actions

export default reducer