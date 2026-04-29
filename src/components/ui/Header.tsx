import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center py-6 px-4 md:px-12 mix-blend-difference text-white">
      <div className="font-serif text-xl md:text-2xl tracking-widest font-bold">
        SOTO ANGGUT
      </div>
      <nav className="flex gap-4 md:gap-8 font-sans text-xs md:text-sm tracking-widest font-semibold">
        <Link href="#story" className="hover:opacity-70 transition-opacity">OUR STORY</Link>
        <Link href="#visit" className="hover:opacity-70 transition-opacity">VISIT US</Link>
      </nav>
    </header>
  );
}
