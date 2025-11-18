import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'react-feather';

export default function Header({ settings }) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('theme');
    if (stored) {
      setTheme(stored);
      document.documentElement.classList.toggle('dark', stored === 'dark');
    }
  }, []);

  function toggleTheme() {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  }

  return (
    <header className="w-full bg-white dark:bg-[#1b120c] shadow-sm sticky top-0 z-40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 flex-shrink-0 no-underline">
          <div className="flex-shrink-0">
            <img src={settings.business.brandLogo} alt={settings.business.brandName} className="h-10 w-10 rounded-md object-cover block" />
          </div>
          <div className="flex flex-col gap-0.5">
            <div className="font-bold text-lg leading-tight">{settings.business.brandName}</div>
            <div className="text-xs text-muted-600 leading-tight">{settings.business.brandTagline}</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#hero" className="text-sm hover:text-[var(--brand)] transition-colors">Home</a>
          <a href="#about" className="text-sm hover:text-[var(--brand)] transition-colors">Sobre</a>
          <a href="#features" className="text-sm hover:text-[var(--brand)] transition-colors">Diferenciais</a>
          <a href="#pricing" className="text-sm hover:text-[var(--brand)] transition-colors">Sabores</a>
          <a href="#testimonials" className="text-sm hover:text-[var(--brand)] transition-colors">Depoimentos</a>
          <a href="#cta" className="text-sm hover:text-[var(--brand)] transition-colors">Pedir</a>
          <a href={settings.business.social.whatsapp} className="btn btn-outline text-sm">WhatsApp</a>
        </nav>

        <div className="flex items-center gap-3">
          <button aria-label="toggle theme" onClick={toggleTheme} className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
            {mounted && (theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />)}
          </button>

          <div className="md:hidden">
            <a href={settings.business.social.whatsapp} className="btn btn-primary text-sm">Pedir</a>
          </div>
        </div>
      </div>
    </header>
  );
}

