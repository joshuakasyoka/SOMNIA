import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isLanding = location.pathname === '/';
  const isFilmProjectPage = location.pathname.startsWith('/films/') && location.pathname !== '/films';
  const isContactPage = location.pathname === '/contact';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    // Only lock scroll on mobile full-screen menu
    if (isMenuOpen && window.innerWidth < 768) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  // Close dropdown when clicking outside on desktop
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const toggleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => setIsMenuOpen(false);

  const isDarkBg = ((isLanding || isFilmProjectPage || isContactPage) && !scrolled);
  const textColorClass = isDarkBg ? 'text-white' : 'text-[#000000]';
  const logoColor = isDarkBg ? 'white' : '#000000';

  const menuLinkClass = `text-[20px] font-serif uppercase tracking-[0.1em] transition-all duration-300 hover:underline underline-offset-4 whitespace-nowrap`;

  // Removed "Journal" from the menu items
  const navItems = [
    { label: 'About', path: '/' },
    { label: 'Film Index', path: '/films' },
    { label: 'Contact Us', path: '/contact' }
  ];

  const currentLogoFill = (isMenuOpen && window.innerWidth < 768) ? 'black' : logoColor;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[9995] px-6 md:px-[50px] py-8 md:py-10 transition-all duration-700">
        <div className="flex justify-between items-center w-full relative h-full">
          
          {/* Left: Menu Trigger & Desktop Dropdown */}
          <div className="relative" ref={dropdownRef}>
            {/* The Trigger Button - Always visible, handles the Close toggle */}
            <button 
              onClick={toggleMenu}
              className={`relative z-[10001] flex flex-col justify-center items-start cursor-pointer focus:outline-none transition-colors duration-300 ${isMenuOpen && window.innerWidth < 768 ? 'text-black' : textColorClass}`}
              aria-label="Toggle Menu"
            >
              {/* Mobile Burger/X Toggle */}
              <div className="md:hidden flex flex-col items-center justify-center w-8 h-8">
                {isMenuOpen ? (
                  <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 6L26 26" stroke="currentColor" strokeWidth="1" />
                    <path d="M26 6L6 26" stroke="currentColor" strokeWidth="1" />
                  </svg>
                ) : (
                  <div className="flex flex-col space-y-[5px] w-6">
                    <span className={`block w-full h-[1px] ${isDarkBg ? 'bg-white' : 'bg-black'}`} />
                    <span className={`block w-full h-[1px] ${isDarkBg ? 'bg-white' : 'bg-black'}`} />
                    <span className={`block w-full h-[1px] ${isDarkBg ? 'bg-white' : 'bg-black'}`} />
                  </div>
                )}
              </div>

              {/* Desktop Menu/Close Text */}
              <span className={`hidden md:block text-[20px] tracking-[0.1em] font-serif uppercase transition-all duration-300 whitespace-nowrap`}>
                {isMenuOpen ? 'Close' : 'Menu'}
              </span>
            </button>

            {/* Desktop Small Dropdown Menu */}
            <div className={`hidden md:block absolute top-0 left-0 z-[10000] transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
              <nav className="flex flex-col pt-[70px]">
                <div className="flex flex-col space-y-[20px]">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.path}
                      onClick={closeMenu}
                      className={`${menuLinkClass} ${textColorClass}`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </nav>
            </div>
          </div>
          
          {/* Center: Logo */}
          <div className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 z-[9999] ${isMenuOpen && window.innerWidth < 768 ? 'opacity-100 text-black' : 'opacity-100'}`}>
            <Link to="/" onClick={closeMenu} className="block">
              <svg width="106" height="14" viewBox="0 0 106 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1_45)">
                  <path d="M8.66401 5.12135C8.18911 1.79894 6.46846 0.929141 4.86655 0.929141C2.41406 0.929141 1.87979 2.19486 1.87979 3.20283C1.87979 5.16032 3.81839 5.37821 5.75699 5.87245C7.97203 6.42604 10.4848 6.97963 10.4848 9.96546C10.4848 13.7821 6.64744 13.9991 5.75699 13.9991C3.97699 13.9991 3.14591 13.7024 1.64234 12.7334L0.950358 13.9991H0.000549316V8.28432H0.950358C1.26667 10.2817 2.55227 13.07 5.71712 13.07C8.3477 13.07 8.78274 11.5669 8.78274 10.6572C8.78274 8.75908 6.74579 8.40301 5.39993 8.14615C1.02921 7.29672 0.218509 5.47741 0.218509 3.59876C0.218509 1.30469 2.29533 0 4.88604 0C5.67725 0 7.08159 0.217892 8.18911 1.32507L8.74287 0.277236H9.61293V5.12223H8.66312L8.66401 5.12135Z" fill={currentLogoFill}/>
                  <path d="M29.2413 7C29.2413 10.0647 27.0653 14 22.8922 14C18.719 14 16.543 10.0647 16.543 7C16.543 3.93534 18.7181 -3.8147e-06 22.8922 -3.8147e-06C27.0662 -3.8147e-06 29.2413 3.93534 29.2413 7ZM26.749 7C26.749 2.80779 24.8697 0.929137 22.8922 0.929137C20.9146 0.929137 19.0353 2.80779 19.0353 7C19.0353 11.1922 20.9146 13.0709 22.8922 13.0709C24.8697 13.0709 26.749 11.271 26.749 7Z" fill={currentLogoFill}/>
                  <path d="M42.9191 10.0053H43.0378L46.3019 0.277237H51.346V1.20638H50.1986C49.4268 1.20638 49.2293 1.48361 49.2293 1.81931V12.2011C49.2293 12.5173 49.4268 12.7945 50.1986 12.7945H51.346V13.7236H44.8975V12.7945H46.0449C46.8166 12.7945 47.0142 12.5182 47.0142 12.2011V1.60142H46.8955L42.8606 13.7228H42.3467L37.8174 1.60142H37.6987V11.0735C37.6987 12.4579 38.2719 12.7936 39.5584 12.7936H39.8357V13.7228H34.5152V12.7936H34.812C35.7813 12.7936 36.6514 12.5562 36.6514 11.0735V1.81931C36.6514 1.48361 36.4538 1.20638 35.6821 1.20638H34.5347V0.277237H39.3413L42.9217 10.0062L42.9191 10.0053Z" fill={currentLogoFill}/>
                  <path d="M68.8527 1.81931C68.8527 1.48361 68.6552 1.20638 67.8834 1.20638H66.7361V0.277237H72.0176V1.20638H70.8702C70.0985 1.20638 69.9009 1.48361 69.9009 1.81931V14H68.9121L60.6039 3.3419H60.4852V12.2011C60.4852 12.5173 60.6828 12.7945 61.4545 12.7945H62.6019V13.7236H57.3204V12.7945H58.4678C59.2395 12.7945 59.4371 12.5182 59.4371 12.2011V1.81931C59.4371 1.48361 59.2395 1.20638 58.4678 1.20638H57.3204V0.277237H61.0585L68.7137 10.0655H68.8519V1.81931H68.8527Z" fill={currentLogoFill}/>
                  <path d="M77.9812 12.7936H79.1286C79.9003 12.7936 80.0979 12.5173 80.0979 12.2002V1.81931C80.0979 1.48361 79.9003 1.20638 79.1286 1.20638H77.9812V0.277237H84.4296V1.20638H83.2822C82.5105 1.20638 82.3129 1.48361 82.3129 1.81931V12.2011C82.3129 12.5173 82.5105 12.7945 83.2822 12.7945H84.4296V13.7236H77.9812V12.7945V12.7936Z" fill={currentLogoFill}/>
                  <path d="M90.0409 12.7936H90.2783C91.2282 12.7936 91.999 12.3782 92.4544 11.2905L97.2415 -3.8147e-06H98.3491L103.175 11.2321C103.65 12.3392 104.223 12.7945 105.549 12.7945V13.7236H99.0012V12.7945H99.8916C100.723 12.7945 101.058 12.5182 101.058 12.1816C101.058 12.0629 101.039 11.9442 100.999 11.8459L100.03 9.53233H94.4125L93.8587 10.9362C93.7799 11.1143 93.7001 11.3313 93.7001 11.589C93.7001 12.2019 94.1157 12.7954 95.085 12.7954H95.6387V13.7245H90.0409V12.7954V12.7936ZM99.6152 8.60141L97.2017 2.94597H97.1024L94.7882 8.60141H99.6143H99.6152Z" fill={currentLogoFill}/>
                </g>
                <defs>
                  <clipPath id="clip0_1_45">
                    <rect width="105.548" height="14" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>

          {/* Right: Contact Us (Desktop only) */}
          <div className={`hidden md:block text-[20px] tracking-[0.1em] font-serif uppercase cursor-pointer transition-opacity duration-300 z-[9999] ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'} ${textColorClass}`}>
            <Link to="/contact" className="hover:underline underline-offset-8 transition-all duration-300">Contact Us</Link>
          </div>
        </div>
      </header>

      {/* Full Screen Menu Overlay - Mobile Only */}
      <div className={`md:hidden fixed inset-0 bg-[#E5E5E5] z-[9990] transition-transform duration-700 ease-in-out transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col h-full w-full pt-48 pb-16 px-6 relative">
          
          <nav className="flex-grow flex flex-col items-center justify-center space-y-12">
            {navItems.map((item) => (
              <Link 
                key={item.label}
                to={item.path} 
                onClick={closeMenu} 
                className="text-[40px] font-serif uppercase tracking-[0.15em] text-black hover:underline underline-offset-8 transition-all duration-300 whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </nav>

        </div>
      </div>
    </>
  );
};

export default Header;