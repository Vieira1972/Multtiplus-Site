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
        'odoo-purple': '#1781ab',
        'odoo-purple-dark': '#136c90',
        'odoo-gray': '#F5F5F7',
        'odoo-gray-dark': '#ECECEF',
        'accent-yellow': '#F4B233',
        'footer-graphite': '#1F2430',
        'footer-graphite-dark': '#171B24',
        'footer-text': '#C9CED8',
        'footer-muted': '#A8AFBD',
      },
      fontFamily: {
        sans: ['"SF Pro Display"', '-apple-system', 'BlinkMacSystemFont', 'Inter', 'system-ui', '"Segoe UI"', 'sans-serif'],
        handwritten: ['"SF Pro Display"', '-apple-system', 'BlinkMacSystemFont', '"SF Pro Text"', '"SF Pro"', 'sans-serif'],
        sf: ['"SF Pro Display"', '-apple-system', 'BlinkMacSystemFont', '"SF Pro Text"', '"SF Pro"', '"San Francisco"', '"Helvetica Neue"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
