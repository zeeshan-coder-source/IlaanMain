// import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
// import { ChevronRight } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import NavOverlay from './NavOverlay';
// import Header from './Header';

// import bg1 from '../assets/backup/01.png';
// import bg2 from '../assets/backup/02.png';
// import bg3 from '../assets/backup/03.png';
// import bg4 from '../assets/backup/04.png';

// import bg1Mobile from '../assets/backup/1.png';
// import bg2Mobile from '../assets/backup/2.png';
// import bg3Mobile from '../assets/backup/3.png';
// import bg4Mobile from '../assets/backup/4.png';

// // --- TITLE IMAGES (Studio / Media / Electronic / Digital Signage) — desktop + mobile ---
// // import studioTitleDesktop from '../assets/new/Ilaan_Studio_Desktop.png';
// // import studioTitleMobile from '../assets/new/Ilaan_Studio_Mobiletxt.png';
// // import mediaTitleDesktop from '../assets/new/Ilaan_Media_Desktoptxt.png';
// // import mediaTitleMobile from '../assets/new/Ilaan_Media_Mobile 1.png';
// // import electronicTitleDesktop from '../assets/new/Ilaan_link_Desktop.png';
// // import electronicTitleMobile from '../assets/new/Ilaan_link_Mobiletxt.png';
// // import signageTitleDesktop from '../assets/new/Ilaan_Digital_Signage_Desktop.png';
// // import signageTitleMobile from '../assets/new/Ilaan_Digital_Signage_Mobiletxt.png';
// import HeadersH1 from './HeadingH1';

// const desktopSlides = [bg1, bg2, bg3, bg4];
// const mobileSlides = [bg1Mobile, bg2Mobile, bg3Mobile, bg4Mobile];
// const SLIDE_DURATION = 4000; // ms per slide

// // const slideContents = [
// //   {
// //     titleImageDesktop: studioTitleDesktop,
// //     titleImageMobile: studioTitleMobile,
// //     subtitle: 'Creative & Branding Solutions'
// //   },
// //   {
// //     titleImageDesktop: mediaTitleDesktop,
// //     titleImageMobile: mediaTitleMobile,
// //     subtitle: 'Creative & Branding Solutions'
// //   },
// //   {
// //     titleImageDesktop: electronicTitleDesktop,
// //     titleImageMobile: electronicTitleMobile,
// //     subtitle: 'Eliminate Manual Price'
// //   },
// //   {
// //     titleImageDesktop: signageTitleDesktop,
// //     titleImageMobile: signageTitleMobile,
// //     subtitle: 'Smart Signage Solutions'
// //   }
// // ];

// const slideContents = [
//   {
//     title: 'Ilaan Studio',
//     subtitle: 'Creative & Branding Solutions'
//   },
//   {
//     title: 'Ilaan Media',
//     subtitle: 'Creative & Branding Solutions'
//   },
//   {
//     title: 'Ilaan Link',
//     subtitle: 'Eliminate Manual Price'
//   },
//   {
//     title: 'Digital Signage',
//     subtitle: 'Smart Signage Solutions'
//   }
// ];

// const Hero = () => {
//   const [current, setCurrent] = useState(0);
//   const [progress, setProgress] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const heroRef = useRef(null);
//   const contentRef = useRef(null);
//   const bgRef = useRef(null);

//   // Check screen size for responsiveness
//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 768);
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   const slides = isMobile ? mobileSlides : desktopSlides;
//   const slide = slideContents[current];
//   // const titleImage = isMobile ? slide.titleImageMobile : slide.titleImageDesktop;

//   <div className="lg:ml-[-5px] py-2 md:py-4 flex items-center justify-start">
//     {/* img tag hata do, yeh lagao: */}
//     <HeadersH1 leading="0.8em" xlText='88px' txtColor="white">
//       {slide.title}
//     </HeadersH1>
//   </div>

//   // Auto-advance slides
//   useEffect(() => {
//     setProgress(0);
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, SLIDE_DURATION);
//     return () => clearInterval(interval);
//   }, [current, slides.length]);

//   // Progress bar animation
//   useEffect(() => {
//     setProgress(0);
//     const start = Date.now();
//     const tick = setInterval(() => {
//       const elapsed = Date.now() - start;
//       setProgress(Math.min((elapsed / SLIDE_DURATION) * 100, 100));
//     }, 16);
//     return () => clearInterval(tick);
//   }, [current]);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       // Background parallax
//       gsap.to(bgRef.current, {
//         yPercent: 30,
//         ease: 'none',
//         scrollTrigger: {
//           trigger: heroRef.current,
//           start: 'top top',
//           end: 'bottom top',
//           scrub: true,
//         },
//       });

