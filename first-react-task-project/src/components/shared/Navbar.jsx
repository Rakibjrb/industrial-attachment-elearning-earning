import { useState } from "react";
import { FiAtSign, FiMenu, FiX } from "react-icons/fi";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [activeLink, setActiveLink] = useState("Home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-[#f8fafc]/90 backdrop-blur-md border-b border-slate-100">
            <div className="max-w-screen-xl mx-auto px-4 xl:px-0">
                <div className="flex items-center justify-between h-20">

                    {/* Logo / Brand */}
                    <a href="#home" className="flex items-center gap-2.5 group">
                        <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-orange-400 flex items-center justify-center text-white shadow-sm shadow-orange-300/40">
                            <FiAtSign size={18} />
                        </span>
                        <span className="text-xl font-bold tracking-tight text-slate-800 group-hover:text-orange-500 transition-colors">
                            Rakibul.
                        </span>
                    </a>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => {
                            const isActive = activeLink === link.name;
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setActiveLink(link.name)}
                                    className={`relative py-1 text-[15px] font-medium transition-colors ${isActive
                                        ? "text-orange-500 font-semibold"
                                        : "text-slate-600 hover:text-slate-900"
                                        }`}
                                >
                                    {link.name}
                                    {isActive && (
                                        <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-5 h-[3px] bg-orange-500 rounded-full" />
                                    )}
                                </a>
                            );
                        })}
                    </nav>

                    {/* Action Button */}
                    <div className="hidden md:block">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 shadow-md shadow-orange-400/25 hover:shadow-orange-400/40 transition-all duration-200 active:scale-95"
                        >
                            Hire Me
                        </a>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            type="button"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="md:hidden px-4 pt-2 pb-6 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-lg">
                    <div className="flex flex-col space-y-3">
                        {navLinks.map((link) => {
                            const isActive = activeLink === link.name;
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => {
                                        setActiveLink(link.name);
                                        setIsMenuOpen(false);
                                    }}
                                    className={`px-3 py-2 rounded-lg text-base font-medium transition-colors ${isActive
                                        ? "bg-orange-50 text-orange-500 font-semibold"
                                        : "text-slate-700 hover:bg-slate-50"
                                        }`}
                                >
                                    {link.name}
                                </a>
                            );
                        })}
                        <div className="pt-2">
                            <a
                                href="#contact"
                                onClick={() => setIsMenuOpen(false)}
                                className="block text-center w-full py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 shadow-md shadow-orange-400/25 transition-all"
                            >
                                Hire Me
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;