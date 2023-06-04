//tailwind.config.js

module.exports = {
  content: [
    "./stories/**/*.stories.@(js|jsx|ts|tsx)",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // Toggle dark-mode based on data-mode="dark"
  theme: {
    extend: {},
  },
  plugins: [],
};
