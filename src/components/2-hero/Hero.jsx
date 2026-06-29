import './Hero.css';
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "./ano.json";
import avatarImg from "./12.png";
import { Helmet } from "react-helmet-async";
import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaGithub, FaTiktok 

} from "react-icons/fa";
const Hero = () => {
  return (
    <>
      <Helmet>
        <title>Hero | Asser Wael Portfolio</title>
        <meta
          name="description"
          content="Asser Wael - Software designer, founder, and web developer based in Egypt. Building modern, scalable, and beautiful digital experiences."
        />
        <meta property="og:title" content="Asser Wael Portfolio" />
        <meta property="og:description" content="Software designer, founder, and amateur astronaut." />
        <meta property="og:image" content={avatarImg} />
      </Helmet>

      <motion.section
        className="hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left */}
        <motion.div
          className="left-div"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="avatar">
            <img src={avatarImg} alt="Asser Wael" />
          </div>

          <div className="about">
            <h1>Full Stack Developer | React & Node.js</h1>

            <p>
              I'm Asser Wael, a full stack web developer based in Egypt.
              I build modern, responsive, and scalable web applications using React,
              Redux Toolkit, Tailwind CSS, and Node.js.
              I focus on clean architecture, performance, and user experience.
            </p>
            <hr />
            <p className="highlight">
              Available for freelance & remote opportunities
            </p>
          </div>
          <div className="icons">
            <a
              href="https://instagram.com/asser_dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>


            <a
              href="https://wa.me/201129691951"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              >
              <FaWhatsapp />
            </a>

            <a
              href="https://github.com/Asser-wael"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              >
              <FaGithub />
            </a>
            <a
              href="https://www.tiktok.com/@asser_dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tiktok"
              >
              <FaTiktok />
            </a>
              {/* <a
                href="https://linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a> */}
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          className="right-div"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Lottie animationData={animationData} loop />
        </motion.div>
      </motion.section>
    </>
  );
};

export default Hero;
