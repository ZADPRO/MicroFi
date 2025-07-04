import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Image/Logo.png";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [menuStatus, setMenuStatus] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNavigation = (path: string) => {
    navigate(path);
    setMenuStatus(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div
        className={`h-[75px] text-[15px] fixed inset-0 flex items-center justify-center shadow-xs backdrop-blur-md bg-white/30 border-b border-white/20 transition-colors duration-300`}
        style={{ zIndex: "100" }}
      >
        <div
          className={`w-full flex ${
            menuStatus ? "fixed z-50" : ""
          } justify-center items-center h-[80px`}
        >
          <div className="w-[80%] h-[10vh] lg:w-[93%] flex justify-evenly items-center">
            <div className="w-[50%] lg:w-[30%] flex justify-start">
              <img src={logo} className="w-[100px]" alt="log" />
              {/* <h2 className="companyName font-bold cursor-pointer flex lg:flex-row flex-col lg:gap-2">
                <span className="text-[#090a58] lg:text-[22px] text-[18px] tracking-wide">
                  ZAdPro{" "}
                </span>
                <span className="text-[#fca000] lg:text-[22px] text-[12px]">
                  Micro-Fi
                </span>
              </h2> */}
            </div>
            <div className="hidden lg:flex w-[90%] justify-center gap-x-10">
              <div
                className={`text-[20px] cursor-pointer font-bold underline-animation transition duration-300 ease-in-out relative after:content-[''] after:block after:h-[2px] after:w-0 hover:after:w-full after:bg-[#fca000] after:transition-all after:duration-300 ${
                  scrolled
                    ? "text-black hover:text-[#090a58]"
                    : "text-white hover:text-[#090a58]"
                }`}
                onClick={() => handleNavigation("/")}
              >
                Home
              </div>
              <div
                className={`text-[20px] cursor-pointer font-bold underline-animation transition duration-300 ease-in-out relative after:content-[''] after:block after:h-[2px] after:w-0 hover:after:w-full after:bg-[#fca000] after:transition-all after:duration-300 ${
                  scrolled
                    ? "text-black hover:text-[#090a58]"
                    : "text-white hover:text-[#090a58]"
                }`}
                onClick={() => {
                  handleNavigation("/about");
                }}
              >
                About
              </div>
              <div
                className={`text-[20px] cursor-pointer font-bold underline-animation transition duration-300 ease-in-out relative after:content-[''] after:block after:h-[2px] after:w-0 hover:after:w-full after:bg-[#fca000] after:transition-all after:duration-300 ${
                  scrolled
                    ? "text-black hover:text-[#090a58]"
                    : "text-white hover:text-[#090a58]"
                }`}
                onClick={() => {
                  handleNavigation("/modules");
                }}
              >
                Modules
              </div>
              <div
                className={`text-[20px] cursor-pointer font-bold underline-animation transition duration-300 ease-in-out relative after:content-[''] after:block after:h-[2px] after:w-0 hover:after:w-full after:bg-[#fca000] after:transition-all after:duration-300 ${
                  scrolled
                    ? "text-black hover:text-[#090a58]"
                    : "text-white hover:text-[#090a58]"
                }`}
                onClick={() => {
                  handleNavigation("/blogs");
                }}
              >
                Blogs
              </div>
              <div
                className={`text-[20px] cursor-pointer font-bold underline-animation transition duration-300 ease-in-out relative after:content-[''] after:block after:h-[2px] after:w-0 hover:after:w-full after:bg-[#fca000] after:transition-all after:duration-300 ${
                  scrolled
                    ? "text-black hover:text-[#090a58]"
                    : "text-white hover:text-[#090a58]"
                }`}
                onClick={() => {
                  handleNavigation("/contact");
                }}
              >
                Contact
              </div>
            </div>
            <div className="w-[50%] lg:w-[10%] flex justify-end">
              <img src="logo" alt="" />
            </div>
            <div className="w-[0%] ml-14 flex lg:hidden justify-center items-center">
              <button
                className={`relative order-10 cursor-pointer block self-center lg:hidden ${
                  menuStatus
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                    : ""
                }`}
                onClick={() => setMenuStatus(!menuStatus)}
                aria-expanded={menuStatus ? true : false}
                aria-label="Toggle navigation"
              >
                <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                  <span
                    aria-hidden="true"
                    className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                  ></span>
                  <span
                    aria-hidden="true"
                    className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                  ></span>
                  <span
                    aria-hidden="true"
                    className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Fullscreen Menu for Mobile */}
        <div
          className={`w-full h-[90vh] overflow-y-auto z-50 mt-[10vh] fixed top-0 left-0 transition-all duration-500 ease-in-out bg-white transform ${
            menuStatus
              ? "translate-x-0 opacity-100 visible"
              : "-translate-x-full opacity-0 invisible"
          }`}
        >
          <div className="flex flex-col items-center justify-start h-full">
            <div className="w-[80%] mt-10">
              <div
                className="text-[20px] cursor-pointer py-3 font-bold"
                onClick={() => {
                  handleNavigation("/");
                }}
              >
                Home
              </div>
              <div
                className="text-[20px] cursor-pointer  py-3 font-bold"
                onClick={() => {
                  handleNavigation("/about");
                }}
              >
                About
              </div>
              <div
                className="text-[20px] cursor-pointer  py-3 font-bold"
                onClick={() => {
                  handleNavigation("/modules");
                }}
              >
                Modules
              </div>
              <div
                className="text-[20px] cursor-pointer  py-3 font-bold"
                onClick={() => {
                  handleNavigation("/blogs");
                }}
              >
                Blogs
              </div>
              <div
                className="text-[20px] cursor-pointer  py-3 font-bold"
                onClick={() => {
                  handleNavigation("/contact");
                }}
              >
                Contact
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
