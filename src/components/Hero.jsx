import { motion } from "framer-motion";
import { styles } from "../styles";
import { prathyusha, github } from "../assets";


const Hero = () => {
  return (
  <section className={`relative w-full mx-auto`}>
    <div className={`w-full pt-[100px] sm:pt-[120px] pb-2 ${styles.paddingX}`}>
        <div className="w-full">
          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-6 lg:gap-1">
            <div className="flex-1 flex flex-col gap-4 md:gap-6 w-full">
              <h1 className={`section-title`}>Hey! I'm Prathyusha Sama</h1>
              <p className={`heading-font text-lg md:text-xl lg:text-2xl text-softgray leading-relaxed max-w-3xl text-shadow-strong`}>
                I'm passionate about creating beautiful and engaging user interfaces that bring ideas to life.
              </p>
              
              {/* Social Links */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 mt-2 md:mt-4">
                <a 
                  href="https://www.linkedin.com/in/prathyushasama/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full bg-gradient-to-r from-pink-100 to-lavender-100 hover:from-pink-200 hover:to-lavender-200 transition-all duration-300 shadow-md hover:shadow-lg border border-pink-200/50"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6 fill-current flex-shrink-0" style={{color: '#FFB6D9'}} viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span className="font-semibold text-sm md:text-base text-gray-700">LinkedIn</span>
                </a>

                <a 
                  href="https://github.com/PrathyuGIT2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full bg-gradient-to-r from-pink-100 to-lavender-100 hover:from-pink-200 hover:to-lavender-200 transition-all duration-300 shadow-md hover:shadow-lg border border-pink-200/50"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6 fill-current flex-shrink-0" style={{color: '#C3AED6'}} viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="font-semibold text-sm md:text-base text-gray-700">GitHub</span>
                </a>

                <a 
                  href="https://calendly.com/prathyushasama" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full bg-gradient-to-r from-pink-100 to-lavender-100 hover:from-pink-200 hover:to-lavender-200 transition-all duration-300 shadow-md hover:shadow-lg border border-pink-200/50"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6 fill-current flex-shrink-0" style={{color: '#FFB6D9'}} viewBox="0 0 24 24">
                    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z"/>
                  </svg>
                  <span className="font-semibold text-sm md:text-base text-gray-700">Schedule</span>
                </a>
              </div>

              {/* Professional image strip removed per request */}
            </div>
            {/* Enlarged profile picture container - responsive sizing */}
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full relative shadow-xl overflow-hidden border-4 border-secondary/40 flex-shrink-0">
              <img src={prathyusha} alt="Profile" className="w-full h-full object-cover" />
              <div className="absolute inset-0 pointer-events-none" style={{background:"radial-gradient(circle at 30% 30%, rgba(255,193,204,0.35), rgba(195,174,214,0.15) 60%, transparent 75%)"}} />
            </div>
          </div>
        </div>
      </div>

      {/* ComputersCanvas removed per design — static hero without 3D canvas */}
    </section>
  );
};

export default Hero;
