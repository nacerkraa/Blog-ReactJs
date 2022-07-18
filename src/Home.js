import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
    
    return (

        <div className="Home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete} />}
        </div>
    );
}

export default Home;