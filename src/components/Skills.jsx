import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiRedux, SiTailwindcss } from "react-icons/si";
import { SiOpenai, SiFramer } from "react-icons/si";

const skills = [
    {
        icon: <FaHtml5 />,
        name: "HTML",
        level: 95,
        text: "Semantic, accessible markup",
    },
    {
        icon: <FaCss3Alt />,
        name: "CSS",
        level: 90,
        text: "Flexbox, Grid, responsive layouts",
    },
    {
        icon: <FaJs />,
        name: "JavaScript",
        level: 85,
        text: "ES6+, DOM, async",
    },
    {
        icon: <FaReact />,
        name: "React",
        level: 90,
        text: "Hooks, state, components",
    },
    {
        icon: <SiRedux />,
        name: "Redux Toolkit",
        level: 85,
        text: "State management",
    },
    {
        icon: <SiTailwindcss />,
        name: "Tailwind CSS",
        level: 80,
        text: "Utility-first styling",
    },
    {
        icon: <FaNodeJs />,
        name: "Node.js",
        level: 85,
        text: "REST APIs, auth, services",
    },
    {
        icon: <SiOpenai />,
        name: "AI Integration",
        level: 40,
        text: "Currently learning AI APIs and automation.....",
    },
    {
        icon: <SiFramer />,
        name: "Framer Motion",
        level: 40,
        text: "Currently learning advanced animations....",
    },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-20 bg-bg-elev">
      <div className="text-center mb-16">
        <span className="text-accent font-semibold text-sm tracking-wide uppercase">Toolbox</span>
        <h2 className="text-4xl font-bold text-text mt-2">Skills</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="bg-card p-6 rounded-2xl border border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-accent text-2xl">{skill.icon}</span>
              <h3 className="text-lg font-semibold text-text">{skill.name}</h3>
            </div>
            <p className="text-muted text-sm mb-4">{skill.text}</p>
            <div className="flex justify-between text-xs text-muted mb-1">
              <span>Proficiency</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full h-2 bg-border rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-accent"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: index * 0.1, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;