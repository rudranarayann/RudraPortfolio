// src/components/Contact.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    address: '',
    purpose: '',
    message: '',
    photo: null,
    resume: null,
    projectDoc: null,
  });

  const handleChange = e => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, val]) => {
      if (val) data.append(key, val);
    });

    try {
      await axios.post(
        'http://localhost:6500/api/message',
        data,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
      toast.success('Message submitted successfully!');
      // Optionally clear form
      setFormData({
        name: '',
        email: '',
        contactNumber: '',
        address: '',
        purpose: '',
        message: '',
        photo: null,
        resume: null,
        projectDoc: null,
      });
    } catch (err) {
      console.error('Submission error:', err.response?.data || err.message);
      toast.error('Submission failed.');
    }
  };

  return (
    <div className="p-8 max-w-lg mx-auto bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Name"
          className="w-full border px-3 py-2 rounded"
        />
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Email"
          className="w-full border px-3 py-2 rounded"
        />
        <input
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          placeholder="Contact Number"
          className="w-full border px-3 py-2 rounded"
        />
        <input
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          className="w-full border px-3 py-2 rounded"
        />
        <select
          name="purpose"
          value={formData.purpose}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        >
          <option value="">Select Purpose</option>
          <option value="Hier">Hire</option>
          <option value="Project">Project</option>
          <option value="Referral">Referral</option>
        </select>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          placeholder="Your Message"
          className="w-full border px-3 py-2 rounded"
        />
        <div>
          <label className="block mb-1">Photo</label>
          <input type="file" name="photo" onChange={handleChange} accept="image/*" />
        </div>
        <div>
          <label className="block mb-1">Resume</label>
          <input type="file" name="resume" onChange={handleChange} accept=".pdf,.doc,.docx" />
        </div>
        <div>
          <label className="block mb-1">Project Doc</label>
          <input type="file" name="projectDoc" onChange={handleChange} />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
