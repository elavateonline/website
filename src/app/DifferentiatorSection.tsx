'use client';
const DifferentiatorSection = () => {
  return (
    <section className="w-full bg-[#1f2020] py-[32px] relative" id="about-us-section">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-[60px] justify-start items-center">
          {/* Header Content */}
          <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-[1348px] mt-[114px] gap-8 lg:gap-0">
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold leading-[1.25] text-left text-white font-['Nunito_Sans'] w-full lg:w-[34%]">
              What Makes Elevate Different?
            </h2>
            <p className="text-[18px] sm:text-[20px] md:text-[22px] font-normal leading-[1.5] text-left text-white font-['Nunito_Sans'] w-full lg:w-[58%] self-end">
              Unlike traditional training, Elevate is not just about starting a business – it's about aligning your mind, purpose, and energy with your entrepreneurial journey.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="flex flex-col lg:flex-row gap-[20px] w-full max-w-[1348px]">
            {/* Card 1 */}
            <div className="flex flex-col gap-[24px] justify-start items-start w-full lg:w-[434px] h-auto p-[24px] bg-gradient-to-b from-[#caae65] to-[#d7c28c] border border-solid border-[#00000033] rounded-[16px]">
              <div className="w-[48px] h-[48px] bg-black rounded-[24px] flex items-center justify-center">
                <span className="text-[18px] font-bold leading-[25px] text-white font-['Nunito_Sans']">1</span>
              </div>
              <p className="text-[20px] font-medium leading-[26px] text-left text-black font-['Nunito_Sans'] w-full">
                8 weeks of transformational Sunday workshops
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col gap-[24px] justify-center items-start w-full lg:w-[434px] h-auto p-[24px] pt-[20px] pb-[20px] bg-gradient-to-b from-[#caae65] to-[#d7c28c] border border-solid border-[#00000033] rounded-[16px]">
              <div className="w-[48px] h-[48px] bg-black rounded-[24px] flex items-center justify-center">
                <span className="text-[18px] font-bold leading-[25px] text-white font-['Nunito_Sans']">2</span>
              </div>
              <p className="text-[20px] font-medium leading-[26px] text-left text-black font-['Nunito_Sans'] w-full">
                Business skills and holistic wellness along with NLP
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col gap-[24px] justify-start items-start w-full lg:w-[432px] h-auto p-[24px] bg-gradient-to-b from-[#caae65] to-[#d7c28c] border border-solid border-[#00000033] rounded-[10px]">
              <div className="w-[48px] h-[48px] bg-black rounded-[24px] flex items-center justify-center">
                <span className="text-[18px] font-bold leading-[25px] text-white font-['Nunito_Sans']">3</span>
              </div>
              <p className="text-[20px] font-medium leading-[26px] text-left text-black font-['Nunito_Sans'] w-full">
                Post-program mentorship & community support
              </p>
            </div>
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