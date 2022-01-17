import React, {useState} from 'react';
import Draggable from 'react-draggable';

function Widget(props) {

    const [deltaPos, setDeltaPos] = useState({x: 0, y: 0})

    const handleDrag = (e, ui) => {
        const {x, y} = deltaPos;
        setDeltaPos({
            x: x + ui.deltaX,
            y: y + ui.deltaY,
          })
    };

    return (
        <Draggable bounds='.widgetCanvas' grid={[50, 50]} onDrag={handleDrag} disabled={!props.editMode}>
            <div style={{width: '400px', height: '300px', position: 'absolute', top: `${props.PosY}px`, left: `${props.PosX}px`}} id={props.id}>
                {props.editMode ? 
                    <div className='DeleteButton' onClick={() => props.deleteItem(props.id)}>
                        X
                    </div> : ''}
                {props.Widget}
            </div>
        </Draggable>
    )
}

export default Widget
