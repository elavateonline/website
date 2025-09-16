'use client';
import Image from 'next/image';

const WhyJoinSection = () => {
  const benefits = [
    {
      text: "Discover your ",
      highlight: "life purpose",
      continuation: " and align it with your business"
    },
    {
      text: "Learn practical skills: marketing, branding, finance, sales"
    },
    {
      text: "Access a ",
      highlight: "supportive community & investor network"
    },
    {
      text: "Graduate with a ",
      highlight: "pitch-ready business plan"
    },
    {
      text: "Transform fear into confidence with ",
      highlight: "NLP & coaching"
    }
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-[110px] mb-[22px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
          
          {/* Left Content */}
          <div className="w-full lg:w-[42%] flex flex-col gap-8 lg:gap-12">
            
            {/* Title */}
            <div className="w-full">
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold leading-[1.2] text-black font-['Nunito_Sans']">
                Why Join Elevate?
              </h2>
            </div>

            {/* Benefits List */}
            <div className="w-full flex flex-col gap-6 lg:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex flex-row gap-4 lg:gap-6 items-start">
                  {/* Check Icon */}
                  <div className="w-7 h-7 bg-white rounded-md p-1 flex items-center justify-center flex-shrink-0 mt-1">
                    <Image
                      src="/images/img_svg.svg"
                      alt="Check"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  </div>
                  
                  {/* Benefit Text */}
                  <div className="flex-1">
                    <p className="text-lg sm:text-xl lg:text-[22px] font-normal leading-relaxed text-black font-['Nunito_Sans']">
                      {benefit.text}
                      {benefit.highlight && (
                        <span className="font-medium text-[#816a02]">
                          {benefit.highlight}
                        </span>
                      )}
                      {benefit.continuation && (
                        <span>{benefit.continuation}</span>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[54%]">
            <div className="relative w-full aspect-[4/3] lg:aspect-[766/602]">
              <Image
                src="/images/img_video_tkpvgan.png"
                alt="Why Join Elevate Video"
                fill
                className="rounded-2xl object-cover"
                sizes="(max-width: 1024px) 100vw, 54vw"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default WhyJoinSection