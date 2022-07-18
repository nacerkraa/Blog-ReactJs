import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const Home = () => {

    const {data:blogs, isPending, error} = useFetch("http://localhost:8000/blogs");
    
    return (

        <div className="Home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs!" />}
        </div>
    );
}

export default Home;