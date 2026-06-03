import './App.css';
import Header from './components/1-Header/Header';
import Hero from './components/2-hero/Hero';
import Main from './components/3-Main/Main';
import Services from './components/4-Services/Services';
import Skills from './components/5-Skills/Skills';
import Contact from './components/6-Contact/Contact';
import Footer from './components/7-Footer/Footer';
import Error from './components/errorPage';
import { ModeProvider } from "./context";
import { AnimatePresence, motion } from 'framer-motion';
import { HelmetProvider } from "react-helmet-async";
import { HashRouter, Routes, Route } from "react-router-dom";
import './style.css'

/* 🔹 Layout Component */
function PortfolioLayout({ children }) {
  return (
    <div className="layout">
      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </div>
  );
}

/* 🔹 PageTransition Component */
function PageTransition({ children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={window.location.hash} // HashRouter
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <HelmetProvider>
      <ModeProvider>
        <HashRouter>
          <PortfolioLayout>
            <Routes>
              <Route
                path="/"
                element={
                  <PageTransition>
                    <Hero />
                  </PageTransition>
                }
              />
              <Route
                path="/projects"
                element={
                  <PageTransition>
                    <Main />
                  </PageTransition>
                }
              />
              <Route
                path="/services"
                element={
                  <PageTransition>
                    <Services />
                  </PageTransition>
                }
              />
              <Route
                path="/skills"
                element={
                  <PageTransition>
                    <Skills />
                  </PageTransition>
                }
              />
              <Route
                path="/contact"
                element={
                  <PageTransition>
                    <Contact />
                  </PageTransition>
                }
              />
              <Route path="*" element={<Error />} />
            </Routes>
          </PortfolioLayout>
        </HashRouter>
      </ModeProvider>
    </HelmetProvider>
  );
}

export default App;
