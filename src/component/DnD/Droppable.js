import React from 'react';
import { useDispatch} from 'react-redux';
import { changeList } from '../../store/reducer/NoteSlice'

function Droppable(props) {

    
    const dispatch = useDispatch() 

    const drop = e => {
        e.preventDefault()
        e.stopPropagation()
        const data = e.dataTransfer.getData('transfer')
        // e.target.appendChild(document.getElementById(data))      
        const dropElement = document.getElementById(data)
        if(dropElement){
            const dropElementId = document.getElementById(data).id
            const parentElementId = e.target.id

            const submitValue = {
                dropElementId,
                parentElementId
            }

            const action = changeList(submitValue)
            
            dispatch(action)
        }
    }

    const allowDrop = e =>{
        e.preventDefault()
        e.stopPropagation()

        
    }
    return (
        <div id={props.id} onDrop={drop} draggable="true" onDragOver={allowDrop} >
            {props.children}
        </div>
    );
}

export default Droppable;