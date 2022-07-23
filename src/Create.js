import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [auther, setAuther] = useState("mario");


    return (

        <div className="create"> 
            <h2>Add a New Blog</h2>
            <from>
            <label>Blog Title:</label>
            <input
                type="text"
                value={title}
                onChange= {(e) => setTitle(e.target.value)}
                required
            />

            <label>Blog body:</label>
            <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
            ></textarea>

            <label>Auther:</label>
            <select
                value={auther}
                onChange={(e) => setAuther(e.target.value)}
            >
                <option value="mario">mario</option>
                <option value="yoshi">yoshi</option>
            </select>
            <button>Add Blog</button>
            </from>
            <p>{title}</p>
            <div>{body}</div>
            <div>{auther}</div>
        </div>
    );
}

export default Create;