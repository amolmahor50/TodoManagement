import { IoMdClose } from "react-icons/io";
import { VscChecklist } from "react-icons/vsc";
import { GoUnlock } from "react-icons/go";
import { TiPinOutline } from "react-icons/ti";
import { RiDragMove2Fill } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";
import { useContext } from "react";
import { TodoContext } from "../Store/TodoContext";


function ItemAction({ action }) {
    const {deletedTodo, showAlert, pinSelect} = useContext(TodoContext);

    if(!action.itemActionMenu) return

    // deleted your task
    const handleDeleteItem = () => {
        deletedTodo(action.idActionperform);
        action.setItemActionMenu(false);
        showAlert('Your Note are deleted', 'Success');
    }

    // pin your items
    const handlePinSelect = () => {
        pinSelect(action.idActionperform);
        action.setItemActionMenu(false);
    }

    return (
        <div className="itemAction-wrapper d-flex">
            <div className="item-action-header d-flex">
                <IoMdClose className="icon" onClick={() => action.setItemActionMenu(false)} />
                <VscChecklist className="icon-select-all" />
            </div>
            <div className="item-action-footer d-flex">
                <div className="item-action-group d-flex">
                    <GoUnlock className="icon"/>
                    <span>Hide</span>
                </div>
                <div className="item-action-group d-flex" onClick={handlePinSelect}>
                    <TiPinOutline className="icon"/>
                    <span>Pin</span>
                </div>
                <div className="item-action-group d-flex">
                    <RiDragMove2Fill className="icon"/>
                    <span>Move to</span>
                </div>
                <div className="item-action-group d-flex" onClick={handleDeleteItem}>
                    <MdDeleteOutline className="icon"/>
                    <span>Delete</span>
                </div>
            </div>
        </div>
    )
}

export default ItemAction