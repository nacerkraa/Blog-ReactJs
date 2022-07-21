const Create = () => {
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <from>
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
            <button>Add Blog</button>
            </from>
        </div>
     );
}
 
export default Create;