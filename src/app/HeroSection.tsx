'use client';
import Image from'next/image';
 import Button from'@/components/ui/Button';
 import Header from'@/components/common/Header';

const HeroSection = () => {
  const handleJoinBatch = () => {
    // Scroll to booking section
    const bookingSection = document.getElementById('booking-section')
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="w-full bg-white">
      <div className="w-full">
        {/* Header */}
        <Header />
        
        {/* Hero Content */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-start items-end mt-[38px] mb-[78px] gap-8 lg:gap-40 lg:w-[1200px]">
            {/* Left Content */}
            <div className="w-full lg:w-[54%] ">
              <h1 className="text-[28px] sm:text-[42px] md:text-[48px] lg:text-[56px] font-bold leading-[1.1] text-left capitalize text-black font-['Nunito_Sans'] sm:mt-[0px] md:mt-[24px] lg:mt-[30px]">
                Launch Your Business Heal Your Mind 
                Elevate Your Life
              </h1>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-[46%] flex flex-col gap-[28px] justify-start items-start self-center ml-0 lg:ml-[-48px]">
              <p className="text-[18px] sm:text-[20px] md:text-[22px] font-normal leading-[1.5] text-left text-[#3b3b3b] font-['Nunito_Sans'] w-full">
                The UAE's first holistic entrepreneurship accelerator combining business coaching, NLP, healing, and relationship coaching.
              </p>
              
              <Button
                onClick={handleJoinBatch}
                className="flex items-center gap-[6px] px-[20px] pr-[40px] py-[10px] bg-[#e8c15d] border border-solid border-transparent rounded-[16px] shadow-[-1px_1px_3px_#0000003f]"
                style={{
                  background: 'linear-gradient(180deg, #f6df79 0%, #e8c534 50%, #e1b810 100%)',
                  border: '1px solid transparent',
                  borderImage: 'linear-gradient(180deg, #f6df79 0%, #e8c534 50%, #e1b810 100%)'
                }}
              >
                <span className="text-[18px] font-medium leading-[25px] text-center text-black font-['Nunito_Sans']">
                  Join The Next Batch
                </span>
                <Image
                  src="/images/img_arrowrighto.svg"
                  alt="Arrow Right"
                  width={20}
                  height={20}
                  className="w-[20px] h-[20px]"
                />
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full mb-[78px] relative z-10">
            <Image
              src="/images/img_szkdohqgtpgwwgi.png"
              alt="Business Coaching Session"
              width={1200}
              height={472}
              className="w-full h-auto rounded-[16px] object-cover"
            />
          </div>
        </div>

        {/* Background Image */}
        <div className="w-full mt-[-130px]">
          <Image
            src="/images/img_background.png"
            alt="Background"
            width={1440}
            height={324}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection