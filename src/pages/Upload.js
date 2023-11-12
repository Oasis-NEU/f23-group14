import { useState } from "react";
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'
import Dropdown from 'react-bootstrap/Dropdown';
import './upload.css'


function Upload() {
    const [image, setImage] = useState(null)
    const [fileName, setFileName] = useState ("No selected file")
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = async (event) => {
        const { data, error } = await supabase
        .storage
        .from('listing')
        .upload('avatar1.png', image, {
            cacheControl: '3600',
            upsert: false
  })
    }
    return (
    <main>
        <h1 className='heading'> Upload Your Clothing! 𖠋</h1>
        <div className='container'>
            <section className='child-element-1'>
                <section className='upload-box'>
                    <form action=""
                    onClick={() => document.querySelector(".input-field").click()}>
                        <input type="file" accept='image/*' className='input-field' hidden
                        onChange={({target: {files}}) => {
                            files[0] && setFileName(files[0].name)
                            if(files){
                                setImage(URL.createObjectURL(files[0]))
                            }
                        }} />
                        {image ?
                        <img src={image} width={300} height={200} alt={fileName}/>
                        :
                        <>
                        <MdCloudUpload color='pink' size={60} />
                        <p>Browse Files to Upload</p>
                        </>
                    }

                    </form>
                </section>
                <section className='uploaded-row'>
                <AiFillFileImage color="pink"/>
                <span>
                    {fileName}
                    <MdDelete 
                    onClick={() => {
                        setFileName("No selected File")
                        setImage(null)
                    }}/>
                </span>
                </section>
            </section>
            <section className='child-element-2'>

                <h3> Tell Us More!</h3>

                <form>
                    <label>
                        <input 
                        type="number"
                        name="value"
                        placeholder="Estimated Worth:" 
                        //value={inputs.value || ""}
                        />
                        </label>
                    </form>
                    <form>
                    <label>
                        <textarea 
                            name="description" 
                            type="text"
                            placeholder="Item Description:" 
                            rows={4} cols={22} />
                    </label>
                    </form>
                    <form>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Color 
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Red</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Orange</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Yellow</Dropdown.Item>
                                <Dropdown.Item href="#/action-4">Green</Dropdown.Item>
                                <Dropdown.Item href="#/action-5">Blue</Dropdown.Item>
                                <Dropdown.Item href="#/action-6">Purple</Dropdown.Item>
                                <Dropdown.Item href="#/action-7">Black</Dropdown.Item>
                                <Dropdown.Item href="#/action-8">White</Dropdown.Item>
                                <Dropdown.Item href="#/action-9">Gray</Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>
                    </form>
                    <form>
                    <button onClick={handleSubmit}>Upload Your Listing</button>
                </form>
             </section>
        </div>
    </main>
    )
}

export default Upload

