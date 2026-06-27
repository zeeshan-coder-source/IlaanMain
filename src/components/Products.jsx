import React, { useRef, useLayoutEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import HeadersH1 from './HeadingH1';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import bgImageDesktop from '../assets/Group 1261156800.png';
import bgImageMobile from '../assets/abc.png';
import titleImage from '../assets/Ilaan_Digital_Signage 1.png';
import newImg from '../assets/New.png';
import productsImg from '../assets/Products.png';
// import p1 from '../assets/product/P1.png';
// import p2 from '../assets/product/P2.png';
// import p3 from '../assets/product/product3.png';
// import p4 from '../assets/product/product4.png';
// import p5 from '../assets/product/product5.png';
// import p6 from '../assets/product/P3.png';
import p1 from '../assets/product/P1.webp';
import p2 from '../assets/product/P2.webp';
import p3 from '../assets/product/product3.webp';
import p4 from '../assets/product/product4.webp';
import p5 from '../assets/product/product5.webp';
import p6 from '../assets/product/P3.webp';
import cardBg from '../assets/Group 99 copy.png';
import Arrow from '../assets/product/Vector.png';

const ProductCard = ({ title, image }) => {
  return (
    <div
      className="product-card group relative flex flex-col p-7 sm:p-5 md:p-7 lg:p-5 xl:p-12 xl:pt-0 rounded-[2rem] md:rounded-[2.5rem] w-full will-change-transform md:pb-10"
      style={{
        backgroundImage: `url(${cardBg})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        aspectRatio: '370 / 298',
      }}
    >
      {/* Product Image — top aligned, fixed height zone */}
      <div className="flex items-center justify-center overflow-hidden productimg"
        // style={{ height: '58%' }}
        style={{ height: '85%' }}
      >
        <img
          src={image}
          alt={title}
          className="
            w-auto h-[70%] object-contain
            transition-transform duration-500 group-hover:scale-100
            max-h-full 
          "
        />
      </div>

      {/* Text Content — bottom zone */}
      <div className="flex flex-col justify-end flex-1 px-1">
        <h3 className="
          font-medium text-black font-inter leading-tight mb-1
          text-[25px] sm:text-[13px] md:text-[15px] lg:text-[15px] xl:text-[30px] fontsizeres
        ">
          {title}
        </h3>

        <button className="
          flex items-center gap-1.5 text-[#2563eb] font-normal
          transition-all group-hover:gap-2
          text-[12px] sm:text-[10px] md:text-[11px] lg:text-[10px] xl:text-[17px]
        ">
          View Detail{' '}
          <img
            src={Arrow}
            alt="Arrow"
            className="
            translate-y-[0.5px]
            w-[10px] h-[6px] sm:w-[9px] sm:h-[9px] md:w-[10px] md:h-[10px] lg:w-[10px] lg:h-[6px]   xl:w-[15px] xl:h-[10px]
          "
          />
        </button>
      </div>
    </div>
  );
};

const Products = () => {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  const productList = [
    { title: "In-Store Displays", image: p1, },
    { title: "Window Displays", image: p2, },
    { title: "LED & Large Format", image: p3, },
    { title: "Outdoor Displays", image: p4, },
    { title: "Interactive Displays", image: p5, },
    { title: "Electronic Shelf Labels", image: p6, },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Title & Subtitle Sliding Effect
      gsap.fromTo(titleRef.current,
        { x: -50 },
        {
          x: 50,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          }
        }
      );

      gsap.fromTo(subtitleRef.current,
        { x: 50 },
        {
          x: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          }
        }
      );

      // Cards reveal - tied to scroll for maximum smoothness
      gsap.from('.product-card', {
        opacity: 0,
        y: 100,
        scale: 0.9,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          end: 'top 20%',
          scrub: 1.5,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} data-header-theme="light" className="relative w-full py-10 md:py-14 px-2 md:px-8 flex flex-col items-center overflow-hidden bg-[#eefc7e] mx-auto min-h-0 md:min-h-screen laptop">

      {/* Background Image Overlay - Desktop */}
      <div
        className="hidden md:block absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${bgImageDesktop})`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Background Image Overlay - Mobile */}
      <div
        className="block md:hidden absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${bgImageMobile})`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className="relative z-10 w-full flex flex-col items-center pt-[60px] pb-[40px] md:pt-[80px] lg:pt-[0px] md:pb-[40px] lg:pb-[0px]">

        {/* Badge */}
        <div className="mb-8 md:mb-12 py-2 md:py-2.5 px-8 md:px-10 bg-[#e2f0d9]/95 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-md">
          <span className="text-[11px] md:text-[19px] font-semibold text-[#0a3a1b] font-poppins tracking-wide">
            Explore Our Latest
          </span>
        </div>

        {/* Title Image or Text / Figma Images on Mobile */}
        <div ref={titleRef} className="mb-2 md:mb-0 w-full px-4 flex justify-center align-items-center">
          {/* <img
            src={titleImage}
            alt="ILAAN Digital Signage"
            className="hidden md:block w-full h-auto object-contain mx-auto"
          /> */}
          <HeadersH1 leading="0.8em" txtColor="black">
            ILAAN Digital Signage
          </HeadersH1>
        </div>

        {/* Subtitle */}
        <div ref={subtitleRef}>
          <p className="text-center w-full mb-5 md:mb-[0px] text-[10px] md:text-[19.5px] font-medium text-[#1c1c1c] font-poppins max-w-none px-4 leading-normal md:leading-relaxed">
            Discover innovative displays built for impact, clarity and performance.
          </p>
        </div><br />

        {/* Grid / Carousel */}
        <div
          // className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 w-full px-[13vw] sm:px-2 pb-8 pt-4"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 w-full px-[4%] pb-8 pt-4"
        >
          {productList.map((product, i) => (
            <div key={i} className="flex justify-center">
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10">
          {/* <button className="w-[150px] md:w-[260px] h-[36px] md:h-[50px] bg-black text-white font-medium md:font-bold rounded-full flex items-center justify-center gap-1.5 md:gap-2 transition-all hover:scale-105 shadow-lg active:scale-95 text-[10px] md:text-base">
            See More Products <ArrowRight className="w-[12px] h-[12px] md:w-[20px] md:h-[20px]" />
          </button> */}
        </div>


      </div>
    </section>
  );
};

export default Products;
