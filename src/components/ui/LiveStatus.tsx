"use client";

import { useEffect, useState } from "react";

export default function LiveStatus() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();

      if ((day === 6 || day === 0) && hour >= 7 && hour < 15) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-3 mt-4 bg-[#1A0F0A] w-fit px-5 py-3 rounded-full shadow-lg border border-white/5">
      {isOpen ? (
        <>
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D49A00] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D49A00]"></span>
          </div>
          <span className="text-sm font-sans font-medium text-[#FDFBF7] tracking-widest uppercase">WE ARE OPEN</span>
        </>
      ) : (
        <>
          <div className="relative flex h-3 w-3">
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500/80"></span>
          </div>
          <span className="text-sm font-sans font-medium text-[#FDFBF7] tracking-wider uppercase">WE ARE CLOSED <span className="text-[#FDFBF7]/50 lowercase italic ml-1">visit us this weekend</span></span>
        </>
      )}
    </div>
  );
}
