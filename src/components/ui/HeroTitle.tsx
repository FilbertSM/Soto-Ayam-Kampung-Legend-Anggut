import { Playfair_Display, Montserrat, Great_Vibes } from "next/font/google";

// Next.js Font Optimization
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300"] });
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });

export default function HeroTitle() {
  return (
    // 'pointer-events-none' ensures users can still interact with background canvas/scroll
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
      
      {/* BACKGROUND SCRIM: Dark at top, fading to transparent */}
      <div className="absolute top-0 left-0 w-full h-[80vh] bg-gradient-to-b from-black/100 via-black/60 to-transparent z-0" />

      {/* TITLE WRAPPER: Elevated Z-index, subtle drop shadow for readability */}
      <div className="relative z-10 flex flex-col items-stretch max-w-min mx-auto drop-shadow-xl mt-[-10vh]">
        
        {/* SOTO AYAM - Using flex-between to perfectly match KAMPUNG width */}
        <div 
          className={`${montserrat.className} text-white uppercase text-[2.5rem] md:text-[5rem] lg:text-[7.5rem] font-light leading-none mb-2 md:mb-4 lg:mb-6 w-full flex justify-between`}
        >
          <span>S</span>
          <span>O</span>
          <span>T</span>
          <span>O</span>
          <span>&nbsp;</span>
          <span>A</span>
          <span>Y</span>
          <span>A</span>
          <span>M</span>
        </div>

        {/* KAMPUNG & Legend Block */}
        <div className="relative inline-block text-center flex flex-col items-center">
          
          <h1 
            className={`${playfair.className} text-white uppercase text-[5rem] md:text-[10rem] lg:text-[14rem] font-bold leading-none tracking-tight`}
          >
            Kampung
          </h1>

          {/* Legend */}
          <span 
            className={`${greatVibes.className} absolute -bottom-10 -right-8 md:-bottom-20 md:-right-16 lg:-bottom-32 lg:-right-32 text-[#D4AF37] text-5xl md:text-[8rem] lg:text-[12rem] drop-shadow-lg -rotate-2 select-none`}
          >
            Legend
          </span>

        </div>
      </div>
      
    </div>
  );
}