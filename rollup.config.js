// rollup.config.js
import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import cleaner from "rollup-plugin-cleaner";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import packageJson from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    cleaner({
      targets: ["./lib"],
    }),
    peerDepsExternal(),
    resolve({ browser: true, preferBuiltins: true }),
    commonjs(),
    postcss({
      modules: true,
      // Use PostCSS 8 and postcss-modules
      inject: true,
      extract: false,
      minimize: true,
    }),
    typescript({
      exclude: ["**/*.stories.tsx", "**/*.test.tsx"],
    }),
  ],
};
