import React from "react";


import webImg from "../assets/webdesign.jpg";
import devImg from "../assets/Development.jpg";
import seoImg from "../assets/Seo.jpeg";
import contentImg from "../assets/content.png";
import wordpressImg from "../assets/networking.webp";
import videoImg from "../assets/cloud.jpeg";


const serviceList = [
  {
    title: "Web Design",
    subtitle: "Designing responsive and visually engaging websites using the MERN stack (MongoDB, Express.js, React, Node.js), focusing on user experience, seamless navigation, and performance optimization.",
    image: webImg,
  },
  {
    title: "Web Development",
    subtitle: "Building robust backend systems using Java for secure and scalable data handling, while leveraging Python to create efficient and flexible APIs for seamless integration and data exchange.",
    image: devImg,
  },
  {
    title: "SEO",
    subtitle: "Provide expert SEO services to improve your website's visibility, drive organic traffic, and increase conversions. Our strategy includes on-page, off-page, and technical SEO using industry-leading tools.",
    image: seoImg,
  },
  {
    title: "Content Writing",
    subtitle: "Create clear, engaging, and professional content tailored to your brand voice and audience. Whether it's blog posts, product descriptions, or website copy, our writing helps convey your message effectively and keeps readers interested.",
    image: contentImg,
  },
  {
    title: "Networking",
    subtitle: "Provide reliable networking services that help connect devices, share data, and keep communication fast and secure using tools like Wireshark, SSH, and VPNs..",
    image: wordpressImg,
  },
  {
    title: "Cloud Computing",
    subtitle: "Provide secure and scalable cloud computing services that enable you to store, manage, and access your data and applications from anywhere, anytime.",
    image: videoImg,
  },
];

function Services() {
  return (
    <section className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-16 px-4 sm:px-8 w-full min-h-screen">
      
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 font-poppins">
          My Services
        </h2>
        <p className="mt-3 text-gray-600 text-lg">What I can do for you</p>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {serviceList.map((service, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl shadow-xl bg-white"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-[90%] h-80 object-cover mx-auto mt-4 rounded-lg transition-transform duration-500 group-hover:scale-105"
            />

            <div className="text-center py-4 px-3">
              <h3 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
            </div>

            
            <div className="absolute inset-0 bg-black bg-opacity-70 text-white flex items-center justify-center px-6 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
              <p className="text-center text-sm sm:text-base">
                {service.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
