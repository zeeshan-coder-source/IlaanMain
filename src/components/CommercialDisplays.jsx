// import React, { useRef, useLayoutEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// // Assets
// import avocadoImg from '../assets/right (3) (2).jpeg';
// import tomatoImg from '../assets/right (3).jpeg';
// import logo from '../assets/Text.png';
// import rightDownIcon1 from '../assets/right-down 2.png';
// import rightDownIcon2 from '../assets/right-down 1.png';


// const CommercialDisplays = () => {
//   const containerRef = useRef(null);
//   const leftImgRef = useRef(null);
//   const rightImgRef = useRef(null);
//   const contentRef = useRef(null);

//   useLayoutEffect(() => {
//     let mm = gsap.matchMedia();

//     mm.add("(min-width: 768px)", () => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: 'top top',
//           end: '+=150%',
//           scrub: 1.5,
//           pin: true,
//         }
//       });

//       tl.fromTo(leftImgRef.current,
//         { xPercent: -10, x: 0, y: 0, opacity: 1 },
//         { xPercent: 100, x: -32, y: 0, opacity: 1, ease: 'none', duration: 2.5 },
//         0
//       )
//         .fromTo(rightImgRef.current,
//           { xPercent: 10, x: 0, y: 0, opacity: 1 },
//           { xPercent: -100, x: 32, y: 0, opacity: 1, ease: 'none', duration: 2.5 },
//           0
//         )
//         .fromTo(contentRef.current,
//           { y: '0vh', opacity: 1 },
//           { y: '-80vh', opacity: 0, ease: 'none', duration: 2.5 },
//           0
//         );
//     });

//     mm.add("(max-width: 767px)", () => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: 'top top',
//           end: '+=100%',
//           scrub: 1.5,
//           pin: true,
//         }
//       });

//       // Mobile: Images start slightly off-screen and slide in
//       tl.fromTo(leftImgRef.current,
//         { x: '-40vw', y: '8vh', opacity: 1 },
//         { x: '0%', y: '-8vh', opacity: 1, ease: 'none', duration: 2.5 },
//         0
//       )
//         .fromTo(rightImgRef.current,
//           { x: '40vw', y: '8vh', opacity: 1 },
//           { x: '0%', y: '-8vh', opacity: 1, ease: 'none', duration: 2.5 },
//           0
//         )
//         .fromTo(contentRef.current,
//           { y: '8vh', opacity: 1 },
//           { y: '-40vh', opacity: 0, ease: 'none', duration: 2.5 },
//           0
//         );
//     });

//     return () => mm.revert();
//   }, []);

//   return (
//     <section ref={containerRef} className="relative w-full bg-white overflow-hidden h-[100vh] flex items-start md:items-center pt-6 md:pt-0">
//       {/* Header Logo */}



//       {/* Removed gap-2 on mobile so flex doesn't wrap images unnecessarily */}
//       <div className="w-full mb-5 mt-2 md:mt-55 h-[85vh] md:h-auto flex flex-wrap content-normal md:content-center md:grid md:grid-cols-12 gap-0 md:gap-8 2xl:gap-9 xl:gap-10 items-center relative px-0 shantu">
//         {/* <div className="max-w-[1800px] mx-auto mb-5 mt-2 md:mt-55 h-[85vh] md:h-auto flex flex-wrap content-normal md:content-center md:grid md:grid-cols-12 gap-0 md:gap-8 items-center relative w-full px-2 md:px-0 shantu"> */}

//         {/* Center Content */}
//         <div
//           ref={contentRef}
//           className="w-full md:col-span-6 flex flex-col items-center order-1 md:order-2 z-40 relative px-2 md:px-0 mt-10"
//         >
//           <div className="grid grid-cols-2 gap-4 sm:gap-4 md:gap-8 lg:gap-12 2xl:gap-30 w-full  max-w-[800px] lg:max-w-[950px] xl:max-w-[1100px] 2xl:max-w-[1250px] mx-auto">
//             {/* Column 1 */}
//             <div className="flex flex-col items-end text-right space-y-3 md:space-y-[2px] lg:space-y-6 2xl:space-y-8">
//               <div className="flex flex-col">
//                 <span className="text-[20px] md:text-[24px] lg:text-[34px] xl:text-[50px] 2xl:text-[60px] leading-[1.05] font-[300] text-black tracking-tight">
//                   Displays <br /> Built for
//                 </span>
//                 <span className="text-[22px] md:text-[24px] lg:text-[34px] xl:text-[45px] 2xl:text-[55px] leading-[1.0] font-semibold text-black tracking-tight">
//                   Commercial<br />Use
//                 </span>
//                 <br className="hidden md:inline" />
//               </div>
//               <p className="text-gray-800 text-[12px] leading-[14px] md:text-[11px] lg:text-[13px] xl:text-[16px] 2xl:text-[19px] font-normal font-poppins md:leading-tight">
//                 Reliable, high-performance screens designed for retail, QSR and high-traffic
//                 <br />environments.
//               </p>
//               <br className="hidden md:inline" />
//               <br className="hidden md:inline" />
//               <br className="hidden md:inline" />
//               <button
//                 className="w-[35px] h-[35px] md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 bg-[#ccff00] rounded-[10px] md:rounded-[2rem] flex items-center justify-center shadow-sm hover:scale-110 hover:rotate-5 transition-all mt-5 md:mt-0"
//               >
//                 <img src={rightDownIcon2} alt="icon" className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 object-contain" />
//               </button>
//             </div>

