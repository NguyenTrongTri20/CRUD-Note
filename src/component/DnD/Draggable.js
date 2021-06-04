import React from 'react';


function Draggable(props) {

    

    const drag = e => {
        e.stopPropagation()
        e.dataTransfer.setData('transfer', e.target.id)
    }
    const noAllowDrop = e =>{
        e.stopPropagation()
        
    }
    

    return (
        <div id={props.id} draggable="true" onDragStart={drag} onDragOver={noAllowDrop}>
            {props.children}
        </div>
    );
}

export default Draggable;