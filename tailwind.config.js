const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.scss"],
  theme: {
    screens: {
      xl: { max: "1919px" },
      lz: { max: "1439px" },
      lg: { max: "1335px" },
      md: { max: "1024px" },
      xs: { max: "767px" },
      xss: { max: "480px" },
    },
    colors: {
      white: "#ffffff",
      black: "#2A271D",
      "bg-img": "#F4F3F1",
      "text-title": "#0B2338",
      "txt-descr": "#6B7280",
      "tx-dsc": "#1F2937",
      "txt-gray": "#374151",
      "text-secondary": "#637381",
      "text-link": "#7599FF",
      "txt-placeholder": "#C3C6CB",
      border: "#EEEEEE",
      "bg-second": "#F7F7FB",
      "border-primary": "#F7F7F8",
      "border-second": "#E6E6E6",
      "border-third": "#A3A3A3",
      disabled: "#F1F1F3",
      "btn-active": "#E0E0E0",
      "text-inactive": "#B3B3B3",
      "text-second": "#6E6E6E",
      bg: "#FEF3EC",
      hover: "#F26D17",
      main: "#E6620D",
      active: "#C1520B",
      "success-bg": "#F3FAF7",
      "success-bdr": "#BAE0CD",
      success: "#189958",
      "warning-bg": "#FFF9F2",
      "warning-bdr": "#FEDCB3",
      warning: "#E88003",
      "error-bg": "#FDF5F4",
      "error-bdr": "#F5C6C0",
      "bg-gray": "#E5E7EB",
      "bg-gray--focus": "#DDE1EB",
      error: "#DE402C",
      opacity: "rgba(252, 252, 253, 0.01)",
      gradient: "linear-gradient(161deg,  0%, #E6620D 100%)",
      transparent: "transparent",
      gray: "#9AA0AD",
      "gray-havy": "#F8F8F8",
      "gray-light": "#C0C0C0",
      border: "#F1F1F1",
      pink: "#EAC3A9",
      "btn-bg-gray-second": "#F8F8F9",
    },
    extend: {
      boxShadow: {
        default: "0px 4px 12px rgba(0, 0, 0, 0.08)",
        focus: "0px 0px 0px 4px rgba(251, 216, 157, 0.8);",
      },
      fontSize: {
        "xs-10": ["0.625rem", "0.875rem"],
        sm: ["0.875rem", "1rem"],
        "xs-14": "14px",
        m: "28px",
      },
      fontWeight: {
        "wgh-4": "400",
        "wgh-5": "500",
        "wgh-6": "600",
        "wgh-7": "700",
      },
      lineHeight: {
        "lh-s": "22px",
        "lh-m": "40px",
      },
      spacing: {
        unset: "unset",
        4.5: "1.125rem",
        5.5: "1.375rem",
        7.5: "1.875rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addComponents({
        ".h1": {
          textTransform: "uppercase",
          fontWeight: "800",
          fontSize: "40px",
          letterSpacing: "4.4px",
          [`@media (max-width: ${theme("screens.xss.max")})`]: {
            fontSize: "20px",
            letterSpacing: "2.2px",
          },
        },
        ".h2": {
          textTransform: "uppercase",
          fontWeight: "800",
          fontSize: "35px",
          [`@media (max-width: ${theme("screens.xss.max")})`]: {
            fontSize: "20px",
          },
        },
        ".h3": {
          fontWeight: "600",
          fontSize: "30px",
          [`@media (max-width: ${theme("screens.xss.max")})`]: {
            fontSize: "20px",
          },
        },
        ".h4": {
          fontWeight: "700",
          fontSize: "18px",
          lineHeight: "28px",
          [`@media (max-width: ${theme("screens.xss.max")})`]: {
            fontSize: "12px",
          },
        },
        ".h5": {
          fontWeight: "700",
          fontSize: "16px",
          lineHeight: "24px",
          letterSpacing: "0.32px",
          [`@media (max-width: ${theme("screens.xss.max")})`]: {
            fontSize: "12px",
          },
        },
        ".h6": {
          fontWeight: "600",
          fontSize: "16px",
          lineHeight: "24px",
          [`@media (max-width: ${theme("screens.xss.max")})`]: {
            fontSize: "14px",
            fontWeight: "600",
          },
        },
        ".h7": {
          fontWeight: "600",
          fontSize: "14px",
          lineHeight: "22px",
          letterSpacing: "1.1px",
          [`@media (max-width: ${theme("screens.xss.max")})`]: {
            fontWeight: "500",
          },
        },
        ".h8": {
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "20px",
          [`@media (max-width: ${theme("screens.xss.max")})`]: {
            fontWeight: "400",
          },
        },
        ".h9": {
          fontWeight: "500",
          fontSize: "12px",
          lineHeight: "16px",
          letterSpacing: "0.36px",
          [`@media (max-width: ${theme("screens.xss.max")})`]: {
            fontWeight: "500",
          },
        },
      });
    }),
  ],
};