//             {/* Column 2 */}
//             <div className="flex flex-col items-start text-left space-y-3 md:space-y-[2px] lg:space-y-6 2xl:space-y-8">
//               <div className="flex flex-col">
//                 <span className="text-[20px] md:text-[24px] lg:text-[34px] xl:text-[50px] 2xl:text-[60px] leading-[1.05] font-[300] text-black tracking-tight">
//                   High <br /> Performance,
//                 </span>
//                 <span className="text-[22px] md:text-[24px] lg:text-[34px] xl:text-[45px] 2xl:text-[55px] leading-[1.0] font-semibold text-black tracking-tight">
//                   Lower Cost of Ownership
//                 </span>
//                 <br className="hidden md:inline" />
//               </div>
//               <p className="text-gray-800 text-[12px] leading-[14px] md:text-[11px] lg:text-[13px] xl:text-[16px] 2xl:text-[19px] font-normal font-poppins md:leading-tight">
//                 Commercial-grade displays designed to go further for longer. Choose screens built
//                 to reduce operational spend.
//               </p>
//               <br className="hidden md:inline" />
//               <br className="hidden md:inline" />
//               <br className="hidden md:inline" />
//               <button
//                 className="w-[35px] h-[35px] md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 bg-[#ccff00] rounded-[10px] md:rounded-[2rem] flex items-center justify-center shadow-sm hover:scale-110 hover:rotate-5 transition-all overflow-hidden mt-5 md:mt-0"
//               >
//                 <img src={rightDownIcon1} alt="icon" className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 object-contain" />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Left Image (Avocado) */}
//         <div
//           ref={leftImgRef}
//           className="w-1/2 md:w-auto md:col-span-3 flex justify-end md:justify-start md:-ml-20 2xl:-ml-28 pointer-events-none select-none order-2 md:order-1 relative z-100"
//         >
//           <img
//             src={avocadoImg}
//             alt="Avocado"
//             onLoad={() => ScrollTrigger.refresh()}
//             className="w-full h-[55vh] md:h-[85vh] object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,0.15)]"
//           />
//         </div>

//         {/* Right Image (Tomato) */}
//         <div
//           ref={rightImgRef}
//           className="w-1/2 md:w-auto md:col-span-3 flex justify-start md:justify-end md:-mr-20 2xl:-mr-28 pointer-events-none select-none order-3 relative z-100"
//         >
//           <img
//             src={tomatoImg}
//             alt="Tomato"
//             onLoad={() => ScrollTrigger.refresh()}
//             className="w-full h-[55vh] md:h-[85vh] object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,0.15)]"
//           />
//         </div>

//       </div>
//     </section>
//   );
// };

// export default CommercialDisplays;

//////////////////////////////////Test//////////////////////////////////////


import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Assets
import avocadoImg from '../assets/right (3) (2).jpeg';
import tomatoImg from '../assets/right (3).jpeg';
import logo from '../assets/Text.png';
import rightDownIcon1 from '../assets/right-down 2.png';
import rightDownIcon2 from '../assets/right-down 1.png';


