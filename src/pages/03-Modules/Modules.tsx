import React from "react";
import "./Modules.css";

import centerImage from "../../assets/modules/moduleOneCentere.png";
import leftImage from "../../assets/modules/mobileOne.png";
import rightImage from "../../assets/modules/mobileTwo.png";

// import Module001 from "../../assets/modules/001.jpg";

const Modules: React.FC = () => {
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
                desc: "View real-time financial summaries including loan status, repayments, customer activity, and agent performance—all from one central control panel.",
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

      {/* <div className="flex flex-col gap-5">
        <div className="flex w-full md:w-10/12 mx-auto lg:flex-row flex-col p-4 gap-8">
          <div className="flex-1">
            <img src={Module001} alt="" />
          </div>
          <div className="flex-1 gap-3 w-full flex flex-col justify-center">
            <div className="flex items-center justify-start mb-2">
              <span
                className="text-[24px] font-semibold whitespace-nowrap uppercase"
                style={{
                  borderBottom: "3px solid #fca000",
                  color: "#000000",
                  paddingBottom: "2px",
                }}
              >
                <span className="text-[#fca000] font-bold">Role-Based </span>{" "}
                Dashboard :
              </span>
            </div>
            <p className="text-[20px] text-justify">
              Empower your team with tailored dashboards. Super Admin, Admin,
              Finance, and Employees each get access to what they need — and
              nothing they don't.{" "}
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
                <span className="text-[#fca000] font-bold">Parcel </span>
                Booking:{" "}
              </span>
            </div>{" "}
            <p className="text-[20px] text-justify">
              Book parcels with leading courier partners in just a few clicks.
              Choose document/non-document types, walk-in vs regular users, and
              auto-fill sender/receiver details.
            </p>
          </div>{" "}
        </div>
        <div className="flex w-full md:w-10/12 mx-auto lg:flex-row flex-col p-4 gap-8 mt-5">
          <div className="flex-1 gap-3 w-full flex flex-col justify-center">
            <div className="flex items-center justify-start mb-2">
              <span
                className="text-[24px] font-semibold whitespace-nowrap uppercase"
                style={{
                  borderBottom: "3px solid #fca000",
                  color: "#000000",
                  paddingBottom: "2px",
                }}
              >
                <span className="text-[#fca000] font-bold">Bulk </span> Parcel
                Upload :
              </span>
            </div>
            <p className="text-[20px] text-justify">
              Upload bulk orders using Excel. Automatically detects duplicates
              before submission and saves hours of manual entry.
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
                <span className="text-[#fca000] font-bold">Transaction </span>
                Mapping:{" "}
              </span>
            </div>{" "}
            <p className="text-[20px] text-justify">
              Map vendor purchases by uploading leaves. Prevents duplicates and
              ensures traceable transaction history for compliance and audit.
            </p>
          </div>{" "}
          <div className="flex-1">
            <img src={Module001} alt="" />
          </div>
        </div>

        <div className="flex w-full md:w-10/12 mx-auto lg:flex-row flex-col p-4 gap-8">
          <div className="flex-1">
            <img src={Module001} alt="" />
          </div>
          <div className="flex-1 gap-3 w-full flex flex-col justify-center">
            <div className="flex items-center justify-start mb-2">
              <span
                className="text-[24px] font-semibold whitespace-nowrap uppercase"
                style={{
                  borderBottom: "3px solid #fca000",
                  color: "#000000",
                  paddingBottom: "2px",
                }}
              >
                <span className="text-[#fca000] font-bold">Employee </span>{" "}
                Management :
              </span>
            </div>
            <p className="text-[20px] text-justify">
              Onboard employees with ease. Assign roles, email credentials, and
              track onboarding progress in one place.
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
                <span className="text-[#fca000] font-bold">
                  Finance & Payment{" "}
                </span>
                Tracking:{" "}
              </span>
            </div>{" "}
            <p className="text-[20px] text-justify">
              Manage customer balances, accept payments via GPay or cash, and
              audit records with full transparency.
            </p>
          </div>{" "}
        </div>
        <div className="flex w-full md:w-10/12 mx-auto lg:flex-row flex-col p-4 gap-8 mt-5">
          <div className="flex-1 gap-3 w-full flex flex-col justify-center">
            <div className="flex items-center justify-start mb-2">
              <span
                className="text-[24px] font-semibold whitespace-nowrap uppercase"
                style={{
                  borderBottom: "3px solid #fca000",
                  color: "#000000",
                  paddingBottom: "2px",
                }}
              >
                <span className="text-[#fca000] font-bold">
                  Reports & Leaf{" "}
                </span>
                Management :
              </span>
            </div>
            <p className="text-[20px] text-justify">
              Split leaves into subcategories, generate reports, and export them
              for internal or client reviews.
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
                <span className="text-[#fca000] font-bold">Custom </span>
                Settings:{" "}
              </span>
            </div>{" "}
            <p className="text-[20px] text-justify">
              Configure pricing, categories, and courier partners per your
              business model. Fully customizable for operational flexibility.
            </p>
          </div>{" "}
          <div className="flex-1">
            <img src={Module001} alt="" />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Modules;
