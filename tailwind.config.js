/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Primary: deep forest green
        forest: {
          50: '#EEF4F0',
          100: '#D9E7DF',
          200: '#B3CFC0',
          300: '#85AF98',
          400: '#4F8A6C',
          500: '#2A6B4F',
          600: '#1D5640',
          700: '#154433',
          800: '#0F3526',
          900: '#0A281D',
          950: '#061A13',
        },
        // Surfaces: warm cream
        cream: {
          50: '#FCF9EF',
          100: '#F7F0DC',
          200: '#EFE5C8',
          300: '#E2D4AB',
          400: '#CDBB88',
        },
        // Accent: antique gold (use gold-700 for text on light surfaces, gold-300 on dark)
        gold: {
          100: '#F4E8C5',
          200: '#E8D391',
          300: '#D9BC66',
          400: '#C7A24A',
          500: '#B08A32',
          600: '#8F6E23',
          700: '#745718',
        },
        // Muted body copy that still passes contrast on cream and white
        muted: '#4B5E54',
      },
      fontFamily: {
        display: ['Newsreader', '"Noto Serif Bengali"', 'Georgia', '"Times New Roman"', 'serif'],
        sans: ['"Hanken Grotesk"', '"Noto Serif Bengali"', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(10, 40, 29, 0.06), 0 14px 32px -16px rgba(10, 40, 29, 0.22)',
        lift: '0 2px 4px rgba(10, 40, 29, 0.06), 0 24px 48px -20px rgba(10, 40, 29, 0.32)',
      },
      keyframes: {
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        orbit: 'orbit 48s linear infinite',
        'orbit-reverse': 'orbit 72s linear infinite reverse',
      },
    },
  },
  plugins: [],
};
