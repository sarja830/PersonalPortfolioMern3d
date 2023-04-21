
import React, { useState, useEffect } from "react";
import { SectionWrapper } from "../hoc";
import {resumeDownloadLink, resumeIframeviewLink} from "../constants/index.js";
import {textVariant} from "../utils/motion.js";
import {styles} from "../styles.js";
import {motion} from "framer-motion";

const Resume = () => {
    const [width, setWidth] = useState(100);
    const [show, setShow] = useState(false);

    useEffect(() => {

        setWidth(window.innerWidth);
    }, []);

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Course of life</p>
                <h2 className={styles.sectionHeadText}>Resume.</h2>
            </motion.div>
            <div className='mt-10 flex flex-wrap gap-10'>
                <button
                    onClick={() => setShow(!show)}
                    type="button"
                    className="text-secondary text-[17px]  items-center  text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                    View Resume        </button>

                <button
                    onClick={(e) => {window.open(resumeDownloadLink, "_blank");}}
                    type="button"
                    className=" text-secondary text-[17px] items-center  text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                    Download Resume

                </button>
                {show ? (
                    <div fluid className="container mx-auto">
                        <div className="gap-4">
                            <iframe src={resumeIframeviewLink} width="960" height="1080" allow="autoplay"></iframe>
                        </div>
                    </div>
                ) : null}

            </div>


        </>
    );

};



export default SectionWrapper(Resume, "resume");