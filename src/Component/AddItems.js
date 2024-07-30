import { IoArrowBackSharp } from "react-icons/io5";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { IoReturnUpForwardOutline } from "react-icons/io5";
import { MdOutlineDone } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { TodoContext } from "../Store/TodoContext";

function AddItems() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(new Date());
    const navigate = useNavigate();
    const { addTodo, editTodo, updateTodo } = useContext(TodoContext);

    useEffect(() => {
        if (editTodo) {
            setTitle(editTodo.title);
            setDescription(editTodo.description);
            setDate(editTodo.date)
        }
    }, [editTodo]);

    const handleSumbit = (e) => {
        e.preventDefault();

        const newTodo = {
            title,
            description,
            date: new Date()
        }
        if (editTodo) {
            updateTodo({ ...editTodo, ...newTodo });
        }
        else {
            addTodo({ ...newTodo, id: Date.now() });
        }

        setTitle('');
        setDescription('');
    }

    const modules = {
        toolbar: [
            [{ font: [] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ color: [] }, { background: [] }],
            [{ script: "sub" }, { script: "super" }],
            ["blockquote", "code-block"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image", "video"],
            ["clean"],
        ],
    };

    return (
        <div className='addItems-wrapper'>
            <form onSubmit={handleSumbit}>
                <div className="addItems-head d-flex">
                    <div>
                        <button><IoArrowBackSharp className="icon" onClick={() => navigate(-1)} /></button>
                    </div>
                    <div className="d-flex right-side">
                        <button ><IoReturnUpBackOutline className="icon" /></button>
                        <button ><IoReturnUpForwardOutline className="icon" /></button>
                        <button type="submit" onClick={() => navigate("addItems")}><MdOutlineDone className="icon" /></button>
                    </div>
                </div>
                <select name="" id="" className="folder-content">
                    <option >Uncategorised</option>
                    <option >New Folder</option>
                </select>
                <div className="addItems-main">
                    <input value={title} type="text" name="title" id="" placeholder="title" onChange={(e) => setTitle(e.target.value)} />
                    <div className="addItems-date"> | 100 word, 100 character</div>
                    <ReactQuill value={description} className="textarea" modules={modules} theme="snow" onChange={setDescription} placeholder="Start Writing..." />
                </div>
            </form>
        </div>
    )
}

export default AddItems