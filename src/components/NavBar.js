import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavCSS.css";
import { TbBrandShopee } from "react-icons/tb";

const NavBar = () => {
  const navigator = useNavigate();

  return (
    <div className="NavSection">
      <div className="logo-name">
        <h1 id="shope-heading" onClick={() => navigator("/")}>
          {" "}
          <span id="shope-logo">
            <TbBrandShopee />
          </span>
          <span>Online-Shopping-Mart </span>
        </h1>
      </div>
      <div id="Nav-content">
        <NavLink
          to="/"
          className={(isActive, isPending) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/cart"
          className={(isActive, isPending) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Cart
        </NavLink>
        <NavLink
          to="/login"
          className={(isActive, isPending) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
