import React, { useState } from "react";

export default function Upload() {
    return (
        <div className="Upload">
            
        </div>
    )
}

function ClothingUpload() {
    
    const [file, setFile] = useState()

    function handleChange(event) {
        setFile(event.target.files[0])
    }

    return (
        <div className="ClothingUpload">
            <form>
                <h1>Clothing File Upload</h1>
                <input type="file" />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
}

