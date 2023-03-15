import React, { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const AddProduct = () => {
  const state = useLocation().state;


  const [title, setTitle] = useState(state?.desc || "");
  const [varanty, setVaranty] = useState(state?.desc || "");
  const [colorPallette, setColorPallette] = useState(state?.desc || "");
  const [price, setPrice] = useState(state?.desc || "");
  const [oldPrice, setoldPrice] = useState(state?.desc || "");
  
  // const [productscol, setProductscol] = useState(state?.desc || "");

  const [ipektype, setIpektype] = useState(state?.desc || "");
  const [havHeight, setHavHeight] = useState(state?.desc || "");
  const [amount, setAmount] = useState(state?.desc || "");




//Image
  const [file, setFile] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);




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

  const upload2 = async () => {
    try {
      const formData = new FormData();
      formData.append("file2", file2);
      const res = await axios.post("/upload", formData);
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const upload3 = async () => {
    try {
      const formData = new FormData();
      formData.append("file3", file3);
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
    const imgUrl2 = await upload2();
    const imgUrl3 = await upload3();

    try {
      await axios.post(`/products`, {
             title,
             col_id,
             varanty, 
             colorPallette,
             img: file ? imgUrl : "",
             price,
             oldPrice,
             isNew: isNew.toString(),
             isDiscount: isDiscount.toString(),
             isFreecargo: isFreecargo.toString(),
             ipektype,
             havHeight,
             amount,  
             cat_id,
             img2: file2 ? imgUrl2 : "",
             img3: file3 ? imgUrl3 : "",
          });
         navigate("/products")
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

  const [colections, setColection] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/colections`);
        setColection(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);





  const [isNew, setIsnew] = useState(false);
  const handleRadioChange1 = (event) => {
    setIsnew(event.target.value === 'true');
  };

  const [isDiscount, setIsDiscount] = useState(false);
  const handleRadioChange2 = (event) => {
    setIsDiscount(event.target.value === 'true');
  };


  const [isFreecargo, setIsFreecargo] = useState(false);
  const handleRadioChange3 = (event) => {
    setIsFreecargo(event.target.value === 'true');
  };





  const [cat_id, setCat_id] = useState("");

  const handleCatSelection = (e) => {
    console.log(e.target.value);
    setCat_id(e.target.value);
  };

  const [col_id, setCol_id] = useState("");

  const handleColSelection = (e) => {
    console.log(e.target.value);
    setCol_id(e.target.value);
  };




  // <p>Selected value: {isNew.toString()}</p>
  // <p>Selected value: {isDiscount.toString()}</p>
  // <p>Selected value: {isFreecargo.toString()}</p>



  return (
    <div className="addproduct">
       <h1>Ürün Ekle</h1>
      <div className="content">
        <input
          type="text"
          placeholder="Ürün Adı"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <h4>Markası</h4>
      <div>
      {cats.map((object) => (
        <label key={object.id}>
          <input
            type="radio"
            value={parseInt(object.id)}
            checked={parseInt(cat_id) === object.id}
            onChange={handleCatSelection}
          />
          {object.title}
        </label>
      ))}
    </div>
    <h4>Koleksiyonu</h4>
      <div>
      {colections.map((object) => (
        <label key={object.id}>
          <input
            type="radio"
            value={parseInt(object.id)}
            checked={parseInt(col_id) === object.id}
            onChange={handleColSelection}
          />
          {object.title}
        </label>
      ))}
    </div>
      <div className="content">
        <input
          type="number"
          placeholder="Garanti Süresi"
          onChange={(e) => setVaranty(e.target.value)}
        />
      </div>

      <div className="content">
        <input
          type="text"
          placeholder="Renk Paleti"
          onChange={(e) => setColorPallette(e.target.value)}
        />
      </div>
      <div className="content">
        <input
          type="number"
          placeholder="Fiyatı"
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="content">
        <input
          type="number"
          placeholder="Eski Fiyatı"
          onChange={(e) => setoldPrice(e.target.value)}
        />
      </div>
      <div className="content">
      <label>
        <input type="checkbox" name="myRadio" value="true" checked={isNew} onChange={handleRadioChange1} />
        Yeni Etiketi
      </label>
      <label>
        <input type="checkbox" name="myRadio" value="false" checked={!isNew} onChange={handleRadioChange1} />
        Etiket Yok
      </label>
  

      </div>
      <div className="content">
      <label>
        <input type="checkbox" name="myRadio" value="true" checked={isDiscount} onChange={handleRadioChange2} />
        İndirimde
      </label>
      <label>
        <input type="checkbox" name="myRadio" value="false" checked={!isDiscount} onChange={handleRadioChange2} />
        İndirim Yok
      </label>


      </div>
      <div className="content">
      <label>
        <input type="checkbox" name="myRadio" value="true" checked={isFreecargo} onChange={handleRadioChange3} />
        Ücretsiz Kargo
      </label>
      <label>
        <input type="checkbox" name="myRadio" value="false" checked={!isFreecargo} onChange={handleRadioChange3} />
        Ücretli Kargo
      </label>
      </div>










      <div className="content">
        <input
          type="text"
          placeholder="İpek Türü"
          onChange={(e) => setIpektype(e.target.value)}
        />
      </div>
      <div className="content">
        <input
          type="text"
          placeholder="Hav Height"
          onChange={(e) => setHavHeight(e.target.value)}
        />
      </div>
      <div className="content">
        <input
          type="number"
          placeholder="Stok Miktarı"
          onChange={(e) => setAmount(e.target.value)}
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

          <h3>Resim Ekle</h3>
          </label>

          <input
            style={{ display: "none" }}
            type="file2"
            id="file2"
            name=""
            onChange={(e) => setFile2(e.target.files[1])}
          />
          <label className="file" htmlFor="file">
           <h3>Resim Ekle</h3>
          </label>
          <input
            style={{ display: "none" }}
            type="file3"
            id="file3"
            name=""
            onChange={(e) => setFile3(e.target.files[2])}
          />
          <label className="file" htmlFor="file">
           <h3>Resim Ekle</h3>
          </label>








          <div className="buttons">
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
  
      </div>
    </div>
  );
};

export default AddProduct;