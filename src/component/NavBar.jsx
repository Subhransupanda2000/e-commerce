import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; 

export default function NavBar() {
  let navigate = useNavigate();
  let loginbtn = () => {
    navigate("/login");
  };
  let signupbtn = () => {
    navigate("/signup");
  };
  return (
    <div id="div1">
      <nav className="container">
        <ul>
          <li id="li1">Paris </li>
          <li id="li4">
            <input
              type="text"
              placeholder="  Search for all images here"
              id="inputbox"
            />
          </li>
          <li id="li2">
            <button id="loginbtn" onClick={signupbtn}>
              signup
            </button>
          </li>
          <li id="li3">
            <button id="loginbtn" onClick={loginbtn}>
              Login
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
