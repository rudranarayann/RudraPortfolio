import React from "react";
import { motion } from "framer-motion";

const posts = [
  {
    title: "Why React is Awesome",
    desc: "A deep dive into React's capabilities and why developers love it.",
  },
  {
    title: "Tailwind Tips for Designers",
    desc: "Simple ways to create stunning designs using Tailwind CSS.",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gray-100 text-gray-800">
      <motion.div
        className="container mx-auto px-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-12">Blog</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
              <p>{post.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Blog;
