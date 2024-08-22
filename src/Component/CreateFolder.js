import { IoArrowBackSharp } from "react-icons/io5"
import { MdDeleteOutline } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { IoAddOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import CreateFolderPopUp from "./CreateFolderPopUp";
import { TodoContext } from "../Store/TodoContext";

function CreateFolder() {
  const [openFolder, setOpenFolder] = useState(false);
  const {todos} = useContext(TodoContext);

  const navigate = useNavigate();

  return (
     <div className="createFolder-wrapper">
        <div className="folder-wrapper-head d-flex">
            <IoArrowBackSharp className="icon" onClick={() => navigate(-1)}/>
            <span>Folders</span>
            <MdDeleteOutline className="icon"/>
        </div>
        <div className="todo-count-wrapper d-flex">
            <div className="left d-flex">
              <IoMdCheckmark className="icon"/>
              <span>All</span>
            </div>
            <span className="right">{todos.length}</span>
        </div>
        <div className="create-folder d-flex" onClick={() => setOpenFolder(true)}>
          <IoAddOutline className="icon"/>
          <span>New Folder</span>
        </div>
        {
      openFolder ? <CreateFolderPopUp setOpenFolder={setOpenFolder}/> : ""
    }
    </div>
  )
}

export default CreateFolder