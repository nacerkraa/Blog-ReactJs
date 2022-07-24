import { useState } from "react";

const Create = () => {
    // add atributes
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [auther, setAuther] = useState("yoshi");
    const [ispending, setIsPending] = useState(false)

    const  handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, auther};
        
        setIsPending(true);

        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("new blog added");
            setIsPending(false);
        })
    };

    // The return of create function
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
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
            
            {!ispending && <button>Add Blog</button>}
            {ispending && <button disabled>Adding Blog...</button>}

            </form>
            <p>{title}</p>
            <div>{body}</div>
            <div>{auther}</div>
        </div>
    );
}

export default Create;