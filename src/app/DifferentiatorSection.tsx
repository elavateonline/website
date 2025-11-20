'use client';
import Image from'next/image';
const DifferentiatorSection = () => {
  return (
    <section className="w-full bg-[#1f2020] py-[32px] sm:py-[10px] relative" id="about-us-section">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-[60px] justify-start items-center">
          {/* Header Content */}
          <div className="flex flex-col justify-center items-center w-full max-w-[1348px] sm:mt-[60px] lg:mt-[144px] gap-8">
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold leading-[1.25] text-center text-white font-['Nunito_Sans'] w-full">
              About Us – Meet the Elevate Founders
            </h2>
          </div>
          <div className="w-full lg:w-1/3 flex justify-center items-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl  items-center justify-center text-gray-500">
                  <Image src="/images/founder.jpeg" alt="founder" width={270} height={270} className="rounded-xl"/>
                </div>
              </div>

          {/* Mission Statement */}
          <div className="flex flex-col gap-6 w-full max-w-[1348px]">
            <p className="text-[18px] sm:text-[20px] md:text-[22px] font-normal leading-[1.5] text-left text-white font-['Nunito_Sans']">
              At Elevate Business 360, we believe true success is not just about building profitable businesses — it's about creating balance, clarity, and purpose along the journey. Our mission is to empower individuals in the UAE to transform ideas into sustainable businesses, while staying rooted in wellness, clarity, and personal growth.
            </p>
            <p className="text-[18px] sm:text-[20px] md:text-[22px] font-normal leading-[1.5] text-left text-white font-['Nunito_Sans']">
              Together, as founders, we bring a unique blend of business strategy, coaching, and holistic wellness that makes Elevate the first-of-its-kind entrepreneurship accelerator in the UAE.
            </p>
          </div>

          {/* Founder Profiles */}
          <div className="flex flex-col lg:flex-row gap-[40px] w-full max-w-[1348px]">
            {/* Smitha Ratheesh */}
            <div className="flex flex-col lg:flex-row gap-[30px] w-full">
              {/* <div className="w-full lg:w-1/3 flex justify-center items-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl  items-center justify-center text-gray-500">
                  <Image src="/images/founder.jpeg" alt="founder" width={270} height={270} className="rounded-xl"/>
                </div>
              </div> */}
              <div className="w-full lg:w-2/3 flex flex-col gap-[20px]">
                <h3 className="text-[24px] sm:text-[28px] font-semibold leading-[1.3] text-left text-[#ceb572] font-['Nunito_Sans']">
                   Smitha Ratheesh – Success Coach & Holistic Practitioner
                </h3>
                <p className="text-[18px] sm:text-[20px] font-medium leading-[1.4] text-left text-white font-['Nunito_Sans']">
                  Founder | Holistic Wellness & Business Coach | Reiki Master | NLP Practitioner
                </p>
                <p className="text-[16px] sm:text-[18px] font-normal leading-[1.5] text-left text-white font-['Nunito_Sans']">
                  I am a two-time Guinness World Record holder, award-winning marketing strategist, and internationally certified holistic life coach with over 20 years of experience across FMCG, retail, healthcare, and entrepreneurial ventures in the GCC.
                </p>
                <p className="text-[16px] sm:text-[18px] font-normal leading-[1.5] text-left text-white font-['Nunito_Sans']">
                  My journey has taken me from homoeopathy and teaching, to banking and marketing, to holistic coaching and entrepreneurship. Along the way, I have faced personal and professional setbacks — and rebuilt myself through mindfulness, meditation, Reiki, NLP, and holistic wellness practices.
                </p>
                <p className="text-[16px] sm:text-[18px] font-normal leading-[1.5] text-left text-white font-['Nunito_Sans']">
                  Today, I specialize in helping individuals discover their life purpose, build resilience, and align wellness with business success. At Elevate, I lead programs on mindset, resilience, stress management, and holistic growth — ensuring every entrepreneur has the clarity and confidence to thrive.
                </p>
              </div>
            </div>

            {/* Shebin Abdulkadar */}
            <div className="flex flex-col lg:flex-row gap-[30px] w-full">
              {/* <div className="w-full lg:w-1/3 flex justify-center items-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64 flex items-center justify-center text-gray-500">
                  Founder Image
                </div>
              </div> */}
              <div className="w-full lg:w-2/3 flex flex-col gap-[20px]">
                <h3 className="text-[24px] sm:text-[28px] font-semibold leading-[1.3] text-left text-[#ceb572] font-['Nunito_Sans']">
                   Shebin Abdulkadar – Business Mentor & Trainer
                </h3>
                <p className="text-[18px] sm:text-[20px] font-medium leading-[1.4] text-left text-white font-['Nunito_Sans']">
                  Entrepreneur | Business Consultant | Mentor | Business Coach
                </p>
                <p className="text-[16px] sm:text-[18px] font-normal leading-[1.5] text-left text-white font-['Nunito_Sans']">
                  With over 19 years of proven experience in the UAE, I specialize in guiding entrepreneurs from idea to execution. My expertise spans operations, projects, procurement, and administration, giving me a strong foundation to support startups and SMEs in building sustainable ventures.
                </p>
                <p className="text-[16px] sm:text-[18px] font-normal leading-[1.5] text-left text-white font-['Nunito_Sans']">
                  I am passionate about helping entrepreneurs overcome challenges, optimize operations, and unlock growth opportunities. As a mentor and trainer, he provides practical strategies, structured training, and hands-on tools that enable entrepreneurs to succeed at every stage — from startup launch to scaling.
                </p>
                <div className="flex flex-col gap-[10px]">
                  <h4 className="text-[18px] font-semibold leading-[1.4] text-left text-white font-['Nunito_Sans']">
                    Credentials & Expertise:
                  </h4>
                  <ul className="list-disc list-inside text-[16px] sm:text-[18px] font-normal leading-[1.5] text-left text-white font-['Nunito_Sans']">
                    <li>Six Sigma Green Belt (CSSGB)</li>
                    <li>ISO 9001:2008 Auditor</li>
                    <li>Certified Professional Purchasing Manager (CPPM)</li>
                    <li>Trained in Stakeholder Management, PMP, Leadership Development, and Transactional Analysis (TA101)</li>
                  </ul>
                </div>
                <p className="text-[16px] sm:text-[18px] font-normal leading-[1.5] text-left text-white font-['Nunito_Sans']">
                  At Elevate, I lead business strategy, operations and scaling modules — giving participants a strong business foundation backed by real-world expertise.
                </p>
              </div>
            </div>
          </div>

          {/* Why We Created Elevate */}
          <div className="flex flex-col gap-[30px] w-full max-w-[1348px]">
            <h3 className="text-[24px] sm:text-[28px] font-semibold leading-[1.3] text-left text-[#ceb572] font-['Nunito_Sans']">
               Why We Created Elevate
            </h3>
            <p className="text-[18px] sm:text-[20px] font-normal leading-[1.5] text-left text-white font-['Nunito_Sans']">
              Elevate was born from our shared vision: to create a space where entrepreneurs can grow both personally and professionally. Unlike traditional business programs, Elevate combines entrepreneurship training + NLP + holistic healing, creating a unique accelerator where participants not only build businesses, but also strengthen their mindset, wellness, and resilience.
            </p>
            <p className="text-[18px] sm:text-[20px] font-normal leading-[1.5] text-left text-white font-['Nunito_Sans']">
              Our mission is simple:
            </p>
            <p className="text-[20px] font-semibold leading-[1.5] text-left text-[#ceb572] font-['Nunito_Sans']">
               To elevate entrepreneurs by aligning business success with personal well-being.
            </p>
          </div>

          {/* Quote */}
          <p className="text-[20px] font-semibold italic leading-[28px] text-center text-[#ceb572] font-['Nunito_Sans'] w-auto mb-[80px]">
            "We do not just build businesses. We build empowered, balanced lives."
          </p>
        </div>
      </div>

      {/* Curved Polygon Shape at Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          fill="none" 
          className="w-full h-[60px] sm:h-[80px] md:h-[100px] lg:h-[120px]"
          preserveAspectRatio="none"
        >
          {/* Background rectangle to create the cutout effect */}
          <rect width="1200" height="120" fill="#1f2020"/>
          {/* Curved cutout path - inverted */}
          <path 
            d="M0,0 Q600,100 1200,0 L1200,120 L0,120 Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}

export default DifferentiatorSection