import React, { useEffect, useState } from 'react'
import axios from "axios";
import Edit from "../../img/edit.png";
import Delete from "../../img/delete.png";
import { Link } from "react-router-dom";





const Category = () => {
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


    const handleDelete = async (catId) => {
        console.log(catId);
      
        try {
          await axios.delete(`/cats/${catId}`);
          const updatedCats = cats.filter((cat) => cat.id !== catId);
          setCats(updatedCats);
        } catch (err) {
          console.log(err);
        }
    };


  return (
    <div className='category'>
      <div className="catlist">
            <div>
            <div className="heading-container">
            <h1>Kategori Listesi</h1>
            <Link to={`/addcat`} state={cats}>
               <h1>KATEGORI EKLE </h1>
            </Link>
            </div>
            

            <ul>
              {cats.map((user) => (
                <li key={user.id}>
                  <div>{user.id}</div>
                  <div>{user.title}</div>
                  {/* <div>{user.img}</div> */}
                  <img src={`../upload/${user.img}`} alt="" />
                  <div className="edit">
                  <Link to={`/update/cat/${user.id}`} state={user}>
                    {/* <Link to={`/cat`} state={user}> */}
                     <img src={Edit} alt="" />
                    </Link>
                     <img onClick={() => handleDelete(user.id)} src={Delete} alt="" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Category