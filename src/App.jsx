import { motion } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import { FaWhatsapp } from "react-icons/fa";

import { ModeProvider } from "./context/ModeContext";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Main from "./components/Main";
import Clients from "./components/Clients";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <HelmetProvider>
            <ModeProvider>
                <div className="min-h-screen overflow-x-hidden scroll-smooth">
                    {/* =========================
                        Header
                    ========================== */}
                    <Header />

                    {/* =========================
                        Main Content
                    ========================== */}
                    <motion.main
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.3,
                            ease: "easeOut",
                        }}
                    >
                        {/* 1. Hero
                            Introduction + CTA
                        */}
                        <Hero />

                        {/* 2. Services
                            What you offer
                        */}
                        <Services />

                        {/* 3. Skills
                            Technologies & expertise
                        */}
                        <Skills />

                        {/* 4. Projects
                            Real work / portfolio
                        */}
                        <Main />

                        {/* 5. Clients
                            Companies / people you've worked with
                        */}
                        <Clients />

                        {/* 6. Testimonials
                            Social proof
                        */}
                        <Testimonials />

                        {/* 7. Contact
                            Final CTA
                        */}
                        <Contact />
                    </motion.main>

                    {/* =========================
                        Footer
                    ========================== */}
                    <Footer />

                    {/* =========================
                        WhatsApp Floating Button
                    ========================== */}
                    <motion.a
                        href="https://wa.me/201129691951"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            fixed
                            bottom-5
                            right-5
                            sm:bottom-6
                            sm:right-6
                            z-50
                            flex
                            items-center
                            justify-center
                            w-14
                            h-14
                            sm:w-16
                            sm:h-16
                            rounded-full
                            bg-green-500
                            text-white
                            shadow-2xl
                            hover:bg-green-600
                            transition-colors
                        "
                        aria-label="Chat on WhatsApp"
                        whileHover={{
                            scale: 1.1,
                        }}
                        whileTap={{
                            scale: 0.9,
                        }}
                    >
                        {/* Pulse Effect */}
                        <span
                            className="
                                absolute
                                inset-0
                                rounded-full
                                bg-green-400
                                animate-ping
                                opacity-40
                            "
                        />

                        <FaWhatsapp
                            size={28}
                            className="relative z-10 sm:text-[30px]"
                        />
                    </motion.a>
                </div>
            </ModeProvider>
        </HelmetProvider>
    );
}

export default App;