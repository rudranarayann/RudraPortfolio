import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    address: "",
    message: "",
    purpose: "Hier",
    photo: null,
    resume: null,
    projectDoc: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    try {
      await axios.post("http://localhost:6500/api/message", data);
      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        contactNumber: "",
        address: "",
        message: "",
        purpose: "Hier",
        photo: null,
        resume: null,
        projectDoc: null,
      });
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message.");
    }
  };

  const { purpose } = formData;

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#a18cd1] via-[#fbc2eb] to-[#fad0c4] flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl shadow-xl p-8 space-y-6 text-gray-800"
        encType="multipart/form-data"
      >
        <h2 className="text-4xl font-bold text-center text-white drop-shadow-md">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Name"
            className="input"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            required
            placeholder="Email"
            className="input"
          />
          <input
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
            placeholder="Contact Number"
            className="input"
          />
          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            placeholder="Address"
            className="input"
          />
        </div>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="input h-24 resize-none"
          required
        />

        <select
          name="purpose"
          value={formData.purpose}
          onChange={handleChange}
          className="input"
          required
        >
          <option value="Hier">Hire</option>
          <option value="Project">Project</option>
          <option value="Referral">Referral</option>
        </select>

        {purpose === "Hier" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-black font-bold">Photo</label>
              <input
                type="file"
                name="photo"
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            <div>
              <label className="block text-black font-bold">Resume</label>
              <input
                type="file"
                name="resume"
                onChange={handleChange}
                className="input"
                required
              />
            </div>
          </div>
        )}

        {purpose === "Project" && (
          <div>
            <label className="block text-white font-bold">
              Project Document
            </label>
            <input
              type="file"
              name="projectDoc"
              onChange={handleChange}
              className="input"
              required
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md"
        >
          Submit
        </button>
      </form>

     
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default Contact;
