import React from "react";
import "./Blogs.css";

import blogTemplateImg from "../../assets/blogs/blogTemplate.jpg";
import { ShieldUser, Tags, TrendingUp } from "lucide-react";

interface Blog {
  id: number;
  date: string;
  month: string;
  author: string;
  tag: string;
  title: string;
  image: string;
}

const blogsData: Blog[] = [
  {
    id: 1,
    date: "29",
    month: "June",
    author: "Admin",
    tag: "Tag",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, deserunt veritatis!",
    image: blogTemplateImg,
  },
  {
    id: 2,
    date: "30",
    month: "June",
    author: "Admin",
    tag: "Fitness",
    title:
      "Alias aspernatur, perspiciatis incidunt recusandae dolorum consectetur culpa.",
    image: blogTemplateImg,
  },
  {
    id: 3,
    date: "1",
    month: "July",
    author: "Admin",
    tag: "Wellness",
    title: "Inventore deleniti sed esse similique accusantium libero. Tempora?",
    image: blogTemplateImg,
  },
];

const Blogs: React.FC = () => {
  return (
    <div>
      <div className="BlogsBanner">
        <div className="BlogsBannerOverlay">
          <h1 className="BlogsBannerTitle uppercase underline">BLOGS</h1>
        </div>
      </div>

      <div className="blogCards flex w-full align-items-center justify-content-center">
        <div className="flex w-full md:w-10/12 mx-auto lg:flex-row flex-col py-8 px-10 gap-10">
          {blogsData.map((blog) => (
            <div
              key={blog.id}
              className="cardTemplate flex flex-col flex-1 rounded-xl shadow-lg cursor-pointer"
            >
              <img src={blog.image} alt="blog-img" className="rounded-t-xl" />
              <div className="flex flex-col">
                <div className="flex items-center justify-evenly my-3">
                  <div className="flex flex-col items-center bg-[#101828] text-white font-bold p-4 rounded-xl">
                    <p className="text-2xl">{blog.date}</p>
                    <p>{blog.month}</p>
                  </div>
                  <div className="flex text-xl items-center gap-1">
                    <ShieldUser />
                    <p>{blog.author}</p>
                  </div>
                  <div className="flex text-xl items-center gap-1">
                    <Tags />
                    <p>{blog.tag}</p>
                  </div>
                </div>
                <p className="font-bold text-lg px-4 py-2 line-clamp-2">
                  {blog.title}
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
            {blogsData.map((blog) => (
              <div
                key={blog.id}
                className="cardTemplate flex flex-col flex-1 rounded-xl shadow-lg cursor-pointer"
              >
                <img src={blog.image} alt="blog-img" className="rounded-t-xl" />
                <div className="flex flex-col">
                  <div className="flex items-center justify-evenly my-3">
                    <div className="flex flex-col items-center bg-[#101828] text-white font-bold p-4 rounded-xl">
                      <p className="text-2xl">{blog.date}</p>
                      <p>{blog.month}</p>
                    </div>
                    <div className="flex text-xl items-center gap-1">
                      <ShieldUser />
                      <p>{blog.author}</p>
                    </div>
                    <div className="flex text-xl items-center gap-1">
                      <Tags />
                      <p>{blog.tag}</p>
                    </div>
                  </div>
                  <p className="font-bold text-lg px-4 py-2 line-clamp-2">
                    {blog.title}
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
      </section>
    </div>
  );
};

export default Blogs;
