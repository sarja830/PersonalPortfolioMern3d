import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { journals } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


const ResearchCard = ({
                          index,
                          name,
                          description,
                          tags,
                          image,
                          source_code_link,
                      }) => {
    return (
        <motion.div
            variants={fadeIn("down", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                // className='bg-tertiary p-5 rounded-2xl flex hover:flex-1 w-full h-full'

                className='flex flex-col grid-row bg-tertiary border border-gray-200 rounded-lg  md:flex-row md:max-w-7xl hover:flex-1 p-5 rounded-2xl'>
                <div className='relative w-full '>
                    <div
                        onClick={() => window.open(source_code_link, "_blank")}
                        className='w-full h-full object-cover  cursor-pointer rounded-2xl'
                    >
                        <img
                            src={image}

                            alt='project_image'
                            className='w-full h-full object-cover rounded-2xl'
                        />
                        {/*for view link*/}
                        {/*<div className='absolute inset-y-0 flex justify-end m-3 card-img_hover'>*/}
                        {/*    <div*/}
                        {/*        onClick={() => window.open(source_code_link, "_blank")}*/}
                        {/*        className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'*/}
                        {/*    >*/}
                        {/*        <img*/}
                        {/*            src={github}*/}
                        {/*            alt='source code'*/}
                        {/*            className='w-1/2 h-1/2 object-contain'*/}
                        {/*        />*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*  for github link*/}
                        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                            <div
                                onClick={() => window.open(source_code_link, "_blank")}
                                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                            >
                                <img
                                    src={github}
                                    alt='source code'
                                    className='w-1/2 h-1/2 object-contain'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/*<img*/}
                {/*    className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'*/}
                {/*    src={image}*/}
                {/*    alt='project_image'/>*/}
                <div className='flex flex-col justify-between p-4 leading-normal'>
                    <h3 className='text-white font-bold text-[24px]'>
                        {name}</h3>
                    <p className='mt-2 text-secondary text-[14px]'>{description}</p>
                </div>
                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`text-[14px] ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};

const Research = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>My Research</p>
                <h2 className={`${styles.sectionHeadText}`}>Research.</h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                    Following projects showcases my skills and experience through
                    real-world examples of my work. Each project is briefly described with
                    links to code repositories and live demos in it. It reflects my
                    ability to solve complex problems, work with different technologies,
                    and manage projects effectively.
                </motion.p>
            </div>

            <div className='mt-20 flex flex-wrap gap-7'>
                {journals.map((project, index) => (
                    <ResearchCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Research, "research");