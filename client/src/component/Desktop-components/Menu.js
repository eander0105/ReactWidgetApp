import Cookies from 'js-cookie';
import React, { useState } from 'react';
import './css/Menu.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Scrollbars } from 'react-custom-scrollbars';
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
                <Scrollbars autoHeight autoHeightMax={'calc(100vh - 75px)'}>
                    <div id='MenuList'>                   
                        <MenuItem element={<ProfileSettings logOut={props.logOut}/>} Title='Profile' Icon={<AccountCircleIcon/>}/>
                        <MenuItem element={<ProfileSettings logOut={props.logOut}/>} Title='Profile' Icon={<AccountCircleIcon/>}/>
                        <MenuItem element={<ProfileSettings logOut={props.logOut}/>} Title='Profile' Icon={<AccountCircleIcon/>}/>                   
                    </div>
                </Scrollbars>
            </div>
        </>
    )
}

export default Menu
