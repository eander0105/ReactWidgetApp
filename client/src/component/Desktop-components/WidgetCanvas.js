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
            {props.profile[ + props.editMode].map((item) => {
                return(
                    <div key={props.id}>
                        <Widget 
                            Widget={widgetLoader(item.widgetCode)} 
                            PosX={item.posX} 
                            PosY={item.posY} 
                            id={item._id} 
                            editMode={props.editMode} 
                            deleteItem={props.deleteItem} 
                            updatePos={props.updatePos} 
                            save={props.save}/>
                    </div>
                )
            })}
        </div>
    )
}

export default WidgetCanvas
