import React from 'react'

function CreateFolderPopUp({setOpenFolder}) {
  return (
    <div className='folder-popup d-flex'>
        <p>New folder</p>
        <input type="text" name="" id="" value={"Unnamed folder"} />
        <div className="buttons d-flex">
          <button className="cancel" onClick={() => setOpenFolder(false)}>Cancel</button>
          <button className="ok">OK</button>
        </div>
    </div>
  )
}

export default CreateFolderPopUp;