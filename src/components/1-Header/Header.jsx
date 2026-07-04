import { useContext, useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion"
import { ModeContext } from "../../context";
import moon from "../../icons/moon_4700960.png"
import light from "../../icons/weather_16382131.png"
// import srct from "../../icons/translate.png"

const MotionLink = motion(Link)

const Header = () => {
    const { mode, setMode, active, setactive } = useContext(ModeContext)
    const [menuOpen, setMenuOpen] = useState(false)

    const lis = [
        { title: "About", href: "/" },
        { title: "Projects", href: "/projects" },
        { title: "Services", href: "/services" },
        { title: "Skills", href: "/skills" },
        { title: "Contact", href: "/contact" },
    ];

    const isDark = mode === "dark"

    const handleSelect = (title) => {
        setactive(title)
        setMenuOpen(false)
    }

    return (
        <header className='header' id='header'>

            <motion.h2
                className='logo'
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .4 }}
            >
                Portfolio
            </motion.h2>

            {/* Desktop nav */}
            <nav className='nav-desktop'>
                {lis.map((item, index) => (
                    <MotionLink
                        key={item.title}
                        to={item.href}
                        onClick={() => setactive(item.title)}
                        className={`navlink ${item.title === active ? "active" : ""}`}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .4, delay: index * 0.06 }}
                    >
                        {item.title}
                        {item.title === active && (
                            <motion.span
                                layoutId="underline"
                                className="underline"
                                transition={{ type: "spring", stiffness: 400, damping: 32 }}
                            />
                        )}
                    </MotionLink>
                ))}
            </nav>

            <div className='controls'>
                {/* Theme switch */}
                <motion.button
                    className="switch"
                    onClick={() => setMode(isDark ? "light" : "dark")}
                    aria-label="Toggle theme"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: .4, delay: .3 }}
                >
                    <motion.span
                        className="switch-knob"
                        animate={{ x: isDark ? 22 : 0 }}
                        transition={{ type: "spring", stiffness: 500, damping: 32 }}
                    >
                        <img src={isDark ? light : moon} alt="" />
                    </motion.span>
                </motion.button>

                {/* Mobile menu button */}
                <button
                    className={`burger ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(prev => !prev)}
                    aria-label="Toggle menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            {/* Mobile nav */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.nav
                        className="nav-mobile"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: .25, ease: "easeInOut" }}
                    >
                        {lis.map((item, index) => (
                            <MotionLink
                                key={item.title}
                                to={item.href}
                                onClick={() => handleSelect(item.title)}
                                className={`navlink-mobile ${item.title === active ? "active" : ""}`}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: .2, delay: index * 0.04 }}
                            >
                                {item.title}
                            </MotionLink>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Header;