import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif']
      },
      colors: {
        brand: {
          DEFAULT: '#1A4D8F',
          light: '#2563EB',
          dark: '#123567'
        },
        surface: {
          DEFAULT: '#0F172A',
          muted: '#101828',
          accent: '#1F2937'
        },
        text: {
          DEFAULT: '#F9FAFB',
          muted: '#D1D5DB',
          subtle: '#9CA3AF'
        }
      },
      boxShadow: {
        card: '0 20px 45px -20px rgba(15, 23, 42, 0.45)',
        glow: '0 0 0 1px rgba(37, 99, 235, 0.15), 0 15px 35px -15px rgba(37, 99, 235, 0.55)'
      },
      borderRadius: {
        xl: '1.25rem'
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        shimmer: 'shimmer 2s infinite'
      }
    }
  },
  plugins: []
};

export default config;
