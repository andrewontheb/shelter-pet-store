import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    console.log('navbar rendering');

    return (
        <nav className="flex flex-col bg-indigo-400 shadow-md bg-gradient-to-r from-indigo-600 to-violet-500">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center relativ max-w-[90px] mr-auto logo">
                        <img src="/src/assets/logo.jpg" alt="Logo" className='w-full min-h-full h-auto object-cover [clip-path:circle(40%)]' />
                        <p className='hidden'>logo</p>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-800 hover:text-sky-600 focus:outline-none"
                        >
                            {isOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Меню для больших экранов */}
                    <div className="hidden md:flex space-x-4 text-md">
                        <Link to="/pets" className='text-gray-800 hover:text-sky-500 px-3 py-2 rounded-md font-medium'>
                            <p>Pets</p>
                        </Link>
                        <Link to="/about" className='text-gray-800 hover:text-sky-500 px-3 py-2 rounded-md  font-medium'>
                            <p>About us</p>
                        </Link>
                        <Link to="/form" className='text-gray-800 hover:text-sky-500 px-3 py-2 rounded-md font-medium'>
                            <p>Publish post</p>
                        </Link>
                        <Link to="/contacts" className='text-gray-800 hover:text-sky-500 px-3 py-2 rounded-md font-medium'>
                            <p>Contacts</p>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Мобильное меню */}
            {isOpen && (
                <div className="md:hidden space-x-4 text-md">
                    <Link to="/pets" className='text-gray-800 hover:text-sky-500 px-3 py-2 rounded-md font-medium'>
                        <p>Pets</p>
                    </Link>
                    <Link to="/about" className='text-gray-800 hover:text-sky-500 px-3 py-2 rounded-md  font-medium'>
                        <p>About us</p>
                    </Link>
                    <Link to="/form" className='text-gray-800 hover:text-sky-500 px-3 py-2 rounded-md font-medium'>
                        <p>Publish post</p>
                    </Link>
                    <Link to="/contacts" className='text-gray-800 hover:text-sky-500 px-3 py-2 rounded-md font-medium'>
                        <p>Contacts</p>
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
