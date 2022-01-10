import React, {useState} from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CloseIcon from '@mui/icons-material/Close';



function MenuItem(props) {
    const [subMenuActive, setSubMenuActive] = useState(false);

    const toggleSubMenu = () => {
        setSubMenuActive(!subMenuActive);
    }

    return (
        <div>
            <div className={`MenuItem ${subMenuActive ? 'active' : ''}`}>
                <div className='Title' onClick={toggleSubMenu}>
                    <div id='Icon'>
                        {props.Icon}
                    </div>
                    <div id='Title'>
                        {props.Title}
                    </div>
                    <div id='DropIcon'>
                        {subMenuActive ? <CloseIcon/> : <KeyboardArrowDownIcon/>}
                    </div>
                </div>
                <div className={`subMenu ${subMenuActive ? 'active' : ''}`}>
                    {props.element}
                </div>
            </div>
        </div>
    )
}

export default MenuItem
