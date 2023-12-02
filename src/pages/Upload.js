import React, { useRef, useState } from "react";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import "./upload.css";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

function Upload() {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const fileUploadRef = useRef(null);
  const [inputs, setInputs] = useState({});
  const fileRef = React.createRef();

  const [formData, setFormData] = useState({
    estimated_worth: "",
    clothing_image: "",
    item_description: "",
    type: "",
    color: "",
    size: "",
    wear: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    setUploading(true);

    const file = imageFile;
    if (file) {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
    }

    const { data, error } = await supabase.storage
      .from("listings")
      .upload(`${fileName}`, image, {
        cacheControl: "3600",
        upsert: false,
      });

    const { data: imageData } = supabase.storage
      .from("listings")
      .getPublicUrl(`${fileName}`);

    formData.image_url = imageUrl.publicUrl;

    formData.clothing_image = imageData.publicUrl;

    const { error: inserterror } = await supabase.from("listings").insert({
      clothing_image: imageData,
    });
    console.log(inserterror);
  };

  const handleImageUpload = () => {
    console.log("clicked");
    fileUploadRef.current.click();
  };

  const onChangeImageUpload = (e) => {
    setImageUrl(URL.createObjectURL(e.target.files[0]));
    setImageFile(e.target.files[0]);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main>
      <h1 className="heading"> Upload Your Clothing! 𖠋</h1>
      <div className="listing-form-container">
        <form onSubmit={handleSubmit} className="listing-form">
          <div className="image-section" onClick={handleImageUpload}>
            <div>
              <input
                type="file"
                ref={fileUploadRef}
                hidden
                onChange={onChangeImageUpload}
                style={{ display: "none" }}
              />
            </div>
            {imageFile ? (
              <img
                width={300}
                height={300}
                src={imageUrl}
                alt="Preview"
                className="image-preview"
              />
            ) : (
              <div className="upload-image">Click here to upload image </div>
            )}
          </div>
          <div className="form-content">
            <div className="form-fields">
              <h3> Tell Us More!</h3>

              <div className="form-group">
                <label>Estimated Worth:</label>
                <input
                  type="number"
                  name="worth"
                  value={formData.estimated_worth}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Description: </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Category of Clothing: </label>
                <select
                  name="category"
                  value={formData.type}
                  onChange={handleChange}
                >
                  <option value="">Select a category</option>
                  <option value="MensWear">Men's Wear</option>
                  <option value="WomensWear">Women's Wear</option>
                  <option value="ChildrensWear">Children's Wear</option>
                  <option value="Accessories">Accessories</option>
                </select>
              </div>

              <div className="form-group">
                <label>Color: </label>
                <textarea
                  name="color"
                  type="text"
                  value={formData.color}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Size: </label>
                <select
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                >
                  <option value="">Select Size</option>
                  <option value="XS">Extra Small</option>
                  <option value="S">Small</option>
                  <option value="M">Medium</option>
                  <option value="L">Large</option>
                  <option value="XL">Extra Large</option>
                  <option value="XXL">Extra Extra Large</option>
                </select>
              </div>

              <div className="form-group">
                <label>Wear: </label>
                <select
                  name="wear"
                  value={formData.color}
                  onChange={handleChange}
                >
                  <option value="">Select Condition</option>
                  <option value="Brand New">Brand New</option>
                  <option value="Lightly Worn">Lightly Worn</option>
                  <option value="Moderately Worn">Moderately Worn</option>
                  <option value="Distressed">Distressed</option>
                </select>
              </div>

              <div className="form-group">
                <button
                  type="submit"
                  className="listing-form-button"
                  disabled={uploading}
                >
                  {uploading ? "Uploading..." : "Submit Listing"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Upload;
