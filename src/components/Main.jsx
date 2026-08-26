import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaGithub,
    FaExternalLinkAlt,
    FaTimes,
} from "react-icons/fa";

import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";

const projects = [
    {
        img: project1,
        images: [project1],
        title: "Store",
        tag: "Full Stack",
        subtitle:
            "Modern e-commerce platform with authentication, cart management, real-time updates, and a complete admin dashboard.",
        link: "https://moataz-client.vercel.app/",
        github: "https://github.com/Asser-wael/moataz_client",
        features: [
            "JWT authentication with email verification and protected routes",
            "Persistent cart and guest cart management",
            "Product search, filtering, categories, and detailed product pages",
            "Order creation, tracking, and status management",
            "Complete admin dashboard for products, users, and orders",
        ],
        team: ["Asser — Full Stack"],
    },

    {
        img: project2,
        images: [project2],
        title: "Restaurant Management",
        tag: "Full Stack",
        subtitle:
            "Real-time restaurant management system with online ordering, cashier, kitchen display, and admin dashboard.",
        link: "https://restaurant-client-six-self.vercel.app/",
        github: "https://github.com/Asser-wael/restaurant-client",
        features: [
            "Real-time order synchronization using Socket.IO",
            "Dedicated cashier and kitchen display workflows",
            "Role-based access control for staff and administrators",
            "Online ordering with order status tracking",
            "Sales analytics and daily reporting",
        ],
        team: ["Asser — Full Stack"],
    },

    {
        img: project3,
        images: [project3],
        title: "Personal Portfolio",
        tag: "React",
        subtitle:
            "Responsive developer portfolio with modern UI, smooth animations, and optimized user experience.",
        link: "https://asser-iota.vercel.app/",
        github: "https://github.com/Asser-wael/asser",
        features: [
            "Responsive mobile-first design",
            "Smooth Framer Motion animations and transitions",
            "Dark and light mode support",
            "Interactive project showcase and contact sections",
            "Optimized component-based React architecture",
        ],
        team: ["Asser — Full Stack"],
    },

    {
        img: project4,
        images: [project4],
        title: "Clothes Store",
        tag: "Full Stack",
        subtitle:
            "Full-stack fashion e-commerce platform with product variants, cart management, authentication, and admin tools.",
        link: "https://clothes-client-six.vercel.app/",
        github: "https://github.com/Asser-wael/clothes-client",
        features: [
            "Product variants with sizes, prices, offers, colors, and stock",
            "JWT authentication with protected user and admin routes",
            "Cart, checkout, order history, and order tracking",
            "Admin product and order management",
            "Responsive shopping experience with modern product pages",
        ],
        team: ["Asser — Full Stack"],
    },

    {
        img: project5,
        images: [project5],
        title: "Luxora Store",
        tag: "Full Stack",
        subtitle:
            "Premium full-stack fashion e-commerce experience with secure authentication, advanced product management, real-time notifications, and a complete admin dashboard.",
        link: "https://lux-client-one.vercel.app/",
        github: "https://github.com/Asser-wael/Lux_client",
        features: [
            "Advanced product variants with sizes, prices, offers, colors, and inventory",
            "Cart, checkout, and a professional order history",
            "Real-time order status updates and browser push notifications",
            "Admin dashboard with product, order, user, and inventory management",
            "Secure authentication with JWT, protected routes, and role-based access",
        ],
        team: ["Asser — Full Stack"],
    },
];

