import { FiArrowRight, FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Photo from "../../../assets/images/Rakibul-Photo.png";

const Hero = () => {
    return (
        <section id="home" className="relative overflow-hidden bg-gradient-to-b from-orange-50/40 via-white to-white py-16 md:py-24">
            {/* Background subtle radial glow accents */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-orange-200/30 to-amber-100/40 blur-3xl pointer-events-none -z-10 rounded-full" />

            <div className="max-w-screen-xl mx-auto px-4 xl:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* Left Side Content */}
                    <div className="lg:col-span-7 flex flex-col items-start text-left">
                        {/* Status Badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/70 border border-orange-200 text-orange-600 text-xs sm:text-sm font-semibold mb-6 shadow-xs">
                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                            Available for new projects
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5">
                            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Rakibul</span>.
                            <br />
                            A Full-Stack Developer & Designer.
                        </h1>

                        {/* Description */}
                        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
                            I craft modern, accessible, and high-performance digital products and web experiences that blend seamless functionality with clean, intuitive design.
                        </p>

                        {/* Call To Actions */}
                        <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
                            <a
                                href="https://rakibul-dev.vercel.app/contact"
                                target="_blank"
                                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-md shadow-orange-500/25 hover:shadow-orange-500/35 transition-all duration-200 active:scale-95"
                            >
                                Let's Talk
                                <FiArrowRight size={16} />
                            </a>

                            <a
                                href="https://rakibul-dev.vercel.app/"
                                target="_blank"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-xs transition-all duration-200 active:scale-95"
                            >
                                <FiDownload size={16} />
                                Visit Portflio
                            </a>
                        </div>

                        {/* Social Links & Trust Indicator */}
                        <div className="flex items-center gap-5 pt-6 border-t border-slate-200/80 w-full">
                            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Follow Me:</span>
                            <div className="flex items-center gap-3">
                                {[
                                    { icon: FaGithub, href: "https://github.com", label: "GitHub" },
                                    { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
                                    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
                                ].map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <a
                                            key={item.label}
                                            href={item.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={item.label}
                                            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-orange-500 hover:text-white text-slate-600 flex items-center justify-center transition-colors"
                                        >
                                            <Icon size={14} />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Right Side Image */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
                        {/* Decorative Background Glow and Circle */}
                        <div className="relative w-72 h-72 sm:w-88 sm:h-88 lg:w-96 lg:h-96">
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-orange-400 to-amber-300 rotate-6 opacity-30 blur-xl" />

                            <div className="relative w-[300px] h-[420px] rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-b from-orange-100/50 to-orange-50/20">
                                <img
                                    src={Photo}
                                    alt="Rakibul - Portfolio Avatar"
                                    className="w-full h-full"
                                />
                            </div>

                            {/* Floating Feature Card */}
                            <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-6 bg-white/95 backdrop-blur-md border border-slate-100 rounded-2xl p-3.5 sm:p-4 shadow-xl flex items-center gap-3.5">
                                <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center font-bold text-lg">
                                    🚀
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-slate-500">Experience</p>
                                    <p className="text-sm font-bold text-slate-800">3+ Years Building</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;