/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff5ff',
          100: '#dbe7fe',
          200: '#bed6ff',
          300: '#92bcfe',
          400: '#5e98fc',
          500: '#3971f8',
          600: '#2b58ee',
          700: '#1b3dda',
          800: '#1c33b1',
          900: '#1d308b',
          950: '#162055',
        },
        secondary: {
          '50': '#fbfbff',
          '100': '#dbdbfe',
          '200': '#bfbffe',
          '300': '#9397fd',
          '400': '#6062fa',
          '500': '#463bf6',
          '600': '#3e25eb',
          '700': '#3e1dd8',
          '800': '#3b1eaf',
          '900': '#311e8a',
          '950': '#241754',
        },

      },
    },
  },
  plugins: [],
};
