import React from "react";
import batoiImg from "../assets/hackathon-work.jpg";
import sihImg from "../assets/Sih.jpg";
import reimagineImg from "../assets/work-pic-1.jpg";

const vlogPosts = [
  {
    title: "BATOI Sponsored Hackathon",
    date: "June 1, 2024",
    description: "Participated in an innovative hackathon sponsored by BATOI, showcasing real-world problem-solving skills.",
    thumbnail: batoiImg,
  },
  {
    title: "SIH Hackathon",
    date: "May 24, 2025",
    description: "Built a smart solution in the Smart India Hackathon (SIH) using the latest tech stack and teamwork.",
    thumbnail: sihImg,
  },
  {
    title: "Re-imagine Hackathon",
    date: "May 10, 2025",
    description: "Designed and pitched a creative app idea in the Re-imagine Hackathon to solve everyday challenges.",
    thumbnail: reimagineImg,
  },
];

const Vlog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-pink-100 to-yellow-100 py-10 px-4 sm:px-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12 animate-pulse">
        🌈 My Vlog World 🎥
      </h1>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {vlogPosts.map((vlog, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-500"
          >
            <img
              src={vlog.thumbnail}
              alt={vlog.title}
              className="w-full aspect-video object-cover object-center"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2 hover:text-pink-600 transition duration-300">
                {vlog.title}
              </h2>
              <p className="text-sm text-gray-500 mb-2">{vlog.date}</p>
              <p className="text-gray-600">{vlog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vlog;
