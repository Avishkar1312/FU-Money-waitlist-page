/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'neon-teal': '#00FFC6',
        'neon-pink': '#FF4ECD',
        'neon-yellow': '#FFD60A',
        'dark-bg': '#121212',
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out forwards',
        'slide-up': 'slide-up 1s ease-out forwards',
        'slide-down': 'slide-down 0.3s ease-out forwards',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce': 'bounce 1s infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon-teal': '0 0 20px rgba(0, 255, 198, 0.3)',
        'neon-pink': '0 0 20px rgba(255, 78, 205, 0.3)',
        'neon-yellow': '0 0 20px rgba(255, 214, 10, 0.3)',
      },
    },
  },
  plugins: [],
};