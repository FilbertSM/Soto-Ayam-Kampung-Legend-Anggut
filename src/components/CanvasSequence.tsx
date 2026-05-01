"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { FRAME_COUNT } from "@/lib/constants";

interface CanvasSequenceProps {
  images: HTMLImageElement[];
}

export default function CanvasSequence({ images }: CanvasSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll();

  // Function to render a specific frame
  const renderFrame = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, img: HTMLImageElement) => {
    const rect = canvas.getBoundingClientRect();

    const canvasAspect = rect.width / rect.height;
    const imgAspect = img.width / img.height;

    let drawWidth = rect.width;
    let drawHeight = rect.height;
    let offsetX = 0;
    let offsetY = 0;

    // Responsive Object-Contain behavior for everything below large tablets
    const isMobileOrTablet = rect.width < 1024;

    if (isMobileOrTablet) {
      // Act like 'object-cover' but align horizontal center so it fills viewport height perfectly
      // and crops horizontally evenly on mobile width.
      if (imgAspect > canvasAspect) {
        // Image is wider than canvas -> crop sides, fill height
        drawHeight = rect.height;
        drawWidth = rect.height * imgAspect;
        offsetX = (rect.width - drawWidth) / 2;
        offsetY = 0;
      } else {
        // Fallback
        drawWidth = rect.width;
        drawHeight = rect.width / imgAspect;
        offsetX = 0;
        offsetY = (rect.height - drawHeight) / 2;
      }
    } else {
      // Desktop / Ultrawide: Act like 'object-cover' to fill the whole screen immersively.
      if (imgAspect > canvasAspect) {
        // Image is wider than canvas
        drawWidth = rect.height * imgAspect;
        offsetX = (rect.width - drawWidth) / 2;
      } else {
        // Image is taller than canvas
        drawHeight = rect.width / imgAspect;
        offsetY = (rect.height - drawHeight) / 2;
      }
    }

    ctx.clearRect(0, 0, rect.width, rect.height);

    // Draw base background color
    ctx.fillStyle = '#110A07'; // Match the footer gradient transition
    ctx.fillRect(0, 0, rect.width, rect.height);

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  const imagesRef = useRef(images);
  useEffect(() => {
    imagesRef.current = images;
  }, [images]);

  // Render empty function if scroll ends so hero stops displaying
  const [shouldRenderCanvas, setShouldRenderCanvas] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Arbitrary cut-off when reaching the bottom section
    // If the scroll is past 95% (where Heroic CTA is complete and Footer starts), we can choose to hide/fade canvas
    if (latest > 0.98) {
      setShouldRenderCanvas(false);
    } else {
      setShouldRenderCanvas(true);
    }
  });

  // Redraw when new background images load (fixes blank canvas mid-scroll)
  useEffect(() => {
    if (!canvasRef.current || images.length === 0 || !shouldRenderCanvas) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;
    
    const currentFrame = Math.floor(scrollYProgress.get() * (FRAME_COUNT - 1));
    if (images[currentFrame]) {
      // Use requestAnimationFrame to ensure smooth paint
      requestAnimationFrame(() => renderFrame(canvas, ctx, images[currentFrame]));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  // Initial draw and window resize setup
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let lastWidth = 0;
    let lastHeight = 0;
    let resizeTimer: NodeJS.Timeout;

    const handleResize = () => {
      const currentWidth = window.innerWidth;
      const currentHeight = window.innerHeight;
      
      const widthChanged = currentWidth !== lastWidth;
      const significantHeightChange = Math.abs(currentHeight - lastHeight) > 150;

      // Skip the destructive resize if it's just a minor vertical shift (e.g. mobile URL bar)
      if (!widthChanged && !significantHeightChange) {
        return;
      }
      
      lastWidth = currentWidth;
      lastHeight = currentHeight;

      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      const currentFrame = Math.floor(scrollYProgress.get() * (FRAME_COUNT - 1));
      if (imagesRef.current[currentFrame]) {
        renderFrame(canvas, ctx, imagesRef.current[currentFrame]);
      }
    };

    const debouncedResize = () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(handleResize, 100);
    };

    // Initial setup
    handleResize();

    window.addEventListener('resize', debouncedResize);
    return () => {
        window.removeEventListener('resize', debouncedResize);
        clearTimeout(resizeTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sync scroll with frame
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const frameIndex = Math.floor(latest * (FRAME_COUNT - 1));
    const img = imagesRef.current[frameIndex];
    if (!img) return;

    renderFrame(canvas, ctx, img);
  });

  return (
    <>
      <canvas
        ref={canvasRef}
        role="presentation"
        aria-hidden="true"
        className={`fixed top-0 left-0 z-0 w-full h-full object-cover transition-opacity duration-1000 ${shouldRenderCanvas ? 'opacity-100' : 'opacity-0'}`}
        style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
      />
      {/* SEO Fallback Image - Visually hidden but indexable by Googlebot */}
      <noscript>
        <img 
          src="/og-image.png" 
          alt="Soto Ayam Kampung Legend Anggut di Balikpapan" 
          className="hidden" 
        />
      </noscript>
      <img
        src="/og-image.png"
        alt="Soto Ayam Kampung Legend Anggut di Balikpapan - Kuliner Warisan Otentik"
        className="sr-only" /* sr-only ensures it's readable by screen readers but visually absolute 1x1 rect */
        fetchPriority="low"  /* Keep the main thread focused on canvas first */
      />
    </>
  );
}
