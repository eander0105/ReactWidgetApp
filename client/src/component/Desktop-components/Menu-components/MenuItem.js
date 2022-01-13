import React, {useState} from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import { Scrollbars } from 'react-custom-scrollbars';



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
                <Scrollbars autoHeight autoHeightMax={"50vh"} style={{right: "10px"}}>  
                    <div className={`subMenu ${subMenuActive ? 'active' : ''}`}>                                    
                        {props.element}                                     
                    </div>   
                </Scrollbars>         
            </div>
        </div>
    )
}

export default MenuItem
