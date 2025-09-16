'use client';
import { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import EditText from '@/components/ui/EditText';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    city: '',
    businessCategory: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBookNow = () => {
    // Validate form data
    if (!formData.name || !formData.mobileNumber || !formData.city || !formData.businessCategory) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Handle form submission
    alert(`Thank you ${formData.name}! We will contact you soon on ${formData.mobileNumber}.`);
    
    // Reset form
    setFormData({
      name: '',
      mobileNumber: '',
      city: '',
      businessCategory: ''
    });
  };

  return (
    <main className="w-full min-h-screen" id="book-now-section" style={{ 
      backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'80\' height=\'80\' viewBox=\'0 0 80 80\'%3E%3Cpath d=\'M0 0h80v80H0z\' fill=\'%23f7f2e9\'/%3E%3Cpath d=\'M0 0L40 40L0 80M40 0L80 40L40 80\' stroke=\'%23f0e6d2\' stroke-width=\'0.5\' fill=\'none\'/%3E%3C/svg%3E")',
      backgroundColor: '#f7f2e9'
    }}>
      <div className="w-full max-w-[1000px] mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 lg:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black font-['Nunito_Sans'] text-left">
            Ready To Elevate
          </h1>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch">
            
            {/* Left Side - Program Details Card */}
            <div className="w-full lg:w-[45%]">
              <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 shadow-lg">
                {/* Card Header with Image */}
                <div className="mb-4">
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src="/images/Frame 2147225808.png"
                      alt="Business Handshake"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Card Title */}
                <h2 className="text-lg sm:text-xl font-bold text-black font-['Nunito_Sans'] mb-4 text-center">
                  Join Our Next Batch
                </h2>

                {/* Program Details */}
                <div className="space-y-2 text-xs sm:text-sm text-gray-600 font-['Nunito_Sans'] text-center">
                  <div>14-09-2025 | Sunday</div>
                  <div>8 Sundays | 3.5 Hrs each</div>
                  <div>Dubai | Hybrid / Remote</div>
                  
                  <div className="mt-4 pt-3 border-t border-gray-200">
                    <div className="text-xs sm:text-sm text-gray-500 font-medium">
                      25 limited seats available
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Registration Form */}
            <div className="w-full lg:w-[55%]">
              <div className="space-y-4">
                {/* Name Field */}
                <div>
                  <label className="block text-xs font-medium text-black font-['Nunito_Sans'] mb-1">
                    Name
                  </label>
                  <EditText
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm font-['Nunito_Sans'] placeholder-gray-400 focus:border-[#e8c534] focus:ring-1 focus:ring-[#e8c534] focus:outline-none transition-colors"
                  />
                </div>

                {/* Mobile Number Field */}
                <div>
                  <label className="block text-xs font-medium text-black font-['Nunito_Sans'] mb-1">
                    Mob.No
                  </label>
                  <EditText
                    value={formData.mobileNumber}
                    onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                    placeholder="Enter your mob.no"
                    type="tel"
                    className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm font-['Nunito_Sans'] placeholder-gray-400 focus:border-[#e8c534] focus:ring-1 focus:ring-[#e8c534] focus:outline-none transition-colors"
                  />
                </div>

                {/* City Field */}
                <div>
                  <label className="block text-xs font-medium text-black font-['Nunito_Sans'] mb-1">
                    City
                  </label>
                  <EditText
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    placeholder="Enter your city"
                    className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm font-['Nunito_Sans'] placeholder-gray-400 focus:border-[#e8c534] focus:ring-1 focus:ring-[#e8c534] focus:outline-none transition-colors"
                  />
                </div>

                {/* Business Category Field */}
                <div>
                  <label className="block text-xs font-medium text-black font-['Nunito_Sans'] mb-1">
                    Business category
                  </label>
                  <EditText
                    value={formData.businessCategory}
                    onChange={(e) => handleInputChange('businessCategory', e.target.value)}
                    placeholder="Enter your business category"
                    className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm font-['Nunito_Sans'] placeholder-gray-400 focus:border-[#e8c534] focus:ring-1 focus:ring-[#e8c534] focus:outline-none transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-3">
                  <Button
                    onClick={handleBookNow}
                    className="w-full px-6 py-3 rounded-lg text-base font-semibold text-black font-['Nunito_Sans'] transition-all duration-200 hover:shadow-md"
                    style={{
                      background: 'linear-gradient(135deg, #f6df79 0%, #e8c534 100%)',
                      border: 'none'
                    }}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactFormSection;