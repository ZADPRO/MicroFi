import React from "react";
import {
  CreditCard,
  Users,
  Banknote,
  FileText,
  ClipboardList,
  Building2,
} from "lucide-react";
import ERP from "../../assets/home/ERP.jpg";
import "./Home.css";

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

const stats = [
  { label: "Loans Disbursed", value: "12K+" },
  { label: "EMIs Collected", value: "65K+" },
  { label: "Agents Onboarded", value: "200+" },
  { label: "Branches Managed", value: "50+" },
];

const Home: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Banner */}
      <div className="HomeBanner">
        <div className="HomeBannerOverlay flex items-center justify-center h-[350px] text-white">
          <h1 className="HomeBannerTitle text-4xl md:text-5xl font-bold uppercase underline">
            Welcome to ZADPRO MicroFin
          </h1>
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
              ZADPRO MicroFin is a comprehensive loan management platform
              tailored for microfinance institutions and individual lenders. We
              bring automation, transparency, and accuracy across every aspect
              of your loan lifecycle—from customer onboarding to final
              repayments and reporting.
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
            MicroFin Modules Highlights
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
      <section className="py-12 bg-gray-100">
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
      </section>

      {/* CTA Section */}
      <section className="bg-[#fca000] py-14 text-white text-center px-4">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Digitize Your Lending Workflow?
        </h3>
        <p className="max-w-2xl mx-auto mb-6">
          Join microfinance organizations and individual lenders already using
          ZADPRO MicroFin to streamline their loan management operations with
          confidence and speed.
        </p>
        <button className="bg-white text-[#fca000] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition duration-300">
          Request a Demo
        </button>
      </section>
    </div>
  );
};

export default Home;