const CommercialDisplays = () => {
  const containerRef = useRef(null);
  const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=150%',
          scrub: 1.5,
          pin: true,
        }
      });

      tl.fromTo(leftImgRef.current,
        { xPercent: -10, x: 0, y: 0, opacity: 1 },
        { xPercent: 100, x: -32, y: 0, opacity: 1, ease: 'none', duration: 2.5 },
        0
      )
        .fromTo(rightImgRef.current,
          { xPercent: 10, x: 0, y: 0, opacity: 1 },
          { xPercent: -100, x: 32, y: 0, opacity: 1, ease: 'none', duration: 2.5 },
          0
        )
        .fromTo(contentRef.current,
          { y: '0vh', opacity: 1 },
          { y: '-80vh', opacity: 0, ease: 'none', duration: 2.5 },
          0
        );
    });

    mm.add("(max-width: 767px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=100%',
          scrub: 1.5,
          pin: true,
        }
      });

      // Mobile: Images start slightly off-screen and slide in
      tl.fromTo(leftImgRef.current,
        { x: '-40vw', y: '8vh', opacity: 1 },
        { x: '0%', y: '-8vh', opacity: 1, ease: 'none', duration: 2.5 },
        0
      )
        .fromTo(rightImgRef.current,
          { x: '40vw', y: '8vh', opacity: 1 },
          { x: '0%', y: '-8vh', opacity: 1, ease: 'none', duration: 2.5 },
          0
        )
        .fromTo(contentRef.current,
          { y: '8vh', opacity: 1 },
          { y: '-40vh', opacity: 0, ease: 'none', duration: 2.5 },
          0
        );
    });

    return () => mm.revert();
  }, []);

  //  useLayoutEffect(() => {
  //   let mm = gsap.matchMedia();

  //   mm.add("(min-width: 768px)", () => {

  //     // Step 1: Starting position pe set karo
  //     gsap.set(leftImgRef.current,  { xPercent: -10, x: 0, y: 0 });
  //     gsap.set(rightImgRef.current, { xPercent:  10, x: 0, y: 0 });

  //     ScrollTrigger.refresh();

  //     // Step 2: Is starting position se measure karo
  //     const leftRect   = leftImgRef.current.getBoundingClientRect();
  //     const rightRect  = rightImgRef.current.getBoundingClientRect();
  //     const centerRect = contentRef.current.getBoundingClientRect();
  //     const containerRect = containerRef.current.getBoundingClientRect();

  //     const screenCenterX = containerRect.left + containerRect.width / 2;

  //     // Left image ka right edge → screen center pe aana chahiye
  //     // Right image ka left edge → screen center pe aana chahiye
  //     const leftMoveX  = screenCenterX - leftRect.right;
  //     const rightMoveX = screenCenterX - rightRect.left;

  //     // Step 3: Reset karo
  //     gsap.set(leftImgRef.current,  { xPercent: 0, x: 0, y: 0 });
  //     gsap.set(rightImgRef.current, { xPercent: 0, x: 0, y: 0 });

  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: containerRef.current,
  //         start: 'top top',
  //         end: '+=150%',
  //         scrub: 1.5,
  //         pin: true,
  //       }
  //     });

  //     tl.fromTo(leftImgRef.current,
  //       { xPercent: -10, x: 0, y: 0, opacity: 1 },
  //       { xPercent: -10, x: leftMoveX, y: 0, opacity: 1, ease: 'none', duration: 2.5 },
  //       0
  //     )
  //     .fromTo(rightImgRef.current,
  //       { xPercent: 10, x: 0, y: 0, opacity: 1 },
  //       { xPercent: 10, x: rightMoveX, y: 0, opacity: 1, ease: 'none', duration: 2.5 },
  //       0
  //     )
  //     .fromTo(contentRef.current,
  //       { y: '0vh', opacity: 1 },
  //       { y: '-80vh', opacity: 0, ease: 'none', duration: 2.5 },
  //       0
  //     );
  //   });

  //   mm.add("(max-width: 767px)", () => {
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: containerRef.current,
  //         start: 'top top',
  //         end: '+=100%',
  //         scrub: 1.5,
  //         pin: true,
  //       }
  //     });

  //     tl.fromTo(leftImgRef.current,
  //       { x: '-40vw', y: '8vh', opacity: 1 },
  //       { x: '0%',   y: '-8vh', opacity: 1, ease: 'none', duration: 2.5 },
  //       0
  //     )
  //     .fromTo(rightImgRef.current,
  //       { x: '40vw', y: '8vh', opacity: 1 },
  //       { x: '0%',   y: '-8vh', opacity: 1, ease: 'none', duration: 2.5 },
  //       0
  //     )
  //     .fromTo(contentRef.current,
  //       { y: '8vh', opacity: 1 },
  //       { y: '-40vh', opacity: 0, ease: 'none', duration: 2.5 },
  //       0
  //     );
  //   });

  //   return () => mm.revert();
  // }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-white overflow-hidden h-[100vh] flex items-start md:items-center pt-6 md:pt-0">
      {/* Header Logo */}



      {/* Removed gap-2 on mobile so flex doesn't wrap images unnecessarily */}
      <div className="w-full mb-5 mt-2 md:mt-55 h-[85vh] md:h-auto flex flex-wrap content-normal md:content-center md:grid md:grid-cols-12 gap-0 md:gap-8 2xl:gap-9 xl:gap-10 items-center relative px-0 shantu">
        {/* <div className="max-w-[1800px] mx-auto mb-5 mt-2 md:mt-55 h-[85vh] md:h-auto flex flex-wrap content-normal md:content-center md:grid md:grid-cols-12 gap-0 md:gap-8 items-center relative w-full px-2 md:px-0 shantu"> */}

        {/* Center Content */}
        <div
          ref={contentRef}
          className="w-full md:col-span-6 flex flex-col items-center order-1 md:order-2 z-40 relative px-2 md:px-0 mt-10"
        >
          <div className="grid grid-cols-2 gap-4 sm:gap-4 md:gap-8 lg:gap-12 2xl:gap-30 w-full  max-w-[800px] lg:max-w-[950px] xl:max-w-[1100px] 2xl:max-w-[1250px] mx-auto">
            {/* Column 1 */}
            <div className="flex flex-col items-end text-right space-y-3 md:space-y-[2px] lg:space-y-6 2xl:space-y-8">
              <div className="flex flex-col">
                <span className="text-[20px] md:text-[24px] lg:text-[34px] xl:text-[50px] 2xl:text-[60px] leading-[1.05] font-[300] text-black tracking-tight">
                  Displays <br /> Built for
                </span>
                <span className="text-[22px] md:text-[24px] lg:text-[34px] xl:text-[45px] 2xl:text-[55px] leading-[1.0] font-semibold text-black tracking-tight">
                  Commercial<br />Use
                </span>
                <br className="hidden md:inline" />
              </div>
              <p className="text-gray-800 text-[12px] leading-[14px] md:text-[11px] lg:text-[13px] xl:text-[16px] 2xl:text-[19px] font-normal font-poppins md:leading-tight">
                Reliable, high-performance screens designed for retail, QSR and high-traffic
                <br />environments.
              </p>
              <br className="hidden md:inline" />
              <br className="hidden md:inline" />
              <br className="hidden md:inline" />
              <button
                className="w-[35px] h-[35px] md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 bg-[#ccff00] rounded-[10px] md:rounded-[2rem] flex items-center justify-center shadow-sm hover:scale-110 hover:rotate-5 transition-all mt-5 md:mt-0"
              >
                <img src={rightDownIcon2} alt="icon" className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 object-contain" />
              </button>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-start text-left space-y-3 md:space-y-[2px] lg:space-y-6 2xl:space-y-8">
              <div className="flex flex-col">
                <span className="text-[20px] md:text-[24px] lg:text-[34px] xl:text-[50px] 2xl:text-[60px] leading-[1.05] font-[300] text-black tracking-tight">
                  High <br /> Performance,
                </span>
                <span className="text-[22px] md:text-[24px] lg:text-[34px] xl:text-[45px] 2xl:text-[55px] leading-[1.0] font-semibold text-black tracking-tight">
                  Lower Cost of Ownership
                </span>
                <br className="hidden md:inline" />
              </div>
              <p className="text-gray-800 text-[12px] leading-[14px] md:text-[11px] lg:text-[13px] xl:text-[16px] 2xl:text-[19px] font-normal font-poppins md:leading-tight">
                Commercial-grade displays designed to go further for longer. Choose screens built
                to reduce operational spend.
              </p>
              <br className="hidden md:inline" />
              <br className="hidden md:inline" />
              <br className="hidden md:inline" />
              <button
                className="w-[35px] h-[35px] md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 bg-[#ccff00] rounded-[10px] md:rounded-[2rem] flex items-center justify-center shadow-sm hover:scale-110 hover:rotate-5 transition-all overflow-hidden mt-5 md:mt-0"
              >
                <img src={rightDownIcon1} alt="icon" className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 object-contain" />
              </button>
            </div>
          </div>
        </div>

        {/* Left Image (Avocado) */}
        <div
          ref={leftImgRef}
          className="w-1/2 md:w-auto md:col-span-3 flex justify-end md:justify-start md:-ml-20 2xl:-ml-28 pointer-events-none select-none order-2 md:order-1 relative z-100"
        >
          <img
            src={avocadoImg}
            alt="Avocado"
            onLoad={() => ScrollTrigger.refresh()}
            className="w-full h-[55vh] md:h-[85vh] object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,0.15)]"
          />
        </div>

        {/* Right Image (Tomato) */}
        <div
          ref={rightImgRef}
          className="w-1/2 md:w-auto md:col-span-3 flex justify-start md:justify-end md:-mr-20 2xl:-mr-28 pointer-events-none select-none order-3 relative z-100"
        >
          <img
            src={tomatoImg}
            alt="Tomato"
            onLoad={() => ScrollTrigger.refresh()}
            className="w-full h-[55vh] md:h-[85vh] object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,0.15)]"
          />
        </div>

      </div>
    </section>
  );
};

export default CommercialDisplays;