import Link from "next/link";
import { Instagram, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="w-full border-b border-gray-300 py-6 mb-8 bg-paper">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
                {/* Left side: Logo or Title */}
                <div className="flex-shrink-0 mb-4 md:mb-0">
                    <Link href="/" className="flex flex-col items-center md:items-start group">
                        <h1 className="text-3xl font-trajan text-accent uppercase tracking-widest group-hover:text-ink transition-colors">
                            The Column
                        </h1>
                        <p className="text-sm font-avenir text-gray-600 mt-1 uppercase tracking-widest">
                            A Minerva University Journal
                        </p>
                    </Link>
                </div>

                {/* Center: Navigation Links */}
                <div className="flex flex-wrap justify-center space-x-6 md:space-x-8 text-sm uppercase tracking-wider font-trajan font-semibold text-gray-800">
                    <Link href="/minerva-cities" className="hover:text-accent transition-colors">Minerva Cities</Link>
                    <Link href="/opinions" className="hover:text-accent transition-colors">Opinions</Link>
                    <Link href="/science" className="hover:text-accent transition-colors">Science</Link>
                    <Link href="/fun-things" className="hover:text-accent transition-colors">Fun Things</Link>
                    <Link href="/about-us" className="hover:text-accent transition-colors">About Us</Link>
                </div>

                {/* Right side: Social Icons */}
                <div className="hidden md:flex flex-shrink-0 items-center space-x-4 text-gray-500">
                    <a href="#" className="hover:text-accent transition-colors" aria-label="Instagram">
                        <span className="flex items-center justify-center p-1 rounded-full border border-transparent hover:border-accent">
                            <Instagram size={18} />
                        </span>
                    </a>
                    <a href="#" className="hover:text-accent transition-colors" aria-label="LinkedIn">
                        <span className="flex items-center justify-center p-1 rounded-full border border-transparent hover:border-accent">
                            <Linkedin size={18} />
                        </span>
                    </a>
                    <a href="mailto:contact@thecolumn.minerva.edu" className="hover:text-accent transition-colors" aria-label="Email">
                        <span className="flex items-center justify-center p-1 rounded-full border border-transparent hover:border-accent">
                            <Mail size={18} />
                        </span>
                    </a>
                </div>
            </div>
        </nav>
    );
}
