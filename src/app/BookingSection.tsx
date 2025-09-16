'use client';
import { useState } from 'react';
 import Image from'next/image';
 import Button from'@/components/ui/Button';
 import EditText from'@/components/ui/EditText';

const BookingSection = () => {
  const [formData, setFormData] = useState({
    nextBatch: 'Sunday, Sept 14, 2025',
    duration: '8 Sundays, 3.5 hrs each',
    venue: 'Dubai (Hybrid – in-person & online)',
    seats: '25'
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleJoinBatch = () => {
    // Handle form submission
    alert('Thank you for your interest! We will contact you soon.')
  }

  return (
    <section id="booking-section" className="w-full bg-[#1f2020] py-[50px] px-[50px]">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col justify-start items-center w-full mb-[52px] ml-[24px] mr-[14px]">
          {/* Header */}
          <div className="flex flex-row justify-center items-start w-[92%]">
            <div className="flex flex-row justify-start items-center w-full mb-[18px]">
              <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[1.4] text-center text-white font-['Nunito_Sans'] self-end w-auto">
                Book Your session
              </h2>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col lg:flex-row justify-between items-center w-[92%] mb-[22px] gap-8 lg:gap-0">
            {/* Left Form */}
            <div className="flex flex-col gap-[38px] justify-start items-center w-full lg:w-[46%]">
              <div className="flex flex-col gap-[12px] justify-start items-center w-full mr-[6px]">
                <div className="flex flex-col gap-[10px] justify-start items-start w-full">
                  {/* Next Batch */}
                  <div className="flex flex-col gap-[10px] justify-start items-start w-full">
                    <label className="text-[16px] font-normal leading-[22px] text-left text-white font-['Nunito_Sans'] w-auto">
                      Next Batch
                    </label>
                    <EditText
                      value={formData.nextBatch}
                      onChange={(e) => handleInputChange('nextBatch', e.target.value)}
                      className="w-full bg-[#1e1e1e] border-t-2 border-t-solid border-t-[#262626] rounded-[12px] p-[12px] text-[16px] font-normal leading-[22px] text-left text-[#ffffff66] font-['Nunito_Sans']"
                    />
                  </div>

                  {/* Duration */}
                  <div className="flex flex-col gap-[10px] justify-start items-start w-full">
                    <label className="text-[16px] font-normal leading-[22px] text-left text-white font-['Nunito_Sans'] w-auto">
                      Duration
                    </label>
                    <EditText
                      value={formData.duration}
                      onChange={(e) => handleInputChange('duration', e.target.value)}
                      className="w-full bg-[#1e1e1e] border-t-2 border-t-solid border-t-[#262626] rounded-[12px] p-[12px] text-[16px] font-normal leading-[22px] text-left text-[#ffffff66] font-['Nunito_Sans']"
                    />
                  </div>

                  {/* Venue */}
                  <div className="flex flex-col gap-[10px] justify-start items-start w-full">
                    <label className="text-[16px] font-normal leading-[22px] text-left text-white font-['Nunito_Sans'] w-auto">
                      Venue
                    </label>
                    <EditText
                      value={formData.venue}
                      onChange={(e) => handleInputChange('venue', e.target.value)}
                      className="w-full bg-[#1e1e1e] border-t-2 border-t-solid border-t-[#262626] rounded-[12px] p-[12px] text-[16px] font-normal leading-[22px] text-left text-[#ffffff66] font-['Nunito_Sans']"
                    />
                  </div>

                  {/* Seats Available */}
                  <div className="flex flex-col gap-[10px] justify-start items-start w-full">
                    <label className="text-[16px] font-normal leading-[22px] text-left text-white font-['Nunito_Sans'] w-auto">
                      No of seats available
                    </label>
                    <EditText
                      value={formData.seats}
                      onChange={(e) => handleInputChange('seats', e.target.value)}
                      className="w-full bg-[#1e1e1e] border-t-2 border-t-solid border-t-[#262626] rounded-[12px] p-[12px] text-[16px] font-normal leading-[22px] text-left text-[#ffffff66] font-['Nunito_Sans']"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  onClick={handleJoinBatch}
                  className="w-full px-[34px] py-[18px] bg-[#e8c15d] rounded-[16px] shadow-[-1px_1px_3px_#0000003f] mr-[6px]"
                  style={{
                    background: 'linear-gradient(180deg, #f6df79 0%, #e8c534 50%, #e1b810 100%)',
                    border: '1px solid transparent',
                    borderImage: 'linear-gradient(180deg, #f6df79 0%, #e8c534 50%, #e1b810 100%)'
                  }}
                >
                  <span className="text-[24px] font-medium leading-[1.4] text-center text-black font-['Nunito_Sans']">
                    Join The Next Batch
                  </span>
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-[48%]">
              <Image
                src="/images/img_frame_1261153042.png"
                alt="Booking Session"
                width={538}
                height={474}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookingSection