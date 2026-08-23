import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ModeProvider } from "./context/ModeContext";
import { HelmetProvider } from "react-helmet-async";
import { FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <HelmetProvider>
      <ModeProvider>
        <motion.div className=" scroll-smooth overflow-x-hidden">
          <Header />
          <motion.main
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{ duration: 1, delay: .8 }}>
            <Hero />
            <Main />
            <Services />
            <Skills />
            <Contact />
          </motion.main>
          <Footer />

          <motion.a
            href="https://wa.me/201129691951"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition z-50"
            aria-label="Chat on WhatsApp"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-40" />
            <FaWhatsapp size={28} className="relative" />
          </motion.a>
        </motion.div>
      </ModeProvider>
    </HelmetProvider>
  );
}

export default App;