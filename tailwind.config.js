/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html',
  '*.js', '*.css'],
  theme: {
    width: {
      'xs': '320px',
      'sm': '375px',
      'md': '475px',
      'lg': '640px',
      'xl': '768px',
      '2xl': '1024px',
      '3xl': '1280px',
      '4xl': '1440px',
      '5xl': '1536px',
      '6xl': '1800px',   
    },
    screens: {
      'xs': '320px',
      'sm': '375px',
      'md': '475px',
      'lg': '640px',
      'xl': '768px',
      '2xl': '1024px',
      '3xl': '1280px',
      '4xl': '1440px',
      '5xl': '1536px',
      '6xl': '1800px',
    },
    extend: {
      colors: {
        'brandPrimary-200': '#B6E4FC',
        'brandPrimary-300': '#67C3F3',
        'brandPrimary-500': '#458FF6',
        'neutral-0': '#FFFFFF',
        'neutral-500': '#7D7987',
        'neutral-900': '#1F1534',
        'neutal-1000': '#000000',
      },
      fontFamily: {
        'sans-primary': ['Mulish', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

