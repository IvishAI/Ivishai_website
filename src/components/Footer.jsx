import React from "react";
import { Link } from 'react-router-dom'; 

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black text-gray-300 py-10 px-16 max-md:px-5">
      
      <div className="flex justify-between items-start max-md:flex-col max-md:gap-10">
        {/* Left group: 3 columns with gap */}
        <div className="flex items-start gap-16 max-md:flex-col max-md:gap-8">
          {/* Home Column */}
          <div>
            <h3 className="text-white text-base font-bold mb-5">Home</h3>

            <ul className="space-y-4">
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
             
              <li>
                <a
                  href="/careers"
                  className="hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/testimonials"
                  className="hover:text-white transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a href="/faqs" className="hover:text-white transition-colors">
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-white text-base font-bold mb-5">Products</h3>

            <ul className="space-y-4">
              <li>
                <a
                  href="https://verbxeco.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  VerbX
                </a>
              </li>
              <li>
                <a
                  href="/retail-os"
                  className="hover:text-white transition-colors"
                >
                  Retail OS
                </a>
              </li>
            </ul>
          </div>

          {/* Careers Column */}
          <div>
            <h3 className="text-white text-base font-bold mb-5">Legal</h3>

            {<ul className="space-y-4">
              <li>
                <a
                  href="/privacypolicy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/security"
                  className="hover:text-white transition-colors"
                >
                  Terms of Use
                </a>
              </li>
            </ul> }
          </div>
        </div>

        {/* Socials Column */}
        <div>
          <h3 className="text-white text-base font-bold mb-5">Socials</h3>

          <ul className="space-y-4">
            <li>
              <a
                href="https://www.instagram.com/ivish_ai?igsh=MTc1dnMxeDN2bGhiYQ=="
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://x.com/ai_ivish52542?t=saKy955j743BxaB1W3z2sA&s=09"
                className="hover:text-white transition-colors"
              >
                X
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/ivishai/"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </li>

          </ul>
        </div>
      </div>

    
      <div className="mt-24 flex items-center justify-between max-md:mt-16 max-md:flex-col max-md:gap-6">
     
        <div className="w-full max-w-[732px]">
          <svg
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 733 168"
            fill="none"
          >
            <path
              d="M0 164.28V2.22H21.756V164.28H0Z"
              fill="url(#paint0_linear_68_517)"
            />
            <path
              d="M87.1246 164.28L46.7206 45.732H68.9206L108.437 164.28H87.1246ZM92.4526 164.28V147.408H118.205V164.28H92.4526ZM102.665 164.28L137.075 45.732H157.943L122.867 164.28H102.665Z"
              fill="url(#paint1_linear_68_517)"
            />
            <path
              d="M187.156 164.28V45.732H208.468V164.28H187.156ZM168.952 62.604V45.732H208.468V62.604H168.952ZM193.15 26.64C188.414 26.64 184.862 25.382 182.494 22.866C180.274 20.35 179.164 17.168 179.164 13.32C179.164 9.472 180.274 6.28999 182.494 3.77399C184.862 1.258 188.414 0 193.15 0C197.886 0 201.364 1.258 203.584 3.77399C205.952 6.28999 207.136 9.472 207.136 13.32C207.136 17.168 205.952 20.35 203.584 22.866C201.364 25.382 197.886 26.64 193.15 26.64Z"
              fill="url(#paint2_linear_68_517)"
            />
            <path
              d="M284.085 167.832C268.545 167.832 256.483 164.502 247.899 157.842C239.463 151.182 235.097 142.08 234.801 130.536H254.781C255.077 135.124 257.371 139.49 261.663 143.634C266.103 147.63 273.577 149.628 284.085 149.628C293.557 149.628 300.809 147.778 305.841 144.078C310.873 140.23 313.389 135.568 313.389 130.092C313.389 125.208 311.539 121.434 307.839 118.77C304.139 115.958 298.145 114.108 289.857 113.22L276.981 111.888C265.733 110.704 256.557 107.374 249.453 101.898C242.349 96.274 238.797 88.43 238.797 78.366C238.797 70.818 240.721 64.38 244.569 59.052C248.417 53.576 253.745 49.432 260.553 46.62C267.361 43.66 275.205 42.18 284.085 42.18C297.405 42.18 308.209 45.14 316.497 51.06C324.785 56.98 329.077 65.786 329.373 77.478H309.393C309.245 72.742 307.025 68.746 302.733 65.49C298.589 62.086 292.373 60.384 284.085 60.384C275.797 60.384 269.507 62.086 265.215 65.49C260.923 68.894 258.777 73.186 258.777 78.366C258.777 82.806 260.257 86.358 263.217 89.022C266.325 91.686 271.357 93.388 278.313 94.128L291.189 95.46C303.917 96.792 314.129 100.344 321.825 106.116C329.521 111.74 333.369 119.732 333.369 130.092C333.369 137.492 331.223 144.078 326.931 149.85C322.787 155.474 317.015 159.914 309.615 163.17C302.215 166.278 293.705 167.832 284.085 167.832Z"
              fill="url(#paint3_linear_68_517)"
            />
            <path
              d="M359.817 164.28V2.22H381.129V99.012H375.801C375.801 87.32 377.281 77.256 380.241 68.82C383.349 60.236 388.085 53.65 394.449 49.062C400.813 44.474 408.953 42.18 418.869 42.18H419.757C433.965 42.18 444.695 46.916 451.947 56.388C459.199 65.712 462.825 79.106 462.825 96.57V164.28H441.513V92.13C441.513 82.51 438.775 75.036 433.299 69.708C427.971 64.38 421.015 61.716 412.431 61.716C402.959 61.716 395.337 64.898 389.565 71.262C383.941 77.478 381.129 85.692 381.129 95.904V164.28H359.817Z"
              fill="url(#paint4_linear_68_517)"
            />
            <path
              d="M529.245 164.28L587.63 2.22H624.483L684.645 164.28H662.223L607.833 16.428L618.489 21.756H592.293L603.615 16.428L551 164.28H529.245ZM564.099 115.884L571.424 96.348H641.355L648.681 115.884H564.099Z"
              fill="url(#paint5_linear_68_517)"
            />
            <path
              d="M710.365 164.28V2.22H732.121V164.28H710.365Z"
              fill="url(#paint6_linear_68_517)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_68_517"
                x1="-23.9761"
                y1="89.2798"
                x2="757.024"
                y2="89.2798"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D0D0D0" />
                <stop offset="1" stopColor="#5F5F5F" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_68_517"
                x1="-23.9761"
                y1="89.2798"
                x2="757.024"
                y2="89.2798"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D0D0D0" />
                <stop offset="1" stopColor="#5F5F5F" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_68_517"
                x1="-23.9761"
                y1="89.2798"
                x2="757.024"
                y2="89.2798"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D0D0D0" />
                <stop offset="1" stopColor="#5F5F5F" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_68_517"
                x1="-23.9761"
                y1="89.2798"
                x2="757.024"
                y2="89.2798"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D0D0D0" />
                <stop offset="1" stopColor="#5F5F5F" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_68_517"
                x1="-23.9761"
                y1="89.2798"
                x2="757.024"
                y2="89.2798"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D0D0D0" />
                <stop offset="1" stopColor="#5F5F5F" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_68_517"
                x1="-23.9761"
                y1="89.2798"
                x2="757.024"
                y2="89.2798"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D0D0D0" />
                <stop offset="1" stopColor="#5F5F5F" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_68_517"
                x1="-23.9761"
                y1="89.2798"
                x2="757.024"
                y2="89.2798"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D0D0D0" />
                <stop offset="1" stopColor="#5F5F5F" />
              </linearGradient>
            </defs>
          </svg>
        </div>

    
        <button
          onClick={scrollToTop}
          className="text-gray-300 hover:text-white transition-colors cursor-pointer"
        >
          Back to top
        </button>
        <Link to="/Developerpage" onClick={scrollToTop} className="text-gray-300 hover:text-white transition-colors cursor-pointer">

          Credits
        </Link>


        {/* Copyright */}
        <div className="text-gray-300 text-sm">
         © Ivish AI Quantum Pvt Ltd 2025
        </div>
      </div>
    </footer>
  );
}

export default Footer;
