const Create = () => {
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <label>Blog title:</label>
            <input 
                type="text"
                required
            />

            <label>Blog body:</label>
            <textarea 
                required
            ></textarea>

            <label>Auther:</label>
            <select>
                <option value="mario">mario</option>
                <option value="yoshi">yoshi</option>
            </select>
        </div>
     );
}
 
export default Create;