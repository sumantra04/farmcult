import React from "react";
import BlogsHeader from "../components/Blogs/BlogsHeader";
import ContactSection from "../components/Shared/ContactSection";
import Footer from "../components/Shared/Footer";
import { Link } from "react-router-dom";
import blogs from "../data/blogs.js";

const firstBlog = blogs.find((blog) => blog.id === "hydroponics-crop-selection");
const otherBlogs = blogs.filter((blog) => blog.id !== "hydroponics-crop-selection");

const Blogs = () => {
  return (
    <div className="blog-page">
      <BlogsHeader
        tag="BLOGS"
        title="Ideas Driving Modern Farming"
        subtitle="Industry updates, hydroponics knowledge, and practical insights shaping modern agriculture in India."
      />

      {firstBlog && (
        <section className="w-full py-10 md:py-3 lg:py-3 bg-[#F7F7F7] md:px-[5%] flex justify-center mb-12">
          <div className="relative w-full max-w-9xl h-[550px] md:h-[500px] lg:h-[600px] rounded-none md:rounded-[16px] overflow-hidden shadow-none md:shadow-xl group">
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <img
                src={firstBlog.image}
                alt="Blog Cover"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>

            <div className="absolute inset-0 w-full h-full flex items-center justify-center md:justify-start p-5 lg:pl-16 z-10 pointer-events-none">
              <Link to={`/blog/${firstBlog.id}`}>
                <div className="pointer-events-auto bg-[#F7F7F7] md:bg-white/95 backdrop-blur-sm rounded-2xl p-7 md:p-24 lg:p-12 w-[92%] max-w-[380px] md:max-w-[420px] lg:max-w-[480px] min-h-[440px] md:min-h-[480px] lg:min-h-[520px] shadow-2xl flex flex-col justify-start items-start cursor-pointer hover:scale-[1.02] transition-transform duration-300 ease-in-out">
                  <div className="px-[16px] py-[6px] bg-[#E3F0D3] text-[#343434] rounded-full mb-6 md:mb-8">
                    <span className="font-inter font-medium text-[14px] leading-none m-0">
                      Blog
                    </span>
                  </div>

                  <h2 className="font-inter text-[32px] md:text-[32px] font-medium md:font-medium text-black leading-[1.2] md:leading-[48px] mb-8 tracking-tight m-0 w-full">
                    {firstBlog.title.split("\n").map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </h2>

                  <p className="font-inter text-[16px] md:text-[16px] font-normal text-black leading-[1.6] md:leading-[29px] mb-8 md:mb-2 opacity-90 m-0 w-full md:max-w-[90%]">
                    {firstBlog.description}
                  </p>

                  <div className="w-full flex justify-between items-center mt-auto">
                    <span className="font-inter text-[#81B622] font-bold text-[16px] m-0">
                      {firstBlog.date}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#ECECEC] py-16 px-16">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {otherBlogs.map((blog, index) => (
            <Link to={`/blog/${blog.id}`}>
              <div
                key={index}
                className="bg-white rounded-[16px] h-full p-8 flex flex-col gap-6 cursor-pointer hover:scale-[1.02] transition-transform duration-300 ease-in-out"
              >
                {/* Blog Tag */}
                <div className="w-fit px-3 py-[2px] rounded-[16px] bg-[rgba(141,200,58,0.25)] text-[15px] text-[#343434]">
                  Blog
                </div>

                {/* Image */}
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[250px] object-cover rounded-[16px]"
                />

                {/* Title */}
                <h3 className="text-[18px] font-bold leading-[36px] text-[#343434]">
                  {blog.title.split("\n").map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </h3>

                {/* Description */}
                <p className="text-[15px] leading-[29px] text-[#343434] line-clamp-3">
                  {blog.description}
                </p>

                {/* Date */}
                <span className="text-[16px] font-bold text-[#8DC83A] mt-auto">
                  {blog.date}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Blogs;