//       // Content fade and lift
//       gsap.to(contentRef.current, {
//         opacity: 0,
//         y: -50,
//         ease: 'power1.inOut',
//         scrollTrigger: {
//           trigger: heroRef.current,
//           start: 'top top',
//           end: 'bottom 40%',
//           scrub: true,
//         },
//       });

//       // Initial entrance
//       gsap.from('.reveal-text', {
//         y: 100,
//         opacity: 0,
//         duration: 1.5,
//         stagger: 0.2,
//         ease: 'power4.out',
//       });
//     }, heroRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <>
//       {/* --- FIXED HEADER --- */}
//       <Header
//         onMenuOpen={() => setIsMenuOpen(true)}
//         animationClass="reveal-text"
//         logoClickable={false}
//       />

//       <div ref={heroRef} className="relative h-screen w-full bg-black text-white font-sans p-4 md:p-6 lg:p-8 flex items-center justify-center overflow-hidden">

//         {/* --- WRAPPER WITH VISIBLE BORDER --- */}
//         <div className="relative h-full w-full border-2 border-[#D9FF00]/30 rounded-[2.5rem] overflow-hidden flex flex-col shadow-[0_0_20px_rgba(217,255,0,0.1)]">

//           {/* --- CAROUSEL BACKGROUND --- */}
//           <div ref={bgRef} className="absolute inset-0 z-0">
//             <AnimatePresence mode="sync">
//               <motion.img
//                 key={current}
//                 src={slides[current]}
//                 alt="Hero Background"
//                 className="absolute inset-0 h-full w-full object-cover scale-100"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 1.2, ease: "easeInOut" }}
//               />
//             </AnimatePresence>
//             <div className="absolute inset-0 bg-black/40" />
//           </div>

//           {/* Spacer to clear fixed header */}
//           {/* <div className="h-16 md:h-20 shrink-0" /> */}

//           <main ref={contentRef} className="relative z-10 flex flex-col justify-center flex-grow px-8 md:px-16 lg:px-24">
//             <div className="max-w-5xl mb-10 md:mb-10 reveal-text">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={current}
//                   initial={{ opacity: 0, y: 15 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -15 }}
//                   transition={{ duration: 0.6, ease: "easeInOut" }}
//                 >
//                   <div className="lg:ml-[-5px] py-2 md:py-4 flex items-center justify-start">

//                     <img
//                       src={titleImage}
//                       alt={`${slide.subtitle} title`}
//                       className="h-[100px] sm:h-[60px] md:h-[80px] lg:h-[95px] w-auto object-contain"
//                     />

//                   </div>

//                   <p className="mt-4 md:mt-10 text-[16px] md:text-[25px] text-white font-poppins font-normal leading-[1.32] tracking-normal max-w-[200px] md:max-w-full">
//                     {slide.subtitle}
//                   </p>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </main>

//           {/* --- SLIDER INDICATOR (bottom center) --- */}
//           <div className="absolute bottom-8 left-0 right-0 z-20 flex items-center justify-center gap-2 md:gap-3 reveal-text">
//             {slides.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setCurrent(i)}
//                 className="relative h-[4px] w-[60px] md:w-[120px] rounded-full overflow-hidden cursor-pointer focus:outline-none"
//                 style={{ background: 'rgba(255,255,255,0.3)' }}
//               >
//                 {/* Animated progress fill for active slide */}
//                 {i === current && (
//                   <motion.div
//                     className="absolute inset-y-0 left-0 bg-white rounded-full"
//                     style={{ width: `${progress}%` }}
//                   />
//                 )}
//               </button>
//             ))}
//           </div>

//         </div>

//         {/* Navigation Overlay Menu */}
//         <AnimatePresence>
//           {isMenuOpen && (
//             <NavOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
//           )}
//         </AnimatePresence>
//       </div>
//     </>
//   );
// };

// export default Hero;

//////////////////////////////////////////////////////////////////////


// import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import NavOverlay from './NavOverlay';
// import Header from './Header';
// import HeadersH1 from './HeadingH1';

// import bg1 from '../assets/backup/01.png';
// import bg2 from '../assets/backup/02.png';
// import bg3 from '../assets/backup/03.png';
// import bg4 from '../assets/backup/04.png';

// import bg1Mobile from '../assets/backup/1.png';
// import bg2Mobile from '../assets/backup/2.png';
// import bg3Mobile from '../assets/backup/3.png';
// import bg4Mobile from '../assets/backup/4.png';

// const desktopSlides = [bg1, bg2, bg3, bg4];
// const mobileSlides = [bg1Mobile, bg2Mobile, bg3Mobile, bg4Mobile];
// const SLIDE_DURATION = 4000;

