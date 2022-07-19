const Navbar = () => {
    
    return(
        <nav className="navbar">
            <h1>Brand</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
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