import React, { useEffect, useState } from "react";
import { Link  } from 'react-router-dom';
import "./NavBar.css";
import {auth,provider} from "./googleSignin/config.js";
import {signInWithPopup} from "firebase/auth";

const NavBar = () => {
  const [value,setValue] = useState('')
    const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            console.log(value )
            localStorage.setItem("email",data.user.email)
            localStorage.setItem("name",data.user.displayName)
        })
    }
    const logout =()=>{
      localStorage.clear()
      window.location.href="/"
  }
    useEffect(()=>{
        setValue(localStorage.getItem('email'))
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
    </nav>
  );
};

export default NavBar;
