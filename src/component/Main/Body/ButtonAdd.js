import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import {addNote} from '../../../store/reducer/NoteSlice'

function ButtonAdd(props) {

    const {noteListParentId} = props
    const dispatch = useDispatch()
    const onAddNote = () => {
        const action = addNote(noteListParentId)
        dispatch(action)
    }

    return (
        <Fragment>
            <button 
                className="add-todo"
                onClick={onAddNote}
            >
                <span className="text">+</span>
            </button>
        </Fragment>
    );
}

export default ButtonAdd;