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
        'bgLogIn': "url('./src/image/SignIn.jpg')",
        'bgSignUp': "url('./src/image/signup.jpg')",
  
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
