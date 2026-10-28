import { FiAtSign, FiSend } from "react-icons/fi";
import { FaLinkedinIn, FaFacebookF, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
];

const serviceLinks = [
    { name: "Web Development", href: "#" },
    { name: "UI/UX Design", href: "#" },
    { name: "Frontend Development", href: "#" },
    { name: "API Integration", href: "#" },
    { name: "Performance Optimization", href: "#" },
];

const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedinIn },
    { name: "GitHub", href: "https://github.com", icon: FaGithub },
    { name: "Twitter", href: "https://twitter.com", icon: FaTwitter },
    { name: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
    { name: "Instagram", href: "https://instagram.com", icon: FaInstagram },
];

const Footer = () => {
    const handleSubscribe = (e) => {
        e.preventDefault();
    };

    return (
        <footer className="bg-[#0f172a] text-slate-300 pt-16 pb-10 border-t border-slate-800">
            <div className="max-w-screen-xl mx-auto px-4 xl:px-0">
                {/* 4 Columns Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
                    
                    {/* Column 1: Logo + Description + Socials (col-span-4) */}
                    <div className="lg:col-span-4 flex flex-col items-start">
                        <a href="#home" className="flex items-center gap-2.5 group mb-4">
                            <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-orange-400 flex items-center justify-center text-white shadow-sm shadow-orange-500/20">
                                <FiAtSign size={18} />
                            </span>
                            <span className="text-2xl font-bold tracking-tight text-white group-hover:text-orange-400 transition-colors">
                                Rakibul.
                            </span>
                        </a>

                        <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
                            Full-Stack Developer crafting clean, modern, and performant web applications with a focus on seamless user experiences.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                            {socialLinks.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={item.name}
                                        className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-orange-500 text-slate-300 hover:text-white flex items-center justify-center transition-colors duration-200"
                                    >
                                        <Icon size={14} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Column 2: Quick Links (col-span-2) */}
                    <div className="lg:col-span-2">
                        <h3 className="text-white font-semibold text-base mb-4 tracking-wide">
                            Quick Links
                        </h3>
                        <ul className="space-y-2.5 text-sm">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-slate-400 hover:text-orange-400 transition-colors inline-block"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Services (col-span-3) */}
                    <div className="lg:col-span-3">
                        <h3 className="text-white font-semibold text-base mb-4 tracking-wide">
                            Services
                        </h3>
                        <ul className="space-y-2.5 text-sm">
                            {serviceLinks.map((service) => (
                                <li key={service.name}>
                                    <a
                                        href={service.href}
                                        className="text-slate-400 hover:text-orange-400 transition-colors inline-block"
                                    >
                                        {service.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Newsletter Subscription (col-span-3) */}
                    <div className="lg:col-span-3">
                        <h3 className="text-white font-semibold text-base mb-4 tracking-wide">
                            Stay Updated
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-4">
                            Subscribe to receive occasional updates on projects, articles, and insights.
                        </p>

                        <form onSubmit={handleSubscribe} className="space-y-2.5">
                            <div className="relative">
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2.5 text-sm bg-slate-800/90 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-sm shadow-orange-500/20 transition-all duration-200 active:scale-[0.98]"
                            >
                                Subscribe
                                <FiSend size={14} />
                            </button>
                        </form>
                    </div>

                </div>

                {/* Bottom Bar: Copyright & Terms */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} Rakibul. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="#privacy" className="hover:text-slate-400 transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#terms" className="hover:text-slate-400 transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;