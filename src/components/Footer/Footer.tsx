import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto flex gap-8 lg:flex-row flex-col">
        {/* Section 1 - Company Name + Description */}
        <div className="flex-2">
          <h2 className="text-2xl font-bold mb-4 text-[#fca000]">
            EXPRESS LOGISTICS
          </h2>
          <p className="text-sm text-gray-300 mb-4">
            One Unified Platform to Book, Track, Manage, and Report Shipments
            with Real-Time Finance and Employee Insights.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-2">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#fca000] transition text-lg"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#fca000] transition text-lg"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#fca000] transition text-lg"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#fca000] transition text-lg"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Section 2 - Quick Links */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4 text-[#fca000]">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a
                href="/"
                className="hover:text-[#fca000] hover:font-semibold transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-[#fca000] hover:font-semibold transition"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/modules"
                className="hover:text-[#fca000] hover:font-semibold transition"
              >
                Modules
              </a>
            </li>
            <li>
              <a
                href="/blogs"
                className="hover:text-[#fca000] hover:font-semibold transition"
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-[#fca000] hover:font-semibold transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3 - Contact Info */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4 text-[#fca000]">
            Contact Us
          </h3>
          <ul className="text-gray-300 text-sm space-y-2">
            <li>
              <span className="font-medium">Phone:</span> +968 97424232
            </li>
            <li>
              <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:expresslogistics@zadroit.com"
                className="hover:text-[#fca000] transition"
              >
                expresslogistics@zadroit.com
              </a>
            </li>
            <li>
              <a
                href="mailto:info@zadroit.com"
                className="hover:text-[#fca000] transition"
              >
                info@zadroit.com
              </a>
            </li>
            <li>
              <span className="font-medium">Location:</span> Salem
            </li>
          </ul>
        </div>

        {/* Section 4 - Google Map */}
        <div className="flex-2">
          <h3 className="text-xl font-semibold mb-4 text-[#fca000]">Find Us</h3>

          <div className="rounded-md overflow-hidden border border-gray-600">
            <iframe
              title="ZAdroit IT Solutions Private Limited Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.015920958754!2d78.1524706!3d11.6457884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babef6bdbbc3f7d%3A0x404c804a4826efdf!2sZAdroit%20IT%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
              width="100%"
              height="200"
              loading="lazy"
              allowFullScreen
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Zadroit - ZAdPro Express Logistics.
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
