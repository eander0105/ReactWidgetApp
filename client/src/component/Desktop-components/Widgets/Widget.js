import React from 'react';
import Draggable from 'react-draggable';
import WeatherWidget from './WeatherWidget';

function Widget() {
    return (
        <Draggable bounds='.widgetCanvas' grid={[50, 50]} defaultPosition={{x: 100, y: 100}}>
            <div style={{width: '300px', height: '200px'}}>
                <WeatherWidget/>
            </div>
        </Draggable>
    )
}

export default Widget
