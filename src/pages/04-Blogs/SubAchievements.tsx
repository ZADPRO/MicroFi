import React, { useEffect, useState } from "react";

import blogTemplateImg from "../../assets/blogs/blogTemplate.jpg";
import { ShieldUser, Tags, TrendingUp } from "lucide-react";
import axios from "axios";
import { decryptAPIResponse } from "../../utils";

import { useNavigate } from "react-router-dom";

interface BlogArray {
  blogTitle: string;
  blogContent: string;
  blogImage: string;
  blogId: string;
  signedImageUrl: string;
}

const SubAchievements: React.FC = () => {
  const [achievements, setAchievements] = useState<any[]>([]);
  const navigate = useNavigate();

  const refProductName = import.meta.env.VITE_REF_PRODUCT_NAME;
  const refProductsId = parseInt(import.meta.env.VITE_REF_PRODUCTS_ID); // if needed as number

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" as const },
    },
  };

  const slideInVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" as const },
    },
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

  useEffect(() => {
    fetchAchievement();
  }, []);

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

        navigate("/fullachievements", {
          state: { achievementDetails: fullachievements },
        });
      } else {
        console.error("API fetch failed or invalid data:", data);
      }
    } catch (e) {
      console.error("Error fetching blog details:", e);
    }
  };
  return (
    <div>
      <div className="AchievementBanner">
        <div className="BlogsBannerOverlay">
          <h1 className="BlogsBannerTitle uppercase underline">ACHIEVEMENTS</h1>
        </div>
      </div>
      <div
        id="pages"
        className=" text-[#0F3B36] min-h-screen py-12 px-6 md:px-12"
      >
        <section className="mt-10  py-10 px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-[#fca000] text-xl md:text-2xl font-bold uppercase">
              upcoming Blogs
            </h3>
            <h2 className="text-3xl md:text-4xl lg:text-4xl  font-bold text-[#090a58] mt-2">
              Latest News & Articles.
            </h2>
            {/* Grid Layout with Scroll Animation */}

            <div className="blogCards flex w-full align-items-center justify-content-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full md:w-10/12 mx-auto py-8 px-10">
                {achievements.map((achieve) => (
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
          </div>
        </section>
      </div>
    </div>
  );
};

export default SubAchievements;
