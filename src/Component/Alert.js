import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { TodoContext } from "../Store/TodoContext";

function Alert() {
    const { alert } = useContext(TodoContext);
    return (
        <>
            {
                alert && <div className='alert-container d-flex'>
                    <p><strong>{alert.msg}</strong>, {alert.type}</p>
                    <RxCross2 className="icon" />
                </div>
            }
        </>
    )
}

export default Alert