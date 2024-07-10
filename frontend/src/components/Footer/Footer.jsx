import React from 'react';
import { FaLinkedin, FaMobileAlt } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaLocationArrow } from 'react-icons/fa6';

const FooterLinks = [
    {
        title: "Home",
        link: "/#"
    },
    {
        title: "About",
        link: "/about"
    },
    {
        title: "Contact",
        link: "/contact"
    },
    {
        title: "Blog",
        link: "/blog",
    },
];

const Footer = () => {
  return (
    <div className='dark: bg-gray-950'>
        <div className="container">
            <div className="grid md:grid-cols-3 pb-20 pt-5">
                {/* company details */}
                <div className='py-8 px-4'>
                  <a href='#' className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>
                  Ekart
                  </a>
                  <p className='text-white lg:pr-24 pt-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sit nemo impedit 
                    beatae earum!
                  </p>
                  <p className='mt-4 text-white'>Made with trust & love</p>
                  
                </div>
                {/* footer links */}
                <div className='col-span-2 grid grid-cols-2 
                sm:grid-cols-3 md:pl-10'>
                    <div className='py-8 px-4'>
                        <h1 className='text-white/70 text-xl font-bold sm:text-left mb-3'>Important Links</h1>
                        <ul className='space-y-3'>
                            {
                                FooterLinks.map((data, index) => (
                                    <li key={index}>
                                       <a href={data.link}
                                       className='text-gray-600 hover:dark:text-white hover:text-white duration-300'>
                                        {data.title}
                                        </a> 
                                    </li>
                                )) 
                            }
                        </ul>
                    </div>
                    {/* second col links */}
                    <div className='py-8 px-4'>
                        <h1 className='text-white/70 text-xl font-bold sm:text-left mb-3'>Quick Links</h1>
                        <ul className='space-y-3'>
                            {
                                FooterLinks.map((data, index) => (
                                    <li key={index}>
                                       <a href={data.link}
                                       className='text-gray-600 hover:dark:text-white hover:text-white duration-300'>
                                        {data.title}
                                        </a> 
                                    </li>
                                )) 
                            }
                        </ul>
                    </div>
                    {/* company Address */}
                    <div className='py-8 px-4 col-span-2 sm:col-auto'>
                    <h1 className='text-white/70 text-xl font-bold sm:text-left mb-3'>Address</h1>
                        <div className='text-gray-600'>
                            <div className='flex items-center gap-3'>
                              <FaLocationArrow/>
                              <p>Noida, Uttar Pradesh</p>
                            </div>
                            <div className='flex items-center gap-3 mt-6'>
                                <FaMobileAlt/>
                                <p>+91-0000000000</p>
                            </div>

                            {/* social links */}
                            <div className=' text-gray-800 flex items-center gap-3 mt-6'>
                                <a href='#'>
                                    <FaInstagram className='text-3xl hover:text-primary duration-300' />
                                </a>
                                <a href='#'>
                                    <FaFacebook className='text-3xl hover:text-primary duration-300' />
                                </a>
                                <a href='#'>
                                    <FaLinkedin className='text-3xl hover:text-primary duration-300' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;