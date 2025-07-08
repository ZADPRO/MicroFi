import { div } from "framer-motion/client";
import React from "react";
import { useLocation } from "react-router-dom";

const FinalBlogs: React.FC = () => {
  const location = useLocation();
  const blogDetails = location.state?.blogDetails;
  console.log("Received blog:", blogDetails);

  if (!blogDetails) {
    return (
      <p className="text-center mt-10 text-gray-600">No blog data available.</p>
    );
  }
  return (

   <div>
      <div className="BlogsBanner">
        <div className="BlogsBannerOverlay">
          <h1 className="BlogsBannerTitle uppercase underline">BLOGS</h1>
        </div>
      </div>

     <div className=" text-[#0F3B36] min-h-screen py-12 px-6 md:px-12">
      <div className="max-w-4xl mx-auto py-10 px-4">
        <img
          src={blogDetails.signedImageUrl}
          alt={blogDetails.blogTitle}
          className="w-full h-full object-cover rounded-md"
        />

        <h1 className="text-3xl font-bold text-[#07332f] mt-3">
          {blogDetails.blogTitle}
        </h1>
        <div
          className="prose max-w-none mt-6 text-gray-800"
          dangerouslySetInnerHTML={{ __html: blogDetails.blogContent }}
        />
      </div>
    </div>
   </div>
  );
};

export default FinalBlogs;
