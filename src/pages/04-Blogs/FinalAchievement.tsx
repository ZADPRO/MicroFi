import { div } from "framer-motion/client";
import React from "react";
import { useLocation } from "react-router-dom";

const FinalAchievement: React.FC = () => {
  const location = useLocation();
  const achievementDetail = location.state?.achievementDetails;
  console.log("Received achievement:", achievementDetail);

  if (!achievementDetail) {
    return (
      <p className="text-center mt-10 text-gray-600">No blog data available.</p>
    );
  }
  return (
    <>
      <div>
        <div className="AchievementBanner">
          <div className="BlogsBannerOverlay">
            <h1 className="BlogsBannerTitle uppercase underline">ACHIEVEMENTS</h1>
          </div>
        </div>

        <div className=" text-[#0F3B36] min-h-screen py-12 px-6 md:px-12">
          <div className="max-w-4xl mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold text-[#07332f] mt-3">
              {achievementDetail.achievementTitle}
            </h1>
            <h1 className="text-3xl font-bold text-[#07332f] mt-3">
              {achievementDetail.achievedOn}
            </h1>
            <div
              className="prose max-w-none mt-6 text-gray-800"
              dangerouslySetInnerHTML={{
                __html: achievementDetail.achievementDescription,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FinalAchievement;
