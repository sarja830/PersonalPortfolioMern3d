import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { certifications } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const CertificationCard = ({ index, title, issuer, platform, credentialUrl }) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.2, 0.5)}>
            <div
                onClick={() => window.open(credentialUrl, "_blank")}
                className='bg-tertiary p-4 rounded-lg hover:bg-[#151030] transition-all cursor-pointer border border-secondary hover:border-white group w-full'
            >
                <div className='flex justify-between items-start'>
                    <div className='flex-1'>
                        <h3 className='text-white font-bold text-[16px] group-hover:text-blue-400 transition-colors'>{title}</h3>
                        <div className='flex flex-col sm:flex-row sm:items-center gap-1 mt-1'>
                            <p className='text-secondary text-[14px] font-medium'>{issuer}</p>
                            <span className='hidden sm:block text-secondary text-[12px]'>•</span>
                            <p className='text-secondary text-[12px]'>{platform}</p>
                        </div>
                    </div>
                    <div className='text-secondary group-hover:text-white transition-colors'>
                        <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                            <path fillRule='evenodd' d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z' clipRule='evenodd' />
                        </svg>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Certifications = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                    Professional Growth and Continuous Learning
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    Certifications.
                </h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                    These certifications represent my commitment to continuous learning and staying current with industry best practices. Each certification has enhanced my expertise in software development, system design, and agile methodologies.
                </motion.p>
            </div>

            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto'>
                {certifications.map((certification, index) => (
                    <CertificationCard key={`certification-${index}`} index={index} {...certification} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Certifications, "certifications");
