"use client";

import { motion } from "framer-motion";

interface LoaderProps {
  progress: number;
}

export default function Loader({ progress }: LoaderProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#1A0F0A] text-[#FDFBF7]"
      initial={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="flex flex-col items-center gap-12">
        <motion.h1 
          className="font-serif text-5xl md:text-7xl tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Soto Anggut
        </motion.h1>
        
        <div className="flex flex-col items-center gap-4 w-64">
          <div className="flex justify-between w-full font-sans text-sm font-light tracking-widest text-[#FDFBF7]/60">
            <span>LOADING</span>
            <span>{progress}%</span>
          </div>
          <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-[#D49A00]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.1 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
