const Navbar = () => {
    
    return(
        <nav className="navbar">
            <h1>Brand</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/create">Create</a>
                <a href="/">Login</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor:'#f1356d',
                    borderRadius:'5px'
                }}> Register</a>
            </div>
        </nav>
    );
}

export default Navbar;