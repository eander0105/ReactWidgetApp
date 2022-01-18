import './css/desktop.css';
import React, {useState, useEffect} from 'react';
import Menu from './Desktop-components/Menu';
import WidgetCanvas from './Desktop-components/WidgetCanvas';
import axios from 'axios';
import Cookies from 'js-cookie';

function Desktop(props) { 

    const [userProfile, setUserProfile] = useState([])
    const [updatedProfile, setUpdatedProfile] = useState([])
    const [editMode, setEditMode] = useState(false)

    
    const getWidgets = () => {
        axios.post('/getWidgets', {
            username: Cookies.get('username')
        }).then((result) => {
            setUserProfile(result.data[0].widgets);
        })
    }

    useEffect(() => {      
        getWidgets();
    }, [])

    const widgetClick = (widget) => {       
        const newProfile = [...userProfile, widget]       
        
        setUpdatedProfile([...updatedProfile, widget])
        setUserProfile(newProfile)
        axios.post('/updateWidgets', {username: Cookies.get('username'), widgets: newProfile})
            .then((result) => {
                getWidgets();
            })
    }

    const activateEditMode = () => {
        setEditMode(true);
        setUpdatedProfile([...userProfile]);
    }
    
    const saveNewProfile = (profile) => {
        if (!profile) {
            profile = updatedProfile;
        }
        axios.post('/updateWidgets', {username: Cookies.get('username'), widgets: profile})
            .then((result) =>{
                setUserProfile(updatedProfile);
            })
        
    }

    const revertNewProfile = () => {
        setEditMode(false);
    }

    const deleteItem = (itemId) => {
        const removeIndex = updatedProfile.findIndex(x => x._id === itemId)
        const newArray = [];
        for (let i = 0; i < updatedProfile.length; i++) {
            if (i !== removeIndex) {
                newArray.push(updatedProfile[i])
            }
        }
        setUpdatedProfile(newArray);
        saveNewProfile(newArray);
    }

    const newPos = (itemId, pos) => {
        const updatedPos = updatedProfile.findIndex(x => x._id === itemId);
        const newArray = [...updatedProfile];
        newArray[updatedPos].posX = pos.x;
        newArray[updatedPos].posY = pos.y;
        setUpdatedProfile(newArray);
    }

    return (
        <div className='desktop'>
            <WidgetCanvas profile={[userProfile, updatedProfile]} editMode={editMode} deleteItem={deleteItem} updatePos={newPos} save={saveNewProfile}/>
            <Menu logOut={props.logOut} widgetOnClick={widgetClick} activateEditMode={activateEditMode} editMode={editMode} revertProfile={revertNewProfile} saveProfile={saveNewProfile}/>
        </div>
    )
}

export default Desktop
