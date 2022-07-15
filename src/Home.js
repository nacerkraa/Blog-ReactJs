import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs,setBlogs] = useState([
        {title:"Html, and css", body:"lorem ipsum...", auther:"nacer", id:1},
        {title:"How to learn react easly", body:"lorem ipsum...", auther:"kaido", id:2},
        {title:"The best programming languiges", body:"lorem ipsum...", auther:"mikasa", id:3}
    ]);

    return(
        
        <div className="Home">
            <BlogList blogs={blogs} title="The list of the blogs"/>
        </div>
    );
}

export default Home;