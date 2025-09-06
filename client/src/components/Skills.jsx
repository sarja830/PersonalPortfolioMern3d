import React from "react";

import Typed from 'react-typed';

import { SectionWrapper } from "../hoc";
import { frameworks } from "../constants";
import { languages } from "../constants";
import { others } from "../constants";
import { cloud } from "../constants";

import { motion } from "framer-motion";
import { textVariant } from "../utils/motion.js";
import { styles } from "../styles.js";
const Skills = () => {
    const roles = ["author", "team Player"];
    // const techs = [
    //     {
    //         id: 1,
    //         src: html,
    //         title: "HTML",
    //         style: "shadow-orange-500",
    //     },
    //     {
    //         id: 2,
    //         src: css,
    //         title: "CSS",
    //         style: "shadow-blue-500",
    //     },
    //     {
    //         id: 3,
    //         src: javascript,
    //         title: "JavaScript",
    //         style: "shadow-yellow-500",
    //     },
    //     {
    //         id: 4,
    //         src: reactImage,
    //         title: "React",
    //         style: "shadow-blue-600",
    //     },
    //     {
    //         id: 5,
    //         src: tailwind,
    //         title: "Tailwind",
    //         style: "shadow-sky-400",
    //     },
    //     {
    //         id: 6,
    //         src: nextjs,
    //         title: "Next JS",
    //         style: "shadow-white",
    //     },
    //     {
    //         id: 7,
    //         src: graphql,
    //         title: "GraphQL",
    //         style: "shadow-pink-400",
    //     },
    //     {
    //         id: 8,
    //         src: github,
    //         title: "GitHub",
    //         style: "shadow-gray-400",
    //     },
    // ];

    return (
        <>
            <div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                    My current tech toolkit
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    Skills.
                </h2>
            </div>

            <div className='mt-5'>
                <h3 className='text-white font-bold text-[24px]'>Frameworks</h3>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0">
                {frameworks.map((framework) => (
                    <div

                        className={`  shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${"shadow-indigo-500"}`}
                    >
                        <img src={framework.icon} alt="" className="w-16 h-16 bg-white  mx-auto" />
                        <p className="mt-1  ">{framework.name}</p>
                    </div>
                ))}
            </div>


            <div className='mt-5'>
                <h3 className='text-white font-bold text-[24px]'>Languages</h3>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0">

                {languages.map((language) => (
                    <div

                        className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${"shadow-purple-500"}`}
                    >
                        <img src={language.icon} alt="" className="w-16 h-16 bg-white  mx-auto" />
                        <p className="mt-1 ">{language.name}</p>
                    </div>
                ))}
            </div>



            <div className='mt-5'>
                <h3 className='text-white font-bold text-[24px]'>Cloud</h3>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0">

                {cloud.map((cloudTech) => (
                    <div

                        className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${"shadow-cyan-500"}`}
                    >
                        <img src={cloudTech.icon} alt="" className="w-16 h-16 bg-white  mx-auto" />
                        <p className="mt-1 ">{cloudTech.name}</p>
                    </div>
                ))}
            </div>

            <div className='mt-5'>
                <h3 className='text-white font-bold text-[24px]'>Others</h3>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0">

                {others.map((other) => (
                    <div

                        className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${"shadow-pink-500"}`}
                    >
                        <img src={other.icon} alt="" className="w-16 h-16 bg-white  mx-auto" />
                        <p className="mt-1 ">{other.name}</p>
                    </div>
                ))}
            </div>
        </>
    );
};


export default SectionWrapper(Skills, "skills");
