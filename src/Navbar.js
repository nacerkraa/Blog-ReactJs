import { Link } from "react-router-dom";
const Navbar = () => {
    
    return(
        <nav className="navbar">
            <h1>Brand</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                <Link to="/" style={{
                    color: "white",
                    backgroundColor:'#f1356d',
                    borderRadius:'5px'
                }}> Register</Link>
            </div>
        </nav>
    );
}

export default Navbar;