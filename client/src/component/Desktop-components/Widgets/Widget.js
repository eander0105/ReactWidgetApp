import React from 'react';
import Draggable from 'react-draggable';

function Widget(props) {
    return (
        <Draggable bounds='.widgetCanvas' grid={[50, 50]}>
            <div style={{width: '400px', height: '300px', position: 'absolute', top: `${props.PosY}px`, left: `${props.PosX}px`}}>
                {props.Widget}
            </div>
        </Draggable>
    )
}

export default Widget
