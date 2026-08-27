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
      >
        <strong>Senior Application Developer</strong> with strong frontend expertise in <strong>React.js, Angular, TypeScript, JavaScript, HTML5, and CSS3</strong>. Experienced in building responsive and scalable web applications, reusable UI components, and micro frontends. Skilled in <strong>Java, Spring Boot, Microservices, REST APIs, Node.js, CI/CD, cloud deployments, and full-stack development</strong>. Strong team player focused on building reliable, user-friendly, and high-performance applications.
      </motion.p>

      {/* Service cards removed per request */}
    </>
  );
};

export default SectionWrapper(About, "about");
