import Cookies from 'js-cookie';
import React, { useState } from 'react';
import './css/Menu.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppsIcon from '@mui/icons-material/Apps';
import EditIcon from '@mui/icons-material/Edit';
import { Scrollbars } from 'react-custom-scrollbars';
import MenuItem from './Menu-components/MenuItem';
import ProfileSettings from './Menu-components/ProfileSettings';
import WidgetMenu from './Menu-components/WidgetMenu';
import EditMode from './Menu-components/EditMode';
import WidgeyLogo from './Menu-components/assets/WidgeyLogo.png';

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
                    <img src={WidgeyLogo} alt='Logo'/>
                </div>
                <Scrollbars autoHeight autoHeightMax={'calc(100vh - 75px)'}>
                    <div id='MenuList'>                   
                        <MenuItem element={<ProfileSettings logOut={props.logOut}/>} Title='Profile' Icon={<AccountCircleIcon/>}/>
                        <MenuItem element={<WidgetMenu widgetOnClick={props.widgetOnClick} />} Title='Widget menu' Icon={<AppsIcon/>}/>
                        <MenuItem element={<EditMode editMode={props.editMode} activateEditMode={props.activateEditMode} revertProfile={props.revertProfile} saveProfile={props.saveProfile}/>} Title='Edit mode' Icon={<EditIcon/>}/>
                    </div>
                </Scrollbars>
            </div>
        </>
    )
}

export default Menu
