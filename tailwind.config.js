export default {
  content: [
    './**/*.html',
    './**/*.js',
    './**/*.ts',
    '!./node_modules/**/*', // Exclure les fichiers dans node_modules
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      
    },
  },
  plugins: [require('daisyui')],
};

