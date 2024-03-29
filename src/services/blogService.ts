import { FormDataType } from "../context";

class BlogService {
  /**
   * Permet d'enregistrer un nouveau blog en base de donnée
   * @param newBlog Le nouveau blog à enregistré
   * @returns 
   */
  async saveNewBlog(newBlog: FormDataType) {
    return await fetch("http://localhost:5000/api/blogs/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBlog),
    }).catch(err => console.error(err));
  }
}
export const blogService = Object.freeze(new BlogService());