import React from 'react'

function EditMode(props) {
    
    return (
        <div>
            <label className='EditLabel'>Edit mode</label>
            <div className='EditToggle'>
                <button className='btn btn-primary' style={{width: '50%'}} onClick={props.activateEditMode} disabled={props.editMode ? true : false}>ON</button>
                <button className='btn btn-primary' style={{width: '50%'}} onClick={props.revertProfile} disabled={props.editMode ? false : true}>OFF</button>
            </div>
        </div>
    )
}

export default EditMode
