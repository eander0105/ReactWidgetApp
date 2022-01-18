import React, {useState} from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Cookies from 'js-cookie';

function ProfileSettings(props) {

    const [profileMenu, setProfileMenu] = useState(false)
    
    return (    
        <div>
            <div className='ProfileToggle'>
                <div className='ProfileToggleLabel' onClick={() => setProfileMenu(!profileMenu)}>
                    <div style={{float: 'left'}}>
                        {profileMenu ? <ArrowDropDownIcon/> : <ArrowRightIcon/>}
                    </div>
                    Profile information
                </div>
                <form className='profileForm' action="" style={{display: profileMenu ? 'block' : 'none'}}>
                    <div >
                        <input className='ProfileSettings' value={Cookies.get('userfn')} type="text" placeholder='Firstname'/>
                        <input className='ProfileSettings' value={Cookies.get('userln')} type="text" placeholder='Lastname'/>
                    </div>

                    <div>
                        <input className='ProfileSettings' type="password" placeholder='Current password'/>
                        <input className='ProfileSettings' type="password" placeholder='New password'/>
                        <input className='ProfileSettings' type="password" placeholder='Re-Enter new password'/>
                        <input type="submit" value='Save' className='btn btn-primary' style={{padding: '5px'}}/>
                    </div>
                </form>
            </div>
            <div>
                <button className='btn btn-primary LogoutBtn' onClick={props.logOut}>Log out</button>         
            </div>
        </div>      
    )
}

export default ProfileSettings
