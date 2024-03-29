import React from "react";
import classes from "./styles.module.css";

const AddNewBlog = () => {
  return (
    <div className={classes.wrapper}>
      <h1>Add a blog</h1>
      <div className={classes.formWrapper}>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Enter Blog Title"
        />
        <textarea
          id="description"
          name="description"
          placeholder="Enter Blog Description"
        />
        <button>Add new Blog</button>
      </div>
    </div>
  );
};

export default AddNewBlog;
