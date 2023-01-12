import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import externals from "rollup-plugin-node-externals";
import babel from "@rollup/plugin-babel";
import replace from "rollup-plugin-replace";

import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import serve from "rollup-plugin-serve";
import html from "@rollup/plugin-html";
import livereload from "rollup-plugin-livereload";
const packageJson = require("./package.json");
const fs = require("fs");
const dev = process.env.NODE_ENV === "development";
const extensions = [".ts", ".tsx", ".js", ".jsx"];

const devPlugins = dev
  ? [
      serve({
        contentBase: ["dist"],
        host: "localhost",
        port: 4123,
      }),

      livereload(),
      html({
        template: () => fs.readFileSync("./public/index.html"),
      }),
    ]
  : [];

export default [
  {
    input: "src/index.js",
    output: [
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: dev,
        // name: "infinite_list",

        // exports: "named",
      },
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: dev,
      },
    ],
    plugins: [
      externals(),
      replace({
        "process.env.NODE_ENV": JSON.stringify("production"),
      }),
      resolve({ extensions }),
      commonjs({
        include: "node_modules/**",
      }),

      babel({
        extensions,
        exclude: /^(.+\/)?node_modules\/.+$/,
        babelrc: false,
        babelHelpers: "runtime",
        presets: ["@babel/preset-env"],
        babelHelpers: "runtime",
        plugins: [
          "@babel/plugin-transform-runtime",
          "@babel/plugin-syntax-dynamic-import",
        ],
      }),
      postcss(),
      ...devPlugins,
      terser(),
    ],
  },
];