const Main = () => {
    const [selected, setSelected] = useState(null);

    const closeModal = () => {
        setSelected(null);
    };

    return (
        <section
            id="projects"
            className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-bg-elev"
        >
            {/* =========================
                Section Header
            ========================== */}
            <div className="text-center mb-12 sm:mb-16">
                <span className="text-accent font-semibold text-xs sm:text-sm tracking-wide uppercase">
                    Portfolio
                </span>

                <h2 className="text-3xl sm:text-4xl font-bold text-text mt-2">
                    Featured Projects
                </h2>

                <p className="text-muted mt-3 max-w-xl mx-auto text-sm sm:text-base leading-relaxed px-2">
                    A collection of projects covering both frontend and backend
                    development with complete user experiences.
                </p>
            </div>

            {/* =========================
                Projects Grid
            ========================== */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                {projects.map((project) => (
                    <motion.div
                        key={project.title}
                        className="bg-card rounded-2xl overflow-hidden border border-border flex flex-col"
                        initial={{
                            opacity: 0,
                            y: 30,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.15,
                        }}
                        transition={{
                            duration: 0.4,
                        }}
                        whileHover={{
                            y: -5,
                        }}
                    >
                        {/* =========================
                            Project Image
                        ========================== */}
                        <button
                            type="button"
                            onClick={() => setSelected(project)}
                            className="block w-full text-left overflow-hidden"
                            aria-label={`View details for ${project.title}`}
                        >
                            <img
                                src={project.img}
                                alt={project.title}
                                loading="lazy"
                                className="w-full h-48 sm:h-52 object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </button>

                        {/* =========================
                            Project Content
                        ========================== */}
                        <div className="p-5 sm:p-6 flex flex-col flex-1">
                            <div className="flex justify-between items-start gap-3 mb-2">
                                <h3 className="text-lg sm:text-xl font-semibold text-text">
                                    {project.title}
                                </h3>

                                <span className="text-[10px] sm:text-xs font-medium text-accent border border-border px-2 py-1 rounded-full whitespace-nowrap">
                                    {project.tag}
                                </span>
                            </div>

                            <p className="text-muted text-sm leading-relaxed flex-1">
                                {project.subtitle}
                            </p>

                            {/* =========================
                                Card Actions
                            ========================== */}
                            <div className="flex flex-wrap gap-2 sm:gap-3 mt-5">
                                <button
                                    type="button"
                                    onClick={() => setSelected(project)}
                                    className="text-sm font-medium px-4 py-2 rounded-lg border border-border text-text hover:border-accent hover:text-accent transition"
                                >
                                    Details
                                </button>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-accent hover:bg-accent-dim text-white transition"
                                >
                                    <FaExternalLinkAlt size={12} />
                                    Live
                                </a>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border border-border text-text hover:bg-bg transition"
                                >
                                    <FaGithub size={14} />
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* =========================
                Project Modal
            ========================== */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-3 sm:p-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            className="bg-card border border-border rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto overscroll-contain"
                            initial={{
                                opacity: 0,
                                y: 20,
                                scale: 0.98,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                y: 10,
                                scale: 0.98,
                            }}
                            transition={{
                                duration: 0.2,
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* =========================
                                Modal Header
                            ========================== */}
                            <div className="sticky top-0 bg-card border-b border-border px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex justify-between items-start gap-3 z-10">
                                <div className="min-w-0">
                                    <h3 className="text-xl sm:text-2xl font-semibold text-text break-words">
                                        {selected.title}
                                    </h3>

                                    <span className="inline-block mt-2 text-xs font-medium text-accent border border-border px-2 py-1 rounded-full">
                                        {selected.tag}
                                    </span>
                                </div>

                                <button
                                    type="button"
                                    onClick={closeModal}
                                    aria-label="Close modal"
                                    className="shrink-0 w-9 h-9 flex items-center justify-center rounded-lg text-muted hover:text-text hover:bg-bg transition"
                                >
                                    <FaTimes size={18} />
                                </button>
                            </div>

                            {/* =========================
                                Modal Content
                            ========================== */}
                            <div className="px-4 sm:px-6 lg:px-8 py-6">
                                {/* Description */}
                                <p className="text-muted text-sm leading-relaxed mb-8 max-w-2xl">
                                    {selected.subtitle}
                                </p>

                                {/* =========================
                                    Image Gallery
                                ========================== */}
                                {selected.images?.length > 0 && (
                                    <div className="mb-8">
                                        <h4 className="text-text font-medium text-sm mb-3">
                                            Screenshots
                                        </h4>

                                        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3">
                                            {selected.images.map((src, i) => (
                                                <div
                                                    key={`${selected.title}-${i}`}
                                                    className="overflow-hidden rounded-lg border border-border bg-bg"
                                                >
                                                    <img
                                                        src={src}
                                                        alt={`${selected.title} screenshot ${i + 1
                                                            }`}
                                                        loading="lazy"
                                                        className="w-full h-40 sm:h-36 object-cover transition-transform duration-300 hover:scale-105"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* =========================
                                    Features
                                ========================== */}
                                {selected.features?.length > 0 && (
                                    <div className="mb-8">
                                        <h4 className="text-text font-medium text-sm mb-3">
                                            Key features
                                        </h4>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {selected.features.map(
                                                (feature) => (
                                                    <div
                                                        key={feature}
                                                        className="border-l-2 border-accent bg-bg rounded-r-lg px-4 py-3"
                                                    >
                                                        <p className="text-text text-sm leading-relaxed">
                                                            {feature}
                                                        </p>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* =========================
                                    Team
                                ========================== */}
                                {selected.team?.length > 0 && (
                                    <div className="mb-8">
                                        <h4 className="text-text font-medium text-sm mb-3">
                                            Worked on this with
                                        </h4>

                                        <div className="flex flex-wrap gap-2">
                                            {selected.team.map((person) => (
                                                <span
                                                    key={person}
                                                    className="text-xs text-muted border border-border rounded-full px-3 py-1.5"
                                                >
                                                    {person}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* =========================
                                    Actions
                                ========================== */}
                                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                    <a
                                        href={selected.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 text-sm font-medium px-4 py-2.5 rounded-lg bg-accent hover:bg-accent-dim text-white transition"
                                    >
                                        <FaExternalLinkAlt size={12} />
                                        Live Project
                                    </a>

                                    <a
                                        href={selected.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 text-sm font-medium px-4 py-2.5 rounded-lg border border-border text-text hover:bg-bg transition"
                                    >
                                        <FaGithub size={14} />
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Main;