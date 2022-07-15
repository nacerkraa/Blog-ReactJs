import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs,setBlogs] = useState([
        {title:"Html, and css", body:"lorem ipsum...", auther:"nacer", id:1},
        {title:"How to learn react easly", body:"lorem ipsum...", auther:"kaido", id:2},
        {title:"Html, and css and js", body:"lorem ipsum...", auther:"nacer", id:3},
        {title:"The best programming languiges", body:"lorem ipsum...", auther:"mikasa", id:4}
    ]);

    return(
        
        <div className="Home">
            <BlogList blogs={blogs} title="The list of the blogs"/>
            <BlogList blogs={blogs.filter((blog) => blog.auther === 'nacer')} title="Nacer's Blogs"/>
        </div>
    );
}

export default Home;