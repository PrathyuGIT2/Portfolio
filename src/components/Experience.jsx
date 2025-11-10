import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <div className='soft-card p-6 h-full flex flex-col'>
      <div className='flex items-center gap-4'>
        <div className='icon-pastel'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-6 h-6 object-contain'
          />
        </div>
        <div>
          <h3 className='heading-font pink-text-gradient text-xl lg:text-2xl font-extrabold'>
            {experience.title}
          </h3>
          <p className='heading-font pink-text-gradient text-base lg:text-lg font-bold m-0'>
            {experience.company_name}
          </p>
        </div>
      </div>
      {experience.date && (
        <p className='mt-3 text-softgray text-sm heading-font'>{experience.date}</p>
      )}
      <p className='mt-4 text-softgray text-base leading-relaxed heading-font'>
        {experience.desc}
      </p>
    </div>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`section-title`}>Work Experience</h2>
      </motion.div>

  <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 items-stretch justify-items-stretch'>
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
