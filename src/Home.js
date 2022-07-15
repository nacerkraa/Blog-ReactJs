import { useState } from "react";
const Home = () => {
    // let name = "Mario";
    const [blogs,setName] = useState([
        {title:"Html, and css", body:"lorem ipsum...", auther:"nacer", id:1},
        {title:"How to learn react easly", body:"lorem ipsum...", auther:"kaido", id:2},
        {title:"The best programming languiges", body:"lorem ipsum...", auther:"mikasa", id:3}
    ]);
    
/*    const handleClick = () => {
        setName("Kaido");
    }
*/

    return(
        
        <div className="Home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                    <span>{blog.auther}</span>
                </div>
            ))}
            
        </div>
    );
}

export default Home;