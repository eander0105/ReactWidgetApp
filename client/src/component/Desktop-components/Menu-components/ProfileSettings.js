import React from 'react'

function ProfileSettings(props) {

    return (    
        <div>
            <h1>test</h1>
            <form className='profileForm' action="">
                <div >
                    <input type="text" placeholder='Firstname'/>
                    <input type="text" placeholder='Lastname'/>
                </div>

                <input type="password" placeholder='Current password'/>
                <input type="password" placeholder='New password'/>
                <input type="password" placeholder='Re-Enter new password'/>
                <input type="submit" value='save' className='btn btn-primary'/>
            </form>
            <button className='btn btn-primary' onClick={props.logOut}>Log out</button>         
        </div>      
    )
}

export default ProfileSettings
