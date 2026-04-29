"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import CanvasSequence from "@/components/CanvasSequence";
import StoryBlocks from "@/components/StoryBlocks";
import FloatWhatsApp from "@/components/ui/FloatWhatsApp";
import Loader from "@/components/ui/Loader";
import FilmGrain from "@/components/ui/FilmGrain";
import { FRAME_COUNT } from "@/lib/constants";

export default function Home() {
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const preloadImages = useCallback(async () => {
    let loadedCount = 0;
    const INITIAL_FRAMES = 24; // Load first 10% (24 frames) for fast initial load

    const basePath = process.env.NODE_ENV === 'production' ? '/Soto-Ayam-Kampung-Legend-Anggut' : '';

    // Preload Critical Path
    const initialPromises = Array.from({ length: INITIAL_FRAMES }, (_, i) => {
      return new Promise<{img: HTMLImageElement, success: boolean}>((resolve) => {
        const img = new Image();
        img.src = `${basePath}/Frame/frame-${(i + 1).toString().padStart(3, '0')}.webp`;
        
        const handleComplete = (success: boolean) => {
          loadedCount++;
          setProgress(Math.round((loadedCount / INITIAL_FRAMES) * 100));
          resolve({ img, success });
        };

        img.onload = () => handleComplete(true);
        img.onerror = () => handleComplete(false);
      });
    });

    const initialResults = await Promise.all(initialPromises);
    
    // Process results to maintain order and fallback
    const loadedImages: HTMLImageElement[] = [];
    initialResults.forEach(({ img, success }) => {
      if (success) {
        loadedImages.push(img);
      } else if (loadedImages.length > 0) {
        loadedImages.push(loadedImages[loadedImages.length - 1]);
      } else {
        loadedImages.push(img);
      }
    });

    setImages([...loadedImages]);

    // Slight delay to show 100% before animating out
    setTimeout(() => {
      setIsLoaded(true);

      // Lazy load remaining frames in background
      const lazyLoadRest = async () => {
        const remainingImages = [...loadedImages];
        
        // Load in batches to prevent totally blocking network, but concurrently enough to be fast
        const BATCH_SIZE = 12;
        for (let i = INITIAL_FRAMES + 1; i <= FRAME_COUNT; i += BATCH_SIZE) {
          const batchPromises = [];
          for (let j = 0; j < BATCH_SIZE && i + j <= FRAME_COUNT; j++) {
            const frameIndex = i + j;
            batchPromises.push(new Promise<{img: HTMLImageElement, success: boolean}>((resolve) => {
              const img = new Image();
              img.src = `${basePath}/Frame/frame-${frameIndex.toString().padStart(3, '0')}.webp`;
              img.onload = () => resolve({ img, success: true });
              img.onerror = () => resolve({ img, success: false });
            }));
          }
          
          const batchResults = await Promise.all(batchPromises);
          
          batchResults.forEach(({ img, success }) => {
            if (success) {
              remainingImages.push(img);
            } else if (remainingImages.length > 0) {
              remainingImages.push(remainingImages[remainingImages.length - 1]);
            } else {
              remainingImages.push(img);
            }
          });
          
          // Update state after each batch
          setImages([...remainingImages]);
        }
      };

      // Start background hydration without blocking main thread heavily
      requestIdleCallback ? requestIdleCallback(() => lazyLoadRest()) : setTimeout(lazyLoadRest, 500);

    }, 600);
  }, []);

  useEffect(() => {
    preloadImages();
  }, [preloadImages]);

  // Lock scroll while loading
  useEffect(() => {
    if (!isLoaded) {
      document.body.style.overflow = "hidden";
      // ensure we are at the top when reloading
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "";
    }
  }, [isLoaded]);

  return (
    <main className="relative bg-transparent">
      <FilmGrain />
      <AnimatePresence>
        {!isLoaded && <Loader progress={progress} />}
      </AnimatePresence>

      {/* 
        Pass loaded images to CanvasSequence so it doesn't need to load them again
      */}
      <CanvasSequence images={images} />

      {/* 
        Pass isLoaded to StoryBlocks so initial animations only trigger after loading
      */}
      <StoryBlocks isLoaded={isLoaded} />

      {/* Persistent floating FAB */}
      <FloatWhatsApp />
    </main>
  );
}
