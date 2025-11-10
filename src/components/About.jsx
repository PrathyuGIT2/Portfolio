import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className="section-title">Introduction</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-6 heading-font text-softgray text-base lg:text-lg leading-relaxed text-shadow-strong'
      >Passionate and results-driven Senior Frontend Developer with around 6 years of experience in designing and building scalable, high-performance, and accessible web applications using React.js, Angular, TypeScript, and Node.js. Skilled in architecting responsive SPAs, enhancing rendering efficiency, and collaborating with cross-functional teams to deliver enterprise-grade digital solutions. Proficient in micro frontends, CI/CD automation, and cloud-native deployments, with a strong focus on transforming UX concepts into seamless, interactive user experiences.
      </motion.p>

      {/* Service cards removed per request */}
    </>
  );
};

export default SectionWrapper(About, "about");
