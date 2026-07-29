import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMode } from "../context/ModeContext";
import {
    FaMoon,
    FaSun,
    FaWhatsapp,
    FaBars,
    FaTimes
} from "react-icons/fa";


const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#services", label: "Services" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
];


const Header = () => {

    const { mode, toggleMode } = useMode();

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);


    useEffect(() => {

        const onScroll = () => {
            setScrolled(window.scrollY > 20);
        };


        window.addEventListener(
            "scroll",
            onScroll
        );


        return () => {
            window.removeEventListener(
                "scroll",
                onScroll
            );
        };

    }, []);



    return (

        <motion.header
            className={`
                fixed
                top-0
                left-0
                w-full
                z-50
                border-b
                transition-all
                duration-300
                backdrop-blur-md

                ${scrolled
                    ? "bg-bg/80 border-border shadow-lg shadow-black/10"
                    : "bg-bg/40 border-transparent"
                }
            `}
        >


            <div className="
                max-w-7xl
                mx-auto
                px-6
                py-4
                flex
                justify-between
                items-center
            ">



                {/* Logo */}

                <motion.a

                    href="#home"

                    initial={{
                        opacity: 0,
                    }}

                    animate={{
                        opacity: 1,
                    }}

                    transition={{
                        duration: 0.8,
                        ease: "easeOut"
                    }}


                    transition={{
                        delay: .2
                    }}

                    className="
                        text-2xl
                        font-extrabold
                        tracking-tight
                        text-text
                    "

                >

                    asser
                    <span className="text-accent">
                        .dev
                    </span>

                </motion.a>






                {/* Desktop Menu */}

                <nav className="
                    hidden
                    md:flex
                    gap-8
                    text-muted
                    font-medium
                ">


                    {
                        navLinks.map((link, index) => (

                            <motion.a
                                key={link.href}
                                href={link.href}
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                }}
                                transition={{
                                    duration: .4,
                                    delay: .3 + index * .1
                                }}
                                className="
                                    relative
                                    hover:text-text
                                    transition
                                    group
                                "
                            >

                                {link.label}


                                <span
                                    className="
                                        absolute
                                        -bottom-1
                                        left-0
                                        w-0
                                        h-[2px]
                                        bg-accent
                                        transition-all
                                        duration-300
                                        group-hover:w-full
                                    "
                                />


                            </motion.a>

                        ))
                    }


                </nav>






                {/* Actions */}

                <div className="
                    flex
                    items-center
                    gap-4
                ">



                    {/* Theme Button */}

                    <motion.button

                        onClick={toggleMode}

                        className="
                            text-xl
                            text-muted
                            hover:text-text
                            transition
                        "

                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.4,
                            delay: 0.8
                        }}
                        aria-label="Toggle theme"

                    >

                        <AnimatePresence
                            mode="wait"
                            initial={false}
                        >

                            <motion.span

                                key={mode}

                                initial={{
                                    opacity: 0,
                                    rotate: -90,
                                    scale: .5
                                }}

                                animate={{
                                    opacity: 1,
                                    rotate: 0,
                                    scale: 1
                                }}

                                exit={{
                                    opacity: 0,
                                    rotate: 90,
                                    scale: .5
                                }}

                                transition={{
                                    duration: .25
                                }}

                                className="block"

                            >
                                {
                                    mode === "dark"
                                        ? <FaSun />
                                        : <FaMoon />
                                }
                            </motion.span>
                        </AnimatePresence>
                    </motion.button>

                    {/* Mobile Button */}
                    <motion.button
                        onClick={() =>
                            setMenuOpen(prev => !prev)
                        }
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.4,
                            delay: 0.8
                        }}

                        className="
                        md:hidden
                        text-xl
                        text-text    "
                        aria-label="Toggle menu"
                    >
                        {
                            menuOpen
                                ? <FaTimes />
                                : <FaBars />
                        }
                    </motion.button>
                </div>
            </div>
            {/* Mobile Menu */}

            <AnimatePresence>
                {
                    menuOpen && (
                        <motion.nav

                            initial={{
                                height: 0,
                                opacity: 0
                            }}
                            animate={{
                                height: "auto",
                                opacity: 1
                            }}
                            exit={{
                                height: 0,
                                opacity: 0
                            }}
                            transition={{
                                duration: .3
                            }}
                            className="
                                md:hidden
                                overflow-hidden
                                bg-bg-elev
                                border-t
                                border-border
                            "
                        >
                            <div className="
                                flex
                                flex-col
                                px-6
                                py-4
                                gap-4
                            ">
                                {
                                    navLinks.map((link, index) => (
                                        <motion.a
                                            key={link.href}
                                            href={link.href}
                                            onClick={() =>
                                                setMenuOpen(false)
                                            }
                                            initial={{
                                                opacity: 0,
                                                x: -20
                                            }}
                                            animate={{
                                                opacity: 1,
                                                x: 0
                                            }}
                                            transition={{
                                                delay: index * .1
                                            }}
                                            className="
                                                text-muted
                                                hover:text-text
                                                transition
                                                font-medium
                                            "
                                        >
                                            {link.label}
                                        </motion.a>
                                    ))
                                }
                            </div>
                        </motion.nav>
                    )
                }
            </AnimatePresence>
        </motion.header>

    );
};


export default Header;