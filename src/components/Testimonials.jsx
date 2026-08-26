import { motion } from "framer-motion";
import t1 from "../assets/images/sara.png";
import t2 from "../assets/images/sara.png";
import t3 from "../assets/images/sara.png";

const testimonials = [
    {
        avatar: t1,
        name: "Sara Mostafa",
        role: "Founder, Store project",
        quote: "Asser rebuilt our checkout flow in under two weeks and cut cart abandonment noticeably. Clear communication throughout.",
    },
    {
        avatar: t2,
        name: "Omar Hassan",
        role: "Owner, Restaurant Management",
        quote: "The kitchen display and order sync worked exactly as we needed from day one. Support after launch was fast.",
    },
    {
        avatar: t3,
        name: "Mona Adel",
        role: "Product lead, Luxora Store",
        quote: "Clean code, easy to hand off to our internal team, and the admin dashboard saved us hours every week.",
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 px-6 md:px-20">
            <div className="text-center mb-16">
                <span className="text-accent font-semibold text-sm tracking-wide uppercase">Feedback</span>
                <h2 className="text-4xl font-bold text-text mt-2">Testimonials</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {testimonials.map((item, index) => (
                    <motion.div
                        key={item.name}
                        className="bg-card p-6 rounded-2xl border border-border"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                        <p className="text-text text-sm leading-relaxed mb-6">{item.quote}</p>
                        <div className="flex items-center gap-3">
                            <img
                                src={item.avatar}
                                alt={item.name}
                                className="w-11 h-11 rounded-full object-cover border border-border"
                            />
                            <div>
                                <p className="text-text font-medium text-sm">{item.name}</p>
                                <p className="text-muted text-xs">{item.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;