// const slideContents = [
//   { title: 'Ilaan Studio', subtitle: 'Creative & Branding Solutions' },
//   { title: 'Ilaan Media', subtitle: 'Creative & Branding Solutions' },
//   { title: 'Ilaan Link', subtitle: 'Eliminate Manual Price' },
//   { title: 'Digital Signage', subtitle: 'Smart Signage Solutions' }
// ];

// const Hero = () => {
//   const [current, setCurrent] = useState(0);
//   const [progress, setProgress] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const heroRef = useRef(null);
//   const contentRef = useRef(null);
//   const bgRef = useRef(null);

//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 768);
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   const slides = isMobile ? mobileSlides : desktopSlides;
//   const slide = slideContents[current];

//   useEffect(() => {
//     setProgress(0);
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, SLIDE_DURATION);
//     return () => clearInterval(interval);
//   }, [current, slides.length]);

//   useEffect(() => {
//     setProgress(0);
//     const start = Date.now();
//     const tick = setInterval(() => {
//       const elapsed = Date.now() - start;
//       setProgress(Math.min((elapsed / SLIDE_DURATION) * 100, 100));
//     }, 16);
//     return () => clearInterval(tick);
//   }, [current]);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.to(bgRef.current, {
//         yPercent: 30,
//         ease: 'none',
//         scrollTrigger: {
//           trigger: heroRef.current,
//           start: 'top top',
//           end: 'bottom top',
//           scrub: true,
//         },
//       });

//       gsap.to(contentRef.current, {
//         opacity: 0,
//         y: -50,
//         ease: 'power1.inOut',
//         scrollTrigger: {
//           trigger: heroRef.current,
//           start: 'top top',
//           end: 'bottom 40%',
//           scrub: true,
//         },
//       });

//       gsap.from('.reveal-text', {
//         y: 100,
//         opacity: 0,
//         duration: 1.5,
//         stagger: 0.2,
//         ease: 'power4.out',
//       });
//     }, heroRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <>
//       <Header
//         onMenuOpen={() => setIsMenuOpen(true)}
//         animationClass="reveal-text"
//         logoClickable={false}
//       />

//       <div ref={heroRef} className="relative h-screen w-full bg-black text-white font-sans p-4 md:p-6 lg:p-8 flex items-center justify-center overflow-hidden">
//         <div className="relative h-full w-full border-2 border-[#D9FF00]/30 rounded-[2.5rem] overflow-hidden flex flex-col shadow-[0_0_20px_rgba(217,255,0,0.1)]">

//           <div ref={bgRef} className="absolute inset-0 z-0">
//             <AnimatePresence mode="sync">
//               <motion.img
//                 key={current}
//                 src={slides[current]}
//                 alt="Hero Background"
//                 className="absolute inset-0 h-full w-full object-cover scale-100"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 1.2, ease: "easeInOut" }}
//               />
//             </AnimatePresence>
//             <div className="absolute inset-0 bg-black/40" />
//           </div>

//           <main ref={contentRef} className="relative z-10 flex flex-col justify-center flex-grow px-8 md:px-16 lg:px-24">
//             <div className="max-w-5xl mb-10 md:mb-10 reveal-text">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={current}
//                   initial={{ opacity: 0, y: 15 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -15 }}
//                   transition={{ duration: 0.6, ease: "easeInOut" }}
//                 >
//                   {/* ✅ img hata ke HeadersH1 lagaya */}
//                   <div className="lg:ml-[-5px] py-2 md:py-4 flex items-center justify-start">
//                     <HeadersH1 leading="0.8em" xlText="88px" txtColor="white">
//                       {slide.title}
//                     </HeadersH1>
//                   </div>

//                   <p className="mt-4 md:mt-10 text-[16px] md:text-[25px] text-white font-poppins font-normal leading-[1.32] tracking-normal max-w-[200px] md:max-w-full">
//                     {slide.subtitle}
//                   </p>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </main>

//           <div className="absolute bottom-8 left-0 right-0 z-20 flex items-center justify-center gap-2 md:gap-3 reveal-text">
//             {slides.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setCurrent(i)}
//                 className="relative h-[4px] w-[60px] md:w-[120px] rounded-full overflow-hidden cursor-pointer focus:outline-none"
//                 style={{ background: 'rgba(255,255,255,0.3)' }}
//               >
//                 {i === current && (
//                   <motion.div
//                     className="absolute inset-y-0 left-0 bg-white rounded-full"
//                     style={{ width: `${progress}%` }}
//                   />
//                 )}
//               </button>
//             ))}
//           </div>

