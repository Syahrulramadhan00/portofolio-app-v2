import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { Sling as Hamburger } from 'hamburger-react';

// Define navigation links in one place
const navLinks = [
  { to: 'about', label: 'ABOUT' },
  { to: 'projects', label: 'PROJECTS' },
  { to: 'services', label: 'SERVICES' },
];

interface NavbarProps {
  bgColor: string;
}

export const Navbar: React.FC<NavbarProps> = ({ bgColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // Ref for the slide-in menu panel
  const hamburgerRef = useRef<HTMLDivElement>(null); // Ref for the hamburger icon container

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect to lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Effect to handle clicks outside the mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // If the click is on the hamburger icon, do nothing.
      // The hamburger's own toggle logic will handle it.
      if (hamburgerRef.current && hamburgerRef.current.contains(event.target as Node)) {
        return;
      }

      // If the menu is open and the click is outside the menu panel, close the menu.
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Add the event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); // The empty array ensures this effect runs only once

  // Function to render the navigation links
  const renderLinks = (isMobile = false) =>
    navLinks.map((link) => (
      <Link
        key={link.to}
        to={link.to}
        smooth={true}
        duration={500}
        onClick={isMobile ? () => setIsOpen(false) : undefined}
        className="cursor-pointer hover:text-shuttle duration-300 transition-colors"
      >
        {link.label}
      </Link>
    ));

  return (
    <nav
      className={`
        w-full transition-all duration-300 ease-in-out z-30
        ${isScrolled ? `fixed top-0 shadow-lg ${bgColor}` : 'relative bg-transparent'}
      `}
    >
      <div className="flex items-center justify-between font-anton text-2xl md:ml-24 md:mr-24 mx-8 py-4">
        <p className="z-50">SYAHRUL</p>

        {/* --- Mobile Menu Button (Hamburger) --- */}
        {/* Attach the ref to the hamburger's container */}
        <div className="md:hidden z-50" ref={hamburgerRef}>
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </div>

        {/* --- Mobile Menu Panel (Slide-in) --- */}
        {/* Attach the ref to the menu panel */}
        <div
          id="mobile-menu"
          ref={menuRef}
          className={`fixed top-0 right-0 h-full bg-primary w-64 transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden z-40`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {renderLinks(true)}
          </div>
        </div>

        {/* --- Desktop Menu --- */}
        <div className="hidden md:flex space-x-8">
          {renderLinks()}
        </div>
      </div>
    </nav>
  );
};
