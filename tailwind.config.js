/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-img": "url('/images/home-bg.svg')",
        // "bg-img": "url('/images/about-blur.svg')",
        // "bg-img": "url('/images/case-study.png')",
        // "bg-img": "url('/images/contact-glow.944a9bf8.svg')",
      },
    },
  },
  plugins: [],
};
