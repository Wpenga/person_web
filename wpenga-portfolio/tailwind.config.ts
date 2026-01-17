import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-deep': '#050510',
        'bg-dark': '#0a0a1a',
        'primary': '#00FFFF',
        'secondary': '#7B61FF',
        'accent': '#FF00FF',
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(135deg, #00FFFF, #7B61FF)',
        'gradient-2': 'linear-gradient(135deg, #7B61FF, #FF00FF)',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)'],
        grotesk: ['var(--font-space-grotesk)'],
      },
      animation: {
        'blob': 'blob 20s infinite alternate',
        'fade-in': 'fadeIn 1s forwards ease-out',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(100px, 100px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
