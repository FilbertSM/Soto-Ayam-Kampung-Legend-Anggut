"use client";

import { motion, useScroll, useReducedMotion } from "framer-motion";
import { useRef, SVGProps } from "react";
import LiveStatus from "@/components/ui/LiveStatus";
import { MessageCircle, Globe } from "lucide-react";

const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const GithubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function StoryBlocks({ isLoaded }: { isLoaded: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <>
      <div ref={containerRef} className="relative z-10 w-full">
        {/* 0-25%: Arrival */}
        <section className="min-h-screen flex items-center justify-center px-4" id="story">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 50 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 50 }}
            transition={{ duration: shouldReduceMotion ? 0 : 1, ease: "easeOut", delay: shouldReduceMotion ? 0 : 0.6 }}
            className="text-center w-full max-w-6xl"
          >
            <h1 className="font-serif text-[clamp(3rem,8vw,8rem)] text-[#FDFBF7] drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] leading-tight">
              Soto Ayam <br className="hidden md:block" /> Kampung <br className="hidden md:block" /> Legend
            </h1>
          </motion.div>
        </section>

        {/* 25-50%: Core Ingredients */}
        <section className="min-h-screen flex items-center justify-start px-4 md:px-24">
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
            className="max-w-xl w-full text-left"
          >
            <h2 className="font-serif text-[clamp(2.5rem,5vw,5rem)] text-[#FDFBF7] drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] mb-6 leading-tight">
              24-Hour <br />Spiced Broth
            </h2>
            <p className="font-sans text-[#FDFBF7] text-[clamp(1.125rem,2vw,1.5rem)] drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
              Slow-cooked to perfection. We simmer our broth with a secret blend of Makassar spices, letting the rich flavors deepen over a full day.
            </p>
          </motion.div>
        </section>

        {/* 50-75%: The Heritage */}
        <section className="min-h-screen flex items-center justify-end px-4 md:px-24">
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
            className="max-w-xl w-full text-right"
          >
            <h2 className="font-serif text-[clamp(2.5rem,5vw,5rem)] text-[#FDFBF7] drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] mb-6 leading-tight">
              Premium Beef <br /> &&nbsp;Fresh&nbsp;Shallots
            </h2>
            <p className="font-sans text-[#FDFBF7] text-[clamp(1.125rem,2vw,1.5rem)] drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] ml-auto text-right">
              Only the most tender cuts of beef make the bowl, topped with perfectly crisp shallots for that iconic Soto Anggut crunch.
            </p>
          </motion.div>
        </section>

        {/* 50-85%: The Lift */}
        <section className="min-h-screen flex items-end justify-start pb-32 px-4 md:px-24 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.8 }}
            className="w-full max-w-xl text-left pointer-events-auto"
          >
            <h2 className="font-serif text-[clamp(2.5rem,5vw,5rem)] text-[#FDFBF7] drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] mb-4 leading-none">
              A Burst of <br />Freshness.
            </h2>
            <p className="font-serif text-[clamp(1.25rem,2.5vw,2rem)] text-[#FDFBF7] drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] italic">
              Passed Down Through Generations.
            </p>
          </motion.div>
        </section>

        {/* 85-100%: Heroic CTA */}
        <section className="min-h-screen flex items-center justify-end px-4 md:px-24">
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
            className="text-right w-full max-w-xl"
          >
            <h2 className="font-serif text-[clamp(2.5rem,5vw,5rem)] text-[#FDFBF7] drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] mb-6 leading-tight">
              Craving a Bowl?
            </h2>
            <p className="font-sans text-[clamp(1.125rem,2vw,1.5rem)] text-[#FDFBF7] drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] mb-10 ml-auto">
              Experience the legendary taste of Makassar, delivered hot to your door or ready for pickup.
            </p>
            <a
              href="https://wa.me/089678243688"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D49A00] text-[#1A0F0A] font-sans font-semibold text-[clamp(1rem,1.5vw,1.25rem)] px-8 py-4 rounded-full hover:bg-[#b38200] transition-colors duration-300 shadow-xl inline-block"
            >
              Order Direct
            </a>
          </motion.div>
        </section>
      </div>

      {/* Solid warm overlay background for footer section */}
      <div className="relative z-20 bg-gradient-to-t from-[#1F140C] via-[#1F140C]/95 to-transparent pt-32 pb-8">
        {/* Location & Hours */}
        <section className="min-h-screen flex items-center justify-center px-4" id="visit">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center"
        >
          {/* Column A: Info */}
          <div className="flex flex-col gap-8">
            <h2 className="font-serif text-[clamp(3rem,6vw,6rem)] text-[#FDFBF7] drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] leading-tight">
              Visit the Home of <br /> Soto Anggut
            </h2>
            <div className="flex flex-col gap-6 backdrop-blur-md bg-black/20 border border-white/10 rounded-2xl p-8 shadow-2xl">
              <div>
                <h3 className="font-sans text-lg text-[#FDFBF7]/80 tracking-widest uppercase mb-2 drop-shadow-md">Operating Hours</h3>
                <p className="font-serif text-3xl text-[#D49A00] drop-shadow-md">
                  Weekend Only: 07:00 - 15:00
                </p>
              </div>
              <LiveStatus />
            </div>
          </div>

          {/* Column B: Map */}
          <div className="flex flex-col gap-8 w-full h-full relative">
            <div className="w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative bg-[#0a0604]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.838972705934!2d116.85745753988273!3d-1.2695166293242353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df1477af9e2c063%3A0xeda8e8596cb66262!2sSoto%20Ayam%20Kampung%20Legend%20Anggut!5e0!3m2!1sen!2sid!4v1777394217275!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-start">
              <a
                href="https://maps.app.goo.gl/GYDn5LnSerBnbts66"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D49A00] text-[#1A0F0A] font-sans font-semibold text-lg px-8 py-4 rounded-full hover:bg-[#b38200] transition-colors duration-300 shadow-xl inline-block"
              >
                Get Directions
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Social & Credits */}
      <section className="flex flex-col items-center justify-center py-20 px-4 relative z-20 mt-32">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl w-full flex flex-col items-center gap-16 text-center"
        >
          {/* Business Socials */}
          <div className="flex flex-col items-center gap-8">
            <h2 className="font-serif text-3xl md:text-4xl text-[#FDFBF7]">
              Experience Makassar at Home
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 mt-2 w-full sm:w-auto">
              <a
                href="https://www.instagram.com/sotoayam.anggut/"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-[#D49A00] text-[#D49A00] rounded-full hover:bg-[#D49A00] hover:text-[#1A0F0A] transition-all duration-300 font-sans font-semibold text-lg group"
              >
                <InstagramIcon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                <span>@sotoayam.anggut</span>
              </a>
              <a
                href="https://wa.me/089678243688"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-[#D49A00] text-[#D49A00] rounded-full hover:bg-[#D49A00] hover:text-[#1A0F0A] transition-all duration-300 font-sans font-semibold text-lg group"
              >
                <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-[#D49A00]/30 to-transparent"></div>

          {/* Developer Credits */}
          <div className="flex flex-col items-center gap-6 w-full">
            <h3 className="font-sans text-[#FDFBF7]/60 tracking-widest text-sm uppercase">Crafted by Filbert SM</h3>

            {/* Staggered Icons Container */}
            <motion.div
              className="flex items-center gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
            >
              {[
                { Icon: LinkedinIcon, href: "https://www.linkedin.com/in/filbert-sembiring-meliala/", label: "LinkedIn", target: "_blank", rel: "noopener noreferrer" },
                { Icon: GithubIcon, href: "https://github.com/FilbertSM", label: "GitHub", target: "_blank", rel: "noopener noreferrer" },
                { Icon: InstagramIcon, href: "https://www.instagram.com/filbertt_sm/", label: "Instagram", target: "_blank", rel: "noopener noreferrer" },
                { Icon: Globe, href: "https://filbertsm.netlify.app/", label: "Portfolio", target: "_blank", rel: "noopener noreferrer" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  className="text-[#FDFBF7]/50 hover:text-[#D49A00] transition-all duration-300 transform hover:scale-125"
                >
                  <social.Icon className="w-6 h-6" strokeWidth={1.5} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>
      </div>
    </>
  );
}
