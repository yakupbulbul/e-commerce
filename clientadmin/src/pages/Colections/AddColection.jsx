import React, { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const AddCategory = () => {
  const state = useLocation().state;
  const [title, setTitle] = useState(state?.desc || "");
  const [file, setFile] = useState(null);
  const [selectedObjectId, setSelectedObjectId] = useState("");






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
      await axios.post(`/colections`, {
             title: title,
             img: file ? imgUrl : "",
             id: selectedObjectId,

          });
         navigate("/colections")
    } catch (err) {
      console.log(err);
    }
  };


  const [cats, setCats] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/cats`);
        setCats(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);



  const handleObjectSelection = (e) => {
    console.log(e.target.value);
    setSelectedObjectId(e.target.value);
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
    <div>
      {cats.map((object) => (
        <label key={object.id}>
          <input
            type="radio"
            value={parseInt(object.id)}
            checked={parseInt(selectedObjectId) === object.id}
            onChange={handleObjectSelection}
          />
          {object.title}
        </label>
      ))}
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

export default AddCategory;