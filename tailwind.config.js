/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: "20px",
      center: true
    },
    extend: {
      scrollBehavior: ["responsive"]
    }
  },
  plugins: [require("daisyui")]
  //   daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         primary: "#9fe88d",
  //         secondary: "#ff7d5d",
  //         accent: "#b2ccd6",
  //         neutral: "#3d4451",
  //         "base-100": "#ffffff",
  //         info: "#3ABFF8",
  //         success: "#62efbd",
  //         warning: "#efd057",
  //         error: "#ffae97",
  //       },
  //     },
  //   ],
  // },
};
