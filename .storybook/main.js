const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
<<<<<<< HEAD
=======
  framework: "@storybook/react",
>>>>>>> 0b497ab (tailwind 적용 및 이밎 업로드 컴포넌트 작업)
  webpackFinal: async (config) => {
    // TypeScript 지원
    config.module.rules.push({
<<<<<<< HEAD
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
=======
      test: /\.scss$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: {
              localIdentName: "[name]__[local]--[hash:base64:5]",
            },
            importLoaders: 1,
            sourceMap: true,
          },
        },
        "sass-loader",
      ],
      include: path.resolve(__dirname, "../"),
    });

    // Add Tailwind CSS Support
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [require("tailwindcss"), require("autoprefixer")],
            },
          },
        },
      ],
      include: path.resolve(__dirname, "../"),
>>>>>>> 0b497ab (tailwind 적용 및 이밎 업로드 컴포넌트 작업)
    });

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
    config.resolve.alias = {
      ...config.resolve.alias,
      src: path.resolve(__dirname, "../src"),
    };

    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  },
};
