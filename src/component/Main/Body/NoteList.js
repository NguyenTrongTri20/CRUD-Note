import React, { Fragment } from 'react';
import ButtonAdd from './ButtonAdd';
import Amount from './NoteList/Amount';

import Droppable from '../../DnD/Droppable'

import NoteItem from './NoteList/NoteItem'
import { useSelector } from 'react-redux';


function Todo(props) {

    const {type, isLightTheme,id, noteList} = props

    const searchValue = useSelector(state => state.searchValue)

    let noteListFilter = [...noteList]

    let element
    
    if(searchValue){
        noteListFilter = noteListFilter.filter(note => {

            let checkExistInTitle = note.title.toLowerCase().includes(searchValue.toLowerCase())
            let checkExistInDescription = note.description.toLowerCase().includes(searchValue.toLowerCase())
                
            if( checkExistInTitle || checkExistInDescription)
                return note
            return false
        })
    }
    
    
    if(noteListFilter){
        element = noteListFilter.map(note => (
        
            <NoteItem 
                key={note.id}
                note={note}
                isLightTheme={isLightTheme}
                
            />
        
        ))
    }
    
    
    
    return (
        <Fragment>
            <div className="todo-list" >
                <Droppable id="Todo">
                    <div className="wrap-todo " id={id} >
                        <div></div>
                        <div className="head">
                            <div className={isLightTheme ? "type" : "type type-dark"}>{type}</div>
                            <Amount amountElement={noteList.length}/>
                        </div>
                        <ButtonAdd 
                            noteListParentId = {id}
                        />

                        {element}
                        
                    </div>
                </Droppable>
            </div>  
        </Fragment>
    );
}

export default Todo;