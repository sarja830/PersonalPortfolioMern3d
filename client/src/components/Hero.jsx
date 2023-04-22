import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import {name} from '../constants/index'
import {qualities} from '../constants/index'
import {faHeart, faHouse} from '@fortawesome/free-solid-svg-icons'
import React from "react";
import Typed from "react-typed";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const Hero = () => {

    return (
        <div className={`relative w-full h-screen mx-auto`}>
            <div
                className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
            >
                {/* this div is for circle and line */}
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
                    <div className='w-1 sm:h-80 h-40 violet-gradient' />
                </div>
                {/* this is the div for text */}
                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hi, I'm &nbsp;
                        <Typed

                            strings={name.name}
                            typeSpeed={120}
                            className=" bg-gradient-to-br from-pink-500 to-orange-400 inline-block text-transparent bg-clip-text"
                            cursorChar=" "
                        />
                    </h1>
                    <p className={`${styles.heroSubText} mt-12 text-white-500`}>

                        {name.descriptionLine1}
                        <br/>
                        {name.descriptionLine2}&nbsp; <FontAwesomeIcon icon={faHeart} beat  style={{color: "#ec1894",}} />
                        <br className='sm:block hidden' />
                        <div>
                            <Typed

                                strings={qualities}
                                typeSpeed={100}
                                className={`${styles.heroQualityText} text-[ font-bold`}
                                cursorChar=" "
                                loop={0}
                            />
                        </div>
                        <br/>

                    </p>
                </div>
            </div>
            {/* the 3d computer model  */}
            {/* <ComputersCanvas /> */}

            <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
                <a href='#about'>
                    <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                        {/* this is used for the component scrollig up and down using motion */}
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className='w-3 h-3 rounded-full bg-secondary mb-1'
                        />
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Hero;