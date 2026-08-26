import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet-async";
import { useForm, ValidationError } from "@formspree/react";
import { FaEnvelope, FaWhatsapp, FaPaperPlane } from "react-icons/fa";
import mailAnimation from "../assets/animations/mail.json";
import successAnimation from "../assets/animations/success.json";

const Contact = () => {
    const [activeTab, setActiveTab] = useState("email"); // "email" | "whatsapp"
    const [state, handleSubmit] = useForm("xkgvzzro");

    const [whatsappName, setWhatsappName] = useState("");
    const [whatsappMessage, setWhatsappMessage] = useState("");

    const handleWhatsAppSend = (e) => {
        e.preventDefault();
        const phone = "201129691951";
        const text = `Name: ${whatsappName}%0AMessage: ${whatsappMessage}`;
        window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
    };

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
                <div className="text-center mb-12">
                    <span className="text-accent font-semibold text-sm tracking-wide uppercase">Get In Touch</span>
                    <h2 className="text-4xl font-bold text-text mt-2">Contact</h2>
                    <p className="text-muted mt-3 max-w-xl mx-auto">
                        Have a project or an idea? Send a message by email or reach out on WhatsApp.
                    </p>
                </div>

                <div className="max-w-xl mx-auto">
                    {/* أزرار التبديل */}
                    <div className="flex gap-3 mb-6">
                        <button
                            type="button"
                            onClick={() => setActiveTab("email")}
                            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border text-sm font-medium transition ${
                                activeTab === "email"
                                    ? "border-accent text-accent bg-accent/10"
                                    : "border-border text-muted hover:text-text"
                            }`}
                        >
                            <FaEnvelope size={14} />
                            Email
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveTab("whatsapp")}
                            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border text-sm font-medium transition ${
                                activeTab === "whatsapp"
                                    ? "border-accent text-accent bg-accent/10"
                                    : "border-border text-muted hover:text-text"
                            }`}
                        >
                            <FaWhatsapp size={14} />
                            WhatsApp
                        </button>
                    </div>

                    <AnimatePresence mode="wait">
                        {activeTab === "email" ? (
                            <motion.div
                                key="email"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.15 }}
                                className="bg-card p-8 rounded-2xl border border-border"
                            >
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
                                    <button
                                        type="submit"
                                        disabled={state.submitting}
                                        className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-dim text-white font-semibold py-3 rounded-lg transition disabled:opacity-50"
                                    >
                                        <FaPaperPlane size={14} />
                                        {state.submitting ? "Sending..." : "Send Email"}
                                    </button>
                                </form>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="whatsapp"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.15 }}
                                className="bg-card p-8 rounded-2xl border border-border"
                            >
                                <form onSubmit={handleWhatsAppSend} className="space-y-4">
                                    <div>
                                        <label htmlFor="wa-name" className="block text-muted text-sm mb-1">Your Name</label>
                                        <input
                                            type="text"
                                            id="wa-name"
                                            value={whatsappName}
                                            onChange={(e) => setWhatsappName(e.target.value)}
                                            required
                                            className="w-full px-4 py-2.5 bg-bg border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-text transition"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="wa-message" className="block text-muted text-sm mb-1">Message</label>
                                        <textarea
                                            id="wa-message"
                                            rows="4"
                                            value={whatsappMessage}
                                            onChange={(e) => setWhatsappMessage(e.target.value)}
                                            required
                                            className="w-full px-4 py-2.5 bg-bg border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-text transition resize-none"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-dim text-white font-semibold py-3 rounded-lg transition"
                                    >
                                        <FaWhatsapp size={14} />
                                        Send via WhatsApp
                                    </button>
                                </form>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="mt-12 flex justify-center opacity-40">
                    <Lottie animationData={mailAnimation} loop className="w-56" />
                </div>
            </section>
        </>
    );
};

export default Contact;