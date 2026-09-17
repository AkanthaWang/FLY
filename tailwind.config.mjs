/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#17263d',
        night: '#101d31',
        paper: '#f8f5ef',
        mist: '#ebe8df',
        brass: '#b38b5d',
        sage: '#71857b',
        clay: '#a56d5c'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif']
      }
    }
  },
  plugins: []
};
