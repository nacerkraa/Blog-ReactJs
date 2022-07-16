import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState(null);

    const [name, setName] = useState("Maio");

    const handleDelete = (id) => {
        const newBlog = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlog);
    }

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json()
            })

            .then(data => {
                setBlogs(data);
            })
    }, []);

    
    return (

        <div className="Home">
            <BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete} />
        </div>
    );
}

export default Home;