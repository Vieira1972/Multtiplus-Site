/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0B1B34',
        'brand-deep': '#0B1B34',
        'tech-blue': '#2EAADC',
        'tech-blue-hover': '#1B7FA8',
        'brand-light': '#F5F5F7',
        'odoo-purple': '#714B67',
        'odoo-purple-dark': '#5F3F58',
        'odoo-gray': '#F5F5F7',
        'odoo-gray-dark': '#ECECEF',
        'accent-yellow': '#F4B233',
        'footer-graphite': '#1F2430',
        'footer-graphite-dark': '#171B24',
        'footer-text': '#C9CED8',
        'footer-muted': '#A8AFBD',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        handwritten: ['Caveat', 'cursive'],
        sf: ['"SF Pro Display"', '-apple-system', 'BlinkMacSystemFont', '"SF Pro Text"', '"SF Pro"', '"San Francisco"', '"Helvetica Neue"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
