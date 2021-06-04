import React, { Fragment, useState } from 'react';
import Draggable from '../../../DnD/Draggable';
import { editNote, deleteNote } from '../../../../store/reducer/NoteSlice'
import { useDispatch } from 'react-redux'

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root:{
        fontSize: "19px",
        position: "absolute",
        right:"10px",
        top: "11.5px",
        cursor:"pointer"
    },
    dark:{
        color:"white",
    },
    light:{
        color:"#000"
    }
  }));

function NoteItem(props) {

    const deleteIconStyle = useStyles()
    const {isLightTheme,note} = props

    const dispatch = useDispatch()
    
    const [editTitle, setEditTitle] = useState(false)
    const [editDescription, setEditDescription] = useState(false)
    const [noteValue, setNoteValue] = useState(note)

    

    const onEdit = (e)=>{
        if(e.target.id === "title"){
            setEditTitle(true)
        }else{
            setEditDescription(true)
        }
    }
    const onSubmitValue = (e)=>{
        
        setEditTitle(false)
        setEditDescription(false)
        console.log(noteValue);
        const action = editNote(noteValue)
        dispatch(action)

    }
    const onValueChange = e =>{
        let target = e.target
        let name = target.name
        let value = target.value
        setNoteValue({
            ...noteValue,
            [name]:value
        })
    }
    const onDeleteNote = () =>{
        const action = deleteNote(note.id)
        dispatch(action)
    }
    return (
        <Fragment>
            <Draggable id={note.id}> 
                <div 
                    className={isLightTheme ? "todo-item" :"todo-item todo-item-dark"} 
                    id={note.id}
                    >
                    <div className="wrap-todoItem">
                        <div 
                            className={isLightTheme ? "todo-title" : "todo-title todo-title-dark"} 
                            onDoubleClick={onEdit}    
                            id="title"
                            style={{cursor:"pointer"}}
                        >
                            {
                                !editTitle ? 
                                note.title 
                                : 
                                <input 
                                    className={isLightTheme ? "edit-title" : "edit-title edit-dark"}
                                    type="text" 
                                    name="title" 
                                    autoFocus={true} 
                                    onBlur={onSubmitValue}
                                    value={noteValue.title}
                                    onChange={onValueChange}
                                    onFocus={(e)=>e.target.select()}
                                /> 
                            } 
                            <DeleteForeverIcon 
                                className = {isLightTheme ? 
                                                `${deleteIconStyle.root} ${deleteIconStyle.light}` 
                                                :
                                                `${deleteIconStyle.root} ${deleteIconStyle.dark}`
                                            }
                                onClick={onDeleteNote}
                            />
                        </div>

                        <div 
                            className={isLightTheme ? "todo-content" : "todo-content todo-content-dark"}
                            onDoubleClick={onEdit}  
                            id="description" 
                            style={{cursor:"pointer"}} 
                        >
                            {
                                !editDescription ? 
                                note.description 
                                : 
                                <input 
                                    className={isLightTheme ? "edit-description" : "edit-description edit-dark"}
                                    type="text" 
                                    autoFocus={true} 
                                    name="description" 
                                    onBlur={onSubmitValue} 
                                    onFocus={(e)=>e.target.select()}
                                    value={noteValue.description}
                                    onChange={onValueChange}
                                />
                            } 
                        </div>
                    </div>
                </div>
            </Draggable>
        </Fragment>
    );
}

export default NoteItem;