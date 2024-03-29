import React from "react";
import classes from "./styles.module.css"

const Header = () => {
  return <div className={classes.header}>
    <h3>Modern Blog App</h3>
    <ul>
        <li>Home</li>
        <li>Add Blog</li>
    </ul>
  </div>;
};

export default Header;
