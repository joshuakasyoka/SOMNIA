import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { FILMS } from '../constants';

const FilmExample: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const film = FILMS.find(f => f.id === id);

  if (!film) {
    return <Navigate to="/films" />;
  }

  // Placeholder starring list as seen in the mockup
  const starring = ["Noa Wilde", "Elena Cruz", "Zoe Han", "Eleanor Jackson"];

  return (
    <div className="bg-[#E5E5E5] text-[#000000] min-h-screen">
      
      {/* Immersive Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src={film.thumbnailUrl} 
            alt={film.title} 
            className="w-full h-full object-cover opacity-60 scale-105"
          />
        </div>

        <div className="relative z-10 px-6">
          <h1 className="font-serif text-[40px] md:text-[50px] text-white uppercase tracking-[0.2em] mb-4 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] max-w-[1024px] mx-auto">
            {film.title}
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4 text-white/80 font-serif text-[18px] uppercase tracking-[0.15em]">
            <span>{film.year}</span>
            <span className="hidden md:inline">•</span>
            <span>Dir. {film.director}</span>
          </div>
        </div>
      </section>

      {/* Summary Section - Heading at 20px, Text at 62px */}
      <section className="pt-32 pb-48 px-6 md:px-[120px]">
        <div className="max-w-none mx-auto text-center">
          <h3 className="font-serif text-[20px] uppercase tracking-[0.3em] mb-16 text-[#000000]">Summary</h3>
          <p className="font-serif text-[32px] md:text-[62px] leading-[1.1] md:leading-[65px] text-[#000000] tracking-tight">
            {film.synopsis || "Details for this production are currently under development. Somnia community members collaborate to bring these stories to life through horizontal networking and fresh perspectives."}
          </p>
        </div>
      </section>

      {/* Credits Section - Precise Match to Mockup */}
      <section className="pb-64 px-6 md:px-[50px]">
        <div className="max-w-none mx-auto">
          <h3 className="font-serif text-[18px] uppercase tracking-[0.3em] mb-10 opacity-60">CREDITS</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16">
            
            {/* Left Column */}
            <div className="flex flex-col border-t border-black/40">
              
              {/* Mika Ogai Row */}
              <div className="border-b border-black/40 py-8 md:py-12 flex flex-col md:flex-row justify-between items-start gap-4 min-h-[209px]">
                <h2 className="font-serif text-[48px] md:text-[62px] leading-[0.9] w-full md:w-3/5">
                  {film.id === 'ways-that-i-have-died' ? 'Jessie Irvin Rose' : 'Mika Ogai'}
                </h2>
                <div className="font-serif text-[16px] md:text-[18px] uppercase tracking-[0.05em] leading-[1.4] text-left w-full md:w-2/5">
                  {film.id === 'ways-that-i-have-died'
                    ? <>DIRECTOR<br/>WRITER<br/>EDITOR<br/></>
                    : <>DIRECTOR<br/>WRITER<br/>EDITOR<br/></>}
                </div>
              </div>

              {/* Jordan Lochart Hourigan Row (Glossary only) */}
              {film.id === 'glossary-of-an-empty-orchestra' && (
                <div className="border-b border-black/40 py-8 md:py-12 flex flex-col md:flex-row justify-between items-start gap-4 min-h-[209px]">
                  <h2 className="font-serif text-[48px] md:text-[62px] leading-[0.9] w-full md:w-3/5">Jordan Lochart Hourigan</h2>
                  <div className="font-serif text-[16px] md:text-[18px] uppercase tracking-[0.05em] leading-[1.4] text-left w-full md:w-2/5">
                    CINEMATOGRAPHER
                  </div>
                </div>
              )}
              {/* Laurie Rose Row (Ways That I Have Died only) */}
              {film.id === 'ways-that-i-have-died' && (
                <div className="border-b border-black/40 py-8 md:py-12 flex flex-col md:flex-row justify-between items-start gap-4 min-h-[209px]">
                  <h2 className="font-serif text-[48px] md:text-[62px] leading-[0.9] w-full md:w-3/5">Laurie Rose</h2>
                  <div className="font-serif text-[16px] md:text-[18px] uppercase tracking-[0.05em] leading-[1.4] text-left w-full md:w-2/5">
                    CINEMATOGRAPHER
                  </div>
                </div>
              )}

              {/* Collaborators Row */}
              
            </div>

            {/* Right Column (Stacks below Left on mobile) */}
            <div className="flex flex-col lg:mt-0 border-t lg:border-t border-black/40">
                          {/* Jessie Irvin Rose Row */}
                          <div className="border-b border-black/40 py-8 md:py-12 flex flex-col md:flex-row justify-between items-start gap-4 min-h-[209px]">
                <h2 className="font-serif text-[48px] md:text-[62px] leading-[0.9] w-full md:w-3/5">
                  {film.id === 'ways-that-i-have-died' ? 'Mika Ogai' : 'Jessie Irvin Rose'}
                </h2>
                <div className="font-serif text-[16px] md:text-[18px] uppercase tracking-[0.05em] leading-[1.4] text-left w-full md:w-2/5">
                  {film.id === 'ways-that-i-have-died'
                    ? <>PRODUCER<br/></>
                    : <>PRODUCER<br/></>}
                </div>
              </div>
              
              {/* Starring Row */}
              

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default FilmExample;