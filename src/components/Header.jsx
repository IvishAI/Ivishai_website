import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const Header = () => {
  const [open, setOpen] = useState(false);


  const navigationItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ];


  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 w-full h-[78px] bg-transparent backdrop-blur-sm px-[82px] py-7 max-md:px-10 max-sm:px-5"
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      <div className="flex justify-between items-center h-full max-w-[1920px] mx-auto">
        {/* Logo - Fixed width container */}
        <div className="flex justify-start items-center w-[200px] max-sm:w-auto">
          <div className="flex justify-center items-center gap-[7px] transition-transform duration-200 hover:scale-105">
            <div>
              <svg
                width="36"
                height="38"
                viewBox="0 0 36 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[35px] h-[37px]"
              >
                <g clipPath="url(#clip0_77_52)">
                  <path
                    d="M35.3925 29.5736C35.3925 34.006 31.7993 37.5991 27.367 37.5991C27.0124 37.5991 26.7249 37.3117 26.7249 36.9571L26.7249 2.92897C26.7249 2.13115 27.3717 1.48439 28.1695 1.48439L33.9479 1.48439C34.7457 1.48439 35.3925 2.13115 35.3925 2.92897L35.3925 29.5736Z"
                    fill="url(#paint0_linear_77_52)"
                  ></path>
                  <path
                    d="M9.10067 37.0138C8.82825 37.382 8.39741 37.5991 7.93945 37.5991L3.58264 37.5991C2.09998 37.5991 1.24917 35.9111 2.13112 34.7193L26.1835 2.21599C26.5241 1.75583 27.0626 1.48438 27.6351 1.48438L34.6702 1.48438C35.0691 1.48438 35.3925 1.80777 35.3925 2.20668L35.3925 3.29012C35.3925 2.38726 34.9649 2.06222 34.3235 2.92898L9.10067 37.0138Z"
                    fill="url(#paint1_linear_77_52)"
                  ></path>
                  <path
                    d="M0.722534 10.3325C0.722534 9.5347 1.3693 8.88794 2.16712 8.88794H7.22318C8.02101 8.88794 8.66777 9.5347 8.66777 10.3325V35.4323C8.66777 37.5992 8.66777 37.5992 10.2929 35.4323L9.10115 37.0213C8.82833 37.3851 8.40017 37.5992 7.94548 37.5992H2.16712C1.3693 37.5992 0.722534 36.9524 0.722534 36.1546V10.3325Z"
                    fill="url(#paint2_linear_77_52)"
                  ></path>
                  <path
                    d="M0.977904 4.62887C0.836867 4.48783 0.836867 4.25917 0.977904 4.11813L2.6522 2.44384C3.78049 1.31554 5.60982 1.31554 6.73811 2.44384L8.41241 4.11813C8.55344 4.25917 8.55344 4.48783 8.41241 4.62887L6.73811 6.30316C5.60982 7.43146 3.78049 7.43146 2.6522 6.30316L0.977904 4.62887Z"
                    fill="#E26426"
                  ></path>
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_77_52"
                    x1="31.0587"
                    y1="1.48439"
                    x2="31.0587"
                    y2="37.5991"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#AD4613"></stop>
                    <stop offset="1" stopColor="#E26426"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_77_52"
                    x1="35.4835"
                    y1="1.11107"
                    x2="9.71757"
                    y2="37.1833"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#13D8F6"></stop>
                    <stop offset="1" stopColor="#0F616D"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_77_52"
                    x1="5.50774"
                    y1="8.88794"
                    x2="5.50774"
                    y2="37.5992"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#E26426"></stop>
                    <stop offset="1" stopColor="#AD4613"></stop>
                  </linearGradient>
                  <clipPath id="clip0_77_52">
                    <rect
                      width="35.3924"
                      height="37.1983"
                      fill="white"
                      transform="translate(0 0.400879)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <svg
                width="81"
                height="22"
                viewBox="0 0 81 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[80px]"
              >
                <path
                  d="M40.5628 20.6457V0.949463H42.5864V12.0927L41.9928 12.5514C41.9928 11.2203 42.1816 10.0601 42.5594 9.0708C42.9551 8.08149 43.5397 7.31702 44.3132 6.7774C45.1046 6.21979 46.0939 5.94098 47.2811 5.94098H47.389C49.1158 5.94098 50.4199 6.50758 51.3013 7.64079C52.2007 8.774 52.6503 10.3479 52.6503 12.3625V20.6457H50.6537V11.9308C50.6537 10.6537 50.303 9.64639 49.6015 8.90891C48.9 8.17142 47.9556 7.80268 46.7684 7.80268C45.4913 7.80268 44.475 8.21639 43.7196 9.04382C42.9641 9.85325 42.5864 10.9235 42.5864 12.2546V20.6457H40.5628Z"
                  fill="#EDF7F8"
                ></path>
                <path
                  d="M32.2176 21.0505C30.3829 21.0505 28.9709 20.6548 27.9816 19.8633C26.9923 19.0539 26.4886 17.9746 26.4706 16.6256H28.3593C28.3953 17.3091 28.7011 17.9297 29.2767 18.4873C29.8703 19.0449 30.8506 19.3237 32.2176 19.3237C33.4947 19.3237 34.4481 19.0629 35.0776 18.5412C35.7252 18.0016 36.0489 17.3541 36.0489 16.5986C36.0489 15.8971 35.7791 15.3575 35.2395 14.9797C34.7179 14.584 33.9534 14.3322 32.9461 14.2243L31.3272 14.0624C30.0321 13.9185 28.9799 13.5228 28.1704 12.8752C27.379 12.2097 26.9833 11.3013 26.9833 10.1501C26.9833 9.30469 27.1991 8.56721 27.6308 7.93765C28.0625 7.30809 28.6651 6.82242 29.4386 6.48066C30.23 6.12091 31.1564 5.94104 32.2176 5.94104C33.7466 5.94104 34.9877 6.30079 35.941 7.02029C36.9123 7.73979 37.407 8.76507 37.425 10.0961H35.5363C35.5183 9.41262 35.2305 8.83702 34.6729 8.36935C34.1153 7.90167 33.2969 7.66783 32.2176 7.66783C31.1024 7.66783 30.266 7.91066 29.7084 8.39633C29.1687 8.88199 28.8989 9.47557 28.8989 10.1771C28.8989 10.7707 29.1058 11.2653 29.5195 11.661C29.9332 12.0388 30.5808 12.2726 31.4621 12.3626L33.081 12.5244C34.52 12.6863 35.6892 13.1 36.5886 13.7656C37.5059 14.4311 37.9646 15.3845 37.9646 16.6256C37.9646 17.471 37.7218 18.2355 37.2361 18.919C36.7684 19.5845 36.1029 20.1062 35.2395 20.4839C34.3761 20.8616 33.3688 21.0505 32.2176 21.0505Z"
                  fill="#EDF7F8"
                ></path>
                <path
                  d="M22.3053 20.5985V6.32544H24.3019V20.5985H22.3053ZM20.0119 7.94431V6.32544H24.3019V7.94431H20.0119Z"
                  fill="#EDF7F8"
                ></path>
                <path
                  d="M9.98421 20.6457L4.96571 6.37268H7.04326L12.0078 20.6457H9.98421ZM10.5238 20.6457V18.9999H13.087V20.6457H10.5238ZM11.6301 20.6457L15.974 6.37268H17.9706L13.5457 20.6457H11.6301Z"
                  fill="#EDF7F8"
                ></path>
                <path
                  d="M0.538589 20.6457V0.949463H2.58916V20.6457H0.538589Z"
                  fill="#EDF7F8"
                ></path>
                <path
                  d="M78.488 20.6457V0.949463H80.5386V20.6457H78.488Z"
                  fill="#EDF7F8"
                ></path>
                <path
                  d="M61.7709 20.6457L71.2925 0.949463H74.9619L74.7905 19.1701C74.7828 19.9873 74.1182 20.6457 73.3009 20.6457C73.1976 20.6457 73.114 20.5616 73.1147 20.4583L73.2387 2.2317L74.4762 2.81116H71.6432L72.6721 2.2317L63.8215 20.6457H61.7709Z"
                  fill="#EDF7F8"
                ></path>
                <path
                  d="M20.405 2.5429C20.3232 2.4338 20.3232 2.28376 20.405 2.17467C21.3012 0.9804 23.0473 0.856538 24.1031 1.91234L24.3102 2.11942C24.4424 2.25162 24.4424 2.46595 24.3102 2.59815L24.1031 2.80523C23.0473 3.86103 21.3012 3.73717 20.405 2.5429Z"
                  fill="#EDF7F8"
                ></path>
              </svg>
            </div>
          </div>
        </div>


        {/* Desktop Navigation - Centered */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-8 border bg-[rgba(255,255,255,0.08)] px-4 py-2 rounded-xl border-[#6B6B6B] max-md:gap-5 max-sm:hidden backdrop-blur-sm transition-all duration-300">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="relative text-[#D6D6D6] text-[15px] font-normal p-1 hover:text-white transition-all duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>


        {/* Right Side - Contact Button & Mobile Menu */}
        <div className="flex justify-end items-center w-[200px] max-sm:w-auto">
          {/* Mobile Menu - NEW DROPDOWN STYLE */}
          <div className="hidden max-sm:block relative">
            <button
              className="text-white hover:bg-white/10 rounded-lg p-2 transition-colors duration-200"
              onClick={() => setOpen(!open)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 6l16 0"></path>
                <path d="M4 12l16 0"></path>
                <path d="M4 18l16 0"></path>
              </svg>
            </button>

            <AnimatePresence>
              {open && (
                <>
                  {/* Backdrop */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                    onClick={() => setOpen(false)}
                  />

                  {/* Dropdown Menu */}
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="fixed top-20 right-5 w-72 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden"
                  >
                    {/* Menu Items */}
                    <div className="p-4">
                      {navigationItems.map((item, index) => (
                        <motion.a
                          key={index}
                          href={item.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="block text-[#D6D6D6] text-base font-normal py-3 px-4 hover:bg-white/10 hover:text-white rounded-lg transition-all duration-200 mb-1"
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </motion.a>
                      ))}

                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>


        </div>
      </div>
    </motion.header>
  );
};


export default Header;
