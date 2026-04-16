import BlogSingleHeader from "../../components/Blogs/BlogSingleHeader";
import NotFound from "../NotFound.jsx";
import ContactSection from "../../components/Shared/ContactSection";
import Footer from "../../components/Shared/Footer";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import blogs from "../../data/blogs.js";
import Content1 from "../../components/blogscontent/blog1.jsx";
import Content2 from "../../components/blogscontent/blog2.jsx";
import Content3 from "../../components/blogscontent/blog3.jsx";
import Content4 from "../../components/blogscontent/blog4.jsx";

const componentMap = {
  "hydroponics-crop-selection": Content1,
  "soil-vs-hydroponics": Content2,
  "why-hydroponics-farms-fail": Content3,
  "hydroponics-break-even": Content4,
};

const handleNavigate = () => {
  window.location.href = "/blogs";
};

function DynamicRenderer({ type }) {
  const Component = componentMap[type];

  return Component ? <Component /> : <div>Not Found</div>;
}

const Blog = () => {
  const { id } = useParams();

  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return <NotFound />;
  }

  const selectedBlogs = blogs.filter((b) => blog.selectedIds.includes(b.id));

  return (
    <div className="blog-page">
      <BlogSingleHeader tag="BLOG" title={blog.title} subtitle={blog.description} />
      <div
        className="w-full h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${blog.image})`,
        }}
      />
      <section className="flex justify-center px-6 md:px-[5%] lg:px-16 py-10 lg:py-16">
        <div className=" w-full flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Article */}
          <div className="flex-1 w-full text-[15px] leading-[29px] text-[#343434] space-y-6">
            <DynamicRenderer type={blog.id} />
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[360px] shrink-0 h-min bg-[#F9F9F9] rounded-2xl p-6 lg:p-10 flex flex-col gap-6 border border-[#E8E8E8]">
            <h3 className="text-xl font-bold text-black">Our Farms in Action</h3>

            <p className="text-[15px] leading-7 text-[#343434]">
              Follow real projects, site updates, and behind-the-scenes farm
              progress.
            </p>

            <div className="flex gap-4 text-[#8DC83A]">
              <a
                href="https://www.instagram.com/farmcult_?igsh=MWwxNDhteXM4N3YyaA=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
              </a>

              <a
                href="https://www.linkedin.com/company/farmcult/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ECECEC] px-6 md:px-[5%] lg:px-16 py-10 lg:py-16 flex justify-center">
        <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-24">
          {/* Left text */}
          <div className="w-full lg:w-[400px] shrink-0 flex flex-col lg:justify-between gap-6">
            <div className="flex flex-col gap-6">
              <h2 className="text-[32px] font-medium">
                Ideas Driving Modern Farming
              </h2>

              <p className="text-sm leading-7">
                Industry updates, hydroponics knowledge, and practical insights
                shaping modern agriculture in India.
              </p>
            </div>

            <button className="bg-[#343434] text-white px-6 py-3 rounded-full w-fit"
              onClick={handleNavigate}>
              View All Blogs
            </button>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:flex-1">
            {selectedBlogs.map((blog, i) => (
              <Link to={`/blog/${blog.id}`} className="block h-full flex-1" key={i}>
                <div
                  className="bg-white rounded-xl p-4 sm:p-6 md:p-8 w-full h-full flex flex-col gap-4 sm:gap-6 cursor-pointer hover:scale-[1.02] transition-transform duration-300 ease-in-out"
                >
                  <span className="bg-[#8DC83A40] px-3 py-1 rounded-full text-xs sm:text-sm w-fit">
                    Blog
                  </span>

                  <img
                    src={blog.image}
                    className="rounded-xl h-[180px] sm:h-[200px] lg:h-[250px] object-cover w-full"
                  />

                  <h3 className="font-bold text-base sm:text-lg">{blog.title}</h3>

                  <p className="text-sm leading-6 sm:leading-7">{blog.description}</p>

                  <span className="text-[#8DC83A] font-bold text-sm sm:text-base mt-auto">{blog.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Blog;
