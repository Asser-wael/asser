import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiRedux, SiTailwindcss } from "react-icons/si";

const skills = [
  { icon: <FaHtml5 />, color: "#E34F26", name: "HTML", level: 95, text: "Semantic, accessible markup" },
  { icon: <FaCss3Alt />, color: "#1572B6", name: "CSS", level: 90, text: "Flexbox, Grid, responsive" },
  { icon: <FaJs />, color: "#F7DF1E", name: "JavaScript", level: 85, text: "ES6+, DOM, async" },
  { icon: <FaReact />, color: "#61DAFB", name: "React", level: 90, text: "Hooks, state, components" },
  { icon: <SiRedux />, color: "#764ABC", name: "Redux Toolkit", level: 85, text: "State management" },
  { icon: <SiTailwindcss />, color: "#06B6D4", name: "Tailwind CSS", level: 80, text: "Utility‑first styling" },
  { icon: <FaNodeJs />, color: "#339933", name: "Node.js", level: 85, text: "REST APIs, auth, services" },
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
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -4, borderColor: skill.color }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span
                className="text-3xl w-12 h-12 flex items-center justify-center rounded-lg"
                style={{ backgroundColor: `${skill.color}1A`, color: skill.color }}
              >
                {skill.icon}
              </span>
              <h3 className="text-xl font-semibold text-text">{skill.name}</h3>
            </div>
            <p className="text-muted text-sm mb-4">{skill.text}</p>
            <div className="flex justify-between text-xs text-muted mb-1">
              <span>Proficiency</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full h-2 bg-border rounded-full overflow-hidden">
              {/* الشريط الملوّن بيتحرك من صفر للنسبة الحقيقية بس لما القسم يبان على الشاشة */}
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: skill.color }}
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