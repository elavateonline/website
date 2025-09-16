'use client';
import { useState } from 'react';
 import Image from'next/image';
 import Link from'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full border-b border-solid border-border-border-primary px-[22px] py-[22px]">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-row justify-between items-center w-full">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/img_header_logo.png"
              alt="Elevate Business Coaching Logo"
              width={74}
              height={50}
              className="w-[74px] h-[50px]"
            />
          </div>

          {/* Hamburger Menu Icon (Mobile only) */}
          {/* <button 
            className="block lg:hidden p-4" 
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button> */}

          {/* Desktop Navigation */}
          <nav className={`${menuOpen ? 'block' : 'hidden'} lg:block absolute lg:relative top-full lg:top-auto left-0 right-0 lg:left-auto lg:right-auto w-full lg:w-auto bg-bg-background-main lg:bg-transparent border-t lg:border-t-0 border-border-border-primary lg:border-none z-50 shadow-lg lg:shadow-none`}>
            <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:w-auto gap-4 lg:gap-10 p-4 lg:p-0">
              
              {/* Mobile Menu Items */}
              {/* <div className="flex flex-col lg:hidden w-full gap-4 mb-4">
                <Link 
                  href="/" 
                  className="text-lg font-semibold leading-relaxed text-left text-text-secondary font-['Nunito_Sans'] py-2 px-4 hover:bg-gray-100 rounded transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/about-us" 
                  className="text-lg font-semibold leading-relaxed text-left text-text-secondary font-['Nunito_Sans'] py-2 px-4 hover:bg-gray-100 rounded transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  href="/programmes" 
                  className="text-lg font-semibold leading-relaxed text-left text-text-secondary font-['Nunito_Sans'] py-2 px-4 hover:bg-gray-100 rounded transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Programmes
                </Link>
                <Link 
                  href="/book-now" 
                  className="text-lg font-semibold leading-relaxed text-left text-text-secondary font-['Nunito_Sans'] py-2 px-4 hover:bg-gray-100 rounded transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Book Now
                </Link>
                <Link 
                  href="/community" 
                  className="text-lg font-semibold leading-relaxed text-left text-text-secondary font-['Nunito_Sans'] py-2 px-4 hover:bg-gray-100 rounded transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Community
                </Link>
              </div> */}

              {/* Phone Number */}
              <div className="flex flex-row justify-center items-center w-full lg:w-auto py-[6px]">
                <span className="text-lg font-semibold leading-relaxed text-left text-text-secondary font-['Nunito_Sans']">
                  +971-52-553-974
                </span>
              </div>

           
              {/* <button className="flex items-center">
                <Image
                  src="/images/img_vector.svg"
                  alt="Contact"
                  width={24}
                  height={16}
                  className="w-[24px] h-[16px]"
                />
              </button> */}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header