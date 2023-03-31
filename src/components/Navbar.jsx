import React, { useState } from 'react';
import logo from '../assets/images/lambda.png'
// import "../style/navbar.css"

function Navbar() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    const menuHighlight = (event) => {
        // Remove border from all menu items

        const menuItems = document.getElementsByClassName('btn');
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].classList.remove('active');
        }

        // Apply border to clicked menu item
        const menuItem = event.target.closest('.btn');
        menuItem.classList.add('active');

    };

    // Mobile view menu open/close
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleNavbar = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <div>
            <nav class="fixed z-10 w-full sm:px-2 bg-white bg-opacity-10 backdrop-blur-md drop-shadow-lg">
                <div class="flex flex-wrap justify-between items-center mx-5">
                    <a href="#home" class="flex items-center">
                        <img src={logo} class="mr-3 h-6 sm:h-9" alt="Logo" />
                        <span class="flex self-center text-2xl font-semibold whitespace-nowrap dark:text-purple-300">
                            <h1 class="self-center text-2xl font-semibold whitespace-nowrap dark:text-yellow-400">Shuvendu</h1>
                            Singha
                        </span>
                    </a>
                    <div class="flex">
                        <button data-collapse-toggle="#nav_menu" onClick={toggleNavbar} type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                            <span class="sr-only">Open menu</span>
                            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div id="nav_menu" class="flex w-full md:w-auto">
                        <ul class="flex lg:flex-row lg:h-[70px] lg:items-center lg:justify-start lg:left-0 sm:relative sm:left-[77%] sm:flex-col sm:space-x-8 sm:mt-0 sm:leading-9 sm:font-medium sm:items-end ">
                            <li class="btn">
                                <a href="#home" onClick={(event) => menuHighlight(event)} class="block text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white 
                                dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
                            </li>
                            <li class="btn">
                                <a href="#skills" onClick={(event) => menuHighlight(event)} class="block text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white 
                                dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Skills</a>
                            </li>
                            <li class="btn">
                                <a href="#projects" onClick={(event) => menuHighlight(event)} class="block text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white 
                                dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Works</a>
                            </li>
                            <li class="btn">
                                <a href="#pastworks" onClick={(event) => menuHighlight(event)} class="block text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white 
                                dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Past Work Ex.</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default Navbar