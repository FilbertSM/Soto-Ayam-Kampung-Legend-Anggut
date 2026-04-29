import Link from 'next/link';

export default function Header() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center py-6 px-4 md:px-12 mix-blend-difference text-white">
      <div className="font-serif text-xl md:text-2xl tracking-widest font-bold cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        SOTO ANGGUT
      </div>
      <nav className="flex gap-4 md:gap-8 font-sans text-xs md:text-sm tracking-widest font-semibold">
        <a href="#story" onClick={(e) => handleScroll(e, 'story')} className="hover:opacity-70 transition-opacity cursor-pointer">OUR STORY</a>
        <a href="#visit" onClick={(e) => handleScroll(e, 'visit')} className="hover:opacity-70 transition-opacity cursor-pointer">VISIT US</a>
      </nav>
    </header>
  );
}
