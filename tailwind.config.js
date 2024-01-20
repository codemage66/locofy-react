/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-background-card-light": "#f0f4f6",
        "base-white": "#fff",
        "gray-200": "#eaecf0",
        "typography-subheading": "#1d2939",
        "gray-700": "#344054",
        "brand-brand-primary": "#6366f1",
        "gray-300": "#d0d5dd",
        "text-2": "#1f2937",
        "gray-400": "#98a2b3",
        "text-3": "#374151",
        "text-7": "#d1d5db",
        "base-white": "#fff",
        "brand-brand-primary": "#6366f1",
        "typography-body": "#344054",
        "brand-divider": "#98a2b3",
        "gray-600": "#475467",
        "gray-300": "#d0d5dd",
        slategray: "#667085",
        "typography-heading": "#101828",
        khaki: "#f1c963",
      },
      spacing: {},
      fontFamily: {
        "text-xs-medium": "Inter",
      },
      borderRadius: {
        "181xl": "200px",
        "981xl": "1000px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      "5xl": "24px",
      inherit: "inherit",
    },
    screens: {
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
