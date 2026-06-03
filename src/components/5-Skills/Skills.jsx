import "./Skills.css";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
} from "react-icons/fa";

import { SiRedux, SiTailwindcss } from "react-icons/si";

const cards = [
    {
        icon: <FaHtml5 />,
        color: "#E34F26",
        name: "HTML",
        level: 95,
        text: "Building clean, semantic, and accessible page structures",
    },
    {
        icon: <FaCss3Alt />,
        color: "#1572B6",
        name: "CSS",
        level: 90,
        text: "Styling modern, responsive layouts with Flexbox and Grid",
    },
    {
        icon: <FaJs />,
        color: "#F7DF1E",
        name: "JavaScript",
        level: 85,
        text: "Adding interactivity, logic, and dynamic behavior to websites",
    },
    {
        icon: <FaReact />,
        color: "#61DAFB",
        name: "React",
        level: 90,
        text: "Creating reusable components and dynamic user interfaces",
    },
    {
        icon: <SiRedux />,
        color: "#764ABC",
        name: "Redux Toolkit",
        level: 85,
        text: "Managing complex application state efficiently and cleanly",
    },
    {
        icon: <SiTailwindcss />,
        color: "#06B6D4",
        name: "Tailwind CSS",
        level: 80,
        text: "Building fast and responsive modern user interfaces",
    },
    {
        icon: <FaNodeJs />,
        color: "#339933",
        name: "Node.js",
        level: 85,
        text: "Building REST APIs, authentication systems, and backend services",
    },
];

const Skills = () => {
    return (
        <>
            <Helmet>
                <title>مهاراتي | Asser Wael Portfolio</title>

                <meta
                    name="description"
                    content="تعرف على مهارات Asser Wael في تطوير الويب: HTML, CSS, JavaScript, React, Redux, Tailwind CSS و Node.js."
                />

                <meta property="og:title" content="مهارات Asser Wael" />

                <meta
                    property="og:description"
                    content="Building modern, responsive, and interactive web applications."
                />

                <meta property="og:image" content="/skills-preview.png" />
            </Helmet>

            <motion.div className="skills">
                {cards.map((item, index) => (
                    <motion.div key={item.name} className="skill-card">
                        <motion.div
                            className="skill-icon"
                            style={{ color: item.color }}
                            initial={{ opacity: 0, scale: 0.7 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            {item.icon}
                        </motion.div>

                        <h2>{item.name}</h2>

                        <p>{item.text}</p>

                        <div className="skill-level">
                            Level: <span>{item.level}%</span>
                        </div>

                        <div
                            className="skill-bar"
                            style={{ backgroundColor: "var(--border)" }}
                        >
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${item.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            />
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </>
    );
};

export default Skills;