/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  darkMode: 'selector',

  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-1': "url('./public/img/hero/banner.png')",
        'bgLogIn': "url('./public/img/SignIn.jpg')",
        'bgSignUp': "url('./public/img/signup.jpg')",
  
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
})
