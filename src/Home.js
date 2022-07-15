import { useState } from "react";
const Home = () => {
    // let name = "Mario";
    const [name,setName] = useState("Mario");
    const [age,setAge] = useState(23);
    
    const handleClick = () => {
        setName("Kaido");
        setAge(25);
    }


    return(
        
        <div className="Home">
            <p>{name} is {age} years old</p>
            <h1>Welcome To Home Page Content</h1>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default Home;