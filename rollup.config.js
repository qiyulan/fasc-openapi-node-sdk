import json from "@rollup/plugin-json"
import typescript from "rollup-plugin-typescript2"
import { cleandir } from "rollup-plugin-cleandir"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"

import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'

const extensions = [".js", ".ts"]

module.exports = {
  input: ["./src/index.ts"],
  output: [
    {
      file: "dist/fascapi.cjs.js",
      format: "cjs",
    },
    {
      file: "dist/fascapi.esm.js",
      format: "es"
    }
  ],
  plugins: [
    cleandir("./dist"),
    json(),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          module: "ES2015",
        },
      },
    }),
    babel({
      exclude: "node_modules/**"
    }),
    commonjs(),
    resolve(),
    uglify(),
  ],
}
