import React from 'react'
import { Link, useLocation } from 'react-router-dom';

function NewHeader() {

    const menu = document.getElementById('navbar-cta');
    const toggle = () => menu.classList.toggle("hidden");
    const location = useLocation();

    return (


        <nav className="bg-white border-gray-200 mx-6 lg:mx-48 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link to="/" className='flex items-center'>
                    <img src="./logoCube.svg" className="mr-3 h-6 sm:h-9" alt="GreenCube logo" />
                    <span className="text-gray-700 self-center text-xl font-semibold whitespace-nowrap dark:text-white">Ivan Teslenko</span>
                </Link>
                <div className="flex md:order-2">
                    <Link to="/contact">
                        <button type="button" className={`text-white ${location.pathname === "/contact" ? "bg-green-500" : "bg-primary-500"} hover:bg-primary-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>Contact</button>
                    </Link>
                    <button data-collapse-toggle="navbar-cta" onClick={toggle} type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <ul className="flex flex-col p-4 mt-4  bg-gray-100 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link to="/" aria-current="page" className={`block py-2 pr-4 pl-3  ${location.pathname === "/" ? "text-primary-500" : "text-gray-600"} rounded md:bg-transparent  md:p-0 dark:text-white transform transition duration-500 hover:scale-105`}>Presentation</Link>
                        </li>
                        <li>
                            <Link to="/api" className={`block py-2 pr-4 pl-3 ${location.pathname === "/api" ? "text-primary-500" : "text-gray-600"} rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-400 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transform transition duration-500 hover:scale-105`}>Api</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    )
}

export default NewHeader