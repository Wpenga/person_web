'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: '首页' },
    { href: '#projects', label: '项目展示' },
    { href: '#skills', label: '核心技能' },
    { href: '#contact', label: '联系我' },
  ];

  return (
    <nav
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[rgba(5,5,16,0.8)] backdrop-blur-lg border border-[rgba(255,255,255,0.1)]'
          : 'bg-[rgba(5,5,16,0.04)] backdrop-blur-xl border border-[rgba(255,255,255,0.1)]'
      } rounded-full px-6 py-3 w-[90%] max-w-4xl`}
    >
      <div className="flex justify-between items-center">
        <Link href="#" className="text-xl font-bold font-grotesk text-white">
          Wpenga<span className="text-[#00FFFF]">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#A0A0C0] hover:text-[#00FFFF] transition-colors text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/Wpenga"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A0A0C0] hover:text-[#00FFFF] transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="#"
            className="text-[#A0A0C0] hover:text-[#00FFFF] transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:wpenga@example.com"
            className="text-[#A0A0C0] hover:text-[#00FFFF] transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 p-4 bg-[#0a0a1a] border border-[rgba(255,255,255,0.1)] rounded-2xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#A0A0C0] hover:text-[#00FFFF] transition-colors text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-4 pt-2 border-t border-[rgba(255,255,255,0.1)]">
              <a
                href="https://github.com/Wpenga"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A0A0C0] hover:text-[#00FFFF] transition-colors"
              >
                <Github size={20} />
              </a>
              <a href="#" className="text-[#A0A0C0] hover:text-[#00FFFF] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:wpenga@example.com" className="text-[#A0A0C0] hover:text-[#00FFFF] transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
