import React from "react";
import { Link } from "react-router-dom";

const Blogs = ({ blogs }) => {
  if (!blogs) {
    return <p>No blogs available.</p>;
  }

  // Create a shallow copy of the blogs array and reverse it
  const reversedBlogs = blogs.slice().reverse();

  return (
    <div className="w-full bg-[#f9f9f9] py-[50px]">
      <div className="max-w-[1240px] mx-auto ">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-2 xs:grid-cols-2 gap-8 px-4 text-black">
          {reversedBlogs.map((blog) => (
            <Link to={`/blog/${blog.id}`} key={blog.id}>
              <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
                {blog.cover_photo_path && (
                  <img
                    src={`https://dashboard.planetpluskenya.co.ke/storage/app/public/${blog.cover_photo_path}`}
                    className="h-56 w-full object-cover"
                    alt={blog.title}
                  />
                )}
                <div className="p-8">
                  <h3 className="font-bold text-2xl my-1">{blog.title}</h3>
                  <p className="text-gray-600 text-x1">{blog.sub_title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
