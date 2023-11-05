import { useState } from "react";
import './upload.css'
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'

function Upload() {
    const [image, setImage] = useState(null)
    const [fileName, setFileName] = useState ("No selected file")
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    }
    return (
    <main>
        <h1 className='heading'> Upload Your Clothing!</h1>
        <section className='grid-container-element'>
            <section className='grid-child-element-1'>
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
            <section className='grid-container-element-2'>
                <form>
                    <label>
                        <input 
                        type="number"
                        name="value"
                        placeholder="Estimated Worth:"
                        value={inputs.value || ""}
                        />
                        </label>
                    </form>
                    <form>
                    <label>
                        <input
                        type="text"
                        name="description"
                        placeholder="Item Description:"
                        value={inputs.description || ""}
                        />
                    </label>
                    </form>
                    <form>
                    <input type="Submit" />
                </form>
             </section>
        </section>
    </main>
    )
}

export default Upload


