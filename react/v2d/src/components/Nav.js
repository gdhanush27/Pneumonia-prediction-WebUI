import React, { useEffect, useState } from "react";
import { Link  } from 'react-router-dom';
import "./NavBar.css";
import {auth,provider} from "./googleSignin/config.js";
import {signInWithPopup} from "firebase/auth";

const NavBar = () => {
  const [profileImage,setprofileImage] = useState("https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png")
  const [value,setValue] = useState('')
    const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            setprofileImage(data.user.photoURL)
            localStorage.setItem("email",data.user.email)
            localStorage.setItem("photoURL",data.user.photoURL)
            localStorage.setItem("name",data.user.displayName)
        })
    }
    const logout =()=>{
      localStorage.clear()
      window.location.href="/"
      localStorage.setItem("photoURL","https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png")
  }
    useEffect(()=>{
        setValue(localStorage.getItem('email'))
        setprofileImage(localStorage.getItem('photoURL'))
    },[])

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/ImageUploader">ImageUploader</Link>
        </li>
        <li>
          <Link onClick={value?logout:handleClick}>{value?"Log out":"Log in"}</Link>
        </li>
      </ul>
      <div className="profile-image">
        <img src={profileImage} alt=" " />
      </div>
    </nav>
  );
};

export default NavBar;
