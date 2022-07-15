import { useState } from "react";
const Home = () => {
    let name = "Mario";
    const handleClick = () => {
        name = "Yushi";
        console.log(name);
    }


    return(
        
        <div className="Home">
            <p>{name}</p>
            <h1>Welcome To Home Page Content</h1>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default Home;