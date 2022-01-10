import './css/desktop.css';
import React from 'react';
import Menu from './Desktop-components/Menu';

function Desktop(props) {  

    

    return (
        <div>
            <Menu logOut={props.logOut}/>
        </div>
    )
}

export default Desktop
