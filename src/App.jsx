import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, Certifications, StarsCanvas, FlowersCanvas } from "./components";
import { styles } from "./styles";
import Decorations from './components/Decorations';
import vibe from './assets/vibe.png';

const App = () => {
  return (
    <BrowserRouter>
  <div className='relative z-0 bg-background pink-bg-gradient'>
        <Decorations />
        <FlowersCanvas />
        <div className='relative'>
          <Navbar />
          <Hero />
        </div>
        {/* Aesthetic image between top (Hero) and About */}
  <div className="relative w-full mt-2 mb-5 lg:mt-4 lg:mb-8">
    {/* Use full width with same horizontal padding as section headers for perfect alignment */}
    <div className={`${styles.paddingX} w-full`}>
      <div className="max-w-7xl flex items-center gap-1 md:gap-2 lg:gap-3">
            {/* Left binary code lines - hidden on mobile, fewer on tablet, more on desktop */}
            <div className="hidden md:flex gap-1">
              {/* Show 10 columns on md, 20 on lg */}
              {[...Array(20)].map((_, col) => (
                <div key={`left-col-${col}`} className={`flex flex-col gap-1 font-mono text-[10px] md:text-xs opacity-70 overflow-hidden ${col >= 10 ? 'hidden lg:flex' : ''}`}>
                  {['1', '0', '1', '1', '0', '1', '0', '1', '1', '0', '1', '0', '1', '1'].map((bit, row) => (
                    <div
                      key={`left-${col}-${row}`}
                      className={`binary-rain-digit ${bit === '1' ? 'text-purple-500' : 'text-pink-500'}`}
                      style={{ animationDelay: `${(-Math.random() * 3).toFixed(2)}s`, '--rainDur': `${(3 + (col % 7) * 0.25).toFixed(2)}s` }}
                    >
                      {bit}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            
            <div className="relative flex-1 w-full">
              <img
                src={vibe}
                alt="Creative divider"
                className="w-full h-40 sm:h-48 md:h-56 lg:h-72 object-cover rounded-xl md:rounded-2xl shadow-xl border border-white/20"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-pink-300/40 via-purple-300/40 to-pink-300/40 rounded-xl md:rounded-2xl mix-blend-soft-light pointer-events-none"></div>
            </div>
            
            {/* Right binary code lines - hidden on mobile, fewer on tablet, more on desktop */}
            <div className="hidden md:flex gap-1">
              {/* Show 10 columns on md, 20 on lg */}
              {[...Array(20)].map((_, col) => (
                <div key={`right-col-${col}`} className={`flex flex-col gap-1 font-mono text-[10px] md:text-xs opacity-70 overflow-hidden ${col >= 10 ? 'hidden lg:flex' : ''}`}>
                  {['0', '1', '0', '1', '1', '0', '1', '1', '0', '1', '0', '1', '1', '0'].map((bit, row) => (
                    <div
                      key={`right-${col}-${row}`}
                      className={`binary-rain-digit ${bit === '1' ? 'text-purple-500' : 'text-pink-500'}`}
                      style={{ animationDelay: `${(-Math.random() * 3).toFixed(2)}s`, '--rainDur': `${(3 + (col % 7) * 0.25).toFixed(2)}s` }}
                    >
                      {bit}
                    </div>
                  ))}
                </div>
              ))}
            </div>
      </div>
    </div>
        </div>
  <About />
  <Tech />
  <Experience />
  <Works />
  <Certifications />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;