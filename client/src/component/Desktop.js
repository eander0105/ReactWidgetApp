import './css/desktop.css';
import React, {useState} from 'react';
import Menu from './Desktop-components/Menu';
import WidgetCanvas from './Desktop-components/WidgetCanvas';
import axios from 'axios';

function Desktop(props) { 

    const [userProfile, setUserProfile] = useState([])

    const widgetClick = (widgetCode) => {
        setUserProfile([...userProfile, widgetCode])
    }

    return (
        <div className='desktop'>
            <WidgetCanvas profile={userProfile}/>
            <Menu logOut={props.logOut} widgetOnClick={widgetClick} />
        </div>
    )
}

export default Desktop
