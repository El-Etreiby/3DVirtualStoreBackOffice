import React from 'react'

import NavBar from './NavBar';
import {Link, useParams} from 'react-router-dom';
import homeImage from './images/homeImage.jpeg';

function UserPage() {
    const username = useParams();
    console.log(username);
    const Logout = () =>{
        console.log("logout");
    
        setUser({name: "", email:""});
      }
  return (   
    
  <div className="welcome">
    <NavBar/>
    <img
              src={homeImage}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt="brand"
            />
    {/* <h2>Welcome, <span>{username.username}</span></h2>
    <Link to = "/" style={{ textDecoration: 'none'}} ><button onClick={Logout}> Logout </button></Link> */}
    </div>
  )
}

export default UserPage;