import React, { useEffect, useState } from "react";
// import blogTemplateImg from "../../assets/blogs/blogTemplate.jpg";
// import { ShieldUser, Tags, TrendingUp } from "lucide-react";
import axios from "axios";
import { decryptAPIResponse } from "../../utils";
// import { useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

const UserReview: React.FC = () => {
  const [reviews, setReviews] = useState<any[]>([]);
  // const navigate = useNavigate();
  // const refProductName = import.meta.env.VITE_REF_PRODUCT_NAME;
  const refProductsId = parseInt(import.meta.env.VITE_REF_PRODUCTS_ID); // if needed as number

  const fetchReview = async () => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL + "/UserRoutes/listReviews",
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
      if (data.success === true) {
        setReviews(data.allReview);
      } else {
        console.error("API update failed:", data);
      }
    } catch (e) {
      console.error("Error fetching reviews:", e);
    }
  };

  useEffect(() => {
    fetchReview();
  }, []);

  return (
    <div>
      <div className="UserBanner">
        <div className="BlogsBannerOverlay">
          <h1 className="BlogsBannerTitle uppercase underline">User Reviews</h1>
        </div>
      </div>

      <div
        id="pages"
        className="text-[#0F3B36] min-h-screen py-12 px-6 md:px-12"
      >
        <section className="mt-10 py-10 px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-[#fca000] text-xl md:text-2xl font-bold uppercase">
              Upcoming Reviews
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-[#090a58] mt-2">
              Latest Reviews
            </h2>

            {/* Blog Cards */}
            <div className="blogCards flex w-full justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-8">
                {reviews.length === 0 && (
                  <p className="col-span-full text-center text-gray-500 text-lg mt-10">
                    No reviews available.
                  </p>
                )}

                {reviews.map((item, index) => {
                  const rating = Number(item.ratings ?? 0);
                  return (
                    <div
                      key={item.feedbackId || index}
                      className="w-full min-h-[300px] flex justify-center items-center bg-[#fff]"
                    >
                      <div className="w-full lg:w-[90%] h-auto flex flex-col justify-center items-center  rounded shadow p-5">
                        <FaUserAlt className="text-[#a6852f] text-5xl" />
                        <div
                          style={{ fontFamily: "Poppins" }}
                          className="mt-5 text-[#3d404e] font-[800] text-[18px] lg:text-[22px]"
                        >
                          {item.userName}
                        </div>

                        {/* Star Rating */}
                        <div className="mt-5">
                          <span className="flex gap-1 text-amber-400">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill={i < rating ? "currentColor" : "lightgray"}
                                className="w-6 h-6"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 
                                    1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 
                                    7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527
                                    c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            ))}
                          </span>
                        </div>

                        {/* Feedback Content */}
                        <div
                          style={{ fontFamily: "Poppins" }}
                          className="mt-5 text-[#3d404e] font-[400] text-[14px] lg:text-[16px] px-4 text-center"
                          dangerouslySetInnerHTML={{
                            __html: item.reviewContent,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserReview;
