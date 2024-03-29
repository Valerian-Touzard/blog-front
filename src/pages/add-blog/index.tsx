import React from "react";
import classes from "./styles.module.css";
import { useGlobalState } from "../../context";

const AddNewBlog = () => {
  const { formData, setFormData } = useGlobalState();

  return (
    <div className={classes.wrapper}>
      <h1>Add a blog</h1>
      <div className={classes.formWrapper}>
        <input
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          id="title"
          name="title"
          type="text"
          value={formData.title}
          placeholder="Enter Blog Title"
        />
        <textarea
          onChange={(e) =>
            setFormData({ ...formData, descrition: e.target.value })
          }
          id="description"
          name="description"
          value={formData.descrition}
          placeholder="Enter Blog Description"
        />
        <button>Add new Blog</button>
      </div>
    </div>
  );
};

export default AddNewBlog;
