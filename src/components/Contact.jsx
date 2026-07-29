import { useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet-async";
import { useForm, ValidationError } from "@formspree/react";
import { FaEnvelope, FaWhatsapp, FaPaperPlane } from "react-icons/fa";
import mailAnimation from "../assets/animations/mail.json";
import successAnimation from "../assets/animations/success.json";

const Contact = () => {
    // فورم الإيميل (Formspree) - نفس الكود زي ما هو، ماغيرتش في المنطق خالص
    const [state, handleSubmit] = useForm("xkgvzzro");

    // فورم الواتساب
    const [whatsappName, setWhatsappName] = useState("");
    const [whatsappMessage, setWhatsappMessage] = useState("");

    const handleWhatsAppSend = (e) => {
        e.preventDefault();
        const phone = "201129691951"; // بدون '+'
        const text = `Name: ${whatsappName}%0AMessage: ${whatsappMessage}`;
        const url = `https://wa.me/${phone}?text=${text}`;
        window.open(url, "_blank");
    };

    // شاشة النجاح بعد إرسال الإيميل بنجاح
    if (state.succeeded) {
        return (
            <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
                <Lottie animationData={successAnimation} loop={false} className="w-32" />
                <p className="text-xl text-mint mt-4 font-medium">Thank you! Your message was sent successfully.</p>
            </section>
        );
    }

    return (
        <>
            <Helmet>
                <title>Contact – Asser Wael</title>
                <meta name="description" content="Get in touch with Asser Wael via email or WhatsApp." />
            </Helmet>

            <section id="contact" className="py-20 px-6 md:px-20">
                <div className="text-center mb-16">
                    <span className="text-accent font-semibold text-sm tracking-wide uppercase">Get In Touch</span>
                    <h2 className="text-4xl font-bold text-text mt-2">Contact</h2>
                    <p className="text-muted mt-3 max-w-xl mx-auto">
                        Have a project or an idea? Feel free to send me an email or reach out directly
                        on WhatsApp.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* فورم الإيميل */}
                    <motion.div
                        className="bg-card p-8 rounded-2xl border border-border"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-11 h-11 flex items-center justify-center rounded-lg bg-accent/10 text-accent text-xl">
                                <FaEnvelope />
                            </span>
                            <h3 className="text-xl font-semibold text-text">Send an Email</h3>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-muted text-sm mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-2.5 bg-bg border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-text transition"
                                />
                                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-sm mt-1" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-muted text-sm mb-1">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="4"
                                    required
                                    className="w-full px-4 py-2.5 bg-bg border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-text transition resize-none"
                                />
                                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-sm mt-1" />
                            </div>
                            <motion.button
                                type="submit"
                                disabled={state.submitting}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-dim text-white font-semibold py-3 rounded-lg transition disabled:opacity-50"
                            >
                                <FaPaperPlane size={14} />
                                {state.submitting ? "Sending..." : "Send Email"}
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* فورم الواتساب */}
                    <motion.div
                        className="bg-card p-8 rounded-2xl border border-border flex flex-col"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-11 h-11 flex items-center justify-center rounded-lg bg-green-500/10 text-green-400 text-xl">
                                <FaWhatsapp />
                            </span>
                            <h3 className="text-xl font-semibold text-text">Chat on WhatsApp</h3>
                        </div>

                        <form onSubmit={handleWhatsAppSend} className="space-y-4 flex-1 flex flex-col">
                            <div>
                                <label htmlFor="wa-name" className="block text-muted text-sm mb-1">Your Name</label>
                                <input
                                    type="text"
                                    id="wa-name"
                                    value={whatsappName}
                                    onChange={(e) => setWhatsappName(e.target.value)}
                                    required
                                    className="w-full px-4 py-2.5 bg-bg border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-text transition"
                                />
                            </div>
                            <div className="flex-1 flex flex-col">
                                <label htmlFor="wa-message" className="block text-muted text-sm mb-1">Message</label>
                                <textarea
                                    id="wa-message"
                                    rows="4"
                                    value={whatsappMessage}
                                    onChange={(e) => setWhatsappMessage(e.target.value)}
                                    required
                                    className="w-full px-4 py-2.5 bg-bg border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-text transition resize-none flex-1"
                                />
                            </div>
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition"
                            >
                                <FaWhatsapp size={16} />
                                Send via WhatsApp
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                {/* أنيميشن الميل الزخرفي في الأسفل */}
                <div className="mt-12 flex justify-center opacity-40">
                    <Lottie animationData={mailAnimation} loop className="w-56" />
                </div>
            </section>
        </>
    );
};

export default Contact;