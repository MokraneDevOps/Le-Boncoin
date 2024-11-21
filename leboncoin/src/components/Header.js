import React from "react";
import "./Header.css";
import Userpic from "../assets/userpic.svg";
import { Link } from "react-router-dom";
import AddBoxIcon from "@mui/icons-material/AddBox";

const Header = ({ user }) => {
  return (
    <div className="header">
      <Link to="/">
        <img src="https://www.leboncoin.fr/logos/leboncoin.svg" alt="logo" />
      </Link>

      <div>
        <Link to="/publish" className="orangeBox">
          <AddBoxIcon />
          <span>Deposer une annonce</span>
        </Link>
      </div>

      <div onClick={() => {}}>
        <img className="userPic" src={Userpic} alt="user" />
        <div>{user}</div>
        <div>se connecter</div>
      </div>
    </div>
  );
};
export default Header;