import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss({
      // Tailwind CSS configuration inline
      content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
      ],
      theme: {
        extend: {
          colors: {
            primaryGreen: '#FF0000',
            accentBlue: '#3B9AE1',
            softCream: '#F3F4EF',
          },
          fontFamily: {
            sans: ['Poppins', 'sans-serif'],
          },
        },
      },
      plugins: [],
    }),
    react(),
  ],
});