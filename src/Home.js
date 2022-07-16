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
                console.log(data);
            })
    }, []);

    
    return (

        <div className="Home">
            
        </div>
    );
}

export default Home;