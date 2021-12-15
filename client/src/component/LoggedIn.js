import Cookies from 'js-cookie';

function LoggedIn(props) {  
    return (
        <div>
            Hello {Cookies.get('userfn')} {Cookies.get('userln')}!
            <button className='btn btn-primary' onClick={props.logOut}>Log out</button>            
        </div>
    )
}

export default LoggedIn
