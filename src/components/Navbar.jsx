import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "frosted-panel" : "bg-background/60 backdrop-blur"
      }`}
    >
  <div className='w-full flex justify-between items-center'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div
            role="img"
            aria-label="PS logo"
            className='w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg hover:bg-pink-50 transition-all duration-300 border-2 border-pink-300'
          >
            <svg
              width='44'
              height='44'
              viewBox='0 0 32 32'
              xmlns='http://www.w3.org/2000/svg'
              className='w-11 h-11 transform hover:scale-105 transition-transform duration-300'
              aria-hidden='true'
            >
              <circle cx='16' cy='16' r='16' fill='#FFB6D9' />
              <text 
                x='50%' 
                y='55%' 
                textAnchor='middle' 
                fontFamily='Abril Fatface, cursive' 
                fontWeight='700' 
                fontSize='14' 
                fill='#ffffff' 
                letterSpacing='-0.5'
                style={{ 
                  filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.15))',
                  dominantBaseline: 'middle'
                }}
              >PS</text>
            </svg>
          </div>
          <p className='text-[20px] cursor-pointer flex items-center gap-3'>
            <span className='text-secondary logo-font text-3xl font-black hover:text-white transition-colors'></span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="text-lg cursor-pointer"
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`} className="heading-font font-semibold pink-text-gradient link-underline hover:opacity-90 transition-opacity">{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 pink-bg-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl shadow-lg`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`cursor-pointer text-xl`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`} className="heading-font font-semibold pink-text-gradient hover:opacity-90 transition-opacity">{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
