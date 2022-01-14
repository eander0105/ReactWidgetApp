import './css/desktop.css';
import React, {useState, useEffect} from 'react';
import Menu from './Desktop-components/Menu';
import WidgetCanvas from './Desktop-components/WidgetCanvas';
import axios from 'axios';
import Cookies from 'js-cookie';

function Desktop(props) { 

    const [userProfile, setUserProfile] = useState([])

    useEffect(() => {      
        axios.post('/getWidgets', {
            username: Cookies.get('username')
        }).then((result) => {
            console.log(result);
            setUserProfile(result.data[0].widgets);
            console.log(result.data[0].widgets);
        })
    }, [])

    const widgetClick = (widget) => {
        const newProfile = [...userProfile, widget]       

        setUserProfile(newProfile)
        console.log(userProfile);
        axios.post('/updateWidgets', {username: Cookies.get('username'), widgets: newProfile})
            .then((result) => {
                console.log(result);
            })
    }

    return (
        <div className='desktop'>
            {console.log(userProfile)}
            <WidgetCanvas profile={userProfile}/>
            <Menu logOut={props.logOut} widgetOnClick={widgetClick} />
        </div>
    )
}

export default Desktop
