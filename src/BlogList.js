const BlogList = (props) => {
    const blogs = props.blogs;
    console.log(props,blogs);
    return ( 
        <div className="blog-list">
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
 
export default BlogList;