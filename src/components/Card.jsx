import React, { useRef, useLayoutEffect } from 'react';
import { User, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// import card1 from '../assets/c1.png';
// import card2 from '../assets/c2.png';
// import card3 from '../assets/update/linkcard.png';
// import card4 from '../assets/update/mediacard.png';

import card1 from '../assets/update/c1.webp';
import card2 from '../assets/update/c2.webp';
import card3 from '../assets/update/linkcard.webp';
import card4 from '../assets/update/mediacard.webp';

const Card = ({ title, description, image, bgColor, textColor, btnColor, btnTextColor, showLogin }) => {
  return (
    <div
      className={`service-card relative group w-full min-h-[260px] sm:min-h-[480px] md:min-h-[470px] lg:min-h-[440px] xl:min-h-[570px] rounded-[2.5rem] md:rounded-[4rem] rounded-tl-none md:rounded-tl-none pt-5 p-5 md:pt-14 md:px-16 md:pb-6 lg:pb-6 xl:pb-10 flex flex-col justify-between overflow-hidden shadow-2xl ${bgColor} ${textColor} cursor-pointer origin-center will-change-transform`}
    >
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative z-10 w-full">

        {/* ✅ Title — height container hataya, overflow:visible, proper responsive sizes */}
        <div className="mb-3 md:mb-6">
          {/* <h1
            className="font-falcon font-bold tracking-tight leading-none
              text-[28px]
              sm:text-[42px]
              md:text-[56px]
              lg:text-[68px]
              xl:text-[88px]
              2xl:text-[100px]"
            style={{ color: textColor }}
          >
            {title}
          </h1> */}

          <h1 className={`font-falcon font-bold tracking-tight md:tracking-[-4px] leading-none whitespace-nowrap
  text-[36px] sm:text-[32px] md:text-[42px] lg:text-[48px] xl:text-[68px] 2xl:text-[85px]
  ${textColor}`}
          >
            {title}
          </h1>
        </div>

        {/* Card Image */}
        <div className="rounded-[1.5rem] overflow-hidden mt-1 md:mt-2 mb-2 md:mb-3 lg:mb-3 xl:mb-4">
          <img
            src={image}
            alt="Card visual"
            className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
          />
        </div>

        {/* Description */}
        <p className="text-[11px] sm:text-[13px] md:text-[15px] lg:text-[18px] xl:text-[26px] xl:pl-[24px] lg:pl-[24px] font-poppins font-normal leading-[1.5] md:leading-[1.7] tracking-normal mb-2 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-12 opacity-90 max-w-[700px] text-left">
          {description}
        </p>

      </div>
    </div>
  );
};

const ServiceSection = () => {
  const containerRef = useRef(null);

  const services = [
    {
      title: "ILAAN Studio",
      description: "Control every screen from one place. Keep content consistent, visible and across your entire network.",
      image: card1,
      bgColor: "bg-[#D9FF00]",
      textColor: "text-black",
      showLogin: true,
      btnColor: "bg-black",
      btnTextColor: "text-white",
    },
    {
      title: "ILAAN Digital Signage",
      description: "Displays built for commercial use. Reliable, high-performance screens designed for retail, QSR and high-traffic environments.",
      image: card2,
      bgColor: "bg-[#404040]",
      textColor: "text-[#D9FF00]",
      showLogin: false,
      btnColor: "bg-[#D9FF00]",
      btnTextColor: "text-black"
    },
    {
      title: "ILAAN Link",
      description: "Reduce manual work across your store. Update pricing instantly and eliminate repetitive tasks.",
      image: card3,
      bgColor: "bg-[#FFFF00]",
      textColor: "text-black",
      showLogin: true,
      btnColor: "bg-black",
      btnTextColor: "text-white"
    },
    {
      title: "ILAAN Media",
      description: "Access retail media in the real world. Run campaigns across a growing network of in-store screens.",
      image: card4,
      bgColor: "bg-[#FF33FF]",
      textColor: "text-white",
      showLogin: false,
      btnColor: "bg-black",
      btnTextColor: "text-white"
    }
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.service-card', {
        y: 150,
        z: -500,
        opacity: 0,
        scale: 0.8,
        rotationX: -15,
        transformPerspective: 2000
      });

      gsap.to('.service-card', {
        y: 0,
        z: 0,
        opacity: 1,
        scale: 1,
        rotationX: 0,
        stagger: { amount: 0.4, from: "start" },
        duration: 1.0,
        ease: 'power4.out',
        force3D: true,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          toggleActions: 'restart none none none',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      // data-header-theme="light"
      data-hide-header
      className="bg-black py-8 px-4 md:px-8 overflow-hidden min-h-screen flex flex-col items-center justify-center perspective-2000"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-8 w-full">
        {services.map((service, index) => (
          <Card key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;