import React from 'react';
import { Link } from 'react-router-dom';
import { FILMS } from '../constants';

const FilmIndex: React.FC = () => {
  return (
    <div className="pt-48 pb-32 min-h-screen bg-[#E5E5E5] px-6 md:px-[50px] text-[#000000]">
      
      {/* Title Section */}
      <div className="text-center mb-24">
        <h1 className="font-serif text-[40px] md:text-[50px] tracking-[0.15em] uppercase mb-6 leading-none">Film Index</h1>
 
      </div>

      {/* Grid Section - No horizontal space between tiles (gap-x-0), 50px between rows (gap-y-[50px]) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-0 gap-y-[50px] mb-32">
        {FILMS.map((film) => (
          <Link key={film.id} to={`/films/${film.id}`} className="group block no-underline text-[#000000]">
            {/* Film Tile - Specific 543:296 aspect ratio, reduced 10px white border on hover */}
            <div className="relative w-full aspect-[543/296] bg-gray-300 overflow-hidden mb-5 transition-all duration-500 ease-in-out border-0 group-hover:border-[10px] group-hover:border-white">
              <img 
                src={film.thumbnailUrl} 
                alt={film.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            
            {/* Film Metadata - text at 20px, 20px gap from image (mb-5 = 20px) */}
            <div className="text-center font-serif uppercase tracking-[0.15em] leading-tight">
              <h2 className="text-[20px] mb-1">
                {film.title}, {film.year}
              </h2>
              <p className="text-[20px] mb-1 opacity-90">
                (Dir. {film.director})
              </p>
              <p className="text-[20px] italic opacity-80">
                {film.status}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mb-48">
        <button className="font-serif text-[18px] uppercase tracking-[0.3em] border-b border-[#000000] pb-2 hover:opacity-60 transition-opacity">
          Load More
        </button>
      </div>
    </div>
  );
};

export default FilmIndex;