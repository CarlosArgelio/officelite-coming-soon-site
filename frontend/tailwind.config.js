import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "button-small": "171px",
      },
      colors: {
        "brandeis-blue": "hsl(228, 100%, 66%)",
        "cornflower-blue": "hsl(228, 100%, 75%)",
        "prussian-blue": "hsl(229, 22%, 19%)",
        "sunset-orange": "hsl(0, 83%, 65%)",
        "slate-gray": "hsl(227, 13%, 52%)",
        charcoal: "hsl(228, 22%, 26%)",
      },
      fontFamily: {
        "kumbh-sans": ["Kumbh Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
