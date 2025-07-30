import React, { useEffect, useState } from "react";

import blogTemplateImg from "../../assets/blogs/blogTemplate.jpg";
import { TrendingUp } from "lucide-react";
import axios from "axios";
import { decryptAPIResponse } from "../../utils";

import { useNavigate } from "react-router-dom";
// import { div } from "framer-motion/client";

const SubBlogs: React.FC = () => {
  const [blogs, setBlogss] = useState<any[]>([]);
  const navigate = useNavigate();
  const refProductName = import.meta.env.VITE_REF_PRODUCT_NAME;
  const refProductsId = parseInt(import.meta.env.VITE_REF_PRODUCTS_ID); // if needed as number

  // const fadeUpVariants = {
  //   hidden: { opacity: 0, y: 50 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: { duration: 1, ease: "easeOut" as const },
  //   },
  // };

  // const slideInVariants = {
  //   hidden: { opacity: 0, x: -100 },
  //   visible: {
  //     opacity: 1,
  //     x: 0,
  //     transition: { duration: 1, ease: "easeOut" as const },
  //   },
  // };

  const fetchBlogs = async () => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL + "/UserRoutes/listBlogs",
        {
          refProductsId,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        }
      );

      const data = decryptAPIResponse(
        response.data[1],
        response.data[0],
        import.meta.env.VITE_ENCRYPTION_KEY
      );
      console.log("API Response:", data);
      console.log("data---------------?", data);
      if (data.success === true) {
        setBlogss(data.AllBlogs);
      } else {
        console.error("API update failed:", data);
      }
    } catch (e) {
      console.error("Error updating package:", e);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const ReadMore = async (id: string) => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL + "/settingsRoutes/getBlogs",
        { refProductName: refProductName, blogId: id },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        }
      );

      const data = decryptAPIResponse(
        response.data[1],
        response.data[0],
        import.meta.env.VITE_ENCRYPTION_KEY
      );

      if (data.success === true && Array.isArray(data.result)) {
        localStorage.setItem("token", "Bearer " + data.token);
        const fullBlog = data.result[0];

        navigate("/fullblogs", { state: { blogDetails: fullBlog } });
      } else {
        console.error("API fetch failed or invalid data:", data);
      }
    } catch (e) {
      console.error("Error fetching blog details:", e);
    }
  };
  return (
    <div>
      <div className="BlogsBanner">
        <div className="BlogsBannerOverlay">
          <h1 className="BlogsBannerTitle uppercase underline">BLOGS</h1>
        </div>
      </div>
      <div
        id="pages"
        className=" text-[#0F3B36] min-h-screen py-12 px-6 md:px-12"
      >
        <section className="mt-10 py-10 px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-[#fca000] text-xl md:text-2xl font-bold uppercase">
              Upcoming Blogs
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-[#090a58] mt-2">
              Latest News & Articles.
            </h2>

            {/* Blog Cards */}
            <div className="blogCards flex w-full align-items-center justify-content-center">
              <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-10 py-8 ">
                {blogs.map((blog) => (
                  <div
                    key={blog.blogId}
                    onClick={() => ReadMore(blog.blogId)}
                    className="cardTemplate flex flex-col flex-1 rounded-xl shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                  >
                    <img
                      src={
                        blog.signedImageUrl && blog.signedImageUrl !== ""
                          ? blog.signedImageUrl
                          : blogTemplateImg
                      }
                      alt="blog-img"
                      className="rounded-t-xl object-cover h-[250px] w-full"
                    />
                    <div className="flex flex-col">
                      <p className="font-bold text-lg px-4 py-2 line-clamp-2 text-black">
                        {blog.blogTitle}
                      </p>
                      <div className="text-center p-3 uppercase bg-blue-800 font-bold text-white rounded-b-xl flex items-center justify-center gap-3">
                        <p>Read More</p>
                        <TrendingUp />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SubBlogs;
