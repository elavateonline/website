'use client';
import Image from'next/image';

const TargetAudienceSection = () => {
  const audienceTypes = [
    {
      id: 1,
      image: '/images/img_profile_1hpsr.png',
      title: 'Women entrepreneurs & professionals'
    },
    {
      id: 2,
      image: '/images/img_profile_1hpsr_346x318.png',
      title: 'Housewives seeking financial independence'
    },
    {
      id: 3,
      image: '/images/img_profile_1hpsr_1.png',
      title: 'Early stage entrepreneurs'
    },
    {
      id: 4,
      image: '/images/img_profile_1hpsr_2.png',
      title: 'Men (indedicated adapted cohorts)'
    }
  ]

  return (
    <section className="w-full bg-[#1f2020] py-[80px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-end items-center w-full">
          {/* Header */}
          <div className="flex flex-row justify-center items-start w-full px-[56px] mt-[94px]">
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[1.4] text-left text-white font-['Nunito_Sans'] w-auto mb-[48px]">
              Who Is This For?
            </h2>
          </div>

          {/* Audience Cards */}
          <div className="flex flex-col lg:flex-row gap-[20px] w-full max-w-[1348px] px-[4px]">
            {audienceTypes.map((audience) => (
              <div
                key={audience.id}
                className="flex flex-col gap-[30px] justify-start items-center w-full lg:w-[318px] h-auto bg-[#333333] rounded-[16px]"
              >
                <Image
                  src={audience.image}
                  alt={audience.title}
                  width={318}
                  height={346}
                  className="w-full h-[346px] object-cover rounded-t-[16px]"
                />
                <p className="text-[20px] font-normal leading-[28px] text-center text-white font-['Nunito_Sans'] w-[66%] mb-[38px]">
                  {audience.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TargetAudienceSection