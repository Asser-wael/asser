import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet-async";
import {
    FaInstagram,
    FaWhatsapp,
    FaGithub,
    FaTiktok,
} from "react-icons/fa";

import avatarImg from "../assets/images/avatar.png";
import animationData from "../assets/animations/hero.json";

const socials = [
    {
        icon: <FaInstagram />,
        href: "https://instagram.com/asser_dev/",
        hover: "hover:text-pink-500",
    },
    {
        icon: <FaWhatsapp />,
        href: "https://wa.me/201129691951",
        hover: "hover:text-green-400",
    },
    {
        icon: <FaGithub />,
        href: "https://github.com/Asser-wael",
        hover: "hover:text-purple-400",
    },
    {
        icon: <FaTiktok />,
        href: "https://www.tiktok.com/@asser_dev",
        hover: "hover:text-cyan-400",
    },
];


const Hero = () => {
    return (
        <>
            <Helmet>
                <title>Asser Wael | Full Stack Developer</title>
                <meta
                    name="description"
                    content="Asser Wael - Full Stack Developer building modern React and Node.js applications."
                />
            </Helmet>


            <motion.section
                id="home"
                className="
          relative
          flex
          items-center
          justify-between
          gap-12
          flex-wrap
          w-full
          max-w-6xl
          mx-auto
          mt-16
          my-12
          px-8
          py-12
          rounded-3xl
          border
          border-border
          bg-gradient-to-br
          from-accent/20
          via-bg/90
          to-bg
          backdrop-blur-xl
        "
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                }}
            >

                {/* LEFT */}
                <motion.div
                    className="
            flex-1
            flex
            flex-col
            gap-7
            min-w-[300px]
          "

                    initial={{
                        opacity: 0,
                        x: -40,
                    }}

                    animate={{
                        opacity: 1,
                        x: 0,
                    }}

                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                    }}
                >


                    {/* Avatar */}
                    <div>
                        <img
                            src={avatarImg}
                            alt="Asser Wael"
                            className="
                w-24
                h-24
                rounded-full
                object-cover
                border-2
                border-border
                p-1
                bg-card
                shadow-xl
                transition
                hover:scale-110
              "
                        />
                    </div>


                    {/* Text */}
                    <div className="max-w-xl">

                        <h1 className="text-3xl md:text-4xl font-bold leading-tight text-text">
                            Full Stack Developer
                            <br />
                            <span className="text-accent">React & Node.js</span>
                        </h1>


                        <p
                            className="
                mt-5
                text-muted
                leading-7
                text-base
              "
                        >
                            I'm Asser Wael, a full stack web developer based in Egypt.
                            I build modern, responsive, and scalable web applications using
                            React, Redux Toolkit, Tailwind CSS, and Node.js.
                            I focus on clean architecture, performance, and user experience.
                        </p>


                        <hr className="my-5 border-border" />


                        <p
                            className="
                text-mint
                font-medium
              "
                        >
                            Available for freelance & remote opportunities
                        </p>

                    </div>



                    {/* Socials */}
                    <div
                        className="
              flex
              gap-5
              text-2xl
              text-text
            "
                    >

                        {socials.map((social, index) => (
                            <motion.a

                                key={index}

                                href={social.href}

                                target="_blank"

                                rel="noopener noreferrer"

                                className={`
                  transition
                  ${social.hover}
                `}

                                whileHover={{
                                    y: -5,
                                    scale: 1.15
                                }}

                                whileTap={{
                                    scale: .9
                                }}

                            >
                                {social.icon}

                            </motion.a>
                        ))}


                    </div>


                </motion.div>




                {/* RIGHT */}
                <motion.div

                    className="
            flex-1
            flex
            justify-center
            items-center
            min-w-[300px]
            max-w-md
          "

                    initial={{
                        opacity: 0,
                        x: 40
                    }}

                    animate={{
                        opacity: 1,
                        x: 0
                    }}

                    transition={{
                        duration: .8,
                        delay: .4
                    }}

                >

                    <Lottie
                        animationData={animationData}
                        loop
                        className="w-full"
                    />

                </motion.div>



            </motion.section>

        </>
    );
};


export default Hero;