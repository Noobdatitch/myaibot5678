import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#030712',
        midnight: '#0f172a',
        neon: '#38bdf8',
      },
      boxShadow: {
        glow: '0 0 30px rgba(56, 189, 248, 0.25)',
      },
      backgroundImage: {
        'hero-grid':
          'radial-gradient(circle at 20% 20%, rgba(56, 189, 248, 0.2), transparent 30%), radial-gradient(circle at 80% 0%, rgba(37, 99, 235, 0.2), transparent 35%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
