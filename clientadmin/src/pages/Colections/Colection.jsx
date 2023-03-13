import React, { useEffect, useState } from 'react'
import axios from "axios";
import Edit from "../../img/edit.png";
import Delete from "../../img/delete.png";
import { Link } from "react-router-dom";





const Colection = () => {
    const [colections, setColections] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(`/colections`);
          setColections(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }, []);


    const handleDelete = async (colectionId) => {
        console.log(colectionId);
      
        try {
          await axios.delete(`/colections/${colectionId}`);
          const updatedColections = colections.filter((cat) => cat.id !== colectionId);
          setColections(updatedColections);
        } catch (err) {
          console.log(err);
        }
    };


  return (
    <div className='colection'>
      <div className="catlist">
            <div>
            <div className="heading-container">
            <h1>Koleksiyon Listesi</h1>
            <Link to={`/addcolection`} state={colections}>
               <h1>Koleksiyon EKLE </h1>
            </Link>
            </div>
            <ul>
              {colections.map((colection) => (
                <li key={colection.id}>
                  <div>{colection.id}</div>
                  <div>{colection.title}</div>
                  {/* <div>{colection.cat_id}</div> */}
                  <img src={`../upload/${colection.img}`} alt="" />
                  <div className="edit">
                  <Link to={`/update/colection/${colection.id}`} state={colection}>
                     <img src={Edit} alt="" />
                    </Link>
                     <img onClick={() => handleDelete(colection.id)} src={Delete} alt="" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Colection