//         </div>

//         <AnimatePresence>
//           {isMenuOpen && (
//             <NavOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
//           )}
//         </AnimatePresence>
//       </div>
//     </>
//   );
// };

// export default Hero;

// Hero.jsx
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NavOverlay from './NavOverlay';
import Header from './Header';
import HeadersH1 from './HeadingH1';

import bg1 from '../assets/backup/01.png';
import bg2 from '../assets/backup/02.png';
import bg3 from '../assets/backup/03.png';
import bg4 from '../assets/backup/04.png';

import bg1Mobile from '../assets/backup/1.png';
import bg2Mobile from '../assets/backup/2.png';
import bg3Mobile from '../assets/backup/3.png';
import bg4Mobile from '../assets/backup/4.png';

const desktopSlides = [bg1, bg2, bg3, bg4];
const mobileSlides = [bg1Mobile, bg2Mobile, bg3Mobile, bg4Mobile];
const SLIDE_DURATION = 4000;

// ✅ Yahan colors aur sizes easily change karo
const slideContents = [
  {
    parts: [
      { text: 'Ilaan ', color: '#ffffff' },
      { text: 'Studio', color: '#D9FF00' }
    ],
    subtitle: 'Creative & Branding Solutions'
  },
  {
    parts: [
      { text: 'Ilaan ', color: '#ffffff' },
      { text: 'Media', color: '#D215BB' }
    ],
    subtitle: 'Creative & Branding Solutions'
  },
  {
    parts: [
      { text: 'Ilaan ', color: '#ffffff' },
      { text: 'Link', color: '#FFFF00' }
    ],
    subtitle: 'Eliminate Manual Price'
  },
  {
    parts: [
      { text: 'Digital ', color: '#ffffff' },
      { text: 'Signage', color: '#D9FF00' }
    ],
    subtitle: 'Smart Signage Solutions'
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const slides = isMobile ? mobileSlides : desktopSlides;
  const slide = slideContents[current];

  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [current, slides.length]);

  useEffect(() => {
    setProgress(0);
    const start = Date.now();
    const tick = setInterval(() => {
      const elapsed = Date.now() - start;
      setProgress(Math.min((elapsed / SLIDE_DURATION) * 100, 100));
    }, 16);
    return () => clearInterval(tick);
  }, [current]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to(contentRef.current, {
        opacity: 0,
        y: -50,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom 40%',
          scrub: true,
        },
      });

      gsap.from('.reveal-text', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: 'power4.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Header
        onMenuOpen={() => setIsMenuOpen(true)}
        animationClass="reveal-text"
        logoClickable={false}
      />

      <div ref={heroRef} className="relative h-screen w-full bg-black text-white font-sans p-4 md:p-6 lg:p-8 flex items-center justify-center overflow-hidden">
        <div className="relative h-full w-full border-2 border-[#D9FF00]/30 rounded-[2.5rem] overflow-hidden flex flex-col shadow-[0_0_20px_rgba(217,255,0,0.1)]">

          {/* Background */}
          <div ref={bgRef} className="absolute inset-0 z-0">
            <AnimatePresence mode="sync">
              <motion.img
                key={current}
                src={slides[current]}
                alt="Hero Background"
                className="absolute inset-0 h-full w-full object-cover scale-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Main Content */}
          <main ref={contentRef} className="relative z-10 flex flex-col justify-center flex-grow px-8 md:px-16 lg:px-24">
            <div className="max-w-5xl mb-10 reveal-text">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  {/* ✅ Title with per-word colors */}
                  {/* <div className="lg:ml-[-5px] py-2 md:py-4 flex items-start justify-start">
                    <HeadersH1 leading="0.2em" xlText="130px" parts={slide.parts} />
                  </div> */}

                  <div className="lg:ml-[-5px] py-2 md:py-4 flex items-start justify-start">
                    <HeadersH1 leading="0.2em" parts={slide.parts} />
                  </div>

                  <p className="mt-4 md:mt-10 text-[16px] md:text-[25px] text-white font-poppins font-normal leading-[1.32] tracking-normal max-w-[200px] md:max-w-full">
                    {slide.subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </main>

          {/* Slider Indicators */}
          <div className="absolute bottom-8 left-0 right-0 z-20 flex items-center justify-center gap-2 md:gap-3 reveal-text">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="relative h-[4px] w-[60px] md:w-[120px] rounded-full overflow-hidden cursor-pointer focus:outline-none"
                style={{ background: 'rgba(255,255,255,0.3)' }}
              >
                {i === current && (
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-white rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </button>
            ))}
          </div>

        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <NavOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Hero;