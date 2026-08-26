import { motion } from "framer-motion";
import { FaLaptopCode, FaServer, FaLayerGroup, FaBug } from "react-icons/fa";

const services = [
  { icon: <FaLaptopCode />, title: "Frontend Development", description: "Modern, responsive web apps with React, JavaScript, and Tailwind CSS, built from reusable components." },
  { icon: <FaServer />, title: "Backend Development", description: "REST APIs with Node.js and Express, covering authentication, database integration, and business logic." },
  { icon: <FaLayerGroup />, title: "Full Stack Integration", description: "Connecting frontend and backend into complete, working applications with reliable data flow." },
  { icon: <FaBug />, title: "Performance & Bug Fixing", description: "Optimizing React apps, fixing bugs, and improving load time and interaction speed." },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 md:px-20">
      <div className="text-center mb-16">
        <span className="text-accent font-semibold text-sm tracking-wide uppercase">What I Do</span>
        <h2 className="text-4xl font-bold text-text mt-2">Services</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="bg-card p-8 rounded-2xl border border-border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="text-accent text-2xl mb-5">{service.icon}</div>
            <h3 className="text-xl font-semibold text-text mb-3">{service.title}</h3>
            <p className="text-muted leading-relaxed text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;