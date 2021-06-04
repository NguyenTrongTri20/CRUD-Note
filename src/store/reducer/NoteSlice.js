import {createSlice, nanoid} from "@reduxjs/toolkit"

const noteSlice = createSlice({
    name:"note",
    initialState:{
        // userId:1,
        todo:[
            {id:nanoid(), title:"Học bài", description:"học JS, React"}
        ],
        inProgress:[
            {id:nanoid(), title:"Chơi game", description:"chơi liên minh"}
        ],
        completed:[
            {id:nanoid(), title:"Ngủ", description:"ngủ trưa"}
        ]
    },
    reducers:{
        changeList(state, action){
            const {parentElementId, dropElementId} = action.payload

            for(let key in state){
                let index = state[key].findIndex(item => item.id === dropElementId)
                if(index !== -1){
                    let destinationNote = [...state[parentElementId]]

                    let isExist = destinationNote.findIndex(item => item.id === dropElementId)

                    if(isExist === -1){
                        let sourceNote = [...state[key]]
                    
                        let note = sourceNote[index]
                        
                        sourceNote.splice(index,1)
                        
                        
                        destinationNote.push(note)
                        
                        return {
                            ...state,
                            [key] : sourceNote,
                            [parentElementId]:destinationNote
                        }
                    }
                }
            }
            return state
        },
        editNote(state, action){
            const note = action.payload
            for(let key in state){
                state[key] = state[key].map(item => {
                    if(note.id === item.id){
                        return note
                    }
                    return item
                })
            }
        },
        deleteNote(state, action){
            const noteId = action.payload
            for(let key in state){
                state[key] = state[key].filter(item => item.id !== noteId)
            }
        },
        addNote(state, action){
            const noteListId = action.payload
            const defaultNote = {
                id: nanoid(),
                title: "Click here to change",
                description:"Click here to change"
            }
            state[noteListId].unshift(defaultNote)
        }
    }
})

const {reducer,actions} = noteSlice

export const {changeList, editNote, deleteNote, addNote} = actions
export default reducer