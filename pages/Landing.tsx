import React, { useRef, useEffect, useState } from 'react';
import Home from './Home';

const Landing: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const homeSectionRef = useRef<HTMLDivElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Updated to the stable direct link provided by the user
  const videoUrl = "https://storage.googleapis.com/somnia/SOMNIA_Website_Animation_01%20(1).mp4";

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // Cinematic slow motion
      videoRef.current.play().catch(e => console.log("Auto-play prevented", e));
    }
  }, []);

  const handleCanPlay = () => {
    setVideoLoaded(true);
    videoRef.current?.play().catch(() => {});
  };

  const scrollToHome = (e: React.MouseEvent) => {
    e.stopPropagation();
    homeSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full bg-black overflow-x-hidden">
      {/* Landing Fold */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background Video */}
        <video
          ref={videoRef}
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          onCanPlay={handleCanPlay}
          className={`absolute inset-0 w-full h-full object-cover z-0 scale-105 select-none pointer-events-none transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Loading Indicator for Video */}
        {!videoLoaded && (
          <div className="absolute inset-0 z-0 flex items-center justify-center bg-black">
            <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
          </div>
        )}

        {/* Main Content Overlay */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full w-full px-8">
          <div className="w-full flex justify-center transform hover:scale-[1.005] transition-transform duration-1000">
            <svg 
              width="948" 
              height="126" 
              viewBox="0 0 948 126" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-[85vw] md:max-w-5xl h-[125px] drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]"
            >
              <path d="M51.7024 52.6765C34.2906 48.2438 16.8787 46.2896 16.8787 28.7334C16.8787 19.6852 21.6773 8.34118 43.7048 8.34118C58.0926 8.34118 73.5548 16.1422 77.8123 45.94H86.3431V2.48646H78.5285L73.5548 11.8842C63.6074 1.95422 50.9942 0 43.8878 0C20.6109 0 1.95764 11.7015 1.95764 32.2764C1.95764 49.1256 9.23911 65.4425 48.5034 73.0687C60.5834 75.3725 78.8866 78.566 78.8866 95.5899C78.8866 103.748 74.9793 117.229 51.3523 117.229C22.9267 117.229 11.3798 92.2217 8.53882 74.308H0V125.563H8.53086L14.746 114.211C28.2505 122.901 35.7071 125.563 51.7024 125.563C59.7001 125.563 94.1658 123.608 94.1658 89.3857C94.1658 62.6065 71.6051 57.6415 51.7024 52.6765Z" fill="white"/>
              <path d="M205.608 0C168.119 0 148.582 35.2951 148.582 62.7813C148.582 90.2674 168.127 125.563 205.608 125.563C243.09 125.563 262.635 90.2674 262.635 62.7813C262.635 35.2951 243.09 0 205.608 0ZM205.608 117.229C187.838 117.229 170.968 101.087 170.968 62.7813C170.968 24.4754 187.846 8.33323 205.608 8.33323C223.37 8.33323 240.249 25.1824 240.249 62.7813C240.249 100.38 223.37 117.229 205.608 117.229Z" fill="white"/>
              <path d="M413.556 114.751H403.25V123.084H461.168V114.751H450.862C443.931 114.751 442.156 112.272 442.156 109.428V16.3169C442.156 13.3062 443.931 10.8197 450.862 10.8197H461.168V2.48645H415.864L386.547 89.7431H385.48L353.322 2.48645H310.151V10.8197H320.456C327.388 10.8197 329.162 13.3062 329.162 16.3169V99.3156C329.162 112.614 321.348 114.743 312.642 114.743H309.976V123.076H357.763V114.743H355.272C343.725 114.743 338.569 111.732 338.569 99.3156V14.3627H339.635L380.316 123.076H384.931L421.171 14.3627H422.238V109.42C422.238 112.256 420.463 114.743 413.532 114.743L413.556 114.751Z" fill="white"/>
              <path d="M646.834 2.48645H599.397V10.8197H609.702C616.633 10.8197 618.408 13.3062 618.408 16.3169V90.2754H617.166L548.41 2.48645H514.836V10.8197H525.141C532.073 10.8197 533.847 13.3062 533.847 16.3169V109.428C533.847 112.264 532.073 114.751 525.141 114.751H514.836V123.084H562.273V114.751H551.967C545.036 114.751 543.262 112.272 543.262 109.428V29.9726H544.328L618.949 125.563H627.83V16.3169C627.83 13.3062 629.605 10.8197 636.536 10.8197H646.841V2.48645H646.834Z" fill="white"/>
              <path d="M758.316 114.751H748.01C741.079 114.751 739.304 112.272 739.304 109.428V16.3169C739.304 13.3062 741.079 10.8197 748.01 10.8197H758.316V2.48645H700.398V10.8197H710.704C717.635 10.8197 719.41 13.3062 719.41 16.3169V109.428C719.41 112.264 717.635 114.751 710.704 114.751H700.398V123.084H758.316V114.751Z" fill="white"/>
              <path d="M926.681 100.738L883.334 0H873.387L830.39 101.27C826.308 111.025 819.376 114.751 810.846 114.751H808.713V123.084H858.991V114.751H854.017C845.311 114.751 841.579 109.428 841.579 103.931C841.579 101.627 842.287 99.6731 843.003 98.0764L847.977 85.4852H898.43L907.136 106.235C907.494 107.125 907.669 108.189 907.669 109.246C907.669 112.264 904.653 114.743 897.189 114.743H889.191V123.076H948V114.743C936.095 114.743 930.946 110.668 926.681 100.73V100.738ZM851.351 77.1519L872.137 26.4296H873.029L894.706 77.1519H851.359H851.351Z" fill="white"/>
            </svg>
          </div>
        </div>

        

        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(12px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fadeIn 1.8s ease-out forwards;
          }
          .animate-fade-in-delayed {
            opacity: 0;
            animation: fadeIn 1.8s ease-out 1.2s forwards;
          }
          svg path {
            shape-rendering: geometricPrecision;
          }
        `}</style>
      </section>

      {/* Integrated Home Content Section */}
      <div ref={homeSectionRef} className="relative z-10">
        <Home />
      </div>
    </div>
  );
};

export default Landing;