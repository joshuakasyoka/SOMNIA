import React from 'react';
import { TEAM } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="bg-[#E5E5E5] text-[#000000] overflow-hidden">
      
      {/* Intro Text Section - 380px gap from landing fold */}
      <section className="pt-[380px] pb-[380px] px-6 md:px-[120px]">
        <div className="max-w-none mx-auto text-center">
          <p className="font-serif text-[32px] md:text-[62px] leading-[1.1] md:leading-[65px] text-[#000000] tracking-tight">
          Somnia is a London-based production header working to champion collaborative practice and vision while uplifting emerging talent. 
          </p>
        </div>
      </section>

      {/* Team Section - Vertically stacked founders */}
      <section className="max-w-6xl mx-auto mb-[360px] px-6">
        <div className="text-center mb-[50px]">
            <h3 className="font-serif text-[20px] uppercase tracking-[0.3em] mb-0 text-[#000000]">Who We Are</h3>
        </div>

        <div className="flex flex-col space-y-[260px] items-center">
          {TEAM.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center w-full text-[#000000]">
              <h2 className="font-serif text-[40px] md:text-[62px] mb-12 tracking-tighter leading-none">{member.name}</h2>
              
              <div className="w-full max-w-full md:w-[525px] md:h-[525px] aspect-square bg-gray-300 mb-12 overflow-hidden relative border-[10px] border-white shadow-sm grayscale hover:grayscale-0 transition-all duration-1000">
                <img src={member.imageUrl} alt={member.name} className="object-cover w-full h-full scale-[1.02]" />
              </div>

              <p className="font-serif text-[20px] leading-[1.7] max-w-[642px] text-center text-[#000000] px-4">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="max-w-none mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-[360px] px-6 md:px-[120px] font-serif text-[24px] md:text-[40px] leading-[1.2] tracking-tight text-[#000000] text-center lg:text-left">
        <div className="w-full flex justify-center lg:justify-start">
          <p className="w-full max-w-[600px]">
            Somnia began in order to cultivate experience through opportunity, realising the ideas of emerging talent on a professional scale. We aim to connect people who we trust and admire at the outset of their careers, in order to facilitate these untold stories coming to life.
          </p>
        </div>
        <div className="w-full flex justify-center lg:justify-start">
          <p className="w-full max-w-[600px]">
            We care about stories that blur boundary lines between genres, feelings, and even mediums, creating an uncanny newness. We love projects where the familiar becomes strange, the intimate is prised open, and what is known lingers just beyond recognition.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="text-center pb-[520px] px-6 bg-[#E5E5E5]">
        <h4 className="font-serif text-[20px] uppercase tracking-[0.3em] mb-16 text-[#000000]">Our Services</h4>
        <h2 className="font-serif text-3xl md:text-6xl max-w-6xl mx-auto leading-[1.1] tracking-tighter text-[#000000]">
          Short Stories, Feature Pitches, Documentary, Theatre, Scripted & Unscripted, Networking Events & Commercials
        </h2>
      </section>

    </div>
  );
};

export default Home;