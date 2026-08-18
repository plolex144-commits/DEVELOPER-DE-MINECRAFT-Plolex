/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#0A0C10',
          panel: '#12161C',
          panel2: '#171C24',
          border: '#232932',
        },
        ink: {
          DEFAULT: '#E7EAEE',
          muted: '#8A93A1',
          faint: '#5C6472',
        },
        ember: {
          DEFAULT: '#FF6B4A',
          soft: '#FF8A6C',
          dim: '#7A3B2C',
        },
        online: {
          DEFAULT: '#4ADE80',
          dim: '#1F5A3A',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, rgba(10,12,16,0) 0%, #0A0C10 90%), radial-gradient(circle at 1px 1px, #232932 1px, transparent 0)',
      },
      backgroundSize: {
        grid: '28px 28px',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.35 },
        },
        rise: {
          '0%': { opacity: 0, transform: 'translateY(14px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        blink: 'blink 1.6s ease-in-out infinite',
        rise: 'rise 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}
