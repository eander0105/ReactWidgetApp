import React from 'react'
import Widget from './Widgets/Widget';
import WeatherWidget from './Widgets/WeatherWidget';
import './css/widgetCanvas.css'

function WidgetCanvas(props) {

    const widgetLoader = (widgetCode) => {
        switch (widgetCode) {
            case 'weatherWidget':
                return <WeatherWidget/>
            default:
                return false
        }
    }
    return (
        <div className='widgetCanvas'>
            {props.profile.map((item) => {
                return(
                    <Widget Widget={widgetLoader(item.widgetCode) } PosX={item.posX} PosY={item.posY}/>
                )
            })}
        </div>
    )
}

export default WidgetCanvas
