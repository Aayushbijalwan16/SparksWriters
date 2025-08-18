import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 border w-full bg-gray-900 bg-gradient-to-br from-blue-900/20 to-purple-900/20 text-white ">
             <div className="relative z-10 mx-auto max-w-7xl px-4 inset-0">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/4 lg:w-4/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center w-12 md:w-24">
                                <Logo width="100px" />
                            </div>
                            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                        Empowering writers through sleek design, smart publishing tools, and a vibrant creative community. 
                        Your words, our canvas.
                    </p>
                        </div>
                    </div>
                    {/* <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                                Company
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                    {/* <div className="w-full p-6 md:w-1/3 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px text-lg font-semibold mb-4 text-white">
                                Support
                            </h3>
                            <ul className='space-y-3'>
                                <li className="mb-4">
                                    <Link
                                        className=" text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>
                                {/* <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Help
                                    </Link>
                                </li> */}
                                {/* <li className="mb-4">
                                    <Link
                                        className=" text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Customer Support
                                    </Link>
                                </li> */}
                            {/* </ul>
                        </div>
                    </div> */}
                    <div className="w-full p-6 md:w-1/3 lg:w-2/12">
                    <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                    <ul className="space-y-3">
                        <li><a href={"/"} className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">Home</a></li>
                        <li><a href={"/Aboutus"} className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">About Us</a></li>
                        <li><a href={"/Contactus"} className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">Contact</a></li>
                    </ul>
                </div>
                    <div className="w-full p-6 md:w-1/3 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-px text-lg font-semibold mb-4 text-white">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                                        to={"/Tnc"}
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                                        to={"/Privacy"}
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Licensing
                                    </Link>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    <div className='border-t border-gray-800 pt-8 flex flex-col w-full md:flex-row items-center justify-center'>
                                <p className=" text-gray-400 text-sm mb-4 md:mb-0">
                                    &copy; Copyright 2025. All Rights Reserved by Aayush Bijalwan.
                                </p>
                            </div>
                </div>
            </div>
        </section>
  )
}

export default Footer