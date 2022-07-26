module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landingpage': "url('/Images/Rectangle 4 (1).png')",
        'button': "url('/Images/Home/Group 4.svg)",
      },
      colors: {
        cstmyellow: "#F0C53E",
        cstmdarkbrown: "#B25A59",
        cstmdarkerbrown: "#A35B5A",
        brownfont: "#7F2736",
        lightfont: "#595959",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
        montserratBold: ["MontserratBold"],
        nunito: ["Nunito"],
        nunitoSemi: ["NunitoSemi"],
        nunitoBold: ["NunitoBold"],
      },
    },
  },
  plugins: [],
}