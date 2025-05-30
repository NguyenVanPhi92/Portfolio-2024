/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      // inter: ['Inter-VariableFont_opsz,wght']
      roboto: ['Roboto', 'sans-serif'],
      inter: ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        // white: 'text-neutral-300'
        'white-50': '#f1f1f1',
        'white-100': '#d4d4d4'
      }
    }
  },
  plugins: []
}
