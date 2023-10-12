import React from 'react'
import python from '../assets/images/python.png'
import nodejs from '../assets/images/nodejs.png'
import reactjs from '../assets/images/reactjs.png'
import tailwindcss from '../assets/images/tailwindcss.png'
import sass from '../assets/images/sass.png'
import django from '../assets/images/django.png'
import php from '../assets/images/php.png'
import laravel from '../assets/images/laravel.png'
import "../style/skills.css"

const Skills = () => {
    return (
        <div id='skills' className="pt-[69px]">
            <h2 className="logo flex sm:flex text-6xl text-white justify-center font-bold border-t-8 border-l-8 border-r-8 border-solid border-[#a0ff00] pt-6">SKILLS</h2>
            <div className="bigbox">
                <div className="box">
                    <span></span>
                    <div className="content">
                        <div className="flex flex-row justify-around items-center mb-4">
                            <img src={python} alt="" className="w-20 h-18"/>
                            <h2>Python</h2>
                        </div>
                        {/* <p>
                            Python is a high-level, interpreted, general-purpose programming language. 
                            Its design philosophy emphasizes code readability with the use of significant indentation.
                        </p> */}
                        <a href="https://www.python.org/">Want to know more?</a>
                    </div>
                </div>
                <div className="box">
                    <span></span>
                    <div className="content">
                        <div className="flex flex-row justify-around items-center mb-4">
                            <img src={django} alt="" className="w-20 h-20"/>
                            <h2>Django</h2>
                        </div>
                        {/* <p>
                            Django is a free and open-source, Python-based web framework that follows the 
                            model–template–views (MTV) architectural pattern. It is maintained by DSF.
                        </p> */}
                        <a href="https://djangoproject.com/">Want to know more?</a>
                    </div>
                </div>
                <div className="box">
                    <span></span>
                    <div className="content">
                        <div className="flex flex-row justify-around items-center mb-4">
                            <img src={nodejs} alt="" className="w-24 h-20"/>
                            <h2>NodeJs</h2>
                        </div>
                        {/* <p>
                            NodeJS is an opensource, crossplatform, backend JS runtime environment 
                            that runs on the V8 engine and executes JavaScript code outside a web browser.
                        </p> */}
                        <a href="https://nodejs.org/">Want to know more?</a>
                    </div>
                </div>
                <div className="box">
                    <span></span>
                    <div className="content">
                        <div className="flex flex-row justify-around items-center mb-4">
                            <img src={reactjs} alt="" className="w-24 h-20"/>
                            <h2>ReactJs</h2>
                        </div>
                        {/* <p>
                            React (also known as React.js or ReactJS) 
                            is a free and open-source front-end JavaScript library for building user interfaces based on UI components.
                        </p> */}
                        <a href="https://reactjs.org/">Want to know more?</a>
                    </div>
                </div>
                <div className="box">
                    <span></span>
                    <div className="content">
                        <div className="flex flex-row justify-around items-center mb-4">
                            <img src={tailwindcss} alt="" className="w-24 h-20"/>
                            <h2>TailwindCSS</h2>
                        </div>
                        {/* <p>
                            TailwindCSS is a Utility first CSS framework. It is a highly customizable, 
                            low-level CSS framework that gives you all of the building blocks that you need to create a custom UI.
                        </p> */}
                        <a href="https://tailwindcss.com/">Want to know more?</a>
                    </div>
                </div>
                <div className="box">
                    <span></span>
                    <div className="content">
                        <div className="flex flex-row justify-around items-center mb-4">
                            <img src={sass} alt="" className="w-20 h-20"/>
                            <h2>Sass</h2>
                        </div>
                        {/* <p>
                            Sass (short for syntactically awesome style sheets) is a preprocessor scripting language 
                            that is interpreted or compiled into Cascading Style Sheets (CSS).
                        </p> */}
                        <a href="https://sass-lang.com/">Want to know more?</a>
                    </div>
                </div>
                <div className="box">
                    <span></span>
                    <div className="content">
                        <div className="flex flex-row justify-around items-center mb-4">
                            <img src={php} alt="" className="w-20 h-20"/>
                            <h2>PHP</h2>
                        </div>
                        {/* <p>
                            Django is a free and open-source, Python-based web framework that follows the 
                            model–template–views (MTV) architectural pattern. It is maintained by DSF.
                        </p> */}
                        <a href="https://www.php.net/">Want to know more?</a>
                    </div>
                </div>
                <div className="box">
                    <span></span>
                    <div className="content">
                        <div className="flex flex-row justify-around items-center mb-4">
                            <img src={laravel} alt="" className="w-20 h-20"/>
                            <h2>Laravel</h2>
                        </div>
                        {/* <p>
                            Django is a free and open-source, Python-based web framework that follows the 
                            model–template–views (MTV) architectural pattern. It is maintained by DSF.
                        </p> */}
                        <a href="https://laravel.com/">Want to know more?</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills