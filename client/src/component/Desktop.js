import Cookies from 'js-cookie';
import './css/desktop.css';
import React, { useState } from 'react';

function LoggedIn(props) {  

    const [active, setActive] = useState(true);

    const toggleMenu = () => {
        setActive(!active)
    }

    return (
        <div>
            <button className={`toggleBtn btn btn-primary ${active ? 'active' : ''}`} onClick={toggleMenu}>{active ? '>' : '<'}</button>
            <div className={`menu ${active ? 'active' : ''}`}>
                <p>
                    Hello {Cookies.get('userfn')} {Cookies.get('userln')}!
                </p>
                <button className='btn btn-primary' onClick={props.logOut}>Log out</button>
            </div>
        </div>
    )
}

export default LoggedIn
