import React, { useEffect, useState } from "react";
import "./Modules.css";

import centerImage from "../../assets/modules/dashboard.png";
import leftImage from "../../assets/modules/screen1.png";
import rightImage from "../../assets/modules/screen2.png";
import { BsDot } from "react-icons/bs";
import axios from "axios";
import { decryptAPIResponse } from "../../utils";

import { useNavigate } from "react-router-dom";
import Module001 from "../../assets/modules/001.jpg";
import loan from "../../assets/modules/loan.jpg"

const Modules: React.FC = () => {
  const [release, setRelease] = useState<any[]>([]);
  const navigate = useNavigate();
  const refProductName = import.meta.env.VITE_REF_PRODUCT_NAME;
  const refProductsId = parseInt(import.meta.env.VITE_REF_PRODUCTS_ID); // if needed as number
  const [expanded, setExpanded] = useState(false); // State inside map

  useEffect(() => {
    fetchRelease();
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const fetchRelease = async () => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL + "/UserRoutes/listRelease",
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
        setRelease(data.Release);
      } else {
        console.error("API update failed:", data);
      }
    } catch (e) {
      console.error("Error updating package:", e);
    }
  };

  return (
    <div>
      <div className="modulesBanner">
        <div className="modulesBannerOverlay">
          <h1 className="modulesBannerTitle uppercase underline">MODULES</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 px-4">
        <p className="text-center text-2xl md:text-3xl uppercase underline font-bold">
          Empower Your Microfinance Operations with us{" "}
        </p>

        <div className="relative w-full mt-10 h-[600px] md:h-[500px]">
          {/* Center Laptop Image */}
          <img
            src={centerImage}
            alt="Center Module"
            className="w-[65%] mx-auto z-0 relative shadow-2xl rounded-xl transition-transform duration-500 ease-in-out hover:scale-105"
          />

          {/* Left Mobile Image */}
          <img
            src={leftImage}
            alt="Left Module"
            className="hidden md:block w-[18%] absolute top-[25%] left-[5%] z-10 shadow-xl rounded-xl transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
          />

          {/* Right Mobile Image */}
          <img
            src={rightImage}
            alt="Right Module"
            className="hidden md:block w-[18%] absolute top-[20%] right-[5%] z-10 shadow-xl rounded-xl transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
          />
        </div>
      </div>

      <div className="bg-gray-100 py-10 mt-30">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-8">
          {[
            { label: "Active Borrowers", value: "2.5K+" },
            { label: "Loans Disbursed", value: "10K+" },
            { label: "EMIs Collected", value: "50K+" },
            { label: "Reports Generated", value: "8K+" },
          ].map((stat, idx) => (
            <div key={idx}>
              <div className="text-3xl font-bold text-[#090a58]">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold uppercase mb-4 underline text-[#fca000]">
            ERP Modules Overview
          </h2>
          <p className="text-lg text-gray-700 mb-10">
            Each module is meticulously designed to manage a core function of
            your microfinance operations. Together, they offer a powerful,
            end-to-end solution that simplifies workflows, reduces errors, and
            improves overall productivity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Admin Dashboard",
                desc: "View real-time financial summaries including loan status, repayments, customer activity, and agent performance all from one central control panel.",
                icon: "📊",
              },
              {
                title: "Agent Management",
                desc: "Add, edit, and monitor agents with detailed profiles and KYC. Assign customers and track field collections in real-time.",
                icon: "🧑‍💼",
              },
              {
                title: "Customer Management",
                desc: "Register customers, assign loans, add references, and manage repayment history. Maintain complete visibility over user activity and audit logs.",
                icon: "👥",
              },
              {
                title: "Bank Details",
                desc: "Maintain accurate records of all cash and bank transactions. Add new bank accounts and manage cash flow with transparency.",
                icon: "🏦",
              },
              {
                title: "Funds Management",
                desc: "Track fund additions and internal transfers between cash and bank accounts. Filter transactions by date for clean, auditable records.",
                icon: "💰",
              },
              {
                title: "Loan Products",
                desc: "Create flexible loan schemes with custom interest rates, durations (daily/weekly/monthly), and calculation methods (day-wise/month-wise).",
                icon: "📦",
              },
              {
                title: "Loan Management",
                desc: "Disburse loans, schedule repayments, send reminders, and track loan performance with options for flat, diminishing, or interest-only plans.",
                icon: "📄",
              },
              {
                title: "Repayment Tracking",
                desc: "Record EMIs, manage pending dues, send reminders, and audit repayment history. Add follow-ups and log user-provided notes.",
                icon: "💳",
              },
              {
                title: "Admin Loan",
                desc: "Track loans borrowed by the organization. Add repayment records, follow-up logs, and access full loan audit trails for compliance.",
                icon: "🏢",
              },
              {
                title: "Reports",
                desc: "Generate and export overall, monthly, and expense reports. Track collections, disbursements, and expenditures in a single dashboard.",
                icon: "📈",
              },
              {
                title: "Customization",
                desc: "Customize ID formats, area-pincode mappings, and visible data filters. Tailor the platform to align with your operational structure.",
                icon: "⚙️",
              },
            ].map((mod, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-xl rounded-xl border-l-4 border-[#fca000] transition-transform transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{mod.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[#000]">
                  {mod.title}
                </h3>
                <p className="text-gray-600 text-justify">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="loanTypes" className="flex flex-col gap-5">
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold uppercase mb-4 underline text-[#fca000]">
              Our Loan Types
            </h2>
            <p className="text-lg text-gray-700 mb-10">
              At ZA Micro-FI, we offer flexible loan options to meet your
              financial needs. Whether you’re looking for a simple repayment
              structure or a loan that adjusts as you pay, we have the right
              solution for you.
            </p>
            <h2 className="text-3xl font-bold uppercase mb-4 underline text-[#fca000]">
              Loan Options We Offer
            </h2>
          </div>
        </div>
        <div className="flex w-full md:w-10/12 mx-auto lg:flex-row flex-col p-4 gap-8">
          {/* 📌 Centered image */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src={Module001}
              alt="Loan Illustration"
              className="max-w-full h-auto"
            />
          </div>

          {/* 📌 Loan content */}
          <div className="flex-1 gap-3 w-full flex flex-col justify-center">
            {/* 1. Flat Loan */}
            <div className="flex items-center justify-start mb-2">
              <span
                className="text-[24px] font-semibold whitespace-nowrap uppercase"
                style={{
                  borderBottom: "3px solid #fca000",
                  color: "#000000",
                  paddingBottom: "2px",
                }}
              >
                <span className="text-[#fca000] font-bold">1. </span>
                Flat Loan
              </span>
            </div>
            <p className="text-justify">
              A flat loan comes with a fixed interest rate calculated on the
              full loan amount, regardless of what you’ve already paid. The
              repayment amount stays the same throughout the loan term.
            </p>

            {/* 2. Diminishing Loan */}
            <div className="flex items-center justify-start mb-2 mt-5">
              <span
                className="text-[24px] font-semibold whitespace-nowrap uppercase"
                style={{
                  borderBottom: "3px solid #fca000",
                  color: "#000000",
                  paddingBottom: "2px",
                }}
              >
                <span className="text-[#fca000] font-bold">2. </span>
                Diminishing Loan
              </span>
            </div>
            <p className="text-justify">
              In a diminishing loan, the interest is calculated on the remaining
              balance. As you pay off your loan, the interest decreases, and
              your monthly payment reduces over time.
            </p>

            {/* 3. Instalment Loan */}
            <div className="flex items-center justify-start mb-2 mt-5">
              <span
                className="text-[24px] font-semibold whitespace-nowrap uppercase"
                style={{
                  borderBottom: "3px solid #fca000",
                  color: "#000000",
                  paddingBottom: "2px",
                }}
              >
                <span className="text-[#fca000] font-bold">3. </span>
                Instalment Loan
              </span>
            </div>
            <p className="text-justify">
              An instalment loan allows you to borrow a fixed amount and repay
              it over set periods in equal instalments. It’s perfect for
              managing monthly budgets with predictable payments.
            </p>
          </div>
        </div>
        <div className="flex w-full md:w-10/12 mx-auto lg:flex-row flex-col p-4 gap-8 mt-5">
          {/* 📄 Text content section */}
          <div className="flex-1 gap-3 w-full flex flex-col justify-center">
            <div className="flex items-center justify-start mb-2 mt-5">
              <span
                className="text-[24px] font-semibold whitespace-nowrap uppercase"
                style={{
                  borderBottom: "3px solid #fca000",
                  color: "#000000",
                  paddingBottom: "2px",
                }}
              >
                <span className="text-[#fca000] font-bold">How Loans </span>
                Work in ZA MicroFI :
              </span>
            </div>

            <p className="text-justify">
              We understand that in microfinance, flexibility is key. That’s why
              we offer different loan options to support your evolving needs.
            </p>

            <div className="flex items-center justify-start mb-2 mt-5">
              <span
                className="text-[24px] font-semibold whitespace-nowrap uppercase"
                style={{
                  borderBottom: "3px solid #fca000",
                  color: "#000000",
                  paddingBottom: "2px",
                }}
              >
                <span className="text-[#fca000] font-bold">MicroFI Loan</span>
                <span className="ml-1">Options:</span>
              </span>
            </div>

            <p className="text-[20px] text-justify font-medium mb-2">
              Loan Options:
            </p>

            <ul className="list-none space-y-2 text-[18px] text-justify text-gray-800">
              <li className="flex items-start gap-1">
                <BsDot className="text-[#fca000] font-bold text-2xl mt-1" />
                <span>
                  <strong>New Loan:</strong> Fresh funding for your immediate
                  personal or business needs.
                </span>
              </li>
              <li className="flex items-start gap-1">
                <BsDot className="text-[#fca000] font-bold text-2xl mt-1" />
                <span>
                  <strong>Top-Up Loan:</strong> Additional funds provided on top
                  of your existing loan when you need extra support.
                </span>
              </li>
              <li className="flex items-start gap-1">
                <BsDot className="text-[#fca000] font-bold text-2xl mt-1" />
                <span>
                  <strong>Extension Loan:</strong> Extended repayment period if
                  you need more time to settle your loan.
                </span>
              </li>
            </ul>
          </div>

          {/* 🖼️ Image section - centered */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src={loan}
              alt="Loan Options"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold uppercase mb-4 underline text-[#fca000]">
            New Release
          </h2>

          {release.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white p-6 mt-6 rounded-lg shadow-lg border-l-4 border-[#fca000] text-left"
              >
                <h3 className="text-2xl font-bold text-[#090a58]">
                  Version: {item.version}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Release Date:{" "}
                  {new Date(item.releaseDate).toLocaleDateString()}
                </p>

                <div
                  className={`text-gray-700 text-justify leading-relaxed transition-all duration-300 ${
                    expanded ? "line-clamp-none" : "line-clamp-2"
                  }`}
                  dangerouslySetInnerHTML={{ __html: item.notes }}
                />

                <button
                  onClick={() => setExpanded(!expanded)}
                  className="mt-2 text-[#fca000] font-semibold hover:underline"
                >
                  {expanded ? "Read Less" : "Read More"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Modules;
