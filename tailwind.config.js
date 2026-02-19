/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brandBlue: '#2563EB',
        brandGreen: '#22C55E',
        brandYellow: '#FACC15',
        appBg: '#F5F7FB',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 8px 20px rgba(15, 23, 42, 0.06)',
      },
      borderRadius: {
        xl2: '12px',
      },
    },
  },
  plugins: [],
}
