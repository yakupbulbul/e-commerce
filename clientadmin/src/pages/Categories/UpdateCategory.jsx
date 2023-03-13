import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateCategory = () => {
  const state = useLocation().state;
  const [title, setTitle] = useState(state?.desc || "");
  const [file, setFile] = useState(null);

  const navigate = useNavigate()

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      console.log(res.data);
      return res.data;
      
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      await axios.put(`/cats/${state.id}`, {
              title,
              img: file ? imgUrl : "",
          });
         navigate("/cats")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="addcat">
      <div className="content">
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="menu">
        <div className="item">
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name=""
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
  
      </div>
    </div>
  );
};

export default UpdateCategory;