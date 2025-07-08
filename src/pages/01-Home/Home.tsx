import React, { useState } from "react";
import { use, useEffect, useRef } from "react";
import {
  CreditCard,
  Users,
  Banknote,
  FileText,
  ClipboardList,
  Building2,
} from "lucide-react";
import { Carousel } from "react-responsive-carousel";
import { FaUserAlt } from "react-icons/fa";
import ERP from "../../assets/home/img.jpg";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { Rating } from "primereact/rating";
import axios from "axios";
import { decryptAPIResponse } from "../../utils";
import { Toast } from "primereact/toast";

const features = [
  {
    title: "Loan Management",
    desc: "Create, disburse, and monitor loans with real-time EMI tracking, interest calculation, and flexible repayment options.",
    icon: <FileText className="w-7 h-7 text-[#fca000]" />,
  },
  {
    title: "Customer Profiles",
    desc: "Add new borrowers, manage KYC, update references, and view repayment and audit history in one unified place.",
    icon: <Users className="w-7 h-7 text-[#fca000]" />,
  },
  {
    title: "Agent Coordination",
    desc: "Assign agents to customers, track collections, and view field performance instantly with location-based oversight.",
    icon: <ClipboardList className="w-7 h-7 text-[#fca000]" />,
  },
  {
    title: "Repayment Tracker",
    desc: "Easily log EMI payments, send automated reminders, manage dues, and view complete transaction logs.",
    icon: <CreditCard className="w-7 h-7 text-[#fca000]" />,
  },
  {
    title: "Funds & Bank Ledger",
    desc: "Track incoming and outgoing funds, manage multiple banks, and control internal transfers with accuracy.",
    icon: <Banknote className="w-7 h-7 text-[#fca000]" />,
  },
  {
    title: "Organizational Borrowings",
    desc: "Monitor loans taken by your company, manage repayments, and keep detailed loan audits for compliance.",
    icon: <Building2 className="w-7 h-7 text-[#fca000]" />,
  },
];

// const stats = [
//   { label: "Loans Disbursed", value: "12K+" },
//   { label: "EMIs Collected", value: "65K+" },
//   { label: "Agents Onboarded", value: "200+" },
//   { label: "Branches Managed", value: "50+" },
// ];

