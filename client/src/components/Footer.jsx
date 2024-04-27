import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import {
    faTwitter,
    faFacebook,
    faPinterest,
    faLinkedinIn,
    faGithub,
    faWhatsapp,
    faInstagram,
    faDribbble,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons'
import {faHeart, faHouse} from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import {github} from "../assets/index.js";
import {contactViaEmail, githubLink, leetcodeProfile, mediumBlog} from "../constants/index.js";
library.add(faTwitter, faFacebook, faPinterest, faGithub, faWhatsapp,faLinkedin, faInstagram,faLinkedinIn, faHouse, faUser)

// fab fa-twitter
// fab fa-facebook
// fab fa-dribbble
// fab fa-github
const Footer = () => {
    return (
        <div className="w-full bg-black-100">
            <footer>
                <div className="w-full pointer-events-none overflow-hidden h-70-px" style={{transform: `translateZ(0px)`}}>
                    <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg"
                         preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                        <polygon className="text-blueGray-100 fill-current" points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>
                <div className="relative bg-blueGray-100 pt-8 pb-6">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap text-center lg:text-left">
                            <div className="w-full lg:w-6/12 px-4">
                                <h4 className="text-xl mt-4  font-bold ">Let's keep in touch!</h4>
                                <h5 className="mt-1 mb-2 text-secondary text-blueGray-500">Find me on any of these platforms</h5>
                                <div className="mt-6 lg:mb-0 mb-6">
                                    <a href="https://twitter.com/sarthjain830"
                                       target="_blank"
                                       className=" text-twitter-regular shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-flex"
                                       type="button">
                                        <FontAwesomeIcon icon="fa-brands fa-twitter " className={`hover:bg-sky-400 hover:style={{color:"#111212"}} p-2`} size={"2x"} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/sarth830/"
                                       target="_blank"
                                       className=" text-facebook-regular shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-flex"
                                       type="button">
                                        <FontAwesomeIcon icon="fa-brands fa-facebook" className={`hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-500 p-2`} size={"2x"} />
                                    </a>
                                    <a href="https://www.instagram.com/sarthjain830/"
                                       target="_blank"
                                       className=" text-dribbble-regular shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-flex"
                                       type="button">
                                        <FontAwesomeIcon icon="fab fa-instagram " className={` hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 p-2`} size={"2x"} />
                                    </a>

                                    <a href="https://github.com/sarja830"
                                       target="_blank"
                                       className=" text-github-regular shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-flex"
                                       type="button">
                                        <FontAwesomeIcon icon="fa-brands fa-github" className={`hover:bg-slate-800  p-2`} size={"2x"} />
                                        {/*<FontAwesomeIcon icon="fa-brands fa-github" style={{color: "#172a4a",}} />   size={"2x"} />*/}
                                    </a>

                                    <a href="https://api.whatsapp.com/send/?phone=7162926593&text&type=phone_number&app_absent=0"
                                       target="_blank"
                                       className=" text-github-regular shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-flex"
                                       type="button">
                                        <FontAwesomeIcon icon="fa-brands fa-whatsapp"  className={"hover:bg-green-500 p-2"} size={"2x"} />
                                    </a>

                                    <a href="https://www.linkedin.com/in/sarth830/"
                                       target="_blank"
                                       className=" text-github-regular shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-flex"
                                       type="button">
                                        {/*<FontAwesomeIcon icon="fa-brands fa-linkedin" class style={{color: "#3270dc",}} size={"2x"} />*/}
                                        <FontAwesomeIcon icon="fa-brands fa-brands fa-linkedin-in" className={"hover:bg-sky-700 p-2"} size={"2x"} />
                                    </a>
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="flex flex-wrap items-top mb-6">
                                    <div className="w-full lg:w-4/12 px-4 ml-auto">
                                        <span className="block uppercase text-xs font-bold mb-2">Useful Links</span>
                                        <ul className="list-unstyled">
                                            <a
                                                href=""
                                                target="_blank"
                                                className="text-blueGray-500 hover:text-blueGray-700 block pb-2 text-sm">

                                            </a>
                                            <a href=""
                                               target="_blank"
                                               className="text-blueGray-500 hover:text-blueGray-700 block pb-2 text-sm"> Personal Blog (coming soon)</a>

                                            <a
                                                href={githubLink} target="_blank"
                                                className="text-blueGray-500 hover:text-blueGray-700 block pb-2 text-sm">Github</a>

                                            <a
                                                href={mediumBlog}
                                                target="_blank"
                                                className="text-blueGray-500 hover:text-blueGray-700 block pb-2 text-sm">
                                                Medium Blogs</a>
                                        </ul>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 ml-auto">
                                        <span className="block uppercase text-xs font-bold mb-2">Other Resources</span>
                                        <ul className="list-unstyled">
                                            <a
                                                href={leetcodeProfile} target="_blank"
                                                className="text-blueGray-500 hover:text-blueGray-700 block pb-2 text-sm">
                                                Leetcode Profile
                                            </a>
                                            <a href={contactViaEmail}
                                               target="_blank"
                                               className="text-blueGray-500 hover:text-blueGray-700 block pb-2 text-sm">
                                                Contact via email
                                            </a>
                                            <a
                                                href="" target="_blank"
                                                className="text-blueGray-500 hover:text-blueGray-700 block pb-2 text-sm">

                                            </a>

                                            <a
                                                href="" target="_blank"
                                                className="text-blueGray-500 hover:text-blueGray-700 block pb-2 text-sm">

                                            </a>


                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="my-6 border-blueGray-200"/>
                        <div className="flex flex-wrap items-center md:justify-between justify-center">
                            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                                <div className="text-sm text-blueGray-500 py-1">Copyright © 2023  Made with &nbsp; <FontAwesomeIcon icon={faHeart} beat style={{color: "#e51515",}} /> &nbsp; by SARTHAK JAIN
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;