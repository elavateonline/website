'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: number
  text: string
  name: string
  role: string
  avatar: string
}

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [numVisible, setNumVisible] = useState(1);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "This program did not just give me a business plan. It gave me confidence and clarity.",
      name: "Jane Smith",
      role: "Freelance Designer",
      avatar: ""
    },
    {
      id: 2,
      text: "The healing with business mix is unique. I have never experienced such transformation.",
      name: "John Doe",
      role: "Entrepreneur",
      avatar: ""
    },
    {
      id: 3,
      text: "Transformed my side hustle into a thriving business. The guidance was invaluable!",
      name: "Emily Johnson",
      role: "Marketing Consultant",
      avatar: ""
    },
    {
      id: 4,
      text: "Practical strategies that actually work. My revenue doubled in just three months.",
      name: "Michael Brown",
      role: "Small Business Owner",
      avatar: ""
    },
    {
      id: 5,
      text: "The community support made all the difference. Felt like I had a team behind me.",
      name: "Sarah Wilson",
      role: "E-commerce Specialist",
      avatar: ""
    },
    {
      id: 6,
      text: "From idea to execution – this program bridged the gap perfectly.",
      name: "David Lee",
      role: "Tech Startup Founder",
      avatar: ""
    },
    {
      id: 7,
      text: "Gained not just skills, but a mindset shift that changed everything.",
      name: "Lisa Garcia",
      role: "Content Creator",
      avatar: ""
    },
    {
      id: 8,
      text: "Hands-down the best investment in my professional growth. Highly recommend!",
      name: "Robert Martinez",
      role: "Financial Advisor",
      avatar: ""
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const updateNumVisible = () => {
      if (window.innerWidth < 640) {
        setNumVisible(1);
      } else if (window.innerWidth < 768) {
        setNumVisible(2);
      } else if (window.innerWidth < 1024) {
        setNumVisible(3);
      } else {
        setNumVisible(4);
      }
    };

    updateNumVisible();
    window.addEventListener('resize', updateNumVisible);
    return () => window.removeEventListener('resize', updateNumVisible);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < numVisible; i++) {
      const index = (currentSlide + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="w-full bg-white py-[76px] mb-[64px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full">
          {/* Content Container */}
          <div className="relative z-10">
            <div className="w-full ml-0 lg:ml-[52px]">
              {/* Header Section */}
              <div className="flex flex-col lg:flex-row justify-start items-start lg:items-center w-full h-auto gap-4 lg:gap-0">
                <div className="flex flex-col justify-start items-start w-full lg:w-[60%]">
                  <h2 className="text-[36px] sm:text-[48px] md:text-[56px] font-bold leading-[1.4] text-left text-black font-['Nunito_Sans'] w-auto">
                    Testimonial
                  </h2>
                  <p className="text-[20px] font-normal leading-[1.7] text-left text-[#00000099] font-['Source_Sans_Pro'] w-[68%]">
                    Do not just take our word for it - see what actual users of our service have to say about their experience.
                  </p>
                </div>

                {/* Navigation Controls */}
                <div className="flex flex-row justify-center lg:justify-end items-center w-full lg:w-auto px-4 lg:px-[56px] pr-0 lg:pr-[98px] mt-4 lg:mt-0">
                  <button
                    onClick={prevSlide}
                    className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] bg-[#0000000c] rounded-[6px] p-3 lg:p-[22px] flex items-center justify-center hover:bg-[#00000020] transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <Image
                      src="/images/img_frame_2.svg"
                      alt="Previous"
                      width={20}
                      height={20}
                      className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px] rotate-180"
                    />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] bg-[#0000000c] rounded-[6px] p-3 lg:p-[22px] flex items-center justify-center ml-[14px] hover:bg-[#00000020] transition-colors"
                    aria-label="Next testimonial"
                  >
                    <Image
                      src="/images/img_frame_2.svg"
                      alt="Next"
                      width={20}
                      height={20}
                      className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px]"
                    />
                  </button>
                </div>
              </div>

              {/* Testimonials Slider */}
              <div className="flex flex-row gap-[30px] justify-start items-center w-full h-auto mt-[67px] overflow-hidden">
                {getVisibleTestimonials().map((testimonial, index) => (
                  <div
                    key={`${testimonial.id}-${index}`}
                    className="flex flex-col gap-[24px] justify-start items-center min-w-0 flex-1 h-auto bg-gradient-to-br from-[#f6f6f6] to-[#ffe26666] rounded-[6px] p-6 lg:p-[40px] px-4 lg:px-[30px]"
                  >
                    {/* Testimonial Text */}
                    <p className="text-[16px] font-normal leading-[1.8] lg:leading-[2.1] text-center text-black font-['Source_Sans_Pro'] w-full">
                      "{testimonial.text}"
                    </p>

                    {/* Star Rating */}
                    <div className="flex flex-row gap-[4px] justify-center items-center w-auto">
                      {[...Array(5)].map((_, starIndex) => (
                        <Image
                          key={starIndex}
                          src="/images/img_frame.svg"
                          alt="Star"
                          width={16}
                          height={16}
                          className="w-[16px] h-[16px] lg:w-[20px] lg:h-[20px]"
                        />
                      ))}
                    </div>

                    {/* User Info */}
                    <div className="flex flex-col gap-[4px] justify-start items-center w-auto mb-[22px]">
                      <div className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] bg-[#656060] rounded-[24px]"></div>
                      <h4 className="text-[16px] lg:text-[18px] font-semibold leading-[1.3] text-left text-black font-['Source_Sans_Pro'] w-auto">
                        {testimonial.name}
                      </h4>
                      <p 
                        className="text-[12px] lg:text-[14px] font-normal leading-[1.3] text-left font-['Source_Sans_Pro'] w-auto"
                        style={{
                          background: 'linear-gradient(180deg, #ffffff99 0%, #ffe26699 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}
                      >
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;