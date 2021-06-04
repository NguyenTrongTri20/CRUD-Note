import {configureStore} from "@reduxjs/toolkit"
import theme from './reducer/ThemeSlice'
import notesList from './reducer/NoteSlice'
import searchValue from './reducer/SearchSlice'

const store = configureStore({
    reducer:{
        theme,
        notesList,
        searchValue
    }
})

export default store