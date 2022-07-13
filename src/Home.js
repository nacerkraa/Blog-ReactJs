import { useState } from "react";
const Home = () => {
    const name = "Mario";
    const handleClick = () => {
        console.log('Hello Ningas');
    }

    const handleClickAgain = (name,e) => {
        console.log('Hello ' + name , e.target);
    }

    return(
        
        <div className="Home">
            <p>{name}</p>
            <h1>Welcome To Home Page Content</h1>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('nacer',e) }>Click me again</button>
        </div>
    );
}

export default Home;