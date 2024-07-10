import React from 'react';
import Heading from '../Shared/Heading';

// import images
import Img1 from "../../assets/Blogs/blog-1.jpg";
import Img2 from "../../assets/Blogs/blog-2.jpg";
import Img3 from "../../assets/Blogs/blog-3.jpg";

const BlogData =[
  {
    title: "How to choose perfect smartwatch",
    subtitle: "Measure Your Wrist: Before exploring smartwatch options, accurately measure your wrist circumference to determine the most suitable case diameter and strap length for a comfortable fit.",
    published: "Jun 24, 2024",
    image: Img1,
    aosDelay: "0",
  },
  {
    title: "How to choose perfect gadget",
    subtitle: "Read reviews, compare features, and check the specifications of different gadgets to find the one that best fits your needs.",
    published: "Jun 24, 2024",
    image: Img2,
    aosDelay: "200",
  },
  {
    title: "How to choose perfect VR headset",
    subtitle: "Consider the type of VR experience you want, the compatibility with your devices",
    published: "Jun 24, 2024",
    image: Img3,
    aosDelay: "400",
  },
]

const Blogs = () => {
  return (
    <div className='my-12'>
      <div className="container">
        {/* Header section */}
        <Heading title = "Recent News"  subtitle ={"Explore our Blogs"}/>

     {/* Blog section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
          {/* BlogCard */}
          {
            BlogData.map((data) => (
              <div data-aos="fade-up" data-aos-delay={data.aosDelay}  key={data.title} className='bg-white dark:bg-gray-900'> 
                {/* Image section */}
                <div className='overflow-hidden rounded-2xl mb-2'>
                   <img src={data.image} alt="" className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500'/>
                </div>
                {/* content section */}
                <div className='space-y-2'>
                  <p className='text-xs text-gray-500'>{data.published}</p>
                  <p className='font-bold line-clamp-1'>{data.title}</p>
                  <p className='line-clamp-2 text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Blogs;