import './css/desktop.css';
import React from 'react';
import Menu from './Desktop-components/Menu';
import WidgetCanvas from './Desktop-components/WidgetCanvas';

function Desktop(props) {  
    return (
        <div className='desktop'>
            <WidgetCanvas/>
            <Menu logOut={props.logOut}/>
        </div>
    )
}

export default Desktop
