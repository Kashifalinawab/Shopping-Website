import React from "react";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaYahoo } from "react-icons/fa";
import { AiFillInstagram, AiOutlineGoogle } from "react-icons/ai";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-Class">
      <BsFacebook />
      <AiFillInstagram />
      <BsTwitter />
      <FaYahoo />
      <AiOutlineGoogle />
    </div>
  );
};

export default Footer;
