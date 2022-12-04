/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'main-color': "#1f123a",
      },
      backgroundImage: {
        'hero': "url('/public/images/loginBackground.png')",
      }
    },
  },
  plugins: [
    
  ],
}
