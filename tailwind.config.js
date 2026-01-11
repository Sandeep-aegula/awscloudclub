/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // --- BASE COLORS ---
        'primary-bg': '#161E2D',      // Deep Navy/Slate for main background
        'secondary-bg': '#232F3E',    // AWS Dark Blue for containers/cards
        'primary-text': '#F1F3F3',    // Light text
        'secondary-text': '#D4DADA',  // Muted text

        // --- AWS BRAND ACCENTS ---
        'aws-orange': '#FF9900',      // Primary CTA/Logo
        'aws-light-orange': '#FBD8BF', // Secondary light highlight

        // --- PRIMARY/DYNAMIC ACCENTS (Blue/Green for tech/success) ---
        'accent-blue': '#2074D5',     // Main dynamic blue (links, active states)
        'accent-dark-blue': '#003181', // Darker blue for deeper sections
        'accent-cyan': '#007FAA',      // Brighter cyan for charts/graphics
        'accent-green': '#38EF7D',    // Success, Code, Positive status
        'accent-light-cyan': '#9FFCEA', // Lightest cyan for glow/subtle effects

        // --- SECONDARY/VIBRANT ACCENTS (For visual flair/section headers) ---
        'vibrant-purple': '#330066',  // Optional: Background for special sections
        'vibrant-pink': '#DF2A5D',    // Optional: Used in gradients/hero background
        'vibrant-magenta': '#F46EBB', // Optional: Used in gradients
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
}
