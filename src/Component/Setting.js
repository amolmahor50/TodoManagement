import { useEffect, useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5"
import { useNavigate } from "react-router-dom"

const getThemes = () => {
    const theme = localStorage.getItem("theme");
    if (!theme) {
        localStorage.setItem("theme", "light-theme");
        return "light-theme"
    }
    else {
        return theme;
    }
}

function Setting() {
    const navigate = useNavigate();
    const [Themes, setThemes] = useState(getThemes)

     const toggleThemes = (e) => {
        const targetTheme = e.target.value;
        if (targetTheme === "light") {
            setThemes("light-theme");
        }
        else if (targetTheme === "dark") {
            setThemes("dark-theme");
        }
    }

    useEffect(() => {
        const refreshTheme = () => {
            localStorage.setItem("theme", Themes);
        };

        refreshTheme() ;

        document.body.className = Themes;
    }, [Themes])

    return (
        <div className="setting-wrapper">
            <IoArrowBackSharp className="icon" onClick={() => navigate(-1)} />
            <p className="setting-headline">Notes</p>
            <div className="setting-wrapper-2">
                <p className="setting-service-headline">Cloud services</p>
                <div className="setting-service-wrapper">
                    <div className="setting-service-group d-flex">
                        <label htmlFor="">Xiaomi cloud</label>
                        <select name="" id="">
                            <option value="">Synced with the cloud</option>
                        </select>
                    </div>
                    <div className="setting-service-group d-flex">
                        <label htmlFor="">Deleted notes in the cloud</label>
                        <select name="" id="">
                            <option value="">Next</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="setting-wrapper-2">
                <p className="setting-service-headline">Style</p>
                <div className="setting-service-wrapper">
                    <div className="setting-service-group d-flex">
                        <label htmlFor="">Themes</label>
                        <select name="" id="" onChange={(e) => toggleThemes(e)}>
                            <option value="light">Default</option>
                            <option value="dark">Dark</option>
                            <option value="light">Light</option>
                        </select>
                    </div>
                    <div className="setting-service-group d-flex">
                        <label htmlFor="">Font size</label>
                        <select name="" id="">
                            <option value="">Small</option>
                            <option value="">Medium</option>
                            <option value="">Large</option>
                            <option value="">Huge</option>
                        </select>
                    </div>
                    <div className="setting-service-group d-flex">
                        <label htmlFor="">Sort</label>
                        <select name="" id="">
                            <option value="">By notification date</option>
                            <option value="">By creation date</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="setting-wrapper-2">
                <p className="setting-service-headline">OTHER</p>
                <div className="setting-service-wrapper">
                    <div className="setting-service-group d-flex">
                        <label htmlFor="">Sort</label>
                        <select name="" id="">
                            <option value="">Synced with the cloud</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Setting