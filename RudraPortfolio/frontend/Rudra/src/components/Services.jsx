import React from "react";
import { motion } from "framer-motion";
import { Code, Smartphone, PenTool } from "lucide-react";

const services = [
  { title: "Web Development", icon: <Code size={32} />, desc: "Responsive and modern websites" },
  { title: "UI/UX Design", icon: <PenTool size={32} />, desc: "User-friendly and engaging design" },
  { title: "App Development", icon: <Smartphone size={32} />, desc: "Mobile-first performance" },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white text-gray-800">
      <motion.div
        className="container mx-auto px-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-12">My Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 border rounded-xl shadow hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-indigo-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
