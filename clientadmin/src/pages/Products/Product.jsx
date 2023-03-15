import React, { useEffect, useState } from 'react'
import axios from "axios";
import Edit from "../../img/edit.png";
import Delete from "../../img/delete.png";
import { Link } from "react-router-dom";





const Product = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(`/products`);
          setProducts(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }, []);


    const handleDelete = async (productId) => {
        console.log(productId);
      
        try {
          await axios.delete(`/products/${productId}`);
          const updatedProducts = products.filter((cat) => cat.id !== productId);
          setProducts(updatedProducts);
        } catch (err) {
          console.log(err);
        }
    };


  return (
    <div className='product'>
      <div className="catlist">
            <div>
            <div className="heading-container">
            <h1>Ürün Listesi</h1>
            <Link to={`/addproduct`} state={products}>
               <h1>Ürün Ekle </h1>
            </Link>
            </div>
            <ul>
              {products.map((product) => (
                <li key={product.id}>
                  <div>{product.id}</div>
                  <div>{product.title}</div>
                  <div>{product.col_id}</div>
                  <div>{product.cat_id}</div>
                  <div>{product.varanty}</div>
                  <div>{product.colorPallette}</div>
                  <div>{product.price}</div>
                  <div>{product.oldPrice}</div>
                  <div>{product.isNew}</div>
                  <div>{product.isDiscount}</div>
                  <div>{product.isFreecargo}</div>
                  <div>{product.productscol}</div>
                  <div>{product.ipektype}</div>
                  <div>{product.havHeight}</div>
                  <img src={`../upload/${product.img}`} alt="" />
                  <img src={`../upload/${product.img2}`} alt="" />
                  <img src={`../upload/${product.img3}`} alt="" />
                  <div className="edit">
                  <Link to={`/update/product/${product.id}`} state={product}>
                     <img src={Edit} alt="" />
                    </Link>
                     <img onClick={() => handleDelete(product.id)} src={Delete} alt="" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Product