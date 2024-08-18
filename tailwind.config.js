/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',   // Include all files in the pages directory
    './components/**/*.{js,ts,jsx,tsx}', // Include all files in the components directory
    './app/**/*.{js,ts,jsx,tsx}', // If using the `app` directory (Next.js 13+)
  ],
  theme: {
    extend: {
      colors: {
        azure: '#F0FFFF',
        bisque: '#FFE4C4',
        'custom-pink': 'rgba(220,147,147,0.8)', // Replace the custom colors here
      },
    },
  },
  plugins: [],
}

