import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../img/logo.png';
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

function Sidebar() {
    const { currentUser, logout } = useContext(AuthContext);
  return (
    <div>
    
        <div className="logo">
          <Link to="/">
          <img src= {Logo} alt="" />
          </Link>
        </div>
        
      
      <div className="linkler">
          <Link className='link' to="/cats"> 
          <h6>Kategori</h6> 
          </Link>
          <Link className='link' to="/colections"> 
          <h6>Koleksiyon</h6> 
          </Link>
          <Link className='link' to="/products"> 
          <h6>Ürünler</h6> 
          </Link>
          <Link className='link' to="/users"> 
          <h6>Kulanıcılar</h6> 
          </Link>


          <h6>{currentUser?.username}</h6>

          {currentUser ?  <h6 onClick={logout}>Logout</h6> : <Link className='link' to="/login">Login</Link>}
        </div>
      
    </div>
  );
}

export default Sidebar;
