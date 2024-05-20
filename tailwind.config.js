/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        azulB2bit: '#02274F',
        azulB2bitHover: '#003366',
        amareloB2bit: '#FDCF00',
        cinzab2bit: '#F1F1F1',
        bgInput: '#F4F4F4',
        bgProfilePage: '#F1F5F9',
        bgdivProfile: '#FDFDFD',
        bgLoginPage: '#FAFAFA',
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'loginPage': '0px 0px 64px 0px rgba(0, 0, 0, 0.25)',
        'profilePage': '0px 2px 10px 0px #0000001A',
      }
    },
  },
  plugins: [],
}

