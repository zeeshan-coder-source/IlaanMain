// import { useState, useEffect } from 'react';
// import { Menu } from 'lucide-react';
// import gsap from 'gsap';
// import { useNavigation } from '../context/NavigationContext';
// import IlaanLogo from './IlaanLogo';

// const Header = ({ onMenuOpen, animationClass = '', logoClickable = true }) => {
//   const { navigateTo } = useNavigation();
//   const [isDark, setIsDark] = useState(true);

//   useEffect(() => {
//     const PROBE_Y = 72;

//     const updateTheme = () => {
//       const sections = document.querySelectorAll('[data-header-theme]');
//       let active = null;
//       let bestTop = -Infinity;

//       sections.forEach((el) => {
//         const rect = el.getBoundingClientRect();
//         if (rect.top <= PROBE_Y && rect.bottom > PROBE_Y && rect.top > bestTop) {
//           bestTop = rect.top;
//           active = el;
//         }
//       });

//       if (active) {
//         const dark = active.getAttribute('data-header-theme') === 'dark';
//         setIsDark((prev) => (prev === dark ? prev : dark));
//       }
//     };

//     updateTheme();

//     let lastScrollY = -1;
//     const onTick = () => {
//       const y = window.scrollY;
//       if (y !== lastScrollY) {
//         lastScrollY = y;
//         updateTheme();
//       }
//     };

//     gsap.ticker.add(onTick);
//     window.addEventListener('resize', updateTheme, { passive: true });

//     return () => {
//       gsap.ticker.remove(onTick);
//       window.removeEventListener('resize', updateTheme);
//     };
//   }, []);

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50">
//       <nav className="flex items-center justify-between px-8 pb-4 md:px-12 lg:px-16 md:pb-6 lg:pb-0 pt-10 md:pt-10 lg:pt-12">

//         <div
//           onClick={logoClickable ? () => navigateTo('home') : undefined}
//           className={`flex items-center gap-2 ${logoClickable ? 'cursor-pointer hover:opacity-85 transition-opacity' : ''} ${animationClass}`}
//         >
//           <IlaanLogo isDark={isDark} />
//         </div>

//         <button
//           onClick={onMenuOpen}
//           className={`p-2 transition-all duration-300 active:scale-90 hover:scale-105 cursor-pointer ${animationClass}`}
//           style={{ color: isDark ? '#ffffff' : '#000000' }}
//         >
//           <Menu size={32} strokeWidth={3} />
//         </button>

//       </nav>
//     </header>
//   );
// };

// export default Header;



import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import gsap from 'gsap';
import { useNavigation } from '../context/NavigationContext';
import IlaanLogo from './IlaanLogo';

const Header = ({ onMenuOpen, animationClass = '', logoClickable = true }) => {
  const { navigateTo } = useNavigation();

  const [isDark, setIsDark] = useState(true);
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    const PROBE_Y = 72;

    const updateHeader = () => {
      const sections = document.querySelectorAll(
        '[data-header-theme], [data-hide-header]'
      );

      let active = null;
      let bestTop = -Infinity;

      sections.forEach((el) => {
        const rect = el.getBoundingClientRect();

        if (
          rect.top <= PROBE_Y &&
          rect.bottom > PROBE_Y &&
          rect.top > bestTop
        ) {
          bestTop = rect.top;
          active = el;
        }
      });

      if (!active) {
        setHideHeader(false);
        return;
      }

      // Hide header in this section
      if (active.hasAttribute('data-hide-header')) {
        setHideHeader(true);
        return;
      }

      setHideHeader(false);

      const dark =
        active.getAttribute('data-header-theme') === 'dark';

      setIsDark((prev) => (prev === dark ? prev : dark));
    };

    updateHeader();

    let lastScrollY = -1;

    const onTick = () => {
      const y = window.scrollY;

      if (y !== lastScrollY) {
        lastScrollY = y;
        updateHeader();
      }
    };

    gsap.ticker.add(onTick);
    window.addEventListener('resize', updateHeader, { passive: true });

    return () => {
      gsap.ticker.remove(onTick);
      window.removeEventListener('resize', updateHeader);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${hideHeader
        ? 'opacity-0 pointer-events-none'
        : 'opacity-100'
        }`}
    >
      <nav className="flex items-center justify-between px-8 pb-4 md:px-12 lg:px-16 md:pb-6 lg:pb-0 pt-10 md:pt-10 lg:pt-12">
        <div
          onClick={logoClickable ? () => navigateTo('home') : undefined}
          className={`flex items-center gap-2 ${logoClickable
            ? 'cursor-pointer hover:opacity-85 transition-opacity'
            : ''
            } ${animationClass}`}
        >
          <IlaanLogo isDark={isDark} />
        </div>

        <button
          onClick={onMenuOpen}
          className={`p-2 transition-all duration-300 active:scale-90 hover:scale-105 cursor-pointer ${animationClass}`}
          style={{ color: isDark ? '#ffffff' : '#000000' }}
        >
          <Menu size={32} strokeWidth={3} />
        </button>
      </nav>
    </header>
  );
};

export default Header;