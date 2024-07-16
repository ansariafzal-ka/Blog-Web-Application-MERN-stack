import { MdDateRange } from "react-icons/md";
import { Link } from "react-router-dom";

const BlogCard = ({ img, category, title, description, createdAt, _id }) => {
  const formattedDate = new Date(createdAt).toLocaleDateString();
  return (
    <Link to={`/blog/${_id}`} className="border bg-white rounded-lg">
      <img
        src={img}
        alt="test-image"
        className="rounded-t-lg object-cover w-full max-h-[200px]"
      />
      <div className="p-5 flex flex-col gap-y-2">
        <h1 className="font-medium text-blue-600">{category}</h1>
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-slate-500 text-sm">{description}</p>
      </div>
      <div className="border-t p-5 flex justify-start items-center gap-1">
        <p className="flex justify-start items-center text-slate-600 gap-1">
          <MdDateRange />
        </p>
        <p className="text-slate-600 text-sm">{formattedDate}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
