import Cookies from 'js-cookie';
import React, { useState } from 'react';
import './css/Menu.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


import MenuItem from './Menu-components/MenuItem';
import ProfileSettings from './Menu-components/ProfileSettings';

function Menu(props) {

    const [menuActive, setActive] = useState(true);

    const toggleMenu = () => {
        setActive(!menuActive)
    }

    return (
        <>
            <button className={`toggleBtn btn btn-secondary ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>{menuActive ? '>' : '<'}</button>
            <div className={`menu ${menuActive ? 'active' : ''}`}>
                <div id='MenuHead'>
                    Hello {Cookies.get('userfn')} {Cookies.get('userln')}!
                </div>
                <div id='MenuList'>
                    <MenuItem element={<ProfileSettings logOut={props.logOut}/>} Title='Profile' Icon={<AccountCircleIcon/>}/>
                    <MenuItem element={<ProfileSettings logOut={props.logOut}/>} Title='Profile' Icon={<AccountCircleIcon/>}/>
                    <MenuItem element={<ProfileSettings logOut={props.logOut}/>} Title='Profile' Icon={<AccountCircleIcon/>}/>
                </div>
            </div>
        </>
    )
}

export default Menu
