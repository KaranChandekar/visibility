/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-img": "url('/images/bg/home-bg.svg')",
        "card-img": "url('/images/glow/card-red-glow.303cd894.svg')",
        // "bg-img": "url('/images/about-blur.svg')",
        // "bg-img": "url('/images/case-study.png')",
        // "bg-img": "url('/images/contact-glow.944a9bf8.svg')",
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
