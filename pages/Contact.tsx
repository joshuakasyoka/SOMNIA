import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-[#E5E5E5] text-[#000000] min-h-screen font-serif flex flex-col">
      
      {/* Hero Section with Blue Concentric Circles */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[2000ms] hover:scale-110"
          style={{ backgroundImage: "url('https://storage.googleapis.com/somnia/Rectangle%2044.png')" }}
        />
        <div className="relative z-10">
          <h1 className="text-white text-[40px] md:text-[62px] tracking-[0.2em] uppercase drop-shadow-sm">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Main Copy Section */}
      <section className="pt-24 md:pt-48 pb-32 px-6 md:px-[120px]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[28px] md:text-[54px] leading-[1.15] md:leading-[62px] tracking-tight">
            Dreaming up a collaboration? Seeking production support? Simply curious about our work? We would love to hear from you. Somnia is always open to new ideas, strange visions, and stories waiting to be told.

          </p>
        </div>
      </section>

      {/* Team Contact Section */}
      <section className="pb-48 px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center space-y-24">
          
          {/* Mika */}
          <div className="text-center group">
            <h3 className="text-[24px] md:text-[28px] tracking-[0.2em] uppercase mb-4">Mika Ōgai</h3>
            <div className="text-[16px] md:text-[18px] leading-relaxed opacity-90">
              <p className="italic mb-2">Co-Founder</p>
              <a href="mailto:mikaaogai@gmail.com" className="block hover:underline transition-all mb-1">mikaaogai@gmail.com</a>
              <p className="tracking-widest">+447763456726</p>
            </div>
          </div>

          {/* Jessie */}
          <div className="text-center group">
            <h3 className="text-[24px] md:text-[28px] tracking-[0.2em] uppercase mb-4">Jessie Irvin Rose</h3>
            <div className="text-[16px] md:text-[18px] leading-relaxed opacity-90">
              <p className="italic mb-2">Co-Founder</p>
              <a href="mailto:jessie@irvinrose.com" className="block hover:underline transition-all mb-1">jessie@irvinrose.com</a>
              <p className="tracking-widest">+447714948064</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;