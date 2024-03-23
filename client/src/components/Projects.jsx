import React, {useState} from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
                         index,
                         name,
                         upcoming,live,inprogress,archived,
                         description,
                         tags,
                         image,
                         source_code_link,
                         view_link
                     }) => {
    const [showMore,setShowMore] = useState("");

    return (
        <div
            variants={fadeIn("", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary border p-5 rounded-2xl sm:w-[360px] w-full h-full mb-0'
            >

                <div className='relative w-full h-[230px]'>
                    <div
                        onClick={() => {
                            if(view_link!==undefined)
                                window.open(view_link, "_blank")
                        }}
                        className='w-full h-full object-cover  cursor-pointer rounded-2xl'
                    >
                        <img
                            src={image}
                            alt='project_image'
                            className='w-full h-full object-cover rounded-2xl'
                        />

                        {/*  for github link*/}

                        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                            {source_code_link !== undefined ?
                                (<div
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        window.open(source_code_link, "_blank")
                                    }}
                                    className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                                >
                                    <img
                                        src={github}
                                        alt='source code'
                                        className='w-1/2 h-1/2 object-contain'
                                    />
                                </div> ): null
                            }
                        </div>

                    </div>
                </div>

                {/*for name and desdcriptions*/}
                <div className='mt-5'>
                    <h3 className='text-white font-bold text-[24px]'>{name} <br/>
                        <div className='inline-block'>
                            { inprogress!=undefined && inprogress? <span className="bg-orange-500 text-black-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-orange-400">In progress</span>:null}
                            { archived!=undefined && archived? <span className="bg-red-500 text-black-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-red-400">archived</span>:null}
                            { upcoming!=undefined && upcoming? <span
                                className="bg-blue-400 text-white-900 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-100 dark:text-orange-300 border border-blue-600">Coming soon</span>:null}
                            { live!=undefined && live?
                                <span className="bg-green-500 text-black-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">Live</span>
                                :null}
                        </div>
                    </h3>
                    {/*<p className='mt-2 text-secondary text-[14px] '>{showMore?description:description.split(".")[0]}*/}
                    <p className='mt-2 text-secondary text-[14px] '>{showMore?
                        (<ul className='mt-5 list-disc ml-5 space-y-2'>
                            {description.map((point, index) => (
                                <li
                                    // key={`experience-point-${index}`}
                                    className='text-white-100 text-[14px] pl-1 tracking-wider'
                                >{point}

                                </li>
                            ))}
                        </ul>)
                        :description[0]}

                        <br/>
                        <br/>
                        <span className="hover:cursor-pointer border-solid border-2 border-white-600 ml-2 p-1" onClick={()=>(setShowMore((prevState)=>(!prevState)))
                        }>
                        {showMore?'less ':'more '}
                    </span>

                    </p>
                </div>

                {/*for hashtags*/}
                <div className='mb-2 mt-3 flex flex-wrap gap-2 '>
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
        </div>
    );
};

const Projects = () => {
    return (
        <>
            <div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>
                    Where Imagination Takes Form: A Showcase of My Projects</p>
                <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
            </div>

            <div className='w-full flex'>
                <p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                    Dive into a World of Creativity and Innovation as you explore a curated selection of my diverse projects. From web design and development to graphic art and beyond, each project represents a unique journey of passion, skill, and dedication. Witness the transformative power of ideas coming to life and discover the artistry behind every endeavor.
                </p>
            </div>

            <div className='mt-20 flex flex-wrap gap-7'>
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Projects, "projects");