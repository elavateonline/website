'use client';
import { useState } from 'react';
 import Image from'next/image';

interface ProgramItem {
  id: string
  title: string
  icon: string
  isExpanded: boolean
}

const ProgramsSection = () => {
  const [programs, setPrograms] = useState<ProgramItem[]>([
    {
      id: '1',
      title: 'Empower Your Mindset & Life Purpose',
      icon: '/images/img_lightning_355698.png',
      isExpanded: true
    },
    {
      id: '2',
      title: 'Learn to Identify Opportunities',
      icon: '/images/img_idea_1949126_1.png',
      isExpanded: false
    },
    {
      id: '3',
      title: 'Establish Your Brand & Authentic Self',
      icon: '/images/img_medal_4425818_1.png',
      isExpanded: false
    },
    {
      id: '4',
      title: 'Value-Driven Business & Balanced Life',
      icon: '/images/img_premium_quality_12275135.png',
      isExpanded: false
    },
    {
      id: '5',
      title: 'Acquire Customers with Confidence',
      icon: '/images/img_star_2515019_1.png',
      isExpanded: false
    },
    {
      id: '6',
      title: 'Thrive with Teams, Operations & Relationships',
      icon: '/images/img_eco_badge_18753157.png',
      isExpanded: false
    },
    {
      id: '7',
      title: 'Elevate with Funding & Resilience',
      icon: '/images/img_trap_4262384_1.png',
      isExpanded: false
    },
    {
      id: '8',
      title: 'Elevation Day: Pitch, Graduate, Celebrate',
      icon: '',
      isExpanded: false
    }
  ])

  const toggleProgram = (id: string) => {
    setPrograms(programs.map(program => 
      program.id === id 
        ? { ...program, isExpanded: !program.isExpanded }
        : { ...program, isExpanded: false }
    ))
  }

  const renderTitle = (title: string) => {
    if (title === 'Learn to Identify Opportunities') {
      return (
        <>
          <span className="text-[20px] font-extrabold leading-[24px] text-left text-[#caae65] font-['Nunito_Sans']">L</span>
          <span className="text-[20px] font-normal leading-[24px] text-left text-white font-['Nunito_Sans']">earn to Identify Opportunities</span>
        </>
      )
    }
    if (title === 'Establish Your Brand & Authentic Self') {
      return (
        <>
          <span className="text-[20px] font-bold leading-[24px] text-left text-[#caae65] font-['Nunito_Sans']">E</span>
          <span className="text-[20px] font-normal leading-[24px] text-left text-white font-['Nunito_Sans']">stablish Your Brand & Authentic Self</span>
        </>
      )
    }
    if (title === 'Value-Driven Business & Balanced Life') {
      return (
        <>
          <span className="text-[20px] font-bold leading-[24px] text-left text-[#caae65] font-['Nunito_Sans']">V</span>
          <span className="text-[20px] font-normal leading-[24px] text-left text-white font-['Nunito_Sans']">alue-Driven Business & Balanced Life</span>
        </>
      )
    }
    if (title === 'Acquire Customers with Confidence') {
      return (
        <>
          <span className="text-[20px] font-bold leading-[24px] text-left text-[#caae65] font-['Nunito_Sans']">A</span>
          <span className="text-[20px] font-normal leading-[24px] text-left text-white font-['Nunito_Sans']">cquire Customers with Confidence</span>
        </>
      )
    }
    if (title === 'Thrive with Teams, Operations & Relationships') {
      return (
        <>
          <span className="text-[20px] font-bold leading-[24px] text-left text-[#caae65] font-['Nunito_Sans']">T</span>
          <span className="text-[20px] font-normal leading-[24px] text-left text-white font-['Nunito_Sans']">hrive with Teams, Operations & Relationships</span>
        </>
      )
    }
    if (title === 'Elevate with Funding & Resilience') {
      return (
        <>
          <span className="text-[20px] font-bold leading-[24px] text-left text-[#caae65] font-['Nunito_Sans']">E</span>
          <span className="text-[20px] font-semibold leading-[24px] text-left text-white font-['Nunito_Sans']">levate with Funding & Resilience</span>
        </>
      )
    }
    if (title === 'Elevation Day: Pitch, Graduate, Celebrate') {
      return (
        <span className="text-[20px] font-semibold leading-[28px] text-left text-[#caae65] font-['Nunito_Sans']">
          {title}
        </span>
      )
    }
    return (
      <span className="text-[20px] font-normal leading-[28px] text-left text-white font-['Nunito_Sans']">
        {title}
      </span>
    )
  }

  return (
    <section className="w-full bg-[#1f2020] py-[88px] px-[50px]" id="programmes-section">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-start items-start w-full gap-8 lg:gap-0">
          {/* Left Content */}
          <div className="w-full lg:w-[50%] flex flex-col gap-[14px] justify-start items-start mt-[8px]">
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-normal leading-[1.4] text-left text-[#fafafa] font-['Nunito_Sans'] w-auto">
              Programs We offer
            </h2>
            <p className="text-[20px] font-normal leading-[1.5] text-left text-[#cccccc] font-['Nunito_Sans'] w-[80%]">
              Each session blends interactive workshops, healing circles, inspiring guest speakers, and practical takeaways to elevate both your business and your wellbeing.
            </p>
          </div>

          {/* Right Content - Program List */}
          <div className="w-full lg:w-[50%] flex flex-col gap-[24px] self-center">
            {programs.map((program) => (
              <div
                key={program.id}
                className={`flex flex-row justify-start items-center w-full p-[26px] px-[30px] bg-[#0f0f0f] border border-solid border-[#ffffff11] rounded-[16px] cursor-pointer hover:bg-[#1a1a1a] transition-colors ${
                  program.id === '8' ? 'py-[24px]' : ''
                }`}
                onClick={() => toggleProgram(program.id)}
              >
                {program.icon && (
                  <Image
                    src={program.icon}
                    alt="Program Icon"
                    width={26}
                    height={26}
                    className="w-[26px] h-[26px]"
                  />
                )}
                <div className={`${program.icon ? 'ml-[16px] lg:ml-[24px]' : ''} self-end`}>
                  {renderTitle(program.title)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProgramsSection