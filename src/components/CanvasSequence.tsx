"use client";

import { useEffect, useRef } from "react";
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

    if (imgAspect > canvasAspect) {
      // Image is wider than canvas
      drawWidth = rect.height * imgAspect;
      offsetX = (rect.width - drawWidth) / 2;
    } else {
      // Image is taller than canvas
      drawHeight = rect.width / imgAspect;
      offsetY = (rect.height - drawHeight) / 2;
    }

    ctx.clearRect(0, 0, rect.width, rect.height);

    // Draw base background color
    ctx.fillStyle = '#1A0F0A';
    ctx.fillRect(0, 0, rect.width, rect.height);

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

    // Add gradient overlay to match background color seamlessly
    const gradient = ctx.createLinearGradient(0, 0, 0, rect.height);
    gradient.addColorStop(0, 'rgba(26, 15, 10, 0.4)');
    gradient.addColorStop(0.5, 'rgba(26, 15, 10, 0.1)');
    gradient.addColorStop(1, 'rgba(26, 15, 10, 0.8)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, rect.width, rect.height);
  };

  const imagesRef = useRef(images);
  useEffect(() => {
    imagesRef.current = images;
  }, [images]);

  // Redraw when new background images load (fixes blank canvas mid-scroll)
  useEffect(() => {
    if (!canvasRef.current || images.length === 0) return;
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
    <canvas
      ref={canvasRef}
      role="img"
      aria-label="Cinematic sequence showing the preparation of Soto Anggut"
      className="fixed top-0 left-0 z-0 w-full h-full object-cover"
    />
  );
}
