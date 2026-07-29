import { motion } from "framer-motion";
import { FaLaptopCode, FaServer, FaLayerGroup, FaBug } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    color: "#9F7AEA",
    title: "Frontend Development",
    description: "Modern, responsive web apps with React, JavaScript, and Tailwind CSS – clean, reusable components.",
  },
  {
    icon: <FaServer />,
    color: "#34D399",
    title: "Backend Development",
    description: "RESTful APIs with Node.js, Express, authentication, database integration, and secure logic.",
  },
  {
    icon: <FaLayerGroup />,
    color: "#38BDF8",
    title: "Full Stack Integration",
    description: "Connecting frontend and backend to build complete, functional applications with smooth data flow.",
  },
  {
    icon: <FaBug />,
    color: "#F472B6",
    title: "Performance & Bug Fixing",
    description: "Optimizing React apps, fixing bugs, improving performance, and enhancing user experience.",
  },
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
            key={index}
            className="relative bg-card p-8 rounded-2xl border border-border overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
          >
            {/* هالة لونية خفيفة تظهر خلف الأيقونة عند الـ hover */}
            <div
              className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-300"
              style={{ backgroundColor: service.color }}
            />

            <div
              className="relative w-14 h-14 flex items-center justify-center rounded-xl text-2xl mb-5"
              style={{ backgroundColor: `${service.color}1A`, color: service.color }}
            >
              {service.icon}
            </div>

            <h3 className="relative text-xl font-semibold text-text mb-3">{service.title}</h3>
            <p className="relative text-muted leading-relaxed text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;