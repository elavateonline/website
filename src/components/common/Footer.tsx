'use client';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full mt-32">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-8 lg:gap-0 py-8">
          {/* Left Section - Company Info */}
          <div className="flex flex-col justify-start items-start w-full lg:w-[20%]">
            {/* Logo */}
            <div className="flex flex-row justify-start items-end w-auto">
              <Image
                src="/images/img_mask_group.png"
                alt="Elevate Business Coaching"
                width={82}
                height={88}
                className="w-[82px] h-[88px] mt-[10px]"
              />
            </div>

            {/* Address */}
            <p className="text-xs font-normal leading-tight text-left text-white font-['Nunito_Sans'] mt-5">
              22 floor , Tower Plaza,  Sheikh Zayed Road, Dubai ,United Arab Emirates
            </p>

            {/* Phone Number */}
            <Link 
              href="tel:+971585814067"
              className="text-sm font-normal leading-relaxed text-left underline text-gray-400 font-['Nunito_Sans'] mt-5 hover:text-white transition-colors"
            >
              +971585814067
            </Link>

            {/* Email */}
            <Link 
              href="mailto:info@elevatebusiness360.com"
              className="text-sm font-normal leading-relaxed text-left underline text-gray-400 font-['Nunito_Sans'] mt-5 hover:text-white transition-colors"
            >
              info@elevatebusiness360.com
            </Link>

            {/* Website */}
            <Link 
              href="https://www.elevatebusiness360.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-normal leading-relaxed text-left underline text-gray-400 font-['Nunito_Sans'] mt-5 hover:text-white transition-colors"
            >
              www.elevatebusiness360.com
            </Link>
            

            {/* Social Media Icons */}
            <div className="flex flex-row justify-start items-center w-full max-w-[66%] mt-5 gap-4">
              <Link href="https://twitter.com/elevateuae" className="hover:opacity-80 transition-opacity">
                <Image
                  src="/images/img_combined_shape.svg"
                  alt="Twitter"
                  width={20}
                  height={18}
                  className="w-[20px] h-[18px]"
                />
              </Link>
              <Link href="https://linkedin.com/company/elevate-uae" className="hover:opacity-80 transition-opacity">
                <Image
                  src="/images/img_mingcute_linkedin_line.svg"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                  className="w-[20px] h-[20px]"
                />
              </Link>
              <Link href="https://instagram.com/elevateuae" className="hover:opacity-80 transition-opacity">
                <Image
                  src="/images/img_vector_white_a700.svg"
                  alt="Instagram"
                  width={14}
                  height={18}
                  className="w-[14px] h-[18px]"
                />
              </Link>
              <Link href="https://facebook.com/elevateuae" className="flex flex-col justify-start items-center py-[2px] hover:opacity-80 transition-opacity">
                <Image
                  src="/images/img_icons_facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="w-[24px] h-[24px]"
                />
              </Link>
            </div>
          </div>

          {/* Right Section - Navigation Links */}
          <div className="flex flex-col sm:flex-row justify-between items-start lg:items-start w-full lg:w-[26%] gap-8 sm:gap-4">
            {/* Company Links */}
            <div className="flex flex-col gap-6 justify-start items-start w-full sm:w-[58%]">
              <h3 className="text-sm font-semibold leading-tight text-left text-gray-300 font-['Epilogue']">
                Company
              </h3>
              <ul className="flex flex-col gap-5 justify-start items-start w-auto">
                <li>
                  <Link 
                    href="#home-section"
                    className="text-xs font-normal leading-tight text-left text-gray-400 font-['Epilogue'] hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#about-us-section"
                    className="text-xs font-normal leading-tight text-left text-gray-400 font-['Epilogue'] hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#programmes-section"
                    className="text-xs font-normal leading-tight text-left text-gray-400 font-['Epilogue'] hover:text-white transition-colors"
                  >
                    Programmes
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#book-now-section"
                    className="text-xs font-normal leading-tight text-left text-gray-400 font-['Epilogue'] hover:text-white transition-colors"
                  >
                    Book Now
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#community-section"
                    className="text-xs font-normal leading-tight text-left text-gray-400 font-['Epilogue'] hover:text-white transition-colors"
                  >
                    Community
                  </Link>
                </li>
              </ul>
            </div>

            {/* Help Links */}
            <div className="flex flex-col gap-6 justify-start items-start w-auto">
              <h3 className="text-sm font-semibold leading-tight text-left text-gray-300 font-['Epilogue']">
                Help
              </h3>
              <ul className="flex flex-col gap-5 justify-start items-start w-auto">
                <li>
                  <Link 
                    href="#"
                    className="text-xs font-normal leading-tight text-left text-gray-400 font-['Epilogue'] hover:text-white transition-colors"
                  >
                    Customer Support
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#"
                    className="text-xs font-normal leading-tight text-left text-gray-400 font-['Epilogue'] hover:text-white transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#"
                    className="text-xs font-normal leading-tight text-left text-gray-400 font-['Epilogue'] hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-[1px] bg-gray-600 mt-12"></div>

        {/* Copyright */}
        <p className="text-xs font-normal leading-tight text-center text-gray-300 font-['Nunito_Sans'] mt-6 pb-6">
          © Copyright 2025, All Rights Reserved by Transparent
        </p>
      </div>
    </footer>
  );
};

export default Footer;