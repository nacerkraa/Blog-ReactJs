import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const handleDelete = (id) => {
        const newBlog = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlog);
    }

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                if (!res.ok) {
                    throw Error("Could not fetch the data for that resorce")
                }
                return res.json();
            })

            .then(data => {
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })

            .catch(err => {
                setIsPending(false);
                setError(err.message);
            })
    }, []);

    
    return (

        <div className="Home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete} />}
        </div>
    );
}

export default Home;