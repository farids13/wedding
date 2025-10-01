// src/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-sm z-50 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-primary">
            UndanganKita
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="#couple" className="hover:text-primary transition-colors">
              Mempelai
            </Link>
            <Link href="#date" className="hover:text-primary transition-colors">
              Acara
            </Link>
            <Link href="#location" className="hover:text-primary transition-colors">
              Lokasi
            </Link>
            <Link href="#rsvp" className="hover:text-primary transition-colors">
              RSVP
            </Link>
          </div>
          <button className="md:hidden text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
