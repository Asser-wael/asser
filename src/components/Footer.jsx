import { FaInstagram, FaWhatsapp, FaGithub, FaTiktok, FaArrowUp } from "react-icons/fa";

const socials = [
    { icon: <FaInstagram />, href: "https://instagram.com/asser_dev/" },
    { icon: <FaWhatsapp />, href: "https://wa.me/201129691951" },
    { icon: <FaGithub />, href: "https://github.com/Asser-wael" },
    { icon: <FaTiktok />, href: "https://www.tiktok.com/@asser_dev" },
];

const Footer = () => {
    return (
        <footer className="border-t border-border bg-bg-elev">
            <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-muted text-sm text-center sm:text-left">
                    &copy; {new Date().getFullYear()} <span className="text-text font-medium">asser.dev</span> — Full Stack Developer
                </p>

                <div className="flex items-center gap-5 text-lg text-muted">
                    {socials.map((s, i) => (
                        <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
                            {s.icon}
                        </a>
                    ))}
                </div>

                {/* زر "ارجع لفوق" */}
                <a
                    href="#home"
                    className="flex items-center justify-center w-9 h-9 rounded-full border border-border text-muted hover:text-text hover:border-accent transition"
                    aria-label="Back to top"
                >
                    <FaArrowUp size={14} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;