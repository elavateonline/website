'use client';
import Image from'next/image';
 import Button from'@/components/ui/Button';

const CommunitySection = () => {
  const communityFeatures = [
    {
      id: 1,
      icon: '/images/img_designer_4_1.png',
      title: 'Monthly mini workshops',
      iconSize: { width: 80, height: 80 }
    },
    {
      id: 2,
      icon: '/images/img_designer_4_2.png',
      title: 'Business-Wellness Retreats',
      iconSize: { width: 72, height: 76 }
    },
    {
      id: 3,
      icon: '/images/img_designer_4_1_66x68.png',
      title: 'Alumni WhatsApp & Telegram Groups',
      iconSize: { width: 68, height: 66 }
    },
    {
      id: 4,
      icon: '/images/img_designer_4_2_66x64.png',
      title: 'Investor Meetups',
      iconSize: { width: 64, height: 66 }
    }
  ]

  const handleJoinUs = () => {
    // Scroll to booking section
    const bookingSection = document.getElementById('booking-section')
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="community-section"
      className="w-full bg-[#ffd198] py-[32px] px-[32px]"
      style={{
        // backgroundImage: 'url(/images/img_.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col justify-start items-center w-full">
          <div className="flex flex-col gap-[38px] justify-start items-center w-full max-w-[1348px] mb-[24px]">
            {/* Header */}
            <div className="flex flex-col gap-[54px] justify-start items-center w-full max-w-[1348px]">
              <div className="flex flex-col gap-[4px] justify-start items-center w-auto mt-[36px]">
                <h2 className="text-[32px] sm:text-[40px] md:text-[46px] font-bold leading-[1.4] text-center text-[#101014] font-['Nunito_Sans'] w-auto">
                  Join Our Community
                </h2>
                <p className="text-[18px] font-medium leading-[1.4] text-center text-[#101014] font-['Nunito_Sans'] w-auto">
                  Be part of an exclusive Entrepreneurship & Wellness Network
                </p>
              </div>

              {/* Community Features */}
              <div className="flex flex-col lg:flex-row gap-[18px] w-full">
                {communityFeatures.map((feature) => (
                  <div
                    key={feature.id}
                    className="flex flex-col gap-[20px] justify-start items-center w-full lg:w-[320px] h-auto bg-[#fffce7] rounded-[16px] p-[44px] px-[36px]"
                  >
                    <div className="flex flex-col justify-start items-center w-auto h-auto bg-[#f5e67a] border border-solid border-[#ff900566] rounded-[60px] p-[20px]">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={feature.iconSize.width}
                        height={feature.iconSize.height}
                        className={`w-[${feature.iconSize.width}px] h-[${feature.iconSize.height}px]`}
                      />
                    </div>
                    <div className="flex flex-row justify-start items-center w-full px-[6px] mb-[6px]">
                      <h3 className="text-[22px] font-bold leading-[1.4] text-center text-[#101014] font-['Nunito_Sans'] w-full">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Join Button */}
            <Button
              onClick={handleJoinUs}
              className="w-auto px-[34px] py-[18px] bg-white rounded-[16px] shadow-[-1px_1px_3px_#0000003f]"
            >
              <span className="text-[24px] font-medium leading-[1.4] text-center text-black font-['Nunito_Sans']">
                Join Us
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CommunitySection