import React, { useState } from "react";
import logo from "../assets/images/lambda.png";

function Navbar() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    const menuHighlight = (event) => {
        // Remove border from all menu items

        const menuItems = document.getElementsByClassName("btn");
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].classList.remove("active");
        }

        // Apply border to clicked menu item
        const menuItem = event.target.closest(".btn");
        menuItem.classList.add("active");
    };

    // Mobile view menu open/close
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleNavbar = () => {
        console.log("okkkkk")
        setIsExpanded(!isExpanded);
    };

    return (
        <nav className="fixed z-10 sm:w-full sm:px-2 bg-white bg-opacity-10 backdrop-blur-md drop-shadow-lg">
            <div className="flex flex-wrap justify-between items-center mx-5">
                <a href="#home" className="flex relative lg:bottom-0 md:bottom-[40px] items-center">
                    <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
                    <span className="flex self-center text-2xl font-semibold whitespace-nowrap dark:text-purple-300">
                        <h1 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-yellow-400">
                            Shuvendu
                        </h1>
                        Singha
                    </span>
                </a>
                <div className="flex">
                    <button
                        data-collapse-toggle="#nav_menu"
                        onClick={toggleNavbar}
                        type="button"
                        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-search"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open menu</span>
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div id="nav_menu" className="flex w-full md:w-auto">
                    <ul className="flex lg:flex-row lg:h-[70px] lg:items-center lg:justify-start lg:left-0 sm:relative sm:left-[77%] sm:flex-col sm:space-x-8 sm:mt-0 sm:leading-9 sm:font-medium sm:items-end ">
                        <li className="btn">
                            <a
                                href="#home"
                                onClick={(event) => menuHighlight(event)}
                                className="block text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white 
                                dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Home
                            </a>
                        </li>
                        <li className="btn">
                            <a
                                href="#skills"
                                onClick={(event) => menuHighlight(event)}
                                className="block text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white 
                                dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Skills
                            </a>
                        </li>
                        <li className="btn">
                            <a
                                href="#projects"
                                onClick={(event) => menuHighlight(event)}
                                className="block text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white 
                                dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Works
                            </a>
                        </li>
                        <li className="btn">
                            <a
                                href="#pastworks"
                                onClick={(event) => menuHighlight(event)}
                                className="block text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white 
                                dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Past Work Ex.
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
