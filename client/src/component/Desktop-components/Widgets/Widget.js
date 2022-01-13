import React from 'react';
import Draggable from 'react-draggable';
import WeatherWidget from './WeatherWidget';

function Widget(props) {
    return (
        <Draggable bounds='.widgetCanvas' grid={[50, 50]}>
            <div style={{width: '400px', height: '300px', position: 'absolute', top: '100px', left: '400px'}}>
                {props.Widget}
            </div>
        </Draggable>
    )
}

export default Widget
