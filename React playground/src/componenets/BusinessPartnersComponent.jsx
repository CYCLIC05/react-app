import React from 'react';

const BusinessPartnersComponent = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Partners Section */}
      <div className="w-full bg-white py-12 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left side - Partner text */}
            <div className="flex-shrink-0">
              <div className="border-l-4 border-blue-600 pl-4">
                <p className="text-gray-700 font-medium">
                  Proud partner at<br />
                  Hubspot & Segment
                </p>
              </div>
            </div>
            
            {/* Partner logos */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 flex-grow">
              <div className="flex items-center">
                <img src="/api/placeholder/100/40" alt="Slack" className="h-8 opacity-70" />
              </div>
              <div className="flex items-center">
                <img src="/api/placeholder/120/40" alt="Amazon" className="h-8 opacity-70" />
              </div>
              <div className="flex items-center">
                <img src="/api/placeholder/140/40" alt="WooCommerce" className="h-8 opacity-70" />
              </div>
              <div className="flex items-center">
                <img src="/api/placeholder/110/40" alt="MeUndies" className="h-8 opacity-70" />
              </div>
              <div className="flex items-center">
                <img src="/api/placeholder/90/40" alt="Teleport" className="h-8 opacity-70" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Purpose Section */}
      <div className="w-full bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Left Column */}
            <div>
              <div className="mb-4">
                <span className="text-purple-600 font-semibold text-sm uppercase tracking-wide">ACHIEVE MORE</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
                Purpose of a convoy is to keep your team
              </h2>
            </div>
            
            {/* Middle Column */}
            <div className="flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 rounded-full bg-purple-600 mr-4 flex-shrink-0"></div>
                <h3 className="text-xl font-bold">Built for impact</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We identify and nurture a truly diverse team of designers, developers and marketers
              </p>
            </div>
            
            {/* Right Column */}
            <div className="flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 rounded-full bg-red-500 mr-4 flex-shrink-0"></div>
                <h3 className="text-xl font-bold">In sync with you</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How We Help Section */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How can we help your business?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              When you resell besnik, you build trust and increase
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-16">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center">
                  <SearchIcon size={28} className="text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Find out what you need</h3>
              <p className="text-gray-600">
                We present you a proposal and discuss nitty-gritty like
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center">
                  <SettingsIcon size={28} className="text-gray-700" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Work out the details</h3>
              <p className="text-gray-600">
                Communication protocols apart from engagement models
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-yellow-50 rounded-full flex items-center justify-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center">
                  <RocketIcon size={28} className="text-red-500" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">We get to work fast</h3>
              <p className="text-gray-600">
                {/* Empty paragraph to match the spacing in the design */}
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-medium shadow-lg hover:bg-blue-700 transition duration-200">
              Become a Partner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Custom icon components instead of importing from lucide-react

// Search Icon Component
const SearchIcon = ({ size, className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );
};

// Settings Icon Component
const SettingsIcon = ({ size, className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
  );
};
const RocketIcon = ({ size, className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
    </svg>
  );
};

export default BusinessPartnersComponent;