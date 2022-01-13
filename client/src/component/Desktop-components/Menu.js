import Cookies from 'js-cookie';
import React, { useState } from 'react';
import './css/Menu.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppsIcon from '@mui/icons-material/Apps';
import { Scrollbars } from 'react-custom-scrollbars';
import MenuItem from './Menu-components/MenuItem';
import ProfileSettings from './Menu-components/ProfileSettings';
import WidgetMenu from './Menu-components/WidgetMenu';

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
                        <MenuItem element={<WidgetMenu widgetOnClick={props.widgetOnClick} />} Title='Widget Menu' Icon={<AppsIcon/>}/>
                    </div>
                </Scrollbars>
            </div>
        </>
    )
}

export default Menu
