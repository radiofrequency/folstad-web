/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDFAF6',
        navy: {
          DEFAULT: '#1E3A5F',
          dark: '#152A47',
          light: '#2A5080',
        },
        sage: {
          DEFAULT: '#6B9E78',
          light: '#8FBD9A',
          dark: '#4E7A5A',
        },
      },
      fontFamily: {
        body: ['Nunito', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      backgroundImage: {
        'dot-grid': "radial-gradient(circle, #c7d2e0 1px, transparent 1px)",
        'hero-gradient': 'linear-gradient(135deg, #1E3A5F 0%, #2A5080 60%, #1E3A5F 100%)',
      },
      backgroundSize: {
        'dot': '24px 24px',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(30, 58, 95, 0.08)',
        'card-hover': '0 12px 48px rgba(30, 58, 95, 0.16)',
      },
    },
  },
  plugins: [],
}
