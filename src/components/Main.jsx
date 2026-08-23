import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";

const projects = [
    {
        img: project1,
        title: "Store",
        tag: "Full Stack",
        subtitle: "Modern e‑commerce with React, Redux Toolkit, Express, authentication, and cart.",
        link: "https://moataz-client.vercel.app/",
        github: "https://github.com/Asser-wael/moataz_client",
    },
    {
        img: project2,
        title: "Restaurant Management",
        tag: "Full Stack",
        subtitle: "Real‑time orders, cashier, kitchen display, admin dashboard, and online ordering.",
        link: "https://restaurant-client-six-self.vercel.app/",
        github: "https://github.com/Asser-wael/restaurant-client",
    },
    {
        img: project3,
        title: "Personal Portfolio",
        tag: "React",
        subtitle: "Responsive portfolio with smooth animations, clean UI, and optimized performance.",
        link: "https://asser-iota.vercel.app/",
        github: "https://github.com/Asser-wael/asser",
    },
    {
        img: project4,
        title: "Clothes Store",
        tag: "Full Stack",
        subtitle: "Full‑stack clothing store with product management, cart, authentication, and admin dashboard.",
        link: "https://clothes-client-six.vercel.app/",
        github: "https://github.com/Asser-wael/clothes-client",
    },
    {
        img: project5,
        title: "Luxora Store",
        tag: "Full Stack",
        subtitle:
            "A premium full-stack fashion e-commerce experience built with a luxury-focused UI, secure authentication, dynamic product management, cart and checkout workflows, responsive design, and a complete admin dashboard.",
        link: "https://clothes-client-six.vercel.app/",
        github: "https://github.com/Asser-wael/clothes-client",
    },
];

const Main = () => {
    return (
        <section id="projects" className="py-20 px-6 md:px-20 bg-bg-elev">
            <div className="text-center mb-16">
                <span className="text-accent font-semibold text-sm tracking-wide uppercase">Portfolio</span>
                <h2 className="text-4xl font-bold text-text mt-2">Featured Projects</h2>
                <p className="text-muted mt-3 max-w-xl mx-auto">
                    A collection of projects I have worked on, covering both Frontend and Backend
                    development with complete user experiences.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="group bg-card rounded-2xl overflow-hidden border border-border shadow-lg"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ y: -8 }}
                    >
                        <div className="relative overflow-hidden h-48">
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        <div className="p-6">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-semibold text-text">{project.title}</h3>
                                <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full whitespace-nowrap">
                                    {project.tag}
                                </span>
                            </div>
                            <p className="text-muted text-sm leading-relaxed">{project.subtitle}</p>

                            <div className="flex gap-3 mt-5">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-accent hover:bg-accent-dim text-white transition"
                                >
                                    <FaExternalLinkAlt size={12} /> Live
                                </a>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border border-border text-text hover:bg-bg-elev transition"
                                >
                                    <FaGithub size={14} /> GitHub
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Main;