import { FiAtSign } from "react-icons/fi";
import { FaLinkedinIn, FaFacebookF, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
];

const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedinIn },
    { name: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
    { name: "GitHub", href: "https://github.com", icon: FaGithub },
    { name: "Twitter", href: "https://twitter.com", icon: FaTwitter },
    { name: "Instagram", href: "https://instagram.com", icon: FaInstagram },
];

const Footer = () => {
    return (
        <footer className="bg-[#1e293b] text-white py-14 px-4 sm:px-6">
            <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center">
                {/* Brand / Logo like Navbar */}
                <a href="#home" className="flex items-center gap-2.5 group mb-2">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-orange-400 flex items-center justify-center text-white shadow-sm shadow-orange-500/20">
                        <FiAtSign size={18} />
                    </span>
                    <span className="text-2xl font-bold tracking-tight text-white group-hover:text-orange-400 transition-colors">
                        Rakibul.
                    </span>
                </a>

                {/* Subtitle / Tagline */}
                <p className="text-slate-400 text-sm sm:text-base italic mb-8">
                    Excellence in digital creation
                </p>

                {/* Navigation Links */}
                <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mb-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Social Media Icons */}
                <div className="flex items-center justify-center gap-5 mb-8">
                    {socialLinks.map((item) => {
                        const Icon = item.icon;
                        return (
                            <a
                                key={item.name}
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={item.name}
                                className="text-slate-300 hover:text-orange-400 hover:scale-110 transition-all duration-200"
                            >
                                <Icon size={18} />
                            </a>
                        );
                    })}
                </div>

                {/* Legal / Copyright */}
                <div>
                    <a
                        href="#privacy"
                        className="text-xs text-slate-400 hover:text-slate-200 transition-colors"
                    >
                        Privacy & Legal
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;