const Home: React.FC = () => {
  const navigate = useNavigate();
  const toast = useRef<Toast>(null);
  const [feedbackData, setFeedbackData] = useState({
    userName: "",
    useremail: "",
    reviewContent: "",
    ratings: "",
  });

  const refProductName = import.meta.env.VITE_REF_PRODUCT_NAME;
  const refProductsId = parseInt(import.meta.env.VITE_REF_PRODUCTS_ID); // if needed as number
  const [reviews, setReviews] = useState<any[]>([]);
  const handleClick = () => {
    navigate("/contact");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100); // small delay to allow route change
  };
  const handleloan = () => {
    navigate("/modules");
    setTimeout(() => {
      const el = document.getElementById("loanTypes");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 300); // delay to ensure page is rendered
  };
  const handleReview = () => {
    navigate("/fulluserreview");
    setTimeout(() => {
      const el = document.getElementById("loanTypes");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 300); // delay to ensure page is rendered
  };

  const handleFeedbackSubmit = async () => {
    console.log("Feedback Data:", feedbackData);
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL + "/settingsRoutes/addReviews",
        {
          refProductName: refProductName,
          userName: feedbackData.userName,
          useremail: feedbackData.useremail,
          reviewContent: feedbackData.reviewContent,
          ratings: parseInt(feedbackData.ratings),
        }
      );

      const data = decryptAPIResponse(
        response.data[1],
        response.data[0],
        import.meta.env.VITE_ENCRYPTION_KEY
      );
      console.log("Feedback Response:", data);

      if (data.status === true) {
        setFeedbackData({
          userName: "",
          useremail: "",
          reviewContent: "",
          ratings: "",
        });
        toast.current?.show({
          severity: "success",
          summary: "Success",
          detail: "Feedback submitted successfully",
          life: 3000,
        });
      } else {
        console.error("Feedback submission failed: Server returned error");
      }
    } catch (error) {
      console.error("Feedback submission failed", error);
    }
  };
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
      console.log("setAchievements---------------?", data);
      if (data.success === true) {
        setReviews(data.allReview);
      } else {
        console.error("API update failed:", data);
      }
    } catch (e) {
      console.error("Error updating package:", e);
    }
  };

  useEffect(() => {
    fetchReview();
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Hero Banner */}
      <div className="HomeBanner">
        <div className="HomeBannerOverlay flex flex-col items-start justify-center h-[350px] text-white">
          <h1
            className="text-3xl md:text-5xl w-[80%] font-extralight uppercase leading-tight"
                   >
            <div className="font-medium">Welcome to</div>
            <div className="font-bold text-[#fca000]">ZADPRO Micro-Fi</div>
          </h1>
          <p
            className="text-sm md:text-2xl mt-4 w-[60%]"
            
          >
            Empowering individuals and businesses through micro-finance
            innovation.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <div className="flex items-center mb-4">
              <div className="w-[60px] h-[3px] bg-[#fca000] mr-3"></div>
              <span className="uppercase text-xl font-semibold text-[#090a58]">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#090a58] leading-tight">
              Powering Digital Microfinance with{" "}
              <span className="text-[#fca000]">Full Control</span>
            </h2>
            <p className="text-gray-700 text-lg text-justify">
              ZA Micro-Fi is a comprehensive loan management platform tailored
              for microfinance institutions and individual lenders. We bring
              automation, transparency, and accuracy across every aspect of your
              loan lifecycle from customer onboarding to final repayments and
              reporting.
            </p>
          </div>
          <div data-aos="fade-left">
            <img
              src={ERP}
              alt="MicroFin ERP"
              className="w-full rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold uppercase text-[#fca000] mb-4 underline">
            ZA Micro-Fi Modules Highlights
          </h2>
          <p className="text-gray-700 mb-10">
            Explore our powerful modules built to streamline microfinance
            operations end-to-end.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                data-aos="flip-left"
                className="bg-gray-50 p-6 border-l-4 border-[#fca000] rounded-xl shadow hover:shadow-lg hover:scale-105 transition-transform duration-300 text-left"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-[#090a58] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-8 px-4">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <div className="text-4xl font-bold text-[#fca000]">
                {stat.value}
              </div>
              <div className="text-gray-700 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section> */}

      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold uppercase text-[#fca000] mb-4 underline">
            Loan
          </h2>
          <p className="text-gray-700 mb-10">
            A loan is a financial agreement where one party (the lender) gives
            money to another party (the borrower) with the promise that the
            money will be repaid over time, usually with added interest. Loans
            help individuals, businesses, and organizations access funds for
            various purposes like buying a home, starting a business, education,
            personal expenses, or emergencies
          </p>
        </div>
        <div className="text-center">
          <button
            onClick={handleloan}
            className="bg-[#090a58] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#e39600] transition"
          >
            Read more{" "}
          </button>
        </div>
      </section>
      <section className="py-12 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold uppercase text-[#fca000] mb-6 text-center underline">
            Testimonials
          </h2>

          <div className="w-full flex justify-center items-center flex-col ">
            <div className="w-[80%] flex justify-center flex-col">
              <div className="w-full h-[70vh]">
                <Carousel
                  autoPlay
                  infiniteLoop
                  interval={3000}
                  showThumbs={false}
                  showStatus={false}
                  showArrows={false}
                  stopOnHover={false}
                >
                  {reviews.slice(0, 3).map((item, index) => (
                    <div
                      key={item.feedbackId || index}
                      className="w-full h-[70vh] flex justify-center items-center bg-[#fff]"
                    >
                      <div className="w-[100%] h-[60vh] lg:h-[50vh] lg:w-[60%] flex flex-col justify-center items-center  rounded shadow">
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
                            {[...Array(5)].map((_, i) => {
                              const rating = parseInt(item.ratings || "0");
                              return (
                                <svg
                                  key={i}
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill={
                                    i < rating ? "currentColor" : "lightgray"
                                  }
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
                              );
                            })}
                          </span>
                        </div>

                        {/* Feedback Content */}
                        <div
                          style={{ fontFamily: "Poppins" }}
                          className="mt-5 text-[#3d404e] font-[400] text-[14px] lg:text-[16px] px-10 text-center"
                          dangerouslySetInnerHTML={{
                            __html: item.reviewContent,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button
            onClick={handleReview}
            className="bg-[#090a58] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#e39600] transition"
          >
            Read more{" "}
          </button>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold uppercase text-[#fca000] mb-6 text-center underline">
            Feedback Form
          </h2>

          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              // Call validation + submit
              const { userName, useremail, reviewContent, ratings } =
                feedbackData;

              if (!userName || !useremail || !reviewContent || !ratings) {
                toast.current?.show({
                  severity: "warn",
                  summary: "Validation Error",
                  detail: "All fields are required.",
                  life: 3000,
                });
                return;
              }

              // Optional: Validate email format
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!emailRegex.test(useremail)) {
                toast.current?.show({
                  severity: "error",
                  summary: "Invalid Email",
                  detail: "Please enter a valid email address.",
                  life: 3000,
                });
                return;
              }

              handleFeedbackSubmit();
            }}
          >
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="userName"
                value={feedbackData.userName}
                onChange={(e) =>
                  setFeedbackData({
                    ...feedbackData,
                    userName: e.target.value,
                  })
                }
                placeholder="Enter your name"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#fca000]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email ID
              </label>
              <input
                type="email"
                name="useremail"
                value={feedbackData.useremail}
                onChange={(e) =>
                  setFeedbackData({
                    ...feedbackData,
                    useremail: e.target.value,
                  })
                }
                placeholder="Enter your email"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#fca000]"
              />
            </div>

            {/* Rating */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Rating
              </label>
              <Rating
                value={parseInt(feedbackData.ratings) || 0}
                onChange={(e) =>
                  setFeedbackData({
                    ...feedbackData,
                    ratings: e.value?.toString() || "0",
                  })
                }
                cancel={false}
              />
            </div>

            {/* Review */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Review
              </label>
              <textarea
                name="reviewContent"
                value={feedbackData.reviewContent}
                onChange={(e) =>
                  setFeedbackData({
                    ...feedbackData,
                    reviewContent: e.target.value,
                  })
                }
                rows={5}
                placeholder="Write your feedback here..."
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#fca000]"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#090a58] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#e39600] transition"
              >
                Submit Feedback
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#fca000] py-14 text-white text-center px-4">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Digitize Your Lending Workflow?
        </h3>
        <p className="max-w-2xl mx-auto mb-6">
          Join microfinance organizations and individual lenders already using
          ZA Micro-Fi to streamline their loan management operations with
          confidence and speed.
        </p>
        <button
          onClick={handleClick}
          className="bg-white text-[#fca000] cursor-pointer font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition duration-300"
        >
          Request a Demo
        </button>
      </section>
    </div>
  );
};

export default Home;
