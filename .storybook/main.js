const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    // TypeScript 지원
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("babel-loader"),
          options: {
            presets: ["@babel/preset-react", "@babel/preset-typescript"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      ],
      include: path.resolve(__dirname, "../src"),
    });

    // 기존 TypeScript 로더 삭제
    config.module.rules = config.module.rules.filter(
      (rule) => !(rule.test && rule.test.toString().includes("tsx"))
    );

    // SCSS 지원 (CSS Modules 포함)
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: true,
            importLoaders: 1,
          },
        },
        "sass-loader",
      ],
      include: path.resolve(__dirname, "../"),
    });

    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  },
};
