'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#00FFFF] rounded-full blur-[80px] opacity-[0.15] animate-blob" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#7B61FF] rounded-full blur-[80px] opacity-[0.15] animate-blob animation-delay-[-10s]" />
      </div>

      <div className="container relative z-10 text-center">
        <h1 className="fade-in text-5xl md:text-7xl lg:text-8xl font-bold font-grotesk leading-tight mb-6">
          创新驱动<br />
          <span className="gradient-text">嵌入式 & AI</span> 开发
        </h1>
        <p className="hero-subtitle fade-in delay-1 text-lg md:text-xl text-[#A0A0C0] max-w-2xl mx-auto mb-10">
          致力于构建高效、智能的软硬结合解决方案。从 ESP32 底层架构到 React 前端 AI 集成。
        </p>
        <div className="fade-in delay-2 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('#projects')}
            className="btn btn-primary"
          >
            查看项目
            <ArrowRight size={18} />
          </button>
          <button
            onClick={() => scrollToSection('#contact')}
            className="btn btn-outline"
          >
            联系交流
          </button>
        </div>
      </div>
    </section>
  );
}
