'use client';
import HeroSection from'./HeroSection';
import DifferentiatorSection from './DifferentiatorSection';
 import WhyJoinSection from'./WhyJoinSection';
 import ProgramsSection from'./ProgramsSection';
 import SuccessIndicatorsSection from'./SuccessIndicatorsSection';
 import TargetAudienceSection from'./TargetAudienceSection';
 import CommunitySection from'./CommunitySection';
 import BookingSection from'./BookingSection';
 import TestimonialSection from'./TestimonialSection';
import NewsletterSection from './NewsletterSection';
 import Footer from'@/components/common/Footer';
 import Contact from './ContactFormSection'

const ElevateBusinessCoachingPage = () => {
  return (
    <main className="w-full min-h-screen bg-white">
      <HeroSection />
      <DifferentiatorSection />
      <WhyJoinSection />
      <ProgramsSection />
      <SuccessIndicatorsSection />
      <Contact />
      <TargetAudienceSection />
      <CommunitySection />
      {/* <BookingSection /> */}
      {/* <TestimonialSection /> */}
      <NewsletterSection />
      <div className="w-full bg-[#12141d] py-[34px] px-[34px] mt-[-142px]">
        <Footer />
      </div>
    </main>
  )
}

export default ElevateBusinessCoachingPage