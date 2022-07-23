import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    return (
        <div className="create"> 
            <h2>Add a New Blog</h2>
            <from>
            <label>Blog title:</label>
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
            <select>
                <option value="mario">mario</option>
                <option value="yoshi">yoshi</option>
            </select>
            <button>Add Blog</button>
            </from>
            <p>{title}</p>

            <div>{body}</div>
        </div>
     );
}

export default Create;