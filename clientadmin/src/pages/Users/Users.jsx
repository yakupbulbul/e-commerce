import React, { useEffect, useState } from 'react'
import axios from "axios";
import Edit from "../../img/edit.png";
import Delete from "../../img/delete.png";
import { Link } from "react-router-dom";





const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(`/users`);
          setUsers(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }, []);


    const handleDelete = async (userId) => {
        console.log(userId);
      
        try {
          await axios.delete(`/users/${userId}`);
          const updatedUsers = users.filter((cat) => cat.id !== userId);
          setUsers(updatedUsers);
        } catch (err) {
          console.log(err);
        }
    };


  return (
    <div className='user'>
      <div className="catlist">
            <div>
            <div className="heading-container">
            <h1>Kulanıcı Listesi</h1>
            <Link to={`/adduser`} state={users}>
               <h1>Kulanıcı Ekle </h1>
            </Link>
            </div>
            <ul>
              {users.map((user) => (
                <li key={user.id}>
                  <div>{user.username}</div>
                  <div>{user.email}</div>
                  {/* <div>{user.cat_id}</div> */}
                  <img src={`../upload/${user.img}`} alt="" />
                  <div className="edit">
                  <Link to={`/update/user/${user.id}`} state={user}>
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

export default Users