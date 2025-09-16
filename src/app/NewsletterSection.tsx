'use client';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import EditText from '@/components/ui/EditText';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email.trim()) {
      alert('Thank you for subscribing to our newsletter!');
      setEmail('');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <section className="w-full bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-start items-center w-full">
          <div 
            className="flex flex-col gap-[38px] justify-center items-center w-full max-w-[1000px] h-auto bg-white rounded-[10px] py-[60px] px-6 sm:px-[56px]"
            style={{
              backgroundImage: 'url(/images/img__0x0.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Header */}
            <div className="flex flex-col gap-[6px] justify-start items-center w-full max-w-[800px]">
              <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-bold leading-[1.4] text-center text-black font-['Nunito_Sans'] w-auto">
                Stay Connected
              </h2>
              <p className="text-[18px] sm:text-[20px] md:text-[22px] font-normal leading-[1.6] text-center text-[#000000e5] font-['Nunito_Sans'] w-full">
                Join our free newsletter & community for updates, tips & exclusive events
              </p>
            </div>

            {/* Subscribe Text */}
            <p className="text-[18px] font-semibold leading-[1.1] text-center text-[#2d2d2d] font-['Epilogue'] w-auto">
              Subscribe to Newsletter
            </p>

            {/* Email Form */}
            <div className="flex flex-col sm:flex-row justify-center items-center w-full max-w-[800px] gap-4 sm:gap-0">
              <EditText
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white border-0 rounded-[8px] p-[18px] text-[14px] font-normal leading-[1.1] text-left text-[#8a8a8a] font-['Epilogue']"
              />
              <Button
                onClick={handleSubscribe}
                className="w-full sm:w-auto bg-black text-white px-[18px] py-[18px] rounded-[0px_8px_0px_8px] text-[16px] font-semibold leading-[1.1] text-right font-['Epilogue'] sm:ml-2"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;