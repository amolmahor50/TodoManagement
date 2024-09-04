import { IoArrowBackSharp } from "react-icons/io5";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { IoReturnUpForwardOutline } from "react-icons/io5";
import { MdOutlineDone } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { TodoContext } from "../Store/TodoContext";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";

function AddItems() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [timestamp, setTimestamp] = useState((new Date().toLocaleString()));
    const navigate = useNavigate();
    const { showAlert, addTodo, editTodo, updateTodo } = useContext(TodoContext);

    useEffect(() => {
        if (editTodo) {
            setTitle(editTodo.title);
            setDescription(editTodo.description);
            setTimestamp(editTodo.timestamp)
        }
    }, [editTodo, timestamp]);

    const handleSumbit = (e) => {
        e.preventDefault();

        const newTodo = {
            title,
            description,
            timestamp
        }
        if (editTodo) {
            updateTodo({ ...editTodo, ...newTodo });
            showAlert("Upadate Your task Today", "Success");
        }
        else {
            addTodo({ ...newTodo, id: Date.now() });
            showAlert("Add Your task Today", "Success");
        }
        navigate('/');
    }

    const handleDivertCreateFolder = (e) => {
        console.log(e.target.value)
        if (e.target.value === "newFolder") {
            navigate('/folder');
        }
    }

    return (
        <div className='addItems-wrapper'>
            <div className="addItems-head d-flex">
                <div>
                    <button><IoArrowBackSharp className="icon" onClick={() => navigate(-1)} /></button>
                </div>
                <div className="d-flex right-side">
                    <button ><IoReturnUpBackOutline className="icon" /></button>
                    <button ><IoReturnUpForwardOutline className="icon" /></button>
                    <button disabled={(title && description).length === 0} type="submit" onClick={handleSumbit}><MdOutlineDone className="icon" /></button>
                </div>
            </div>
            <select name="" id="" className="folder-content" onChange={handleDivertCreateFolder}>
                <option >Uncategorised</option>
                <option value='newFolder'>New Folder</option>
            </select>
            <div className="addItems-main">
                <input value={title} type="text" name="title" id="" placeholder="Title..." onChange={(e) => setTitle(e.target.value)} />
                <div className="addItems-date"> {timestamp} | {description.split(" ").filter((element) => { return element.length !== 0 }).length} word and {description.length}/5000 Character</div>
                <EditorToolbar />
                <ReactQuill
                    theme="snow"
                    value={description}
                    onChange={(e) => setDescription(e)}
                    placeholder={"Write something awesome..."}
                    modules={modules}
                    formats={formats}
                    className="textarea"
                />
            </div>
        </div>
    )
}

export default AddItems