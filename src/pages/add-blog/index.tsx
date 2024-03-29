import React from "react";
import classes from "./styles.module.css";
import { useGlobalState } from "../../context";
import { blogService } from "../../services/blogService";

const AddNewBlog = () => {
  const { formData, setFormData } = useGlobalState();

  const handleSaveBlogToDatabase = async() =>{
    blogService.saveNewBlog(formData)
  }

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
            setFormData({ ...formData, description: e.target.value })
          }
          id="description"
          name="description"
          value={formData.description}
          placeholder="Enter Blog Description"
        />
        <button onClick={handleSaveBlogToDatabase}>Add new Blog</button>
      </div>
    </div>
  );
};

export default AddNewBlog;
