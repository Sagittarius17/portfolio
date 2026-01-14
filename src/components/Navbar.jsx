import React, { useState, useContext } from "react";
import { SunIcon, MoonIcon, CodeBracketIcon, Bars3Icon, HomeIcon, BriefcaseIcon, XMarkIcon } from '@heroicons/react/24/solid'
import logo from "../assets/images/lambda.png";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/Navbar.css";

function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: "#home", label: "Home", icon: <HomeIcon className="w-6 h-6" /> },
        { href: "#skills", label: "Skills", icon: <CodeBracketIcon className="w-6 h-6" /> },
        { href: "#projects", label: "Works", icon: <BriefcaseIcon className="w-6 h-6" /> },
    ];

    return (
        <nav className="fixed z-10 w-full header">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    <a href="#home" className="flex items-center">
                        <img src={logo} className="h-9 mr-3" alt="Logo" />
                        <span className="text-2xl font-semibold whitespace-nowrap">
                            Shuvendu Singha
                        </span>
                    </a>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a key={link.label} href={link.href} className="flex items-center nav-link">
                                {link.icon}
                                <span className="ml-2">{link.label}</span>
                            </a>
                        ))}
                        <button onClick={toggleTheme} className="nav-link">
                            {theme === 'light' ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
                        </button>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="nav-link">
                            {isMenuOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full mobile-menu">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col items-center py-4 space-y-4">
                            {navLinks.map((link) => (
                                <a key={link.label} href={link.href} className="flex items-center nav-link" onClick={() => setIsMenuOpen(false)}>
                                    {link.icon}
                                    <span className="ml-2">{link.label}</span>
                                </a>
                            ))}
                            <button onClick={() => { toggleTheme(); setIsMenuOpen(false); }} className="nav-link">
                                {theme === 'light' ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
                                <span className="ml-2">{theme === 'light' ? 'Dark' : 'Light'} Mode</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
