/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  daisyui: {
    // Add your daisy ui themes here
    themes: ["night"],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
