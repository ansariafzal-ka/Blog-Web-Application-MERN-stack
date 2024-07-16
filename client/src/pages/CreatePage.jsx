import { useState } from "react";
import InputField from "../components/InputField";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const navigate = useNavigate();
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("Technology");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("author", author);
    formData.append("category", category);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("content", content);
    formData.append("image", image);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/blog",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("/");
    } catch (error) {
      console.error("There was an error creating the post!", error);
    }
  };

  return (
    <section className="py-5 md:w-[800px]">
      <h1 className="mb-3 text-lg font-medium">Create new Blog</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-start gap-y-3"
      >
        <label>Author</label>
        <InputField
          type="text"
          className="border px-4 py-2"
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        <label>Category</label>
        <select
          className="border p-2 outline-none cursor-pointer"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          required
        >
          <option value="Technology">Technology</option>
          <option value="Politics">Politics</option>
          <option value="Travel">Travel</option>
          <option value="Food">Food</option>
          <option value="Education">Education</option>
        </select>
        <label>Title</label>
        <InputField
          type="text"
          className="border px-4 py-2"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>Description</label>
        <textarea
          className="border outline-none px-4 py-2"
          rows={5}
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          required
        ></textarea>
        <label>Blog Content</label>
        <textarea
          className="border outline-none px-4 py-2"
          rows={5}
          maxLength={1130}
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          required
        ></textarea>
        <label>Image</label>
        <InputField
          type="file"
          className="border p-2 cursor-pointer"
          id="image"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-orange-400 mt-3"
        >
          create
        </button>
      </form>
    </section>
  );
};

export default CreatePage;
