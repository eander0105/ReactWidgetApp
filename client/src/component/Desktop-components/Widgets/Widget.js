import React, {useState, useEffect} from 'react';
import Draggable from 'react-draggable';
import CloseIcon from '@mui/icons-material/Close';

function Widget(props) {

    const [deltaPos, setDeltaPos] = useState({x: props.PosX, y: props.PosY})
    const [startPos, setStartPos] = useState({x: 0, y: 0})

    useEffect(() => {
        setStartPos({x: props.PosX, y: props.PosY})
    }, [])

    const handleDrag = (e, ui) => {
        const {x, y} = deltaPos;
        setDeltaPos({
            x: x + ui.deltaX,
            y: y + ui.deltaY,
          })
        props.updatePos(props.id, deltaPos);
    };

    return (
        <Draggable bounds='.widgetCanvas' onDrag={handleDrag} onStop={() => props.save()} disabled={!props.editMode}>
            <div style={{width: '400px', height: '300px', position: 'absolute', top: `${startPos.y}px`, left: `${startPos.x}px`}} id={props.id}>
                {props.editMode ? 
                    <div className='DeleteButton' onClick={() => props.deleteItem(props.id)}>
                        <CloseIcon/>
                    </div> : ''}
                {props.Widget}
            </div>
        </Draggable>
    )
}

export default Widget
