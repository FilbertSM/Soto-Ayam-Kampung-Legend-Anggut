"use client";

// Since lenis has been updated to top-level lenis/react in newer versions
import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScrolling({ children }: { children: React.ReactNode }) {
  // Fix for the scrollbar jump: 'syncTouch' allows mobile synchronization.
  // The primary fix for desktop scrollbar jumping after wheeling is 
  // ensuring CSS `html, body { overscroll-behavior: none; }` which we've added to globals.css.
  
  return (
    <ReactLenis root options={{ 
      lerp: 0.1, 
      smoothWheel: true,
      syncTouch: true // Ensure touch/mobile smoothly syncs as well
    }}>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {children as any}
    </ReactLenis>
  );
}