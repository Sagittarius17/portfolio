import React from 'react'
import python from '../images/python.png'
import nodejs from '../images/nodeJS.png'
import reactjs from '../images/reactjs.png'
import tailwindcss from '../images/tailwindcss.png'
import sass from '../images/sass.png'
import django from '../images/django.png'

const Skills = () => {
    return (
        <div class="pt-20">
            <div class="container">
                <div class="box">
                    <span></span>
                    <div class="content">
                        <div class="flex flex-row justify-around items-center mb-4">
                            <img src={python} alt="" class="w-20 h-20"/>
                            <h2>Python</h2>
                        </div>
                        <p>
                            Python is a high-level, interpreted, general-purpose programming language. 
                            Its design philosophy emphasizes code readability with the use of significant indentation.
                        </p>
                        <a href="https://www.python.org/">Want to know more?</a>
                    </div>
                </div>
                <div class="box">
                    <span></span>
                    <div class="content">
                        <div class="flex flex-row justify-around items-center mb-4">
                            <img src={nodejs} alt="" class="w-24 h-20"/>
                            <h2>NodeJs</h2>
                        </div>
                        <p>
                            NodeJS is an opensource, crossplatform, backend JS runtime environment 
                            that runs on the V8 engine and executes JavaScript code outside a web browser.
                        </p>
                        <a href="https://nodejs.org/">Want to know more?</a>
                    </div>
                </div>
                <div class="box">
                    <span></span>
                    <div class="content">
                        <div class="flex flex-row justify-around items-center mb-4">
                            <img src={reactjs} alt="" class="w-24 h-20"/>
                            <h2>ReactJs</h2>
                        </div>
                        <p>
                            React (also known as React.js or ReactJS) 
                            is a free and open-source front-end JavaScript library for building user interfaces based on UI components.</p>
                        <a href="https://reactjs.org/">Want to know more?</a>
                    </div>
                </div>
                <div class="box">
                    <span></span>
                    <div class="content">
                        <div class="flex flex-row justify-around items-center mb-4">
                            <img src={tailwindcss} alt="" class="w-24 h-20"/>
                            <h2>TailwindCSS</h2>
                        </div>
                        <p>
                            Tailwind is a Utility first highly customizable, low-level CSS framework that gives you
                            all of the building blocks that you need to create a custom UI.</p>
                        <a href="https://tailwindcss.com/">Want to know more?</a>
                    </div>
                </div>
                <div class="box">
                    <span></span>
                    <div class="content">
                        <div class="flex flex-row justify-around items-center mb-4">
                            <img src={sass} alt="" class="w-20 h-20"/>
                            <h2>Sass</h2>
                        </div>
                        <p>
                            Sass (short for syntactically awesome style sheets) is a preprocessor scripting language 
                            that is interpreted or compiled into Cascading Style Sheets (CSS).</p>
                        <a href="https://sass-lang.com/">Want to know more?</a>
                    </div>
                </div>
                <div class="box">
                    <span></span>
                    <div class="content">
                        <div class="flex flex-row justify-around items-center mb-4">
                            <img src={django} alt="" class="w-20 h-20"/>
                            <h2>Django</h2>
                        </div>
                        <p>
                            Django is a free and open-source, Python-based web framework that follows the 
                            model–template–views (MTV) architectural pattern. It is maintained by DSF.</p>
                        <a href="https://djangoproject.com/">Want to know more?</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills