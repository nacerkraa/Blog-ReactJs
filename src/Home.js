import { useState } from "react";
const Home = () => {
    // let name = "Mario";
    const [name,setName] = useState("Mario");
    
    const handleClick = () => {
        setName("Kaido");
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