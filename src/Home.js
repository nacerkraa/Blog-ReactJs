import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs,setBlogs] = useState([
        {title:"Html, and css", body:"lorem ipsum...", auther:"nacer", id:1},
        {title:"How to learn react easly", body:"lorem ipsum...", auther:"kaido", id:2},
        {title:"Html, and css and js", body:"lorem ipsum...", auther:"nacer", id:3},
        {title:"The best programming languiges", body:"lorem ipsum...", auther:"mikasa", id:4}
    ]);

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