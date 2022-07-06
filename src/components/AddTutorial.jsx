import { useState } from "react"


const AddTutorial = ({addTutorial}) => {
const [title, setTitle] = useState("");
const [desc, setDesc] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    addTutorial({title:title, description:desc});
    setDesc('');
    setTitle('');
}


    return (
        <div className="container text-center mt-5">
            <h1 className="display-6 text-info">ADD YOUR TUTORIAL</h1>
            <form onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label htmlFor="title" 
                    className="htmlForm-label fs-5 text-warning m-2">Title</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="title" 
                    placeholder="Enter Your Title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    />
                   
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" 
                    className="form-label fs-5 text-warning">Description</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="desc"
                    placeholder="Enter Your Description..."
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    required
                    />
                </div>
                
                <button type="submit" 
                className="btn btn-primary w-100 rounded-pill">Submit</button>
            </form>

        </div>
    )
}

export default AddTutorial