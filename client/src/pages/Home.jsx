import { Link } from "react-router-dom";
import HeroImage from "../assets/hero.png";
import BlogCard from "../components/BlogCard";
import CategoriesCard from "../components/CategoriesCard";
import { IoSearchOutline } from "react-icons/io5";
import InputField from "../components/InputField";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const fetchAllBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/v1/blog");
      setBlogs(res.data.blogs);
    } catch (error) {
      console.error("There was an error fetching blogs!", error);
    }
  };

  useEffect(() => {
    fetchAllBlogs();
  }, []);
  return (
    <div>
      <header className="fixed left-0 top-0 right-0 px-10 md:px-14">
        <nav className="bg-white flex justify-between items-center py-5 border-b">
          <h1 className="text-lg font-medium">Blog Application</h1>
          <div className="px-4 py-2 flex justify-between items-center gap-3 border">
            <IoSearchOutline className="text-gray-400 text-2xl" />
            <InputField
              type="text"
              placeholder="search blog"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
        </nav>
      </header>

      {/* HERO SECTION */}

      <section
        className="mt-[120px] py-5 bg-cover bg-center min-h-[505px] flex flex-col justify-center items-center gap-y-4"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <h1 className="text-white text-3xl text-center">
          Dive into Our Collection of Inspiring Blogs
        </h1>
        <p className="text-white text-center px-5">
          Explore new ideas and trends through our wide range of blog articles.
        </p>
        <Link
          to={"/create-post"}
          className="px-4 py-2 text-white bg-orange-400"
        >
          create post
        </Link>
      </section>
      <div className="py-5">
        <h1 className="text-lg font-medium mb-5">Blog Categories</h1>
        <div className="pb-5 flex justify-between items-center gap-5 overflow-x-scroll md:overflow-hidden md:p-0">
          <CategoriesCard title="Technology" />
          <CategoriesCard title="Politics" />
          <CategoriesCard title="Travel" />
          <CategoriesCard title="Food" />
          <CategoriesCard title="Education" />
        </div>
      </div>
      <section className="mb-5">
        <h1 className="text-lg font-medium mb-5">All Blogs</h1>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {blogs
            .filter((item) => {
              const searchTerm = search.trim().toLowerCase();
              return searchTerm === ""
                ? item
                : item.title.toLowerCase().includes(searchTerm);
            })
            .map((blog) => (
              <BlogCard
                key={blog._id}
                _id={blog._id}
                img={`http://localhost:5000/uploads/${blog.image}`}
                category={blog.category}
                title={blog.title}
                description={blog.description}
                createdAt={blog.createdAt}
              />
            ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
