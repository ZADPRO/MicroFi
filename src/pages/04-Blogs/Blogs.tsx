import React, { useEffect, useState } from "react";
import "./Blogs.css";

import blogTemplateImg from "../../assets/blogs/blogTemplate.jpg";
import {  TrendingUp } from "lucide-react";
import axios from "axios";
import { decryptAPIResponse } from "../../utils";

import { useNavigate } from "react-router-dom";

// interface Blog {
//   id: number;
//   date: string;
//   month: string;
//   author: string;
//   tag: string;
//   title: string;
//   image: string;
// }

// const blogsData: Blog[] = [
//   {
//     id: 1,
//     date: "29",
//     month: "June",
//     author: "Admin",
//     tag: "Tag",
//     title:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, deserunt veritatis!",
//     image: blogTemplateImg,
//   },
//   {
//     id: 2,
//     date: "30",
//     month: "June",
//     author: "Admin",
//     tag: "Fitness",
//     title:
//       "Alias aspernatur, perspiciatis incidunt recusandae dolorum consectetur culpa.",
//     image: blogTemplateImg,
//   },
//   {
//     id: 3,
//     date: "1",
//     month: "July",
//     author: "Admin",
//     tag: "Wellness",
//     title: "Inventore deleniti sed esse similique accusantium libero. Tempora?",
//     image: blogTemplateImg,
//   },
// ];

const Blogs: React.FC = () => {
  const navigate = useNavigate();
  const [blogs, setBlogss] = useState<any[]>([]);
  const [achievements, setAchievements] = useState<any[]>([]);
  const refProductName = import.meta.env.VITE_REF_PRODUCT_NAME;
  const refProductsId = parseInt(import.meta.env.VITE_REF_PRODUCTS_ID); // if needed as number

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

  const fetchAchievement = async () => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL + "/UserRoutes/listAchievements",
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
      console.log("setAchievements---------------?", data);
      if (data.success === true) {
        setAchievements(data.Achievements);
      } else {
        console.error("API update failed:", data);
      }
    } catch (e) {
      console.error("Error updating package:", e);
    }
  };

  // Function to extract first line from HTML content
  const getFirstLineFromHTML = (htmlContent: string): string => {
    // Remove HTML tags and get plain text
    const plainText = htmlContent.replace(/<[^>]*>/g, "");
    // Split by line breaks and get first line
    const firstLine = plainText.split("\n")[0].trim();
    return firstLine;
  };

  const handleAchievementReadMore = () => {
    navigate(`/subachievement`);
  };
  const handleReadMore = () => {
    navigate(`/sublogs`);
  };

  useEffect(() => {
    fetchBlogs();
    fetchAchievement();
  }, []);

  const ReadMore = async (id: string) => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL + "/settingsRoutes/getBlogs",
        {
          refProductName: refProductName,
          blogId: id,
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

      if (data.success === true && Array.isArray(data.result)) {
        // localStorage.setItem("token", "Bearer " + data.token);
        const fullBlog = data.result[0];

        navigate("/fullblogs", { state: { blogDetails: fullBlog } });
      } else {
        console.error("API fetch failed or invalid data:", data);
      }
    } catch (e) {
      console.error("Error fetching blog details:", e);
    }
  };

  const ReadAchievements = async (id: string) => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL + "/settingsRoutes/getAchivements",
        {
          refProductName: refProductName,
          achievementId: id,
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

      if (data.success === true && Array.isArray(data.result)) {
        // localStorage.setItem("token", "Bearer " + data.token);
        const fullachievements = data.result[0];

        navigate("/fullachievements", { state: { achievementDetails: fullachievements } });
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

      <div className="blogCards flex w-full align-items-center justify-content-center">
        <div className="flex w-full md:w-10/12 mx-auto lg:flex-row flex-col py-8 px-10 gap-10">
          {blogs.slice(0, 3).map((blog) => (
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

      <div className="text-center">
        <button
          onClick={handleReadMore}
          className="bg-[#fdb500] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#e39600] transition"
        >
          Read More
        </button>
      </div>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold uppercase text-[#fca000] mb-4 underline">
            Achievements
          </h2>
          <p className="text-gray-700 mb-10">
            Discover our key milestones and accomplishments that reflect our
            commitment to empowering microfinance institutions and transforming
            lives.
          </p>
        </div>

        <div className="blogCards flex w-full align-items-center justify-content-center">
          <div className="flex w-full md:w-10/12 mx-auto lg:flex-row flex-col py-8 px-10 gap-10">
            {achievements.slice(0, 3).map((achieve) => (
              <div
                key={achieve.achievementId}
                onClick={() => ReadAchievements(achieve.achievementId)}
                className="cardTemplate flex flex-col flex-1 rounded-xl shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex flex-col p-4">
                  <p className="font-bold text-lg mb-2 line-clamp-2 text-black">
                    {achieve.achievementTitle}
                  </p>
                  <p className="font-medium text-sm mb-2 text-gray-600">
                    {achieve.achievedOn}
                  </p>
                  <p className="text-gray-700 mb-4 line-clamp-1">
                    {getFirstLineFromHTML(achieve.achievementDescription)}
                  </p>
                </div>
                <div className="text-center p-3 uppercase bg-blue-800 font-bold text-white rounded-b-xl flex items-center justify-center gap-3 cursor-pointer hover:bg-blue-900 transition-colors">
                  <p>Read More</p>
                  <TrendingUp />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <button
            onClick={handleAchievementReadMore}
            className="bg-[#fdb500] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#e39600] transition"
          >
            Read More
          </button>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
