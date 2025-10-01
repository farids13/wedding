/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D97D55',  // Terracotta
          light: '#E8A98B',    // Lighter terracotta
          dark: '#B05C3A',     // Darker terracotta
        },
        secondary: {
          DEFAULT: '#B8C4A9',  // Sage green
          light: '#D4DCCD',    // Lighter sage
          dark: '#8F9E7F',     // Darker sage
        },
        accent: {
          DEFAULT: '#6FA4AF',  // Dusty blue
          light: '#9BC4CC',    // Lighter blue
          dark: '#4E7D88',     // Darker blue
        },
        background: {
          DEFAULT: '#F4E9D7',  // Warm cream
          light: '#F9F5ED',    // Lighter cream
          dark: '#E8D9C0',     // Darker cream
        },
        foreground: {
          DEFAULT: '#2D3748',  // Dark gray
          light: '#4A5568',    // Lighter gray
          dark: '#1A202C',     // Darker gray
        },
        muted: {
          DEFAULT: '#E2E8F0',  // Light gray
          light: '#F1F5F9',    // Lighter gray
          dark: '#CBD5E0',     // Darker gray
        },
        // Additional colors
        success: {
          DEFAULT: '#48BB78',  // Green
          light: '#9AE6B4',    // Light green
          dark: '#2F855A',     // Dark green
        },
        warning: {
          DEFAULT: '#ECC94B',  // Yellow
          light: '#FAF089',    // Light yellow
          dark: '#D69E2E',     // Dark yellow
        },
        error: {
          DEFAULT: '#F56565',  // Red
          light: '#FEB2B2',    // Light red
          dark: '#C53030',     // Dark red
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
