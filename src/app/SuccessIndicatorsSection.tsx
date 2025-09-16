'use client';
import Image from 'next/image';

const SuccessIndicatorsSection = () => {
  const statistics = [
    {
      percentage: "80%",
      description: "Participants complete the 8 weeks",
      size: "text-5xl sm:text-6xl lg:text-[64px]"
    },
    {
      percentage: "70%",
      description: "Launch or register their businesses within 3 months",
      size: "text-6xl sm:text-7xl lg:text-[72px]"
    },
    {
      percentage: "90%",
      description: "Report reduced stress with improved clarity",
      size: "text-6xl sm:text-7xl lg:text-[72px]"
    }
  ];

  return (
    <section className="w-full bg-white px-4 sm:px-8 lg:px-14 mb-16 lg:mb-[100px] py-4 sm:py-8">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="w-full bg-gradient-to-b from-[#b6991e] to-[#ffffff] rounded-2xl overflow-hidden">
          
          {/* Header Section */}
          <div className="w-full p-2 sm:p-3 lg:p-[10px]">
            <div className="w-full bg-[#1f2020] rounded-xl overflow-hidden">
              <div className="flex flex-col lg:flex-row lg:items-stretch">
                
                {/* Image Section */}
                <div className="w-full lg:w-[46%] p-4 sm:p-6 lg:p-9">
                  <div className="relative w-full aspect-[4/3] sm:aspect-square lg:aspect-[514/500]">
                    <Image
                      src="/images/img_c8zqcwrvxlrcauidcfma89js_jpg.png"
                      alt="Success Indicators"
                      fill
                      className="rounded-lg sm:rounded-2xl object-cover"
                      sizes="(max-width: 1024px) 100vw, 46vw"
                    />
                  </div>
                </div>

                {/* Text Content Section */}
                <div className="w-full lg:w-[54%] flex items-center justify-center p-4 sm:p-6 lg:p-12">
                  <div className="text-center lg:text-left w-full lg:max-w-none">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[42px] font-bold leading-tight text-white font-['Nunito_Sans'] mb-2 sm:mb-3 lg:mb-4">
                      Our Success Indicators
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-[22px] font-normal leading-relaxed text-white font-['Nunito_Sans']">
                      Active Elevate Alumni Community across UAE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="px-3 sm:px-6 md:px-8 lg:px-12 pb-6 sm:pb-8 lg:pb-12">
            {/* Mobile Layout - Stack vertically */}
            <div className="flex flex-col gap-8 sm:gap-10 lg:hidden">
              {statistics.map((stat, index) => (
                <div key={index} className="flex flex-col gap-4 sm:gap-5 text-center">
                  <h3 
                    className="text-5xl sm:text-6xl font-bold leading-none font-['Nunito_Sans'] py-2"
                    style={{
                      background: 'linear-gradient(180deg, #c9ae64 0%, #99873d 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    {stat.percentage}
                  </h3>
                  <p className="text-sm sm:text-base font-normal leading-relaxed text-black font-['Nunito_Sans'] px-4 sm:px-6 max-w-xs sm:max-w-sm mx-auto">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Desktop Layout - Original flexbox */}
            <div className="hidden lg:flex lg:flex-row justify-between items-start gap-6">
              {statistics.map((stat, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col gap-4 text-left ${
                    index === 0 ? 'lg:w-[30%]' : 
                    index === 1 ? 'lg:w-[40%]' : 'lg:w-[30%]'
                  }`}
                >
                  <h3 
                    className={`${stat.size} font-bold leading-tight font-['Nunito_Sans']`}
                    style={{
                      background: 'linear-gradient(180deg, #c9ae64 0%, #99873d 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    {stat.percentage}
                  </h3>
                  <p className="text-xl font-normal leading-relaxed text-black font-['Nunito_Sans']">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SuccessIndicatorsSection