import React from 'react'
import logo from '../images/lambda.png'

function Navbar() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div>
            <nav class="fixed z-20 w-full sm:px-2 py-2.5 bg-white bg-opacity-10 border border-yellow-300 backdrop-blur-md drop-shadow-lg">
                <div class="flex flex-wrap justify-between items-center mx-5">
                    <a href="https://twitter.com/shuvendusingha/" class="flex items-center">
                        <img src={logo} class="mr-3 h-6 sm:h-9" alt="Logo" />
                        <span class="flex self-center text-2xl font-semibold whitespace-nowrap dark:text-purple-300">
                            <h1 class="self-center text-2xl font-semibold whitespace-nowrap dark:text-yellow-400">Shuvendu</h1>
                            Singha
                        </span>
                    </a>
                    <div class="flex">
                        <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                            <span class="sr-only">Open menu</span>
                            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div class="flex w-full md:w-auto">
                        <ul class="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium justify-start">
                            <li class="btn">
                                <a href="#home" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
                            </li>
                            <li class="btn">
                                <a href="#skills" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Skills</a>
                            </li>
                            <li class="btn">
                                <a href="#projects" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Works</a>
                            </li>
                            <li class="btn">
                                <a href="#pastworks" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Past Work Ex.</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default Navbar