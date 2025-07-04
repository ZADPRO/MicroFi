import React, { useState } from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !phone || !subject || !description) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true); // show success message

    const to = "info@zadroit.com";
    const mailSubject = encodeURIComponent(`Inquiry from ${name}: ${subject}`);
    const body = encodeURIComponent(
      `Dear Zadroit Team,\n\n${description}\n\nEmail: ${email}\nPhone: ${phone}\n\nBest regards,\n${name}`
    );

    const mailtoLink = `mailto:${to}?subject=${mailSubject}&body=${body}`;
    window.location.href = mailtoLink;

    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setDescription("");
  };

  // Reset submitted when any field is edited
  const resetSubmitted = () => {
    if (submitted) setSubmitted(false);
  };

  return (
    <div>
      <div className="contactUsBanner">
        <div className="bannerOverlay">
          <h1 className="bannerTitle uppercase underline">Contact Us</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-[80px] pb-[60px]">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 border-l-4 border-[#090a58] pl-4">
            We'd love to hear from you
          </h2>

          {/* Success Message */}
          {submitted && (
            <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-md border border-green-300">
              Your message has been submitted successfully!
            </div>
          )}

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  resetSubmitted();
                }}
                placeholder="Enter Your Name"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#090a58]"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  resetSubmitted();
                }}
                placeholder="Enter Your Email"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#090a58]"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  resetSubmitted();
                }}
                placeholder="Enter Your Phone"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#090a58]"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                  resetSubmitted();
                }}
                placeholder="Enter Subject"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#090a58]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-2 text-gray-700 font-medium">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                  resetSubmitted();
                }}
                rows={5}
                placeholder="Write your message here..."
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#090a58]"
              ></textarea>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="bg-[#090a58] hover:bg-[#090a58e4] text-white px-6 py-3 rounded-md font-semibold transition duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
