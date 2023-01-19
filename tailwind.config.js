/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-home": "url('/images/home-bg.svg')",
        "bg-about": "url('/images/about-blur.svg')",
        "bg-case-studies": "url('/images/case-study.png')",
        "bg-contact": "url('/images/contact-glow.944a9bf8.svg')",
      },
    },
  },
  plugins: [],
};
