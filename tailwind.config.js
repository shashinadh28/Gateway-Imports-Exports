/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy:    '#06283D',
          dark:    '#031B2B',
          orange:  '#FF7A18',
          teal:    '#0D4F6A',
          light:   '#F5F8FA',
          text:    '#132B3A',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card:       '0 2px 20px 0 rgba(6,40,61,0.08)',
        'card-lg':  '0 8px 40px -8px rgba(6,40,61,0.18)',
        orange:     '0 4px 24px -4px rgba(255,122,24,0.45)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(105deg, rgba(3,27,43,0.92) 40%, rgba(3,27,43,0.55) 100%)',
        'cta-gradient':  'linear-gradient(105deg, rgba(3,27,43,0.94) 50%, rgba(3,27,43,0.60) 100%)',
        'dot-pattern':   'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
      },
      animation: {
        'fade-up':   'fadeUp 0.6s ease both',
        'ping-slow': 'ping 2.5s cubic-bezier(0,0,0.2,1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(22px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
