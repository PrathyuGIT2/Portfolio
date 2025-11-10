import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const certs = [
  {
    name: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
  },
  {
    name: "Angular Certified Developer",
    issuer: "Angular Training",
  },
  {
    name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
  },
];

const Ribbon = () => (
  <div className="absolute -top-3 left-6 bg-gradient-to-r from-[#FFC1CC] to-[#C3AED6] text-[#5E4B6F] text-xs font-semibold px-3 py-1 rounded-full shadow">
    Certified
  </div>
);

const CertCard = ({ index, name, issuer }) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.25, 0.6)}>
    <Tilt
      options={{ max: 12, scale: 1.02, speed: 400 }}
      className="relative soft-card p-6 pt-8 h-full"
    >
      <Ribbon />
      <div className="flex items-start gap-4">
        <div className="icon-pastel shrink-0">
          <span role="img" aria-label="medal" className="text-lg">🏅</span>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="heading-font pink-text-gradient text-lg lg:text-xl font-extrabold leading-snug">
            {name}
          </h3>
          <p className="heading-font text-softgray text-sm">{issuer}</p>
        </div>
      </div>
    </Tilt>
  </motion.div>
);

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className="section-title">Certifications</h2>
      </motion.div>

  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
        {certs.map((c, i) => (
          <CertCard key={c.name} index={i} {...c} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
