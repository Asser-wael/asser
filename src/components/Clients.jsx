import { motion } from "framer-motion";
import c1 from  "../assets/images/sara.png";
import c2 from  "../assets/images/sara.png";
import c3 from  "../assets/images/sara.png";
import c4 from  "../assets/images/sara.png";

const clients = [
    { avatar: c1, name: "Ahmed Tarek", skill: "UI Design", description: "Handled the visual identity and design system for the Store project." },
    { avatar: c2, name: "Nourhan Said", skill: "Backend", description: "Built the order and payment service for Restaurant Management." },
    { avatar: c3, name: "Khaled Fathy", skill: "QA", description: "Led testing and bug tracking across the Clothes Store release." },
    { avatar: c4, name: "Rana Samir", skill: "Project Management", description: "Coordinated timelines and client feedback for Luxora Store." },
];

const Clients = () => {
    return (
        <section id="clients" className="py-20 px-6 md:px-20 bg-bg-elev">
            <div className="text-center mb-16">
                <span className="text-accent font-semibold text-sm tracking-wide uppercase">Collaborators</span>
                <h2 className="text-4xl font-bold text-text mt-2">People I have worked with</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {clients.map((person, index) => (
                    <motion.div
                        key={person.name}
                        className="bg-card p-6 rounded-2xl border border-border text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                    >
                        <img
                            src={person.avatar}
                            alt={person.name}
                            className="w-16 h-16 rounded-full object-cover border border-border mx-auto mb-4"
                        />
                        <h3 className="text-text font-semibold text-sm">{person.name}</h3>
                        <p className="text-accent text-xs mt-1">{person.skill}</p>
                        <p className="text-muted text-xs mt-3 leading-relaxed">{person.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Clients;