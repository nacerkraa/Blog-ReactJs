import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs,setBlogs] = useState(null);

    const [name,setName] = useState("Maio");
    
    const handleDelete = (id) => {
        const newBlog = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlog);
    }

    useEffect(() => {
        console.log("Use Effect Run");
    }, [name]);

    return(
        
        <div className="Home">
            <BlogList blogs={blogs} title="The list of the blogs" handleDelete={handleDelete}/>
            <button onClick={() => setName("Lossi")}>change name</button>
            <p>{name}</p>
        </div>
    );
}

export default Home;