import { Link, useParams } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import axios from "axios";
import { useEffect, useState } from "react";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  const [formattedDate, setFormattedDate] = useState("");
  const fetchBlog = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/v1/blog/${id}`);

      const fetchedBlog = res.data.blog;
      setBlog(fetchedBlog);
      // Set formatted date after fetching and setting blog data
      const date = new Date(fetchedBlog.createdAt);
      setFormattedDate(date.toLocaleDateString());
    } catch (error) {
      console.error("There was an error fetching blog!", error);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <section className="py-5">
      <div className="flex items-center mb-8">
        <Link to="/">
          <MdKeyboardArrowLeft className="text-3xl" />
        </Link>
        <h1 className="font-medium text-lg mx-auto text-white bg-orange-400 px-4 py-2 rounded">
          {blog.category}
        </h1>
      </div>
      <div className="flex items-start gap-12">
        <img
          src={`http://localhost:5000/uploads/${blog.image}`}
          alt="test-image"
          className="hidden md:block min-w-[50%] h-[500px] rounded-lg object-cover"
        />
        <div className="flex flex-col justify-center gap-y-3">
          <h1 className="text-2xl font-bold">{blog.title}</h1>
          <p className="text-slate-500 text-md italic">{blog.description}</p>
          <div className="flex justify-between items-center">
            <h1 className="text-slate-500 text-md">{blog.author}</h1>
            <p className="text-slate-500 text-md">{formattedDate}</p>
          </div>
          <img
            src={`http://localhost:5000/uploads/${blog.image}`}
            alt="test-image"
            className="rounded-lg object-cover w-full h-[350px] mt-2 md:hidden"
          />
          <p className="text-justify text-slate-600 mt-2">{blog.content}</p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
