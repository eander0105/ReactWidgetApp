import React, {useState} from 'react'

function EditMode(props) {
    
    return (
        <div>
            <button className='btn btn-primary' onClick={props.activateEditMode} disabled={props.editMode ? true : false}>Edit</button>
            <button className='btn btn-primary' onClick={props.revertProfile} disabled={props.editMode ? false : true}>Undo</button>
            <button className='btn btn-primary' onClick={props.saveProfile} disabled={props.editMode ? false : true}>Save</button>

        </div>
    )
}

export default EditMode
