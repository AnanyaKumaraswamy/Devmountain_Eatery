import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.css";

const Header = () => {
  return (
    <header>
      <h2 className="name">Devmountain Eatery</h2>
      <nav className="nav">
        <Link to="">
          <button className="nav_btn">Home</button>
        </Link>
        <Link to="/newRecipe">
          <button className="nav_btn">Add Recipe</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
