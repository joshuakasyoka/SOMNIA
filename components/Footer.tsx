import React from 'react';

const Footer: React.FC = () => {
  const BannerSVG = () => (
    <svg width="1636" height="217" viewBox="0 0 1636 217" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[120px] md:h-[180px] w-auto">
      <g clipPath="url(#clip0_148_215)">
        <g clipPath="url(#clip1_148_215)">
          <path d="M134.284 79.3809C126.923 27.8835 100.253 14.4017 75.423 14.4017C37.4094 14.4017 29.1282 34.0204 29.1282 49.6439C29.1282 79.9849 59.1765 83.3623 89.2249 91.023C123.558 99.6036 162.505 108.184 162.505 154.465C162.505 213.623 103.027 216.986 89.2249 216.986C61.6348 216.986 48.753 212.387 25.4477 197.368L14.722 216.986H0V128.407H14.722C19.6248 159.366 39.5517 202.585 88.6069 202.585C129.381 202.585 136.124 179.287 136.124 165.187C136.124 135.766 104.551 130.247 83.6904 126.265C15.9443 113.099 3.37838 84.8999 3.37838 55.7808C3.37838 20.2228 35.5691 0 75.7251 0C87.9889 0 109.756 3.37732 126.923 20.5385L135.506 4.29717H148.992V79.3946H134.27L134.284 79.3809Z" fill="#000" fillOpacity="0.1"/>
          <path d="M453.238 108.5C453.238 156.002 419.509 217 354.825 217C290.142 217 256.413 156.002 256.413 108.5C256.413 60.9978 290.128 0 354.825 0C419.523 0 453.238 60.9978 453.238 108.5ZM414.606 108.5C414.606 43.5208 385.478 14.4017 354.825 14.4017C324.173 14.4017 295.045 43.5208 295.045 108.5C295.045 173.479 324.173 202.598 354.825 202.598C385.478 202.598 414.606 174.701 414.606 108.5Z" fill="#000" fillOpacity="0.1"/>
          <path d="M665.238 155.082H667.079L717.672 4.29712H795.855V18.6988H778.071C766.109 18.6988 763.046 22.996 763.046 28.1992V189.116C763.046 194.018 766.109 198.315 778.071 198.315H795.855V212.716H695.905V198.315H713.689C725.651 198.315 728.713 194.031 728.713 189.116V24.8219H726.873L664.332 212.703H656.367L586.162 24.8219H584.322V171.639C584.322 193.098 593.207 198.301 613.148 198.301H617.447V212.703H534.979V198.301H539.579C554.603 198.301 568.089 194.622 568.089 171.639V28.1992C568.089 22.996 565.027 18.6988 553.065 18.6988H535.281V4.29712H609.783L665.28 155.096L665.238 155.082Z" fill="#000" fillOpacity="0.1"/>
          <path d="M1067.21 28.199C1067.21 22.9957 1064.15 18.6986 1052.19 18.6986H1034.4V4.29688H1116.27V18.6986H1098.48C1086.52 18.6986 1083.46 22.9957 1083.46 28.199V217H1068.13L939.353 51.7991H937.513V189.116C937.513 194.017 940.576 198.315 952.537 198.315H970.322V212.716H888.458V198.315H906.243C918.204 198.315 921.267 194.031 921.267 189.116V28.199C921.267 22.9957 918.204 18.6986 906.243 18.6986H888.458V4.29688H946.399L1065.05 156.016H1067.2V28.199H1067.21Z" fill="#000" fillOpacity="0.1"/>
          <path d="M1208.7 198.301H1226.49C1238.45 198.301 1241.51 194.018 1241.51 189.103V28.1992C1241.51 22.996 1238.45 18.6988 1226.49 18.6988H1208.7V4.29712H1308.65V18.6988H1290.87C1278.91 18.6988 1275.85 22.996 1275.85 28.1992V189.116C1275.85 194.018 1278.91 198.315 1290.87 198.315H1308.65V212.716H1208.7V198.315V198.301Z" fill="#000" fillOpacity="0.1"/>
          <path d="M1395.63 198.301H1399.31C1414.03 198.301 1425.98 191.862 1433.04 175.003L1507.24 0H1524.4L1599.21 174.097C1606.57 191.258 1615.46 198.315 1636 198.315V212.717H1534.51V198.315H1548.31C1561.2 198.315 1566.4 194.031 1566.4 188.814C1566.4 186.975 1566.1 185.135 1565.48 183.611L1550.46 147.751H1463.39L1454.8 169.512C1453.58 172.271 1452.35 175.635 1452.35 179.63C1452.35 189.13 1458.79 198.329 1473.81 198.329H1482.39V212.73H1395.63V198.329V198.301ZM1544.03 133.322L1506.62 45.6625H1505.08L1469.21 133.322H1544.01H1544.03Z" fill="#000" fillOpacity="0.1"/>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_148_215">
          <rect width="1636" height="217" fill="white"/>
        </clipPath>
        <clipPath id="clip1_148_215">
          <rect width="1636" height="217" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );

  return (
    <footer className="w-full bg-[#E5E5E5] text-[#000000] pt-24">
      {/* Static Footer Section */}
      <div className="px-6 md:px-[50px] pb-[50px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full uppercase font-serif text-[16px] md:text-[18px] tracking-[0.1em] text-left">
          {/* Left Column: Copyright & Links */}
          <div className="flex flex-col space-y-2 mb-10 md:mb-0 text-left">
            <span>© SOMNIA UK</span>
            <a href="https://www.instagram.com/somnia.productionsuk/" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4 transition-all">Instagram</a>
            <a href="https://vimeo.com/user209373507" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4 transition-all">Vimeo</a>
          </div>

          {/* Right Column: Community Sign-Up */}
          <div className="flex flex-col w-full md:w-[450px] space-y-8 items-start">
            <span className="self-start text-left">Community Sign-Up</span>
            <div className="relative w-full border-b border-[#000000] flex items-center justify-between pb-1">
              <input 
                type="email" 
                placeholder="EMAIL" 
                className="bg-transparent w-full outline-none placeholder-[#000000] py-1 font-serif uppercase text-left"
              />
              <button className="ml-2 hover:translate-x-1 transition-transform">
                <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 6H22M22 6L17 1M22 6L17 11" stroke="#000000" strokeWidth="1"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Banner SVG Marquee */}
      <div className="w-full overflow-hidden pb-48">
        <div className="flex whitespace-nowrap animate-marquee w-max">
          {/* Render set of items twice for seamless loop */}
          <div className="flex flex-shrink-0">
            {[1, 2, 3, 4].map((i) => (
              <div key={`set1-${i}`} className="px-8">
                <BannerSVG />
              </div>
            ))}
          </div>
          <div className="flex flex-shrink-0">
            {[1, 2, 3, 4].map((i) => (
              <div key={`set2-${i}`} className="px-8">
                <BannerSVG />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;