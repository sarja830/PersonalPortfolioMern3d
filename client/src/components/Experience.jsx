import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import {experiences, resumeDownloadLink, resumeIframeviewLink} from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#1d1836",
                color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className='flex justify-center items-center w-full h-full cursor-pointer' onClick={() => window.open(experience.link, "_blank")}>
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className='w-[76%] h-[76%] object-contain'
                    />
                </div>
            }
        >
            <div>
                <h3 className='text-white text-[24px] font-bold cursor-pointer' onClick={() => window.open(experience.link, "_blank")}>{experience.title}</h3>
                <p
                    className='text-secondary text-[16px] font-semibold'
                    style={{ margin: 0 }}
                >
                    {experience.company_name}
                </p>
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2'>
                {experience.subexperience ?experience.subexperience.map((point, index) => (
                    <li
                        className='text-white-100 text-[14px] pl-1 tracking-wider list-none'

                    >
                        <div>
                            <h3 className='text-white text-[24px] font-bold cursor-pointer' onClick={() => window.open(point.link, "_blank")}>{point.title}</h3>
                            <p
                                className='text-secondary text-[16px] font-semibold'
                                style={{ margin: 0 }}
                            >
                                {point.company_name}
                            </p>
                            <p
                                className='text-secondary text-[16px] font-semibold'
                                style={{ margin: 0 }}
                            >
                                {point.date}
                            </p>
                        </div>
                        {point.points.map((point1, index) => (
                            <ul className='mt-5 list-disc ml-5 space-y-2'>
                                <li
                                    key={`experience-point-${index}`}
                                    className='text-white-100 text-[14px] pl-1 tracking-wider'
                                >
                                    {point1}

                                </li>
                            </ul>
                        ))}

                    </li>

                )):null}


                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className='text-white-100 text-[14px] pl-1 tracking-wider'
                    >{point}

                    </li>
                ))}



                {experience.viewTranscript ? (
                    <li

                        className='text-white-100 text-[14px] pl-1 tracking-wider list-none'
                    >
                    <button
                        type="button"
                        className=" text-secondary mt-5  text-[17px] items-center  text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                        <a target="_blank" href={experience.viewTranscript}> View Transcript </a>
                    </button>
                        {experience.transcriptLink ? (

                            <button
                                onClick={(e) => {window.open(experience.transcriptLink, "_blank");}}
                                type="button"
                                className=" text-secondary text-[17px] items-center  text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            >
                                Download Transcript

                            </button>

                        ) : null}
                    </li>
                ) : null}






            </ul>
        </VerticalTimelineElement>
    );
};

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                    From Challenges to Triumphs: A Journey of Experience and Growth
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    Education & Work Experience.
                </h2>
            </motion.div>

            <div className='mt-20 flex flex-col'>
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "experience");